javascript: (
    function() {
		var css = 
            `
            /* Sidebar color */
            .X9KLPc {
                background-color: #4d394b;
            }
            
            /* Sidebar elemtents bg color when hovering */
            .PL5Wwe:focus:not(.dQ2Tsf),
            .PL5Wwe:hover:not(.dQ2Tsf),
            .tuKyod .LoYJxb {
                background-color: #3e313c;
            }
            
            /* Sidebar elements text color for chans with unread messages */
            .PL5Wwe.H7du2 .t5F5nf {
                color: #fff;
            }
            
            /* Channel name color in sidebar */
            .t5F5nf {
                color: rgb(202, 196, 201);
            }
            
            
            /* Sidebar "recent" or "starred" section names color */
            .aOHsTc {
                color: rgb(202, 196, 201);
            }
            
            /* Sidebar Search section text color */
            .HLTcjb {
                color: rgb(202, 196, 201);
            }
            .D3DXDc {
                fill: rgb(202, 196, 201) !important;
            }
            
            /* Sidebar search button hovering bg color */
            .GbZFNe:focus, .GbZFNe:hover {
                background-color: #3e313c;
            }
            
            /* Search Menu bg color */
            .yoV6yd {
                background-color: #4d394b;
            }
            
            /* Search menu text color */
            .Uk0Bfe .zHQkBf, .Uk0Bfe .snByac, .dQ2Tsf .NXfF8b, .dQ2Tsf .ZTmjQb {
                color: #000;
            }
            
            .ndJi5d {
                rgba(0,0,0,0.38);
            }
            
            /* Search menu elements colors when hovering */
            .dQ2Tsf[aria-selected="true"], .PL5Wwe:hover > .dQ2Tsf {
                background-color: #eee;
                color: #fff
            }
            
            /* Search menu people list mail color */
            .dQ2Tsf[aria-selected="true"] .Kfe2Ub, .PL5Wwe:hover > .dQ2Tsf .Kfe2Ub {
                color: #000;
            }
            
            /* Top left corner section (with title) background color */
            .Riuhhf {
                background-color: #4d394b;
            }
            
            /* Chat top left logo text color */
            #XMLID_8_-Clipped{
                opacity: 0.8 !important;
                fill: #fff !important;
            }
            
            /* Time and menu buttons and clock for channels inactive and active colors */
            .sFuxxd {
                color: rgb(202, 196, 201);
            }
            .PL5Wwe.H7du2 .sFuxxd {
                color: #fff;
            }
            .DQy0Rb {
                fill: rgb(202, 196, 201) !important;
            }
            .PL5Wwe.H7du2 .DQy0Rb {
                fill: #fff !important;
            }
            .QeRfYe {
                fill: rgb(202, 196, 201) !important;
            }
            .PL5Wwe.H7du2 .QeRfYe {
                fill: #fff !important;
            }
            
            /* Make code snippets have slack colors */
            .FMTudf {
                border: 1px solid #e0e0e0;
                background: #f9f9f9;
            }
            
            /* Make inline pre have slack colors */
            .U8d2H {
                background-color: #f7f7f9;
                color: #d72b3f;
            }      
            
            /* active font color */
            .gWTIDe {
                color: #DDD;
            }
            `,

            head = document.getElementsByTagName('head')[0],
            style = document.createElement('style'),
            account = document.getElementById('gbpbt');
            if ( account && account.innerText && account.innerText.includes("boxtal.com")){
                document.getElementsByClassName('SZ9zpc')[0].innerHTML = '<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNjcyLjIgMTMwLjciPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMTMuOCAxMTEuMWwtMy45IDkuMy0zLjctOS4zaC0yLjhsNS4yIDExLjl2Ny4zaDIuNVYxMjNsNS4yLTExLjl6Ii8+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIDBoNjcyLjJ2MTMwLjdIMHoiLz48L2RlZnM+PGNsaXBQYXRoIGlkPSJiIj48dXNlIHhsaW5rOmhyZWY9IiNhIiBvdmVyZmxvdz0idmlzaWJsZSIvPjwvY2xpcFBhdGg+PHBhdGggY2xpcC1wYXRoPSJ1cmwoI2IpIiBmaWxsPSIjZmZmIiBkPSJNMjI5LjMgMTIzLjNWMTE3YzAtMy44IDItNi4zIDYuMS02LjNzNi4xIDIuNSA2LjEgNi4zdjYuM2MwIDUuMy0yIDcuNC02LjEgNy40cy02LjEtMi4xLTYuMS03LjRtOS42LjF2LTYuNWMwLTQtMi44LTQuMi0zLjUtNC4yLS44IDAtMy41LjEtMy41IDQuMnY2LjVjMCA0LjIgMS4yIDUuMyAzLjUgNS4zczMuNS0xLjEgMy41LTUuM20xNy40LTEyLjNoMi41djEyLjNjMCA0LjIgMS4zIDUuMyAzLjYgNS4zczMuNi0xLjEgMy42LTUuM3YtMTIuM2gyLjV2MTIuMmMwIDUuMy0yIDcuNC02LjEgNy40cy02LTIuMS02LTcuNHYtMTIuMnptMjkuNCAxMC40djguOGgtMi41di0xOS4yaDYuNmMzLjQgMCA0LjYgMi40IDQuNiA0LjggMCAyLjMtMS4zIDQtMy41IDQuNHYuMWMyLjIuMyAzIDEuMSAzLjEgNSAwIC44LjMgMy44LjcgNWgtMi42Yy0uNy0xLjMtLjUtMy44LS43LTYuNC0uMi0yLjMtMi4xLTIuNS0yLjktMi41aC0yLjh6bTAtMi4yaDMuN2MxLjggMCAyLjYtMS41IDIuNi0zLjIgMC0xLjQtLjctMi45LTIuNi0yLjloLTMuN3Y2LjF6bTQxLjYgNS4zdi42YzAgMi42IDEuNyAzLjQgMy4yIDMuNCAxLjkgMCAzLjQtLjggMy40LTMuMSAwLTQuMy04LjYtMy44LTguNi05LjYgMC0zLjQgMi40LTUuMiA1LjctNS4yIDMuNSAwIDUuNSAxLjcgNS4zIDUuNmgtMi42YzAtMi4xLS42LTMuNS0zLTMuNS0xLjUgMC0zIC43LTMgMi44IDAgNC4yIDguNiAzLjYgOC42IDkuNyAwIDQuMS0yLjggNS40LTYgNS40LTUuNy4xLTUuNy00LjMtNS42LTYuMWgyLjZ6bTIzLjcgNS43di0xOS4yaDIuNXY4LjNoNi43di04LjNoMi41djE5LjJoLTIuNXYtOC44aC02Ljd2OC44em0yNy4xLTE5LjJoMi41djE5LjJoLTIuNXptMTguMSAxOS4ydi0xOS4yaDUuN2MyLjYgMCA1LjQgMSA1LjQgNS41IDAgNC40LTMuNCA1LjMtNS40IDUuM2gtMy4ydjguNWgtMi41em0yLjUtMTAuNmgyLjdjMSAwIDMuNC0uMyAzLjQtMy4zIDAtMi45LTIuMi0zLjItMi43LTMuMmgtMy40djYuNXptMjMgMTAuNnYtMTkuMmg1LjdjMi42IDAgNS40IDEgNS40IDUuNSAwIDQuNC0zLjQgNS4zLTUuNCA1LjNoLTMuMnY4LjVoLTIuNXptMi41LTEwLjZoMi43YzEgMCAzLjQtLjMgMy40LTMuMyAwLTIuOS0yLjItMy4yLTIuNy0zLjJoLTMuNHY2LjV6bTIzLTguNmgyLjV2MTkuMmgtMi41em0zMS4xIDB2MTkuMmgtMy40bC03LjYtMTYuN3YxNi43aC0yLjJ2LTE5LjJoMy41bDcuNCAxNi41aC4xdi0xNi41em0yNC4zIDUuMWMwLTIuMy0uOS0zLjUtMy40LTMuNS0uOCAwLTMuNS4xLTMuNSA0LjJ2Ni41YzAgNC4yIDEuMiA1LjMgMy41IDUuMyAxLjggMCAyLjktLjUgMy40LS45VjEyMmgtMy41di0yLjFoNnY5LjRjLTEuNi45LTMuNCAxLjQtNS45IDEuNC00LjEgMC02LjEtMi4xLTYuMS03LjRWMTE3YzAtMy44IDItNi4zIDYuMS02LjMgNC4yIDAgNi4xIDEuNSA2IDUuNWgtMi42em0zNC4zIDE0LjF2LTE5LjJoMTB2Mi4xaC03LjV2Ni4yaDYuOXYyLjFoLTYuOXY2LjdoNy42djIuMXptMzYuNCAwaC0zbC00LjUtOC4yLTQuMiA4LjJoLTIuN2w1LjYtOS45LTUuMy05LjNoMi45bDMuOSA3LjQgNC03LjRoMi43bC01LjIgOS4zem0xMy41IDB2LTE5LjJoNS43YzIuNiAwIDUuNCAxIDUuNCA1LjUgMCA0LjQtMy40IDUuMy01LjQgNS4zaC0zLjJ2OC41aC0yLjV6bTIuNC0xMC42aDIuN2MxIDAgMy40LS4zIDMuNC0zLjMgMC0yLjktMi4yLTMuMi0yLjctMy4yaC0zLjR2Ni41em0yMi43IDEwLjZ2LTE5LjJoOS45djIuMWgtNy40djYuMmg2Ljl2Mi4xaC02Ljl2Ni43aDcuNnYyLjF6bTI2LjQtOC44djguOGgtMi41di0xOS4yaDYuNmMzLjQgMCA0LjYgMi40IDQuNiA0LjggMCAyLjMtMS4zIDQtMy41IDQuNHYuMWMyLjIuMyAzIDEuMSAzLjEgNSAwIC44LjMgMy44LjcgNWgtMi42Yy0uNy0xLjMtLjUtMy44LS43LTYuNC0uMi0yLjMtMi4xLTIuNS0yLjktMi41aC0yLjh6bTAtMi4yaDMuN2MxLjggMCAyLjYtMS41IDIuNi0zLjIgMC0xLjQtLjctMi45LTIuNi0yLjloLTMuN3Y2LjF6bTMzLjktOC4ydjIuMWgtNS4xdjE3LjFoLTIuNHYtMTcuMWgtNS4xdi0yLjF6TTIzMC42IDg2LjNoLTI3LjFWLjhoMjcuM2MxNi43IDAgMjQuNyAxMC45IDI0LjcgMjEuMyAwIDcuNC0zLjYgMTQuMy0xMC42IDE3Ljh2LjFjOS41IDIuMiAxNi4yIDEwLjUgMTYuMiAyMC42LS4xIDEyLjItOSAyNS43LTMwLjUgMjUuN00yMjYuOCAxNGgtNy43djIyLjNoOS4zYzUuNiAwIDExLjItNC41IDExLjItMTEuMy4xLTYuNC00LjEtMTEtMTIuOC0xMW0zIDM1LjVoLTEwLjZ2MjMuNmgxMGMxMC41IDAgMTUuNy00LjcgMTUuNy0xMi41IDAtNi42LTUuNS0xMS4xLTE1LjEtMTEuMW0xMjcuNyAyNS44Yy03LjggNy44LTE4LjYgMTIuMy0zMS40IDEyLjMtMTIuNSAwLTIyLjctMy42LTMwLjMtMTAuNS04LjctNy44LTEzLjUtMTkuMy0xMy41LTMyLjcgMC0xMi43IDQuNC0yMy45IDEyLjMtMzEuOUMzMDIuNCA0LjcgMzEzLjEgMCAzMjYuMSAwYzEzLjggMCAyNS4yIDQuOCAzMi44IDEzLjIgNy4xIDcuOCAxMC44IDE4LjQgMTAuOCAzMC40IDAgMTIuNi00LjIgMjMuOS0xMi4yIDMxLjdNMzI2IDEzLjFjLTE2IDAtMjcuMSAxMS42LTI3LjEgMzAuOCAwIDE5LjMgMTEuMiAzMC45IDI3LjEgMzAuOSAxNS44IDAgMjctMTEuNiAyNy0zMC45IDAtMTguNy0xMC42LTMwLjgtMjctMzAuOE00NTkuMS44aC0xNy4ybC0yMC42IDMxLjFMNDAxLjcuOEgzODRsMjYuNCA0MS44LTMwIDQzLjdoMTcuNUw0MTkuNiA1NGwyMC41IDMyLjNINDU4bC0yNy41LTQyLjcgMTkuOC0yOS43aDI2Ljl2NzIuNGgxNS45VjEzLjloMjMuM0w1MjIgLjd6bTEyNy4zIDg1LjVMNTc4IDY0LjloLTMwLjVsLTcuOSAyMS40aC0xNS40TDU1Ny40LjRoMTEuNGwzNC40IDg1LjloLTE2Ljh6bS0yMC4zLTUzLjhjLTEuNi00LjMtMi42LTcuOC0zLjItMTAuNmgtLjFjLS41IDMtMS43IDYuNC0zLjEgMTAuNGwtNy40IDE5LjlINTczbC02LjktMTkuN3ptNTkuOCA1My44Vi44aDE1Ljd2NzIuM2gzMC42djEzLjJ6bS00NTQtNDcuMUgyMS4yYy0zLjggMC02LjggMy4xLTYuOCA2LjhzMy4xIDYuOCA2LjggNi44aDE1MC42YzMuOCAwIDYuOC0zLjEgNi44LTYuOHMtMy02LjgtNi43LTYuOG0tNjQuNiAzOC40SDYuOEMzIDc3LjYgMCA4MC43IDAgODQuNHMzLjEgNi44IDYuOCA2LjhoMTAwLjRjMy44IDAgNi44LTMuMSA2LjgtNi44cy0zLTYuOC02LjctNi44bTU0LjggMzguM0g2MS42Yy0zLjggMC02LjggMy4xLTYuOCA2LjggMCAzLjggMy4xIDYuOCA2LjggNi44SDE2MmMzLjggMCA2LjgtMy4xIDYuOC02LjguMS0zLjctMy02LjgtNi43LTYuOE0xMzAuNS44SDU3LjNjLTMuOCAwLTYuOCAzLjEtNi44IDYuOHMzLjEgNi44IDYuOCA2LjhoNzMuMmMzLjggMCA2LjgtMy4xIDYuOC02LjhzLTMtNi44LTYuOC02LjgiLz48L3N2Zz4="  width="145px" height="30px" style="margin-left:12px;margin-top:20px;"  />'
            }

        style.type = 'text/css';
        style.appendChild(document.createTextNode(css));
        head.appendChild(style);
            
	}()
);