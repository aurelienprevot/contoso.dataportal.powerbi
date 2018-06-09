import * as pbi from 'powerbi-client';

export const centralFilter: pbi.models.IBasicFilter = {
    $schema: 'http://powerbi.com/product/schema#basic',
    target: {
        table: 'Account',
        column: 'Region'
    },
    operator: 'In',
    values: ['Central'],
    filterType: pbi.models.FilterType.Basic
};

export const eastFilter: pbi.models.IBasicFilter = {
    $schema: 'http://powerbi.com/product/schema#basic',
    target: {
        table: 'Account',
        column: 'Region'
    },
    operator: 'In',
    values: ['East'],
    filterType: pbi.models.FilterType.Basic
};

export const westFilter: pbi.models.IBasicFilter = {
    $schema: 'http://powerbi.com/product/schema#basic',
    target: {
        table: 'Account',
        column: 'Region'
    },
    operator: 'In',
    values: ['West'],
    filterType: pbi.models.FilterType.Basic
};

export const noFilter: pbi.models.IBasicFilter = {
    $schema: 'http://powerbi.com/product/schema#basic',
    target: {
        table: 'Account',
        column: 'Region'
    },
    operator: 'In',
    values: ['Central', 'West', 'East'],
    filterType: pbi.models.FilterType.Basic
};