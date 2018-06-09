import { AdalConfig, AuthenticationContext } from 'adal-ts';
import { Authentication } from 'adal-ts';
import { consts } from './constsMain';
import * as embeddedFilters from './constsFilters'
import * as pbi from 'powerbi-client';

class embeddedAsset {

    private accessToken: string;
    private btnFilterOff = document.getElementById('btnFilterOff');
    private btnFilterCentral = document.getElementById('btnFilterCentral');
    private btnFilterWest = document.getElementById('btnFilterWest');
    private btnFilterEast = document.getElementById('btnFilterEast');

    public constructor() {

        this.getToken();
        this.embedAsset();
        this.manageEvents();

        //Utils /\ Use this if you want to get GUID of tiles of a dashboard in the console
        //this.getTiles();

    }

    ///////////// EMBED ///////////// 
    private getToken() {

        //Check if the token is within the URL
        var accessToken = document.URL.match(/\#(?:access_token)\=([\S\s]*?)\&/);

        //If the token is not in the URL, get it
        if (!accessToken) {

            var url = consts.authServer +
                'response_type=' + encodeURI('token') + '&' +
                'client_id=' + encodeURI(consts.clientID) + '&' +
                'resource=' + encodeURI(consts.resource) + '&' +
                'redirect_uri=' + encodeURI(consts.replyUrl);

            window.location.href = url;
        }
        else {
            this.accessToken = accessToken[1];
        }
    }

    private embedAsset() {

        //Reports management
        consts.pbiAssetsToEmbed.forEach(pbiAsset => {

            // Get the access token
            pbiAsset.accessToken = this.accessToken;

            // Grab the reference to the div HTML element that will host the report.
            let reportContainer = <HTMLElement>document.getElementById(pbiAsset.htmlELementId);

            // Embed the report and display it within the div container.
            let powerbi = new pbi.service.Service(pbi.factories.hpmFactory, pbi.factories.wpmpFactory, pbi.factories.routerFactory);
            let pbiVisualAsset = powerbi.embed(reportContainer, pbiAsset);
            pbiAsset.visualAsset = pbiVisualAsset;

            // Report.on will add an event handler which prints to Log window.
            pbiAsset.type === 'report' ? pbiVisualAsset.on('commandTriggered', async function (command) {

                document.getElementById('messagebox').appendChild(new Text('Hello, I have a question on a specific visual (ID: ' + command.detail.visual.name + '), on page ' + command.detail.page.displayName + ' from the report ' + command.detail.report.displayName + ' (ID: ' + command.detail.report.id + ').'));

            }) : null;
        });
    }


    ///////////// UX ///////////// 
    //Manage UX events
    private manageEvents() {

        //Button: filter 'Off' - click
        this.btnFilterOff.addEventListener('click', (e: Event) => {
            this.setGlobalFilters(embeddedFilters.noFilter);
            this.btnFilterOff.classList.replace('w3-white', 'w3-black');
        });


        //Button: filter 'central' - click
        this.btnFilterCentral.addEventListener('click', (e: Event) => {
            this.setGlobalFilters(embeddedFilters.centralFilter);
            this.btnFilterCentral.classList.replace('w3-white', 'w3-black');
        });

        //Button: filter 'East' - click
        this.btnFilterEast.addEventListener('click', (e: Event) => {
            this.setGlobalFilters(embeddedFilters.eastFilter);
            this.btnFilterEast.classList.replace('w3-white', 'w3-black');
        });

        //Button: filter 'West' - click
        this.btnFilterWest.addEventListener('click', (e: Event) => {
            this.setGlobalFilters(embeddedFilters.westFilter);
            this.btnFilterWest.classList.replace('w3-white', 'w3-black');
        });

    }

    //Manage filters on report
    private setGlobalFilters(filter: pbi.models.IBasicFilter) {

        this.colorButtons();

        consts.pbiAssetsToEmbed.forEach(pbiAsset => {
            //No filtering on tiles
            (pbiAsset.type === 'report') ? pbiAsset.visualAsset.setFilters([filter]) : null
        });
    }

    //UX stuff for filtering
    private colorButtons() {

        this.btnFilterCentral.classList.replace('w3-black', 'w3-white');
        this.btnFilterOff.classList.replace('w3-black', 'w3-white');
        this.btnFilterWest.classList.replace('w3-black', 'w3-white');
        this.btnFilterEast.classList.replace('w3-black', 'w3-white');
    }



    ///////////// UTILS ///////////// 
    public async getTiles(): Promise<any> {

        var request = new XMLHttpRequest();
        request.onload = function () {
            if (this.status === 200) {
                console.log(this.response);
            } else {
                console.log(new Error(this.statusText));
            }
        };
        await request.open('GET', 'https://api.powerbi.com/v1.0/myorg/groups/' + consts.officeGroupId + '/dashboards/' + consts.dashboardId + '/tiles');
        request.setRequestHeader('Authorization', 'Bearer ' + this.accessToken);
        await request.send();
    }

}


window.onload = function () {
    new embeddedAsset();
};