import * as pbi from 'powerbi-client';
export var consts = {
    //Azure AD
    clientID: 'AZURE AD APP CLIENT ID (GUID)',
    tenant: 'YOUR-TENANT.onmicrosoft.com',
    resource: 'https://analysis.windows.net/powerbi/api',
    //Do not forget to change replyUrl when moving in production. You can set several replyUrl within your AAD Application
    replyUrl: 'https://localhost:8008/dist/index.htm',
    authServer: 'https://login.windows.net/common/oauth2/authorize?',

    //Utils (used by embeddedAsset.getTiles())
    officeGroupId: 'OFFICE GROUP GUID', //<== The ID of the Group can be find in the URL within the Power BI Portal
    dashboardId: 'DASHBOARD ID', //<== The ID of the Dashboard can be find in the URL within the Power BI Portal


    pbiAssetsToEmbed: [
        {
            type: 'report',
            id: 'ID of your report', //<== Can be find in the URL within the Power BI Portal
            embedUrl: 'https://app.powerbi.com/reportEmbed?groupId=OFFICE GROUP GUID&pageName=ReportSection', //<== The ID of the Group can be find in the URL within the Power BI Portal
            tokenType: pbi.models.TokenType.Aad,
            accessToken: '',
            settings: <pbi.IEmbedSettings>{
                extensions: <pbi.IEmbedConfiguration>[
                    {
                        command: {
                            name: 'contosos-driven-opties',
                            title: 'Contoso\'s driven opties',
                            extend:
                            {
                                //Sample with CONTEXT menu
                                visualContextMenu: {
                                    title: 'Show Contoso\'s partner driven optys'
                                }
                            }
                        }
                    },
                    {
                        command: {
                            name: 'question-contosos-digital-team',
                            title: 'Question Contoso\'s Digital Team',
                            icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAwCAYAAAClvqwiAAAMKWlDQ1BJQ0MgUHJvZmlsZQAASImVlwdUk8kWgOcvSUhIaIEISAm9iVKkSw0tgoBUwUZIAgklhoQgYkcWFVwLKiJY0RURRdcCyGLD3hDs/WEBRVkXdbGh8iYJoKvnvXfePWf+/8udO3fuvZl/zgwA6lEcsTgT1QAgS5QjiQ4JYE5KTGKSHgMcaAIyIAB1Dlcq9o+KCgdQht7/lHc3ASJ/X7OX+/q5/7+KJo8v5QKAREFO4Um5WZAPAoC7csWSHAAIPVBvNjNHDJkIowTaEhggZHM5pynZXc4pSg5X2MRGsyAnA6BC5XAkaQCoyeNi5nLToB+1ZZAdRDyhCHIzZB+ugMOD/BnyqKysGZDVrSFbp3znJ+0fPlOGfXI4acOszEUhKoFCqTiTM+v/LMf/lqxM2dAcZrBRBZLQaHnO8rplzAiTMxXyOVFKRCRkLcjXhTyFvZy7BLLQuEH7D1wpC9YMMABAqTxOYBhkA8imosyI8EG9T6owmA0Z1h6NFeawY5VjUZ5kRvSgfzSPLw2KGWKORDGX3KZYlhHnP+hzk4DPHvLZlC+ITVDGibblCuMjIKtBvi/NiAkbtHmRL2BFDNlIZNHymOF/joFUSXC00gYzz5IO5YV5CoTsiEEOzxHEhirHYtO4HEVsupDT+dJJ4UNx8viBQcq8sAK+KG4wfqxUnBMQPWi/XZwZNWiPNfMzQ+R6U8it0tyYobG9OXCxKfPFgTgnKlYZG66dzhkfpYwBtwXhgAUCARPIYEsBM0A6ELb2NPTAX8qeYMABEpAG+MB+UDM0IkHRI4LPGJAP/oTEB9LhcQGKXj7Ihfovw1rl0x6kKnpzFSMyQBfkLBAGMuFvmWKUaHi2ePAUaoQ/zc6FsWbCJu/7ScdUH9IRg4iBxFBiMNEG18d9cC88HD79YHPC3XGPobi+2RO6CO2Ex4QbhA7CnenCAskPkTPBBNABYwwezC7l++xwS+jVBQ/AvaF/6Btn4PrAHh8LZ/LHfeHcLlD7fayy4Yy/1XLQF9mBjJJHkP3I1j9GoGar5jLsRV6p72uhjCtluFqs4Z4f82B9Vz8efIf9aIktwQ5gZ7ET2HmsGWsATOwY1ohdwo7IeXhtPFWsjaHZohXxZEA/wp/m4wzOKa+a1KHWodvh82AfyOHn5cg/FtYM8SyJME2Qw/SHuzWfyRZxR49iOjk4wl1Uvvcrt5a3DMWejjAufNNlHwfAoxgq077pOHAPOtwFAP3dN53ZG7jsVwJwpI0rk+Qqdbj8QQAUoA6/FD1gBPcua5iRE3AFXsAPBIHxIBLEgkQwDdZZANepBMwEc8BCUARKwEqwFlSAzWAb2An2gP2gATSDE+AMuAjawA1wD66VTvAS9IJ3oB9BEBJCQ+iIHmKMWCB2iBPijvggQUg4Eo0kIslIGiJCZMgcZBFSgpQiFchWpAb5HTmMnEDOI+3IHeQR0o28QT6hGEpFtVFD1BIdg7qj/mgYGotORdPQbDQfLUSXo+VoFbobrUdPoBfRG2gH+hLtwwCmijEwE8wec8dYWCSWhKViEmweVoyVYVVYHdYE/+lrWAfWg33EiTgdZ+L2cL2G4nE4F8/G5+HL8Ap8J16Pn8Kv4Y/wXvwrgUYwINgRPAlswiRCGmEmoYhQRthBOEQ4Db+dTsI7IpHIIFoR3eC3l0hMJ84mLiNuJO4lHie2E58Q+0gkkh7JjuRNiiRxSDmkItJ60m7SMdJVUifpg4qqirGKk0qwSpKKSKVApUxll8pRlasqz1T6yRpkC7InOZLMI88iryBvJzeRr5A7yf0UTYoVxZsSS0mnLKSUU+oopyn3KW9VVVVNVT1UJ6oKVReolqvuUz2n+kj1I1WLaktlUadQZdTl1Grqceod6lsajWZJ86Ml0XJoy2k1tJO0h7QPanS10WpsNZ7afLVKtXq1q2qv1MnqFur+6tPU89XL1A+oX1Hv0SBrWGqwNDga8zQqNQ5r3NLo06RrOmpGamZpLtPcpXle87kWSctSK0iLp1WotU3rpNYTOkY3o7PoXPoi+nb6aXqnNlHbSputna5dor1Hu1W7V0dLZ6xOvE6eTqXOEZ0OBsawZLAZmYwVjP2Mm4xPIwxH+I/gj1g6om7E1RHvdUfq+unydYt19+re0P2kx9QL0svQW6XXoPdAH9e31Z+oP1N/k/5p/Z6R2iO9RnJHFo/cP/KuAWpgaxBtMNtgm8Elgz5DI8MQQ7HhesOThj1GDCM/o3SjNUZHjbqN6cY+xkLjNcbHjF8wdZj+zExmOfMUs9fEwCTURGay1aTVpN/UyjTOtMB0r+kDM4qZu1mq2RqzFrNec2PzCeZzzGvN71qQLdwtBBbrLM5avLe0skywXGzZYPncSteKbZVvVWt135pm7WudbV1lfd2GaONuk2Gz0abNFrV1sRXYVtpesUPtXO2Edhvt2kcRRnmMEo2qGnXLnmrvb59rX2v/aDRjdPjogtENo1+NMR+TNGbVmLNjvjq4OGQ6bHe456jlON6xwLHJ8Y2TrRPXqdLpujPNOdh5vnOj8+uxdmP5YzeNve1Cd5ngstilxeWLq5urxLXOtdvN3C3ZbYPbLXdt9yj3Ze7nPAgeAR7zPZo9Pnq6euZ47vf8y8veK8Nrl9fzcVbj+OO2j3viberN8d7q3eHD9En22eLT4Wviy/Gt8n3sZ+bH89vh98zfxj/df7f/qwCHAEnAoYD3LE/WXNbxQCwwJLA4sDVIKyguqCLoYbBpcFpwbXBviEvI7JDjoYTQsNBVobfYhmwuu4bdO95t/Nzxp8KoYTFhFWGPw23DJeFNE9AJ4yesnnA/wiJCFNEQCSLZkasjH0RZRWVH/TGRODFqYuXErmjH6DnRZ2PoMdNjdsW8iw2IXRF7L846ThbXEq8ePyW+Jv59QmBCaULHpDGT5k66mKifKExsTCIlxSftSOqbHDR57eTOKS5TiqbcnGo1NW/q+Wn60zKnHZmuPp0z/UAyITkheVfyZ04kp4rTl8JO2ZDSy2Vx13Ff8vx4a3jdfG9+Kf9ZqndqaerzNO+01WndAl9BmaBHyBJWCF+nh6ZvTn+fEZlRnTGQmZC5N0slKznrsEhLlCE6NcNoRt6MdrGduEjcke2ZvTa7VxIm2SFFpFOljTna8JB9SWYt+0X2KNcntzL3w8z4mQfyNPNEeZdm2c5aOutZfnD+b7Px2dzZLXNM5iyc82iu/9yt85B5KfNa5pvNL5zfuSBkwc6FlIUZCy8XOBSUFvy9KGFRU6Fh4YLCJ7+E/FJbpFYkKbq12Gvx5iX4EuGS1qXOS9cv/VrMK75Q4lBSVvJ5GXfZhV8dfy3/dWB56vLWFa4rNq0krhStvLnKd9XOUs3S/NInqyesrl/DXFO85u+109eeLxtbtnkdZZ1sXUd5eHnjevP1K9d/rhBU3KgMqNy7wWDD0g3vN/I2Xt3kt6lus+Hmks2ftgi33N4asrW+yrKqbBtxW+62ru3x28/+5v5bzQ79HSU7vlSLqjt2Ru88VeNWU7PLYNeKWrRWVtu9e8rutj2Bexrr7Ou27mXsLdkH9sn2vfg9+feb+8P2txxwP1B30OLghkP0Q8X1SP2s+t4GQUNHY2Jj++Hxh1uavJoO/TH6j+pmk+bKIzpHVhylHC08OnAs/1jfcfHxnhNpJ560TG+5d3LSyeunJp5qPR12+tyZ4DMnz/qfPXbO+1zzec/zhy+4X2i46Hqx/pLLpUOXXS4fanVtrb/idqWxzaOtqX1c+9GrvldPXAu8duY6+/rFGxE32m/G3bx9a8qtjtu828/vZN55fTf3bv+9BfcJ94sfaDwoe2jwsOpfNv/a2+HaceRR4KNLj2Me33vCffLyqfTp587CLlpX2TPjZzXPnZ43dwd3t72Y/KLzpfhlf0/Rn5p/bnhl/ergX35/Xeqd1Nv5WvJ64M2yt3pvq/8e+3dLX1Tfw3dZ7/rfF3/Q+7Dzo/vHs58SPj3rn/mZ9Ln8i82Xpq9hX+8PZA0MiDkSjuIogMGGpqYC8KYaAFoiPDu0AUCZrLybKQRR3icVBP4TK+9vCnEFoNoPgLgFAITDM8om2CwgU+FbfgSP9QOos/NwGxRpqrOT0hcV3lgIHwYG3hoCQGoC4ItkYKB/48DAl+0w2DsAHM9W3gnlIr+DbrGS0+X7NBPwg/wb/JtwP+73dJIAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAGbaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjY2PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjQ4PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CrjXuWEAAAAcaURPVAAAAAIAAAAAAAAAGAAAACgAAAAYAAAAGAAAAQsDDbUVAAAA10lEQVRoBeyWyw3DIBBEoReagQN1cKEZOqAV2qAOzs4SAxIRUbAPkUGzEuJjW1oes4z5QcEQjAPEqQKAKNUAEADRX4xQxFVFKKUaQmMM01q3+RaD7BozQZvNNvtuzrmZT5Z6h81mWyHkfkcQ03cE55wYnEEgmLW2Th/ThxBYSmmYj5RyuN4Wd1KEEKKVL22wG//a51alARDluJcE4b0/cuKjlp/diSVBZOf5rOM6v+tKALFyaUAR5fQAAiB6H4AiLioixvjVXei3uaO7tWsARDlrgPgziBcAAAD//7Gb4F8AAAExSURBVO1YsRGDMAwUG1AwAhVD0NPT0tOwAgVsAA1DMAVD0FBTwQQ0BBGsiJwhvjQJnHTnsyQL43tLsmyYDQkAZtWKojD86tgM51Dzvfd8/q7rDu2CINj9wHXdQ9udoUYAjU6r4ovlC9UaGyhvD0Tf9zPuoq5N00QQ3R4IdFfuPZxHcBQJEBsSAoQAAWvekNBYjl/JEVsNIkAIEK9qFI9R8QjxCPEIbXUpoSGhcZ3QsLDSWzL6R7Isi2yWewIkSUIyZ6qqgrZtuYr4NE3BcZxVbpoG6rqmMc6EYQi+76+qcRwhyzI+TLzneRDHMcl5nsMwDCRzBtd8Sqrk/dQvk1Dc44XpbvSzh5l/A1KA2HbkKyB4mFydx3dOJAFCgHgmf+URxsdnWZanp89VB23bhiiK4AFDVtYbKu5regAAAABJRU5ErkJggg==',
                            extend:
                            {
                                //Sample with OPTIONS menu
                                visualOptionsMenu: {
                                    // title: 'Question the Contoso's Digital Team'
                                }
                            }
                        }
                    }
                ]
            },
            visualAsset: <any>null,
            htmlELementId: 'reportContainer'
        },
        {
            type: 'tile',
            id: 'TILE ID', //<== MUST BE FIND WITH embeddedAsset.getTiles()
            dashboardId: 'DASHBOARD ID', //<== MUST BE FIND WITH embeddedAsset.getTiles()
            embedUrl: 'https://app.powerbi.com/embed?groupId=OFFICE GROUP GUID', //<== The ID of the Group can be find in the URL within the Power BI Portal
            tokenType: pbi.models.TokenType.Aad,
            accessToken: '',
            htmlELementId: 'tile1',
            visualAsset: <any>null
        },
        {
            type: 'tile',
            id: 'TILE ID', //<== MUST BE FIND WITH embeddedAsset.getTiles()
            dashboardId: 'DASHBOARD ID', //<== MUST BE FIND WITH embeddedAsset.getTiles()
            embedUrl: 'https://app.powerbi.com/embed?groupId=OFFICE GROUP GUID', //<== The ID of the Group can be find in the URL within the Power BI Portal
            tokenType: pbi.models.TokenType.Aad,
            accessToken: '',
            htmlELementId: 'tile2',
            visualAsset: <any>null
        },
        {
            type: 'tile',
            id: 'TILE ID', //<== MUST BE FIND WITH embeddedAsset.getTiles()
            dashboardId: 'DASHBOARD ID', //<== MUST BE FIND WITH embeddedAsset.getTiles()
            embedUrl: 'https://app.powerbi.com/embed?groupId=OFFICE GROUP GUID', //<== The ID of the Group can be find in the URL within the Power BI Portal
            tokenType: pbi.models.TokenType.Aad,
            accessToken: '',
            htmlELementId: 'tile3',
            visualAsset: <any>null
        }

    ]
}