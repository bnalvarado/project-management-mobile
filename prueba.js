
export default {
    BASE_API_URL: 'https://api.flightstats.com/flex/',
    APIS: {
      AIRPORTS: '',
      HISTORICAL: '',
      ALERTS: ''
    },
    KEYS: {
      APP_ID: 'c52c4cbd',
      APP_KEY: '58fb5b7ce43554c08992694fd307600a',
    },
    SALIDA:{
      "request": {
       "endpoint": "ByAirportByArrival",
       "arrivalAirport": {
        "requested": "SJO",
        "interpreted": "SJO"
       },
       "year": {
        "requested": "2018",
        "interpreted": 2018
       },
       "month": {
        "requested": "11",
        "interpreted": 11
       },
       "day": {
        "requested": "30",
        "interpreted": 30
       },
       "hour": {
        "requested": "17",
        "interpreted": 17
       },
       "isUtc": {
        "requested": "false",
        "interpreted": false
       },
       "numHours": {
        "requested": "5",
        "interpreted": 5
       },
       "maxFlights": {
        "requested": "10",
        "interpreted": 10
       },
       "url": "https://api.flightstats.com/flex/flightstatus/historical/rest/v3/json/airport/status/SJO/arr/2018/11/30/17?utc=false&maxFlights=10&numHours=5"
      },
      "flightStatuses": [
       {
        "flightId": 981741182,
        "carrierFsCode": "RV*",
        "operatingCarrierFsCode": "RV*",
        "primaryCarrierFsCode": "AC",
        "flightNumber": "1806",
        "departureAirportFsCode": "YYZ",
        "arrivalAirportFsCode": "SJO",
        "departureDate": {
         "dateUtc": "2018-11-30T22:20:00.000Z",
         "dateLocal": "2018-11-30T17:20:00.000"
        },
        "arrivalDate": {
         "dateUtc": "2018-12-01T03:30:00.000Z",
         "dateLocal": "2018-11-30T21:30:00.000"
        },
        "status": "L",
        "schedule": {
         "flightType": "J",
         "serviceClasses": "RFJY",
         "restrictions": "",
         "uplines": [],
         "downlines": []
        },
        "operationalTimes": {
         "publishedDeparture": {
          "dateUtc": "2018-11-30T22:20:00.000Z",
          "dateLocal": "2018-11-30T17:20:00.000"
         },
         "scheduledGateDeparture": {
          "dateUtc": "2018-11-30T22:20:00.000Z",
          "dateLocal": "2018-11-30T17:20:00.000"
         },
         "estimatedGateDeparture": {
          "dateUtc": "2018-11-30T22:21:00.000Z",
          "dateLocal": "2018-11-30T17:21:00.000"
         },
         "actualGateDeparture": {
          "dateUtc": "2018-11-30T22:21:00.000Z",
          "dateLocal": "2018-11-30T17:21:00.000"
         },
         "flightPlanPlannedDeparture": {
          "dateUtc": "2018-11-30T22:30:00.000Z",
          "dateLocal": "2018-11-30T17:30:00.000"
         },
         "scheduledRunwayDeparture": {
          "dateUtc": "2018-11-30T22:30:00.000Z",
          "dateLocal": "2018-11-30T17:30:00.000"
         },
         "estimatedRunwayDeparture": {
          "dateUtc": "2018-11-30T22:44:00.000Z",
          "dateLocal": "2018-11-30T17:44:00.000"
         },
         "actualRunwayDeparture": {
          "dateUtc": "2018-11-30T22:44:00.000Z",
          "dateLocal": "2018-11-30T17:44:00.000"
         },
         "publishedArrival": {
          "dateUtc": "2018-12-01T03:30:00.000Z",
          "dateLocal": "2018-11-30T21:30:00.000"
         },
         "flightPlanPlannedArrival": {
          "dateUtc": "2018-12-01T02:59:00.000Z",
          "dateLocal": "2018-11-30T20:59:00.000"
         },
         "scheduledGateArrival": {
          "dateUtc": "2018-12-01T03:30:00.000Z",
          "dateLocal": "2018-11-30T21:30:00.000"
         },
         "estimatedGateArrival": {
          "dateUtc": "2018-12-01T03:26:00.000Z",
          "dateLocal": "2018-11-30T21:26:00.000"
         },
         "actualGateArrival": {
          "dateUtc": "2018-12-01T03:26:00.000Z",
          "dateLocal": "2018-11-30T21:26:00.000"
         },
         "scheduledRunwayArrival": {
          "dateUtc": "2018-12-01T02:59:00.000Z",
          "dateLocal": "2018-11-30T20:59:00.000"
         },
         "estimatedRunwayArrival": {
          "dateUtc": "2018-12-01T03:24:00.000Z",
          "dateLocal": "2018-11-30T21:24:00.000"
         },
         "actualRunwayArrival": {
          "dateUtc": "2018-12-01T03:24:00.000Z",
          "dateLocal": "2018-11-30T21:24:00.000"
         }
        },
        "codeshares": [
         {
          "fsCode": "AC",
          "flightNumber": "1806",
          "relationship": "S"
         }
        ],
        "delays": {
         "departureGateDelayMinutes": 1,
         "departureRunwayDelayMinutes": 14,
         "arrivalRunwayDelayMinutes": 25
        },
        "flightDurations": {
         "scheduledBlockMinutes": 310,
         "blockMinutes": 305,
         "scheduledAirMinutes": 269,
         "airMinutes": 280,
         "scheduledTaxiOutMinutes": 10,
         "taxiOutMinutes": 23,
         "scheduledTaxiInMinutes": 31,
         "taxiInMinutes": 2
        },
        "airportResources": {
         "departureTerminal": "1",
         "departureGate": "E73",
         "arrivalTerminal": "M"
        },
        "flightEquipment": {
         "scheduledEquipmentIataCode": "763",
         "actualEquipmentIataCode": "763",
         "tailNumber": "C-FMWQ"
        },
        "irregularOperations": []
       },
       {
        "flightId": 981734911,
        "carrierFsCode": "AA",
        "operatingCarrierFsCode": "AA",
        "primaryCarrierFsCode": "AA",
        "flightNumber": "1353",
        "departureAirportFsCode": "MIA",
        "arrivalAirportFsCode": "SJO",
        "divertedAirportFsCode": "LIR",
        "departureDate": {
         "dateUtc": "2018-11-30T22:40:00.000Z",
         "dateLocal": "2018-11-30T17:40:00.000"
        },
        "arrivalDate": {
         "dateUtc": "2018-12-01T01:39:00.000Z",
         "dateLocal": "2018-11-30T19:39:00.000"
        },
        "status": "D",
        "schedule": {
         "flightType": "J",
         "serviceClasses": "RJY",
         "restrictions": "",
         "uplines": [],
         "downlines": []
        },
        "operationalTimes": {
         "publishedDeparture": {
          "dateUtc": "2018-11-30T22:40:00.000Z",
          "dateLocal": "2018-11-30T17:40:00.000"
         },
         "scheduledGateDeparture": {
          "dateUtc": "2018-11-30T22:40:00.000Z",
          "dateLocal": "2018-11-30T17:40:00.000"
         },
         "estimatedGateDeparture": {
          "dateUtc": "2018-11-30T22:36:00.000Z",
          "dateLocal": "2018-11-30T17:36:00.000"
         },
         "actualGateDeparture": {
          "dateUtc": "2018-11-30T22:36:00.000Z",
          "dateLocal": "2018-11-30T17:36:00.000"
         },
         "flightPlanPlannedDeparture": {
          "dateUtc": "2018-11-30T23:02:00.000Z",
          "dateLocal": "2018-11-30T18:02:00.000"
         },
         "scheduledRunwayDeparture": {
          "dateUtc": "2018-11-30T23:02:00.000Z",
          "dateLocal": "2018-11-30T18:02:00.000"
         },
         "estimatedRunwayDeparture": {
          "dateUtc": "2018-11-30T22:59:00.000Z",
          "dateLocal": "2018-11-30T17:59:00.000"
         },
         "actualRunwayDeparture": {
          "dateUtc": "2018-11-30T22:59:00.000Z",
          "dateLocal": "2018-11-30T17:59:00.000"
         },
         "publishedArrival": {
          "dateUtc": "2018-12-01T01:39:00.000Z",
          "dateLocal": "2018-11-30T19:39:00.000"
         },
         "scheduledGateArrival": {
          "dateUtc": "2018-12-01T01:39:00.000Z",
          "dateLocal": "2018-11-30T19:39:00.000"
         },
         "estimatedGateArrival": {
          "dateUtc": "2018-12-01T02:08:00.000Z",
          "dateLocal": "2018-11-30T20:08:00.000"
         },
         "actualGateArrival": {
          "dateUtc": "2018-12-01T02:08:00.000Z",
          "dateLocal": "2018-11-30T20:08:00.000"
         },
         "estimatedRunwayArrival": {
          "dateUtc": "2018-12-01T01:54:00.000Z",
          "dateLocal": "2018-11-30T19:54:00.000"
         },
         "actualRunwayArrival": {
          "dateUtc": "2018-12-01T01:54:00.000Z",
          "dateLocal": "2018-11-30T19:54:00.000"
         }
        },
        "codeshares": [
         {
          "fsCode": "BA",
          "flightNumber": "5071",
          "relationship": "L"
         }
        ],
        "delays": {
         "arrivalGateDelayMinutes": 29
        },
        "flightDurations": {
         "scheduledBlockMinutes": 179,
         "blockMinutes": 212,
         "airMinutes": 175,
         "scheduledTaxiOutMinutes": 22,
         "taxiOutMinutes": 23,
         "taxiInMinutes": 14
        },
        "airportResources": {
         "departureTerminal": "N",
         "departureGate": "D49"
        },
        "flightEquipment": {
         "scheduledEquipmentIataCode": "738",
         "actualEquipmentIataCode": "738",
         "tailNumber": "N873NN"
        },
        "irregularOperations": [
         {
          "type": "CONTINUED_BY",
          "dateUtc": "2018-12-01T01:51:09.522Z",
          "relatedFlightId": 982151363
         },
         {
          "type": "DIVERSION",
          "dateUtc": "2018-12-01T01:51:19.285Z",
          "newArrivalAirportFsCode": "LIR"
         }
        ]
       },
       {
        "flightId": 981775017,
        "carrierFsCode": "GCS",
        "operatingCarrierFsCode": "GCS",
        "primaryCarrierFsCode": "GCS",
        "flightNumber": "401",
        "departureAirportFsCode": "LIR",
        "arrivalAirportFsCode": "SJO",
        "departureDate": {
         "dateUtc": "2018-11-30T22:50:00.000Z",
         "dateLocal": "2018-11-30T16:50:00.000"
        },
        "arrivalDate": {
         "dateUtc": "2018-11-30T23:25:00.000Z",
         "dateLocal": "2018-11-30T17:25:00.000"
        },
        "status": "U",
        "schedule": {
         "flightType": "J",
         "serviceClasses": "Y",
         "restrictions": "",
         "uplines": [],
         "downlines": []
        },
        "operationalTimes": {
         "publishedDeparture": {
          "dateUtc": "2018-11-30T22:50:00.000Z",
          "dateLocal": "2018-11-30T16:50:00.000"
         },
         "scheduledGateDeparture": {
          "dateUtc": "2018-11-30T22:50:00.000Z",
          "dateLocal": "2018-11-30T16:50:00.000"
         },
         "publishedArrival": {
          "dateUtc": "2018-11-30T23:25:00.000Z",
          "dateLocal": "2018-11-30T17:25:00.000"
         },
         "scheduledGateArrival": {
          "dateUtc": "2018-11-30T23:25:00.000Z",
          "dateLocal": "2018-11-30T17:25:00.000"
         }
        },
        "codeshares": [],
        "delays": {},
        "flightDurations": {
         "scheduledBlockMinutes": 35
        },
        "airportResources": {
         "arrivalTerminal": "D"
        },
        "flightEquipment": {
         "scheduledEquipmentIataCode": "L4T"
        },
        "irregularOperations": []
       },
       {
        "flightId": 981761946,
        "carrierFsCode": "DL",
        "operatingCarrierFsCode": "DL",
        "primaryCarrierFsCode": "DL",
        "flightNumber": "325",
        "departureAirportFsCode": "ATL",
        "arrivalAirportFsCode": "SJO",
        "departureDate": {
         "dateUtc": "2018-11-30T23:00:00.000Z",
         "dateLocal": "2018-11-30T18:00:00.000"
        },
        "arrivalDate": {
         "dateUtc": "2018-12-01T03:05:00.000Z",
         "dateLocal": "2018-11-30T21:05:00.000"
        },
        "status": "L",
        "operationalTimes": {
         "publishedDeparture": {
          "dateUtc": "2018-11-30T23:00:00.000Z",
          "dateLocal": "2018-11-30T18:00:00.000"
         },
         "scheduledGateDeparture": {
          "dateUtc": "2018-11-30T23:00:00.000Z",
          "dateLocal": "2018-11-30T18:00:00.000"
         },
         "estimatedGateDeparture": {
          "dateUtc": "2018-11-30T23:16:00.000Z",
          "dateLocal": "2018-11-30T18:16:00.000"
         },
         "actualGateDeparture": {
          "dateUtc": "2018-11-30T23:16:00.000Z",
          "dateLocal": "2018-11-30T18:16:00.000"
         },
         "flightPlanPlannedDeparture": {
          "dateUtc": "2018-11-30T23:39:00.000Z",
          "dateLocal": "2018-11-30T18:39:00.000"
         },
         "scheduledRunwayDeparture": {
          "dateUtc": "2018-11-30T23:39:00.000Z",
          "dateLocal": "2018-11-30T18:39:00.000"
         },
         "estimatedRunwayDeparture": {
          "dateUtc": "2018-11-30T23:42:00.000Z",
          "dateLocal": "2018-11-30T18:42:00.000"
         },
         "actualRunwayDeparture": {
          "dateUtc": "2018-11-30T23:42:00.000Z",
          "dateLocal": "2018-11-30T18:42:00.000"
         },
         "publishedArrival": {
          "dateUtc": "2018-12-01T03:05:00.000Z",
          "dateLocal": "2018-11-30T21:05:00.000"
         },
         "flightPlanPlannedArrival": {
          "dateUtc": "2018-12-01T03:05:00.000Z",
          "dateLocal": "2018-11-30T21:05:00.000"
         },
         "scheduledGateArrival": {
          "dateUtc": "2018-12-01T03:05:00.000Z",
          "dateLocal": "2018-11-30T21:05:00.000"
         },
         "estimatedGateArrival": {
          "dateUtc": "2018-12-01T03:13:00.000Z",
          "dateLocal": "2018-11-30T21:13:00.000"
         },
         "actualGateArrival": {
          "dateUtc": "2018-12-01T03:13:00.000Z",
          "dateLocal": "2018-11-30T21:13:00.000"
         },
         "scheduledRunwayArrival": {
          "dateUtc": "2018-12-01T03:05:00.000Z",
          "dateLocal": "2018-11-30T21:05:00.000"
         },
         "estimatedRunwayArrival": {
          "dateUtc": "2018-12-01T03:10:00.000Z",
          "dateLocal": "2018-11-30T21:10:00.000"
         },
         "actualRunwayArrival": {
          "dateUtc": "2018-12-01T03:10:00.000Z",
          "dateLocal": "2018-11-30T21:10:00.000"
         }
        },
        "codeshares": [
         {
          "fsCode": "AF",
          "flightNumber": "8972",
          "relationship": "L"
         },
         {
          "fsCode": "KL",
          "flightNumber": "7616",
          "relationship": "L"
         }
        ],
        "delays": {
         "departureGateDelayMinutes": 16,
         "departureRunwayDelayMinutes": 3,
         "arrivalGateDelayMinutes": 8,
         "arrivalRunwayDelayMinutes": 5
        },
        "flightDurations": {
         "scheduledBlockMinutes": 245,
         "blockMinutes": 237,
         "scheduledAirMinutes": 206,
         "airMinutes": 208,
         "scheduledTaxiOutMinutes": 39,
         "taxiOutMinutes": 26,
         "scheduledTaxiInMinutes": 0,
         "taxiInMinutes": 3
        },
        "airportResources": {
         "departureTerminal": "I",
         "departureGate": "E32",
         "arrivalTerminal": "M",
         "arrivalGate": "05"
        },
        "flightEquipment": {
         "scheduledEquipmentIataCode": "73W",
         "actualEquipmentIataCode": "73W",
         "tailNumber": "N307DQ"
        },
        "irregularOperations": []
       },
       {
        "flightId": 981755909,
        "carrierFsCode": "CM",
        "operatingCarrierFsCode": "CM",
        "primaryCarrierFsCode": "CM",
        "flightNumber": "391",
        "departureAirportFsCode": "PTY",
        "arrivalAirportFsCode": "SJO",
        "departureDate": {
         "dateUtc": "2018-12-01T00:06:00.000Z",
         "dateLocal": "2018-11-30T19:06:00.000"
        },
        "arrivalDate": {
         "dateUtc": "2018-12-01T01:31:00.000Z",
         "dateLocal": "2018-11-30T19:31:00.000"
        },
        "status": "L",
        "schedule": {
         "flightType": "J",
         "serviceClasses": "FJY",
         "restrictions": "",
         "uplines": [],
         "downlines": [
          {
           "fsCode": "GUA",
           "flightId": 981755917
          }
         ]
        },
        "operationalTimes": {
         "publishedDeparture": {
          "dateUtc": "2018-12-01T00:06:00.000Z",
          "dateLocal": "2018-11-30T19:06:00.000"
         },
         "scheduledGateDeparture": {
          "dateUtc": "2018-12-01T00:06:00.000Z",
          "dateLocal": "2018-11-30T19:06:00.000"
         },
         "estimatedGateDeparture": {
          "dateUtc": "2018-12-01T00:09:00.000Z",
          "dateLocal": "2018-11-30T19:09:00.000"
         },
         "actualGateDeparture": {
          "dateUtc": "2018-12-01T00:09:00.000Z",
          "dateLocal": "2018-11-30T19:09:00.000"
         },
         "flightPlanPlannedDeparture": {
          "dateUtc": "2018-12-01T00:16:00.000Z",
          "dateLocal": "2018-11-30T19:16:00.000"
         },
         "scheduledRunwayDeparture": {
          "dateUtc": "2018-12-01T00:16:00.000Z",
          "dateLocal": "2018-11-30T19:16:00.000"
         },
         "estimatedRunwayDeparture": {
          "dateUtc": "2018-12-01T00:29:00.000Z",
          "dateLocal": "2018-11-30T19:29:00.000"
         },
         "actualRunwayDeparture": {
          "dateUtc": "2018-12-01T00:29:00.000Z",
          "dateLocal": "2018-11-30T19:29:00.000"
         },
         "publishedArrival": {
          "dateUtc": "2018-12-01T01:31:00.000Z",
          "dateLocal": "2018-11-30T19:31:00.000"
         },
         "flightPlanPlannedArrival": {
          "dateUtc": "2018-12-01T01:08:00.000Z",
          "dateLocal": "2018-11-30T19:08:00.000"
         },
         "scheduledGateArrival": {
          "dateUtc": "2018-12-01T01:31:00.000Z",
          "dateLocal": "2018-11-30T19:31:00.000"
         },
         "estimatedGateArrival": {
          "dateUtc": "2018-12-01T01:33:00.000Z",
          "dateLocal": "2018-11-30T19:33:00.000"
         },
         "actualGateArrival": {
          "dateUtc": "2018-12-01T01:33:00.000Z",
          "dateLocal": "2018-11-30T19:33:00.000"
         },
         "scheduledRunwayArrival": {
          "dateUtc": "2018-12-01T01:08:00.000Z",
          "dateLocal": "2018-11-30T19:08:00.000"
         },
         "estimatedRunwayArrival": {
          "dateUtc": "2018-12-01T01:29:00.000Z",
          "dateLocal": "2018-11-30T19:29:00.000"
         },
         "actualRunwayArrival": {
          "dateUtc": "2018-12-01T01:29:00.000Z",
          "dateLocal": "2018-11-30T19:29:00.000"
         }
        },
        "codeshares": [
         {
          "fsCode": "AF",
          "flightNumber": "4502",
          "relationship": "L"
         },
         {
          "fsCode": "IB",
          "flightNumber": "1668",
          "relationship": "L"
         },
         {
          "fsCode": "KL",
          "flightNumber": "3026",
          "relationship": "L"
         },
         {
          "fsCode": "LH",
          "flightNumber": "5520",
          "relationship": "L"
         }
        ],
        "delays": {
         "departureGateDelayMinutes": 3,
         "departureRunwayDelayMinutes": 13,
         "arrivalGateDelayMinutes": 2,
         "arrivalRunwayDelayMinutes": 21
        },
        "flightDurations": {
         "scheduledBlockMinutes": 85,
         "blockMinutes": 84,
         "scheduledAirMinutes": 52,
         "airMinutes": 60,
         "scheduledTaxiOutMinutes": 10,
         "taxiOutMinutes": 20,
         "scheduledTaxiInMinutes": 23,
         "taxiInMinutes": 4
        },
        "airportResources": {
         "departureGate": "25A",
         "arrivalTerminal": "M"
        },
        "flightEquipment": {
         "scheduledEquipmentIataCode": "E90",
         "actualEquipmentIataCode": "E90",
         "tailNumber": "HP-1559CMP"
        },
        "irregularOperations": []
       },
       {
        "flightId": 981748187,
        "carrierFsCode": "LR",
        "operatingCarrierFsCode": "LR",
        "primaryCarrierFsCode": "AV",
        "flightNumber": "692",
        "departureAirportFsCode": "BOG",
        "arrivalAirportFsCode": "SJO",
        "departureDate": {
         "dateUtc": "2018-12-01T00:59:00.000Z",
         "dateLocal": "2018-11-30T19:59:00.000"
        },
        "arrivalDate": {
         "dateUtc": "2018-12-01T03:19:00.000Z",
         "dateLocal": "2018-11-30T21:19:00.000"
        },
        "status": "L",
        "schedule": {
         "flightType": "J",
         "serviceClasses": "FJY",
         "restrictions": "",
         "uplines": [],
         "downlines": []
        },
        "operationalTimes": {
         "publishedDeparture": {
          "dateUtc": "2018-12-01T00:59:00.000Z",
          "dateLocal": "2018-11-30T19:59:00.000"
         },
         "scheduledGateDeparture": {
          "dateUtc": "2018-12-01T00:59:00.000Z",
          "dateLocal": "2018-11-30T19:59:00.000"
         },
         "estimatedGateDeparture": {
          "dateUtc": "2018-12-01T01:26:00.000Z",
          "dateLocal": "2018-11-30T20:26:00.000"
         },
         "actualGateDeparture": {
          "dateUtc": "2018-12-01T01:26:00.000Z",
          "dateLocal": "2018-11-30T20:26:00.000"
         },
         "flightPlanPlannedDeparture": {
          "dateUtc": "2018-12-01T01:09:00.000Z",
          "dateLocal": "2018-11-30T20:09:00.000"
         },
         "scheduledRunwayDeparture": {
          "dateUtc": "2018-12-01T01:09:00.000Z",
          "dateLocal": "2018-11-30T20:09:00.000"
         },
         "estimatedRunwayDeparture": {
          "dateUtc": "2018-12-01T01:43:00.000Z",
          "dateLocal": "2018-11-30T20:43:00.000"
         },
         "actualRunwayDeparture": {
          "dateUtc": "2018-12-01T01:43:00.000Z",
          "dateLocal": "2018-11-30T20:43:00.000"
         },
         "publishedArrival": {
          "dateUtc": "2018-12-01T03:19:00.000Z",
          "dateLocal": "2018-11-30T21:19:00.000"
         },
         "flightPlanPlannedArrival": {
          "dateUtc": "2018-12-01T02:50:00.000Z",
          "dateLocal": "2018-11-30T20:50:00.000"
         },
         "scheduledGateArrival": {
          "dateUtc": "2018-12-01T03:19:00.000Z",
          "dateLocal": "2018-11-30T21:19:00.000"
         },
         "estimatedGateArrival": {
          "dateUtc": "2018-12-01T03:28:00.000Z",
          "dateLocal": "2018-11-30T21:28:00.000"
         },
         "actualGateArrival": {
          "dateUtc": "2018-12-01T03:28:00.000Z",
          "dateLocal": "2018-11-30T21:28:00.000"
         },
         "scheduledRunwayArrival": {
          "dateUtc": "2018-12-01T02:50:00.000Z",
          "dateLocal": "2018-11-30T20:50:00.000"
         },
         "estimatedRunwayArrival": {
          "dateUtc": "2018-12-01T03:25:00.000Z",
          "dateLocal": "2018-11-30T21:25:00.000"
         },
         "actualRunwayArrival": {
          "dateUtc": "2018-12-01T03:25:00.000Z",
          "dateLocal": "2018-11-30T21:25:00.000"
         }
        },
        "codeshares": [
         {
          "fsCode": "AV",
          "flightNumber": "692",
          "relationship": "S"
         }
        ],
        "delays": {
         "departureGateDelayMinutes": 27,
         "departureRunwayDelayMinutes": 34,
         "arrivalGateDelayMinutes": 9,
         "arrivalRunwayDelayMinutes": 35
        },
        "flightDurations": {
         "scheduledBlockMinutes": 140,
         "blockMinutes": 122,
         "scheduledAirMinutes": 101,
         "airMinutes": 102,
         "scheduledTaxiOutMinutes": 10,
         "taxiOutMinutes": 17,
         "scheduledTaxiInMinutes": 29,
         "taxiInMinutes": 3
        },
        "airportResources": {
         "departureTerminal": "1",
         "departureGate": "47",
         "arrivalTerminal": "M"
        },
        "flightEquipment": {
         "scheduledEquipmentIataCode": "319",
         "actualEquipmentIataCode": "319",
         "tailNumber": "N524TA"
        },
        "irregularOperations": []
       },
       {
        "flightId": 981728404,
        "carrierFsCode": "4O",
        "operatingCarrierFsCode": "4O",
        "primaryCarrierFsCode": "4O",
        "flightNumber": "3922",
        "departureAirportFsCode": "MEX",
        "arrivalAirportFsCode": "SJO",
        "departureDate": {
         "dateUtc": "2018-12-01T01:00:00.000Z",
         "dateLocal": "2018-11-30T19:00:00.000"
        },
        "arrivalDate": {
         "dateUtc": "2018-12-01T03:55:00.000Z",
         "dateLocal": "2018-11-30T21:55:00.000"
        },
        "status": "L",
        "schedule": {
         "flightType": "J",
         "serviceClasses": "FJY",
         "restrictions": "",
         "uplines": [],
         "downlines": []
        },
        "operationalTimes": {
         "publishedDeparture": {
          "dateUtc": "2018-12-01T01:00:00.000Z",
          "dateLocal": "2018-11-30T19:00:00.000"
         },
         "scheduledGateDeparture": {
          "dateUtc": "2018-12-01T01:00:00.000Z",
          "dateLocal": "2018-11-30T19:00:00.000"
         },
         "estimatedGateDeparture": {
          "dateUtc": "2018-12-01T01:42:00.000Z",
          "dateLocal": "2018-11-30T19:42:00.000"
         },
         "actualGateDeparture": {
          "dateUtc": "2018-12-01T01:42:00.000Z",
          "dateLocal": "2018-11-30T19:42:00.000"
         },
         "estimatedRunwayDeparture": {
          "dateUtc": "2018-12-01T02:13:00.000Z",
          "dateLocal": "2018-11-30T20:13:00.000"
         },
         "actualRunwayDeparture": {
          "dateUtc": "2018-12-01T02:13:00.000Z",
          "dateLocal": "2018-11-30T20:13:00.000"
         },
         "publishedArrival": {
          "dateUtc": "2018-12-01T03:55:00.000Z",
          "dateLocal": "2018-11-30T21:55:00.000"
         },
         "scheduledGateArrival": {
          "dateUtc": "2018-12-01T03:55:00.000Z",
          "dateLocal": "2018-11-30T21:55:00.000"
         },
         "estimatedGateArrival": {
          "dateUtc": "2018-12-01T04:53:00.000Z",
          "dateLocal": "2018-11-30T22:53:00.000"
         },
         "actualGateArrival": {
          "dateUtc": "2018-12-01T04:53:00.000Z",
          "dateLocal": "2018-11-30T22:53:00.000"
         },
         "estimatedRunwayArrival": {
          "dateUtc": "2018-12-01T04:46:00.000Z",
          "dateLocal": "2018-11-30T22:46:00.000"
         },
         "actualRunwayArrival": {
          "dateUtc": "2018-12-01T04:46:00.000Z",
          "dateLocal": "2018-11-30T22:46:00.000"
         }
        },
        "codeshares": [],
        "delays": {
         "departureGateDelayMinutes": 42,
         "arrivalGateDelayMinutes": 58
        },
        "flightDurations": {
         "scheduledBlockMinutes": 175,
         "blockMinutes": 191,
         "airMinutes": 153,
         "taxiOutMinutes": 31,
         "taxiInMinutes": 7
        },
        "airportResources": {
         "departureTerminal": "T1",
         "departureGate": "30"
        },
        "flightEquipment": {
         "scheduledEquipmentIataCode": "320",
         "actualEquipmentIataCode": "32S",
         "tailNumber": "XA-XII"
        },
        "irregularOperations": []
       },
       {
        "flightId": 981746148,
        "carrierFsCode": "AM",
        "operatingCarrierFsCode": "AM",
        "primaryCarrierFsCode": "AM",
        "flightNumber": "656",
        "departureAirportFsCode": "MEX",
        "arrivalAirportFsCode": "SJO",
        "departureDate": {
         "dateUtc": "2018-12-01T01:15:00.000Z",
         "dateLocal": "2018-11-30T19:15:00.000"
        },
        "arrivalDate": {
         "dateUtc": "2018-12-01T04:45:00.000Z",
         "dateLocal": "2018-11-30T22:45:00.000"
        },
        "status": "L",
        "schedule": {
         "flightType": "J",
         "serviceClasses": "RJY",
         "restrictions": "",
         "uplines": [],
         "downlines": []
        },
        "operationalTimes": {
         "publishedDeparture": {
          "dateUtc": "2018-12-01T01:15:00.000Z",
          "dateLocal": "2018-11-30T19:15:00.000"
         },
         "scheduledGateDeparture": {
          "dateUtc": "2018-12-01T01:15:00.000Z",
          "dateLocal": "2018-11-30T19:15:00.000"
         },
         "estimatedGateDeparture": {
          "dateUtc": "2018-12-01T01:09:00.000Z",
          "dateLocal": "2018-11-30T19:09:00.000"
         },
         "actualGateDeparture": {
          "dateUtc": "2018-12-01T01:09:00.000Z",
          "dateLocal": "2018-11-30T19:09:00.000"
         },
         "flightPlanPlannedDeparture": {
          "dateUtc": "2018-12-01T01:25:00.000Z",
          "dateLocal": "2018-11-30T19:25:00.000"
         },
         "scheduledRunwayDeparture": {
          "dateUtc": "2018-12-01T01:25:00.000Z",
          "dateLocal": "2018-11-30T19:25:00.000"
         },
         "estimatedRunwayDeparture": {
          "dateUtc": "2018-12-01T02:07:00.000Z",
          "dateLocal": "2018-11-30T20:07:00.000"
         },
         "actualRunwayDeparture": {
          "dateUtc": "2018-12-01T02:07:00.000Z",
          "dateLocal": "2018-11-30T20:07:00.000"
         },
         "publishedArrival": {
          "dateUtc": "2018-12-01T04:45:00.000Z",
          "dateLocal": "2018-11-30T22:45:00.000"
         },
         "flightPlanPlannedArrival": {
          "dateUtc": "2018-12-01T03:57:00.000Z",
          "dateLocal": "2018-11-30T21:57:00.000"
         },
         "scheduledGateArrival": {
          "dateUtc": "2018-12-01T04:45:00.000Z",
          "dateLocal": "2018-11-30T22:45:00.000"
         },
         "estimatedGateArrival": {
          "dateUtc": "2018-12-01T04:47:00.000Z",
          "dateLocal": "2018-11-30T22:47:00.000"
         },
         "actualGateArrival": {
          "dateUtc": "2018-12-01T04:47:00.000Z",
          "dateLocal": "2018-11-30T22:47:00.000"
         },
         "scheduledRunwayArrival": {
          "dateUtc": "2018-12-01T03:57:00.000Z",
          "dateLocal": "2018-11-30T21:57:00.000"
         },
         "estimatedRunwayArrival": {
          "dateUtc": "2018-12-01T04:41:00.000Z",
          "dateLocal": "2018-11-30T22:41:00.000"
         },
         "actualRunwayArrival": {
          "dateUtc": "2018-12-01T04:41:00.000Z",
          "dateLocal": "2018-11-30T22:41:00.000"
         }
        },
        "codeshares": [
         {
          "fsCode": "AF",
          "flightNumber": "8128",
          "relationship": "L"
         },
         {
          "fsCode": "AV",
          "flightNumber": "2635",
          "relationship": "L"
         }
        ],
        "delays": {
         "departureRunwayDelayMinutes": 42,
         "arrivalGateDelayMinutes": 2,
         "arrivalRunwayDelayMinutes": 44
        },
        "flightDurations": {
         "scheduledBlockMinutes": 210,
         "blockMinutes": 218,
         "scheduledAirMinutes": 152,
         "airMinutes": 154,
         "scheduledTaxiOutMinutes": 10,
         "taxiOutMinutes": 58,
         "scheduledTaxiInMinutes": 48,
         "taxiInMinutes": 6
        },
        "airportResources": {
         "departureTerminal": "2",
         "departureGate": "63",
         "arrivalTerminal": "M"
        },
        "flightEquipment": {
         "scheduledEquipmentIataCode": "7S8",
         "actualEquipmentIataCode": "738",
         "tailNumber": "N377AR"
        },
        "irregularOperations": []
       },
       {
        "flightId": 981748163,
        "carrierFsCode": "TA",
        "operatingCarrierFsCode": "TA",
        "primaryCarrierFsCode": "AV",
        "flightNumber": "627",
        "departureAirportFsCode": "SAL",
        "arrivalAirportFsCode": "SJO",
        "departureDate": {
         "dateUtc": "2018-12-01T02:25:00.000Z",
         "dateLocal": "2018-11-30T20:25:00.000"
        },
        "arrivalDate": {
         "dateUtc": "2018-12-01T03:45:00.000Z",
         "dateLocal": "2018-11-30T21:45:00.000"
        },
        "status": "L",
        "operationalTimes": {
         "publishedDeparture": {
          "dateUtc": "2018-12-01T02:25:00.000Z",
          "dateLocal": "2018-11-30T20:25:00.000"
         },
         "scheduledGateDeparture": {
          "dateUtc": "2018-12-01T02:25:00.000Z",
          "dateLocal": "2018-11-30T20:25:00.000"
         },
         "estimatedGateDeparture": {
          "dateUtc": "2018-12-01T02:33:00.000Z",
          "dateLocal": "2018-11-30T20:33:00.000"
         },
         "actualGateDeparture": {
          "dateUtc": "2018-12-01T02:33:00.000Z",
          "dateLocal": "2018-11-30T20:33:00.000"
         },
         "flightPlanPlannedDeparture": {
          "dateUtc": "2018-12-01T02:35:00.000Z",
          "dateLocal": "2018-11-30T20:35:00.000"
         },
         "scheduledRunwayDeparture": {
          "dateUtc": "2018-12-01T02:35:00.000Z",
          "dateLocal": "2018-11-30T20:35:00.000"
         },
         "publishedArrival": {
          "dateUtc": "2018-12-01T03:45:00.000Z",
          "dateLocal": "2018-11-30T21:45:00.000"
         },
         "flightPlanPlannedArrival": {
          "dateUtc": "2018-12-01T03:33:00.000Z",
          "dateLocal": "2018-11-30T21:33:00.000"
         },
         "scheduledGateArrival": {
          "dateUtc": "2018-12-01T03:45:00.000Z",
          "dateLocal": "2018-11-30T21:45:00.000"
         },
         "estimatedGateArrival": {
          "dateUtc": "2018-12-01T03:50:00.000Z",
          "dateLocal": "2018-11-30T21:50:00.000"
         },
         "actualGateArrival": {
          "dateUtc": "2018-12-01T03:50:00.000Z",
          "dateLocal": "2018-11-30T21:50:00.000"
         },
         "scheduledRunwayArrival": {
          "dateUtc": "2018-12-01T03:33:00.000Z",
          "dateLocal": "2018-11-30T21:33:00.000"
         }
        },
        "codeshares": [
         {
          "fsCode": "AV",
          "flightNumber": "627",
          "relationship": "S"
         }
        ],
        "delays": {
         "departureGateDelayMinutes": 8,
         "arrivalGateDelayMinutes": 5
        },
        "flightDurations": {
         "scheduledBlockMinutes": 80,
         "blockMinutes": 77,
         "scheduledAirMinutes": 58,
         "scheduledTaxiOutMinutes": 10,
         "scheduledTaxiInMinutes": 12
        },
        "airportResources": {
         "arrivalTerminal": "M"
        },
        "flightEquipment": {
         "scheduledEquipmentIataCode": "320",
         "actualEquipmentIataCode": "32S",
         "tailNumber": "N603AV"
        },
        "irregularOperations": []
       },
       {
        "flightId": 981748176,
        "carrierFsCode": "TA",
        "operatingCarrierFsCode": "TA",
        "primaryCarrierFsCode": "AV",
        "flightNumber": "618",
        "departureAirportFsCode": "GUA",
        "arrivalAirportFsCode": "SJO",
        "departureDate": {
         "dateUtc": "2018-12-01T02:35:00.000Z",
         "dateLocal": "2018-11-30T20:35:00.000"
        },
        "arrivalDate": {
         "dateUtc": "2018-12-01T04:15:00.000Z",
         "dateLocal": "2018-11-30T22:15:00.000"
        },
        "status": "U",
        "schedule": {
         "flightType": "J",
         "serviceClasses": "FJY",
         "restrictions": "",
         "uplines": [
          {
           "fsCode": "MCO",
           "flightId": 981748169
          }
         ],
         "downlines": []
        },
        "operationalTimes": {
         "publishedDeparture": {
          "dateUtc": "2018-12-01T02:35:00.000Z",
          "dateLocal": "2018-11-30T20:35:00.000"
         },
         "scheduledGateDeparture": {
          "dateUtc": "2018-12-01T02:35:00.000Z",
          "dateLocal": "2018-11-30T20:35:00.000"
         },
         "estimatedGateDeparture": {
          "dateUtc": "2018-12-01T02:35:00.000Z",
          "dateLocal": "2018-11-30T20:35:00.000"
         },
         "flightPlanPlannedDeparture": {
          "dateUtc": "2018-12-01T02:45:00.000Z",
          "dateLocal": "2018-11-30T20:45:00.000"
         },
         "scheduledRunwayDeparture": {
          "dateUtc": "2018-12-01T02:45:00.000Z",
          "dateLocal": "2018-11-30T20:45:00.000"
         },
         "publishedArrival": {
          "dateUtc": "2018-12-01T04:15:00.000Z",
          "dateLocal": "2018-11-30T22:15:00.000"
         },
         "flightPlanPlannedArrival": {
          "dateUtc": "2018-12-01T03:59:00.000Z",
          "dateLocal": "2018-11-30T21:59:00.000"
         },
         "scheduledGateArrival": {
          "dateUtc": "2018-12-01T04:15:00.000Z",
          "dateLocal": "2018-11-30T22:15:00.000"
         },
         "estimatedGateArrival": {
          "dateUtc": "2018-12-01T04:15:00.000Z",
          "dateLocal": "2018-11-30T22:15:00.000"
         },
         "scheduledRunwayArrival": {
          "dateUtc": "2018-12-01T03:59:00.000Z",
          "dateLocal": "2018-11-30T21:59:00.000"
         }
        },
        "codeshares": [
         {
          "fsCode": "IB",
          "flightNumber": "7816",
          "relationship": "L"
         },
         {
          "fsCode": "AV",
          "flightNumber": "618",
          "relationship": "S"
         }
        ],
        "delays": {},
        "flightDurations": {
         "scheduledBlockMinutes": 100,
         "scheduledAirMinutes": 74,
         "scheduledTaxiOutMinutes": 10,
         "scheduledTaxiInMinutes": 16
        },
        "airportResources": {
         "arrivalTerminal": "M"
        },
        "flightEquipment": {
         "scheduledEquipmentIataCode": "319",
         "actualEquipmentIataCode": "319"
        },
        "irregularOperations": []
       }
      ],
      "appendix": {
       "airlines": [
        {
         "fs": "AA",
         "iata": "AA",
         "icao": "AAL",
         "name": "American Airlines",
         "phoneNumber": "08457-567-567",
         "active": true,
         "category": "I"
        },
        {
         "fs": "KL",
         "iata": "KL",
         "icao": "KLM",
         "name": "KLM",
         "phoneNumber": "1-800-447-4747",
         "active": true,
         "category": "I"
        },
        {
         "fs": "AC",
         "iata": "AC",
         "icao": "ACA",
         "name": "Air Canada",
         "phoneNumber": "1-888-422-7533",
         "active": true,
         "category": "I"
        },
        {
         "fs": "AF",
         "iata": "AF",
         "icao": "AFR",
         "name": "Air France",
         "phoneNumber": "1-800-237-2747",
         "active": true,
         "category": "I"
        },
        {
         "fs": "LR",
         "iata": "LR",
         "icao": "LRC",
         "name": "Avianca Costa Rica",
         "active": true,
         "category": "I"
        },
        {
         "fs": "RV*",
         "iata": "RV",
         "icao": "ROU",
         "name": "Air Canada Rouge",
         "active": true,
         "category": "I"
        },
        {
         "fs": "DL",
         "iata": "DL",
         "icao": "DAL",
         "name": "Delta Air Lines",
         "phoneNumber": "1-800-221-1212",
         "active": true,
         "category": "I"
        },
        {
         "fs": "CM",
         "iata": "CM",
         "icao": "CMP",
         "name": "Copa Airlines",
         "active": true,
         "category": "I"
        },
        {
         "fs": "AM",
         "iata": "AM",
         "icao": "AMX",
         "name": "Aeromexico",
         "phoneNumber": "1-800-237-6639",
         "active": true,
         "category": "I"
        },
        {
         "fs": "TA",
         "iata": "TA",
         "icao": "TAI",
         "name": "TACA",
         "phoneNumber": "1-800-400-TACA",
         "active": true,
         "category": "I"
        },
        {
         "fs": "AV",
         "iata": "AV",
         "icao": "AVA",
         "name": "AVIANCA",
         "phoneNumber": "01-8000-1234 34",
         "active": true,
         "category": "I"
        },
        {
         "fs": "GCS",
         "icao": "GCS",
         "name": "Skyway",
         "active": true,
         "category": "A"
        },
        {
         "fs": "IB",
         "iata": "IB",
         "icao": "IBE",
         "name": "Iberia",
         "phoneNumber": "1800 772 4642",
         "active": true,
         "category": "I"
        },
        {
         "fs": "4O",
         "iata": "4O",
         "icao": "AIJ",
         "name": "Interjet",
         "active": true,
         "category": "I"
        },
        {
         "fs": "LH",
         "iata": "LH",
         "icao": "DLH",
         "name": "Lufthansa",
         "phoneNumber": "800 645-3880",
         "active": true,
         "category": "I"
        },
        {
         "fs": "BA",
         "iata": "BA",
         "icao": "BAW",
         "name": "British Airways",
         "phoneNumber": "1-800-AIRWAYS",
         "active": true,
         "category": "I"
        }
       ],
       "airports": [
        {
         "fs": "MEX",
         "iata": "MEX",
         "icao": "MMMX",
         "name": "Benito Juarez International Airport",
         "city": "Mexico City",
         "cityCode": "MEX",
         "countryCode": "MX",
         "countryName": "Mexico",
         "regionName": "North America",
         "timeZoneRegionName": "America/Mexico_City",
         "localTime": "2018-12-04T23:10:30.689",
         "utcOffsetHours": -6,
         "latitude": 19.435278,
         "longitude": -99.072778,
         "elevationFeet": 7341,
         "classification": 1,
         "active": true
        },
        {
         "fs": "GUA",
         "iata": "GUA",
         "icao": "MGGT",
         "name": "La Aurora International Airport",
         "city": "Guatemala City",
         "cityCode": "GUA",
         "countryCode": "GT",
         "countryName": "Guatemala",
         "regionName": "Central America",
         "timeZoneRegionName": "America/Guatemala",
         "localTime": "2018-12-04T23:10:30.689",
         "utcOffsetHours": -6,
         "latitude": 14.588071,
         "longitude": -90.530679,
         "elevationFeet": 4952,
         "classification": 3,
         "active": true
        },
        {
         "fs": "PTY",
         "iata": "PTY",
         "icao": "MPTO",
         "name": "Tocumen International Airport",
         "city": "Panama City",
         "cityCode": "PTY",
         "countryCode": "PA",
         "countryName": "Panama",
         "regionName": "Central America",
         "timeZoneRegionName": "America/Panama",
         "localTime": "2018-12-05T00:10:30.689",
         "utcOffsetHours": -5,
         "latitude": 9.066897,
         "longitude": -79.387639,
         "elevationFeet": 42,
         "classification": 2,
         "active": true
        },
        {
         "fs": "MIA",
         "iata": "MIA",
         "icao": "KMIA",
         "faa": "MIA",
         "name": "Miami International Airport",
         "street1": "4200 N.W. 21 Street",
         "street2": "",
         "city": "Miami",
         "cityCode": "MIA",
         "stateCode": "FL",
         "postalCode": "33122",
         "countryCode": "US",
         "countryName": "United States",
         "regionName": "North America",
         "timeZoneRegionName": "America/New_York",
         "weatherZone": "FLZ074",
         "localTime": "2018-12-05T00:10:30.689",
         "utcOffsetHours": -5,
         "latitude": 25.796,
         "longitude": -80.278234,
         "elevationFeet": 8,
         "classification": 1,
         "active": true
        },
        {
         "fs": "LIR",
         "iata": "LIR",
         "icao": "MRLB",
         "name": "Liberia Airport",
         "city": "Liberia",
         "cityCode": "LIR",
         "countryCode": "CR",
         "countryName": "Costa Rica",
         "regionName": "Central America",
         "timeZoneRegionName": "America/Costa_Rica",
         "localTime": "2018-12-04T23:10:30.689",
         "utcOffsetHours": -6,
         "latitude": 10.600005,
         "longitude": -85.538394,
         "elevationFeet": 269,
         "classification": 4,
         "active": true
        },
        {
         "fs": "MCO",
         "iata": "MCO",
         "icao": "KMCO",
         "faa": "MCO",
         "name": "Orlando International Airport",
         "street1": "One Airport Boulevard",
         "street2": "",
         "city": "Orlando",
         "cityCode": "ORL",
         "stateCode": "FL",
         "postalCode": "32827-4399",
         "countryCode": "US",
         "countryName": "United States",
         "regionName": "North America",
         "timeZoneRegionName": "America/New_York",
         "weatherZone": "FLZ045",
         "localTime": "2018-12-05T00:10:30.689",
         "utcOffsetHours": -5,
         "latitude": 28.432177,
         "longitude": -81.308301,
         "elevationFeet": 96,
         "classification": 1,
         "active": true
        },
        {
         "fs": "ATL",
         "iata": "ATL",
         "icao": "KATL",
         "faa": "ATL",
         "name": "Hartsfield-Jackson Atlanta International Airport",
         "street1": "6000 N Terminal Parkway",
         "street2": "",
         "city": "Atlanta",
         "cityCode": "ATL",
         "stateCode": "GA",
         "postalCode": "30320",
         "countryCode": "US",
         "countryName": "United States",
         "regionName": "North America",
         "timeZoneRegionName": "America/New_York",
         "weatherZone": "GAZ044",
         "localTime": "2018-12-05T00:10:30.689",
         "utcOffsetHours": -5,
         "latitude": 33.640067,
         "longitude": -84.44403,
         "elevationFeet": 1026,
         "classification": 1,
         "active": true
        },
        {
         "fs": "SJO",
         "iata": "SJO",
         "icao": "MROC",
         "name": "Juan Santamaria International Airport",
         "city": "San Jose",
         "cityCode": "SJO",
         "countryCode": "CR",
         "countryName": "Costa Rica",
         "regionName": "Central America",
         "timeZoneRegionName": "America/Costa_Rica",
         "localTime": "2018-12-04T23:10:30.689",
         "utcOffsetHours": -6,
         "latitude": 9.998238,
         "longitude": -84.20408,
         "elevationFeet": 3021,
         "classification": 3,
         "active": true
        },
        {
         "fs": "BOG",
         "iata": "BOG",
         "icao": "SKBO",
         "name": "El Dorado International Airport",
         "city": "Bogota",
         "cityCode": "BOG",
         "countryCode": "CO",
         "countryName": "Colombia",
         "regionName": "South America",
         "timeZoneRegionName": "America/Bogota",
         "localTime": "2018-12-05T00:10:30.689",
         "utcOffsetHours": -5,
         "latitude": 4.698602,
         "longitude": -74.143136,
         "elevationFeet": 8361,
         "classification": 1,
         "active": true
        },
        {
         "fs": "YYZ",
         "iata": "YYZ",
         "icao": "CYYZ",
         "name": "Pearson International Airport",
         "street1": "",
         "street2": "",
         "city": "Toronto",
         "cityCode": "YTO",
         "stateCode": "ON",
         "postalCode": "L5P 1B2",
         "countryCode": "CA",
         "countryName": "Canada",
         "regionName": "North America",
         "timeZoneRegionName": "America/Toronto",
         "localTime": "2018-12-05T00:10:30.689",
         "utcOffsetHours": -5,
         "latitude": 43.681585,
         "longitude": -79.61146,
         "elevationFeet": 569,
         "classification": 1,
         "active": true
        },
        {
         "fs": "SAL",
         "iata": "SAL",
         "icao": "MSLP",
         "name": "El Salvador International Airport",
         "city": "San Salvador",
         "cityCode": "SAL",
         "countryCode": "SV",
         "countryName": "El Salvador",
         "regionName": "Central America",
         "timeZoneRegionName": "America/El_Salvador",
         "localTime": "2018-12-04T23:10:30.689",
         "utcOffsetHours": -6,
         "latitude": 13.445126,
         "longitude": -89.05723,
         "elevationFeet": 101,
         "classification": 3,
         "active": true
        }
       ],
       "equipments": [
        {
         "iata": "320",
         "name": "Airbus A320",
         "turboProp": false,
         "jet": true,
         "widebody": false,
         "regional": false
        },
        {
         "iata": "763",
         "name": "Boeing 767-300 Passenger",
         "turboProp": false,
         "jet": true,
         "widebody": true,
         "regional": false
        },
        {
         "iata": "32S",
         "name": "Airbus A318 / A319 / A320 / A321",
         "turboProp": false,
         "jet": true,
         "widebody": false,
         "regional": false
        },
        {
         "iata": "73W",
         "name": "Boeing 737-700 (winglets) Passenger/BBJ1",
         "turboProp": false,
         "jet": true,
         "widebody": false,
         "regional": false
        },
        {
         "iata": "319",
         "name": "Airbus A319",
         "turboProp": false,
         "jet": true,
         "widebody": false,
         "regional": false
        },
        {
         "iata": "7S8",
         "name": "Boeing 737-800 (Scimitar Winglets) Passenger",
         "turboProp": false,
         "jet": true,
         "widebody": false,
         "regional": false
        },
        {
         "iata": "738",
         "name": "Boeing 737-800 Passenger",
         "turboProp": false,
         "jet": true,
         "widebody": false,
         "regional": false
        },
        {
         "iata": "E90",
         "name": "Embraer 190",
         "turboProp": false,
         "jet": true,
         "widebody": false,
         "regional": true
        },
        {
         "iata": "L4T",
         "name": "Aircraft Industries (LET) 410",
         "turboProp": true,
         "jet": false,
         "widebody": false,
         "regional": false
        }
       ]
      }
     },
    LLEGADA:{
        "request": {
         "endpoint": "ByAirportByDeparture",
         "departureAirport": {
          "requested": "SJO",
          "interpreted": "SJO"
         },
         "year": {
          "requested": "2018",
          "interpreted": 2018
         },
         "month": {
          "requested": "5",
          "interpreted": 5
         },
         "day": {
          "requested": "2",
          "interpreted": 2
         },
         "hour": {
          "requested": "4",
          "interpreted": 4
         },
         "isUtc": {
          "requested": "false",
          "interpreted": false
         },
         "numHours": {
          "requested": "6",
          "interpreted": 6
         },
         "maxFlights": {
          "requested": "8",
          "interpreted": 8
         },
         "url": "https://api.flightstats.com/flex/flightstatus/historical/rest/v3/json/airport/status/SJO/dep/2018/5/2/4?utc=false&maxFlights=8&numHours=6"
        },
        "flightStatuses": [
         {
          "flightId": 957778514,
          "carrierFsCode": "AA",
          "operatingCarrierFsCode": "AA",
          "primaryCarrierFsCode": "AA",
          "flightNumber": "2436",
          "departureAirportFsCode": "SJO",
          "arrivalAirportFsCode": "DFW",
          "departureDate": {
           "dateUtc": "2018-05-02T12:45:00.000Z",
           "dateLocal": "2018-05-02T06:45:00.000"
          },
          "arrivalDate": {
           "dateUtc": "2018-05-02T17:18:00.000Z",
           "dateLocal": "2018-05-02T12:18:00.000"
          },
          "status": "L",
          "schedule": {
           "flightType": "J",
           "serviceClasses": "RJY",
           "restrictions": "",
           "uplines": [],
           "downlines": []
          },
          "operationalTimes": {
           "publishedDeparture": {
            "dateUtc": "2018-05-02T12:45:00.000Z",
            "dateLocal": "2018-05-02T06:45:00.000"
           },
           "scheduledGateDeparture": {
            "dateUtc": "2018-05-02T12:45:00.000Z",
            "dateLocal": "2018-05-02T06:45:00.000"
           },
           "estimatedGateDeparture": {
            "dateUtc": "2018-05-02T12:45:00.000Z",
            "dateLocal": "2018-05-02T06:45:00.000"
           },
           "actualGateDeparture": {
            "dateUtc": "2018-05-02T12:45:00.000Z",
            "dateLocal": "2018-05-02T06:45:00.000"
           },
           "flightPlanPlannedDeparture": {
            "dateUtc": "2018-05-02T13:09:00.000Z",
            "dateLocal": "2018-05-02T07:09:00.000"
           },
           "scheduledRunwayDeparture": {
            "dateUtc": "2018-05-02T13:09:00.000Z",
            "dateLocal": "2018-05-02T07:09:00.000"
           },
           "estimatedRunwayDeparture": {
            "dateUtc": "2018-05-02T13:23:00.000Z",
            "dateLocal": "2018-05-02T07:23:00.000"
           },
           "actualRunwayDeparture": {
            "dateUtc": "2018-05-02T13:23:00.000Z",
            "dateLocal": "2018-05-02T07:23:00.000"
           },
           "publishedArrival": {
            "dateUtc": "2018-05-02T17:18:00.000Z",
            "dateLocal": "2018-05-02T12:18:00.000"
           },
           "flightPlanPlannedArrival": {
            "dateUtc": "2018-05-02T17:07:00.000Z",
            "dateLocal": "2018-05-02T12:07:00.000"
           },
           "scheduledGateArrival": {
            "dateUtc": "2018-05-02T17:18:00.000Z",
            "dateLocal": "2018-05-02T12:18:00.000"
           },
           "estimatedGateArrival": {
            "dateUtc": "2018-05-02T17:26:00.000Z",
            "dateLocal": "2018-05-02T12:26:00.000"
           },
           "actualGateArrival": {
            "dateUtc": "2018-05-02T17:26:00.000Z",
            "dateLocal": "2018-05-02T12:26:00.000"
           },
           "scheduledRunwayArrival": {
            "dateUtc": "2018-05-02T17:07:00.000Z",
            "dateLocal": "2018-05-02T12:07:00.000"
           },
           "estimatedRunwayArrival": {
            "dateUtc": "2018-05-02T17:22:00.000Z",
            "dateLocal": "2018-05-02T12:22:00.000"
           },
           "actualRunwayArrival": {
            "dateUtc": "2018-05-02T17:22:00.000Z",
            "dateLocal": "2018-05-02T12:22:00.000"
           }
          },
          "codeshares": [],
          "delays": {
           "departureRunwayDelayMinutes": 14,
           "arrivalGateDelayMinutes": 8,
           "arrivalRunwayDelayMinutes": 15
          },
          "flightDurations": {
           "scheduledBlockMinutes": 273,
           "blockMinutes": 281,
           "scheduledAirMinutes": 238,
           "airMinutes": 239,
           "scheduledTaxiOutMinutes": 24,
           "taxiOutMinutes": 38,
           "scheduledTaxiInMinutes": 11,
           "taxiInMinutes": 4
          },
          "airportResources": {
           "departureTerminal": "1",
           "departureGate": "5",
           "arrivalTerminal": "D",
           "arrivalGate": "31",
           "baggage": "D5"
          },
          "flightEquipment": {
           "scheduledEquipmentIataCode": "73H",
           "actualEquipmentIataCode": "738",
           "tailNumber": "N935AN"
          },
          "irregularOperations": []
         },
         {
          "flightId": 957776884,
          "carrierFsCode": "AA",
          "operatingCarrierFsCode": "AA",
          "primaryCarrierFsCode": "AA",
          "flightNumber": "1204",
          "departureAirportFsCode": "SJO",
          "arrivalAirportFsCode": "MIA",
          "departureDate": {
           "dateUtc": "2018-05-02T12:57:00.000Z",
           "dateLocal": "2018-05-02T06:57:00.000"
          },
          "arrivalDate": {
           "dateUtc": "2018-05-02T16:00:00.000Z",
           "dateLocal": "2018-05-02T12:00:00.000"
          },
          "status": "L",
          "schedule": {
           "flightType": "J",
           "serviceClasses": "RJY",
           "restrictions": "",
           "uplines": [],
           "downlines": []
          },
          "operationalTimes": {
           "publishedDeparture": {
            "dateUtc": "2018-05-02T12:57:00.000Z",
            "dateLocal": "2018-05-02T06:57:00.000"
           },
           "scheduledGateDeparture": {
            "dateUtc": "2018-05-02T12:57:00.000Z",
            "dateLocal": "2018-05-02T06:57:00.000"
           },
           "estimatedGateDeparture": {
            "dateUtc": "2018-05-02T12:44:00.000Z",
            "dateLocal": "2018-05-02T06:44:00.000"
           },
           "actualGateDeparture": {
            "dateUtc": "2018-05-02T12:44:00.000Z",
            "dateLocal": "2018-05-02T06:44:00.000"
           },
           "flightPlanPlannedDeparture": {
            "dateUtc": "2018-05-02T13:08:00.000Z",
            "dateLocal": "2018-05-02T07:08:00.000"
           },
           "scheduledRunwayDeparture": {
            "dateUtc": "2018-05-02T13:08:00.000Z",
            "dateLocal": "2018-05-02T07:08:00.000"
           },
           "estimatedRunwayDeparture": {
            "dateUtc": "2018-05-02T12:56:00.000Z",
            "dateLocal": "2018-05-02T06:56:00.000"
           },
           "actualRunwayDeparture": {
            "dateUtc": "2018-05-02T12:56:00.000Z",
            "dateLocal": "2018-05-02T06:56:00.000"
           },
           "publishedArrival": {
            "dateUtc": "2018-05-02T16:00:00.000Z",
            "dateLocal": "2018-05-02T12:00:00.000"
           },
           "flightPlanPlannedArrival": {
            "dateUtc": "2018-05-02T15:36:00.000Z",
            "dateLocal": "2018-05-02T11:36:00.000"
           },
           "scheduledGateArrival": {
            "dateUtc": "2018-05-02T16:00:00.000Z",
            "dateLocal": "2018-05-02T12:00:00.000"
           },
           "estimatedGateArrival": {
            "dateUtc": "2018-05-02T15:29:00.000Z",
            "dateLocal": "2018-05-02T11:29:00.000"
           },
           "actualGateArrival": {
            "dateUtc": "2018-05-02T15:29:00.000Z",
            "dateLocal": "2018-05-02T11:29:00.000"
           },
           "scheduledRunwayArrival": {
            "dateUtc": "2018-05-02T15:36:00.000Z",
            "dateLocal": "2018-05-02T11:36:00.000"
           },
           "estimatedRunwayArrival": {
            "dateUtc": "2018-05-02T15:19:00.000Z",
            "dateLocal": "2018-05-02T11:19:00.000"
           },
           "actualRunwayArrival": {
            "dateUtc": "2018-05-02T15:19:00.000Z",
            "dateLocal": "2018-05-02T11:19:00.000"
           }
          },
          "codeshares": [
           {
            "fsCode": "BA",
            "flightNumber": "5340",
            "relationship": "L"
           }
          ],
          "delays": {},
          "flightDurations": {
           "scheduledBlockMinutes": 183,
           "blockMinutes": 165,
           "scheduledAirMinutes": 148,
           "airMinutes": 143,
           "scheduledTaxiOutMinutes": 11,
           "taxiOutMinutes": 12,
           "scheduledTaxiInMinutes": 24,
           "taxiInMinutes": 10
          },
          "airportResources": {
           "departureTerminal": "1",
           "departureGate": "3",
           "arrivalTerminal": "N",
           "arrivalGate": "D19",
           "baggage": "CD"
          },
          "flightEquipment": {
           "scheduledEquipmentIataCode": "73H",
           "actualEquipmentIataCode": "738",
           "tailNumber": "N822NN"
          },
          "irregularOperations": []
         },
         {
          "flightId": 957807153,
          "carrierFsCode": "DL",
          "operatingCarrierFsCode": "DL",
          "primaryCarrierFsCode": "DL",
          "flightNumber": "902",
          "departureAirportFsCode": "SJO",
          "arrivalAirportFsCode": "ATL",
          "departureDate": {
           "dateUtc": "2018-05-02T13:00:00.000Z",
           "dateLocal": "2018-05-02T07:00:00.000"
          },
          "arrivalDate": {
           "dateUtc": "2018-05-02T17:04:00.000Z",
           "dateLocal": "2018-05-02T13:04:00.000"
          },
          "status": "L",
          "schedule": {
           "flightType": "J",
           "serviceClasses": "JY",
           "restrictions": "",
           "uplines": [],
           "downlines": [
            {
             "fsCode": "DTW",
             "flightId": 957807173
            }
           ]
          },
          "operationalTimes": {
           "publishedDeparture": {
            "dateUtc": "2018-05-02T13:00:00.000Z",
            "dateLocal": "2018-05-02T07:00:00.000"
           },
           "scheduledGateDeparture": {
            "dateUtc": "2018-05-02T13:00:00.000Z",
            "dateLocal": "2018-05-02T07:00:00.000"
           },
           "estimatedGateDeparture": {
            "dateUtc": "2018-05-02T12:54:00.000Z",
            "dateLocal": "2018-05-02T06:54:00.000"
           },
           "actualGateDeparture": {
            "dateUtc": "2018-05-02T12:54:00.000Z",
            "dateLocal": "2018-05-02T06:54:00.000"
           },
           "flightPlanPlannedDeparture": {
            "dateUtc": "2018-05-02T13:09:00.000Z",
            "dateLocal": "2018-05-02T07:09:00.000"
           },
           "scheduledRunwayDeparture": {
            "dateUtc": "2018-05-02T13:09:00.000Z",
            "dateLocal": "2018-05-02T07:09:00.000"
           },
           "estimatedRunwayDeparture": {
            "dateUtc": "2018-05-02T13:03:00.000Z",
            "dateLocal": "2018-05-02T07:03:00.000"
           },
           "actualRunwayDeparture": {
            "dateUtc": "2018-05-02T13:03:00.000Z",
            "dateLocal": "2018-05-02T07:03:00.000"
           },
           "publishedArrival": {
            "dateUtc": "2018-05-02T17:04:00.000Z",
            "dateLocal": "2018-05-02T13:04:00.000"
           },
           "flightPlanPlannedArrival": {
            "dateUtc": "2018-05-02T16:49:00.000Z",
            "dateLocal": "2018-05-02T12:49:00.000"
           },
           "scheduledGateArrival": {
            "dateUtc": "2018-05-02T17:04:00.000Z",
            "dateLocal": "2018-05-02T13:04:00.000"
           },
           "estimatedGateArrival": {
            "dateUtc": "2018-05-02T17:01:00.000Z",
            "dateLocal": "2018-05-02T13:01:00.000"
           },
           "actualGateArrival": {
            "dateUtc": "2018-05-02T17:01:00.000Z",
            "dateLocal": "2018-05-02T13:01:00.000"
           },
           "scheduledRunwayArrival": {
            "dateUtc": "2018-05-02T16:49:00.000Z",
            "dateLocal": "2018-05-02T12:49:00.000"
           },
           "estimatedRunwayArrival": {
            "dateUtc": "2018-05-02T16:36:00.000Z",
            "dateLocal": "2018-05-02T12:36:00.000"
           },
           "actualRunwayArrival": {
            "dateUtc": "2018-05-02T16:36:00.000Z",
            "dateLocal": "2018-05-02T12:36:00.000"
           }
          },
          "codeshares": [
           {
            "fsCode": "AF",
            "flightNumber": "5799",
            "relationship": "L"
           },
           {
            "fsCode": "KL",
            "flightNumber": "8055",
            "relationship": "L"
           }
          ],
          "delays": {},
          "flightDurations": {
           "scheduledBlockMinutes": 244,
           "blockMinutes": 247,
           "scheduledAirMinutes": 220,
           "airMinutes": 213,
           "scheduledTaxiOutMinutes": 9,
           "taxiOutMinutes": 9,
           "scheduledTaxiInMinutes": 15,
           "taxiInMinutes": 25
          },
          "airportResources": {
           "departureTerminal": "M",
           "departureGate": "08",
           "arrivalTerminal": "I",
           "arrivalGate": "E12",
           "baggage": "99"
          },
          "flightEquipment": {
           "scheduledEquipmentIataCode": "757",
           "actualEquipmentIataCode": "75D",
           "tailNumber": "N695DL"
          },
          "irregularOperations": []
         },
         {
          "flightId": 957802242,
          "carrierFsCode": "DL",
          "operatingCarrierFsCode": "DL",
          "primaryCarrierFsCode": "DL",
          "flightNumber": "1396",
          "departureAirportFsCode": "SJO",
          "arrivalAirportFsCode": "LAX",
          "departureDate": {
           "dateUtc": "2018-05-02T14:00:00.000Z",
           "dateLocal": "2018-05-02T08:00:00.000"
          },
          "arrivalDate": {
           "dateUtc": "2018-05-02T20:20:00.000Z",
           "dateLocal": "2018-05-02T13:20:00.000"
          },
          "status": "L",
          "schedule": {
           "flightType": "J",
           "serviceClasses": "JY",
           "restrictions": "",
           "uplines": [],
           "downlines": []
          },
          "operationalTimes": {
           "publishedDeparture": {
            "dateUtc": "2018-05-02T14:00:00.000Z",
            "dateLocal": "2018-05-02T08:00:00.000"
           },
           "scheduledGateDeparture": {
            "dateUtc": "2018-05-02T14:00:00.000Z",
            "dateLocal": "2018-05-02T08:00:00.000"
           },
           "estimatedGateDeparture": {
            "dateUtc": "2018-05-02T13:54:00.000Z",
            "dateLocal": "2018-05-02T07:54:00.000"
           },
           "actualGateDeparture": {
            "dateUtc": "2018-05-02T13:54:00.000Z",
            "dateLocal": "2018-05-02T07:54:00.000"
           },
           "flightPlanPlannedDeparture": {
            "dateUtc": "2018-05-02T14:10:00.000Z",
            "dateLocal": "2018-05-02T08:10:00.000"
           },
           "scheduledRunwayDeparture": {
            "dateUtc": "2018-05-02T14:10:00.000Z",
            "dateLocal": "2018-05-02T08:10:00.000"
           },
           "estimatedRunwayDeparture": {
            "dateUtc": "2018-05-02T14:12:00.000Z",
            "dateLocal": "2018-05-02T08:12:00.000"
           },
           "actualRunwayDeparture": {
            "dateUtc": "2018-05-02T14:12:00.000Z",
            "dateLocal": "2018-05-02T08:12:00.000"
           },
           "publishedArrival": {
            "dateUtc": "2018-05-02T20:20:00.000Z",
            "dateLocal": "2018-05-02T13:20:00.000"
           },
           "flightPlanPlannedArrival": {
            "dateUtc": "2018-05-02T19:44:00.000Z",
            "dateLocal": "2018-05-02T12:44:00.000"
           },
           "scheduledGateArrival": {
            "dateUtc": "2018-05-02T20:20:00.000Z",
            "dateLocal": "2018-05-02T13:20:00.000"
           },
           "estimatedGateArrival": {
            "dateUtc": "2018-05-02T20:00:00.000Z",
            "dateLocal": "2018-05-02T13:00:00.000"
           },
           "actualGateArrival": {
            "dateUtc": "2018-05-02T20:00:00.000Z",
            "dateLocal": "2018-05-02T13:00:00.000"
           },
           "scheduledRunwayArrival": {
            "dateUtc": "2018-05-02T19:44:00.000Z",
            "dateLocal": "2018-05-02T12:44:00.000"
           },
           "estimatedRunwayArrival": {
            "dateUtc": "2018-05-02T19:48:00.000Z",
            "dateLocal": "2018-05-02T12:48:00.000"
           },
           "actualRunwayArrival": {
            "dateUtc": "2018-05-02T19:48:00.000Z",
            "dateLocal": "2018-05-02T12:48:00.000"
           }
          },
          "codeshares": [],
          "delays": {
           "departureRunwayDelayMinutes": 2,
           "arrivalRunwayDelayMinutes": 4
          },
          "flightDurations": {
           "scheduledBlockMinutes": 380,
           "blockMinutes": 366,
           "scheduledAirMinutes": 334,
           "airMinutes": 336,
           "scheduledTaxiOutMinutes": 10,
           "taxiOutMinutes": 18,
           "scheduledTaxiInMinutes": 36,
           "taxiInMinutes": 12
          },
          "airportResources": {
           "departureTerminal": "M",
           "departureGate": "02",
           "arrivalTerminal": "2",
           "arrivalGate": "22"
          },
          "flightEquipment": {
           "scheduledEquipmentIataCode": "757",
           "actualEquipmentIataCode": "75D",
           "tailNumber": "N689DL"
          },
          "irregularOperations": []
         },
         {
          "flightId": 957798267,
          "carrierFsCode": "CM",
          "operatingCarrierFsCode": "CM",
          "primaryCarrierFsCode": "CM",
          "flightNumber": "392",
          "departureAirportFsCode": "SJO",
          "arrivalAirportFsCode": "PTY",
          "departureDate": {
           "dateUtc": "2018-05-02T14:20:00.000Z",
           "dateLocal": "2018-05-02T08:20:00.000"
          },
          "arrivalDate": {
           "dateUtc": "2018-05-02T15:45:00.000Z",
           "dateLocal": "2018-05-02T10:45:00.000"
          },
          "status": "L",
          "schedule": {
           "flightType": "J",
           "serviceClasses": "FJY",
           "restrictions": "",
           "uplines": [
            {
             "fsCode": "GUA",
             "flightId": 957798244
            }
           ],
           "downlines": []
          },
          "operationalTimes": {
           "publishedDeparture": {
            "dateUtc": "2018-05-02T14:20:00.000Z",
            "dateLocal": "2018-05-02T08:20:00.000"
           },
           "scheduledGateDeparture": {
            "dateUtc": "2018-05-02T14:20:00.000Z",
            "dateLocal": "2018-05-02T08:20:00.000"
           },
           "estimatedGateDeparture": {
            "dateUtc": "2018-05-02T14:22:00.000Z",
            "dateLocal": "2018-05-02T08:22:00.000"
           },
           "actualGateDeparture": {
            "dateUtc": "2018-05-02T14:22:00.000Z",
            "dateLocal": "2018-05-02T08:22:00.000"
           },
           "flightPlanPlannedDeparture": {
            "dateUtc": "2018-05-02T14:30:00.000Z",
            "dateLocal": "2018-05-02T08:30:00.000"
           },
           "scheduledRunwayDeparture": {
            "dateUtc": "2018-05-02T14:30:00.000Z",
            "dateLocal": "2018-05-02T08:30:00.000"
           },
           "estimatedRunwayDeparture": {
            "dateUtc": "2018-05-02T14:34:00.000Z",
            "dateLocal": "2018-05-02T08:34:00.000"
           },
           "actualRunwayDeparture": {
            "dateUtc": "2018-05-02T14:34:00.000Z",
            "dateLocal": "2018-05-02T08:34:00.000"
           },
           "publishedArrival": {
            "dateUtc": "2018-05-02T15:45:00.000Z",
            "dateLocal": "2018-05-02T10:45:00.000"
           },
           "flightPlanPlannedArrival": {
            "dateUtc": "2018-05-02T15:21:00.000Z",
            "dateLocal": "2018-05-02T10:21:00.000"
           },
           "scheduledGateArrival": {
            "dateUtc": "2018-05-02T15:45:00.000Z",
            "dateLocal": "2018-05-02T10:45:00.000"
           },
           "estimatedGateArrival": {
            "dateUtc": "2018-05-02T15:30:00.000Z",
            "dateLocal": "2018-05-02T10:30:00.000"
           },
           "actualGateArrival": {
            "dateUtc": "2018-05-02T15:30:00.000Z",
            "dateLocal": "2018-05-02T10:30:00.000"
           },
           "scheduledRunwayArrival": {
            "dateUtc": "2018-05-02T15:21:00.000Z",
            "dateLocal": "2018-05-02T10:21:00.000"
           },
           "estimatedRunwayArrival": {
            "dateUtc": "2018-05-02T15:26:00.000Z",
            "dateLocal": "2018-05-02T10:26:00.000"
           },
           "actualRunwayArrival": {
            "dateUtc": "2018-05-02T15:26:00.000Z",
            "dateLocal": "2018-05-02T10:26:00.000"
           }
          },
          "codeshares": [
           {
            "fsCode": "IB",
            "flightNumber": "4940",
            "relationship": "L"
           },
           {
            "fsCode": "TK",
            "flightNumber": "9603",
            "relationship": "L"
           }
          ],
          "delays": {
           "departureGateDelayMinutes": 2,
           "departureRunwayDelayMinutes": 4,
           "arrivalRunwayDelayMinutes": 5
          },
          "flightDurations": {
           "scheduledBlockMinutes": 85,
           "blockMinutes": 68,
           "scheduledAirMinutes": 51,
           "airMinutes": 52,
           "scheduledTaxiOutMinutes": 10,
           "taxiOutMinutes": 12,
           "scheduledTaxiInMinutes": 24,
           "taxiInMinutes": 4
          },
          "airportResources": {
           "departureTerminal": "M",
           "departureGate": "5",
           "arrivalGate": "27"
          },
          "flightEquipment": {
           "scheduledEquipmentIataCode": "73G",
           "actualEquipmentIataCode": "73G"
          },
          "irregularOperations": []
         },
         {
          "flightId": 957798362,
          "carrierFsCode": "P5",
          "operatingCarrierFsCode": "P5",
          "primaryCarrierFsCode": "CM",
          "flightNumber": "787",
          "departureAirportFsCode": "SJO",
          "arrivalAirportFsCode": "GUA",
          "departureDate": {
           "dateUtc": "2018-05-02T14:53:00.000Z",
           "dateLocal": "2018-05-02T08:53:00.000"
          },
          "arrivalDate": {
           "dateUtc": "2018-05-02T16:43:00.000Z",
           "dateLocal": "2018-05-02T10:43:00.000"
          },
          "status": "L",
          "schedule": {
           "flightType": "J",
           "serviceClasses": "FJY",
           "restrictions": "",
           "uplines": [
            {
             "fsCode": "PTY",
             "flightId": 957798352
            }
           ],
           "downlines": []
          },
          "operationalTimes": {
           "publishedDeparture": {
            "dateUtc": "2018-05-02T14:53:00.000Z",
            "dateLocal": "2018-05-02T08:53:00.000"
           },
           "scheduledGateDeparture": {
            "dateUtc": "2018-05-02T14:53:00.000Z",
            "dateLocal": "2018-05-02T08:53:00.000"
           },
           "estimatedGateDeparture": {
            "dateUtc": "2018-05-02T14:51:00.000Z",
            "dateLocal": "2018-05-02T08:51:00.000"
           },
           "actualGateDeparture": {
            "dateUtc": "2018-05-02T14:51:00.000Z",
            "dateLocal": "2018-05-02T08:51:00.000"
           },
           "flightPlanPlannedDeparture": {
            "dateUtc": "2018-05-02T15:03:00.000Z",
            "dateLocal": "2018-05-02T09:03:00.000"
           },
           "scheduledRunwayDeparture": {
            "dateUtc": "2018-05-02T15:03:00.000Z",
            "dateLocal": "2018-05-02T09:03:00.000"
           },
           "estimatedRunwayDeparture": {
            "dateUtc": "2018-05-02T15:04:00.000Z",
            "dateLocal": "2018-05-02T09:04:00.000"
           },
           "actualRunwayDeparture": {
            "dateUtc": "2018-05-02T15:04:00.000Z",
            "dateLocal": "2018-05-02T09:04:00.000"
           },
           "publishedArrival": {
            "dateUtc": "2018-05-02T16:43:00.000Z",
            "dateLocal": "2018-05-02T10:43:00.000"
           },
           "flightPlanPlannedArrival": {
            "dateUtc": "2018-05-02T16:18:00.000Z",
            "dateLocal": "2018-05-02T10:18:00.000"
           },
           "scheduledGateArrival": {
            "dateUtc": "2018-05-02T16:43:00.000Z",
            "dateLocal": "2018-05-02T10:43:00.000"
           },
           "estimatedGateArrival": {
            "dateUtc": "2018-05-02T16:22:00.000Z",
            "dateLocal": "2018-05-02T10:22:00.000"
           },
           "actualGateArrival": {
            "dateUtc": "2018-05-02T16:22:00.000Z",
            "dateLocal": "2018-05-02T10:22:00.000"
           },
           "scheduledRunwayArrival": {
            "dateUtc": "2018-05-02T16:18:00.000Z",
            "dateLocal": "2018-05-02T10:18:00.000"
           },
           "estimatedRunwayArrival": {
            "dateUtc": "2018-05-02T16:17:00.000Z",
            "dateLocal": "2018-05-02T10:17:00.000"
           },
           "actualRunwayArrival": {
            "dateUtc": "2018-05-02T16:17:00.000Z",
            "dateLocal": "2018-05-02T10:17:00.000"
           }
          },
          "codeshares": [
           {
            "fsCode": "KL",
            "flightNumber": "3040",
            "relationship": "L"
           },
           {
            "fsCode": "CM",
            "flightNumber": "787",
            "relationship": "S"
           }
          ],
          "delays": {
           "departureRunwayDelayMinutes": 1
          },
          "flightDurations": {
           "scheduledBlockMinutes": 110,
           "blockMinutes": 91,
           "scheduledAirMinutes": 75,
           "airMinutes": 73,
           "scheduledTaxiOutMinutes": 10,
           "taxiOutMinutes": 13,
           "scheduledTaxiInMinutes": 25,
           "taxiInMinutes": 5
          },
          "airportResources": {
           "departureTerminal": "M",
           "departureGate": "11"
          },
          "flightEquipment": {
           "scheduledEquipmentIataCode": "E90",
           "actualEquipmentIataCode": "E90"
          },
          "irregularOperations": []
         },
         {
          "flightId": 957798091,
          "carrierFsCode": "CM",
          "operatingCarrierFsCode": "CM",
          "primaryCarrierFsCode": "CM",
          "flightNumber": "144",
          "departureAirportFsCode": "SJO",
          "arrivalAirportFsCode": "TGU",
          "departureDate": {
           "dateUtc": "2018-05-02T15:40:00.000Z",
           "dateLocal": "2018-05-02T09:40:00.000"
          },
          "arrivalDate": {
           "dateUtc": "2018-05-02T17:01:00.000Z",
           "dateLocal": "2018-05-02T11:01:00.000"
          },
          "status": "L",
          "schedule": {
           "flightType": "J",
           "serviceClasses": "FJY",
           "restrictions": "",
           "uplines": [
            {
             "fsCode": "PTY",
             "flightId": 957798078
            }
           ],
           "downlines": []
          },
          "operationalTimes": {
           "publishedDeparture": {
            "dateUtc": "2018-05-02T15:40:00.000Z",
            "dateLocal": "2018-05-02T09:40:00.000"
           },
           "scheduledGateDeparture": {
            "dateUtc": "2018-05-02T15:40:00.000Z",
            "dateLocal": "2018-05-02T09:40:00.000"
           },
           "estimatedGateDeparture": {
            "dateUtc": "2018-05-02T14:58:00.000Z",
            "dateLocal": "2018-05-02T08:58:00.000"
           },
           "actualGateDeparture": {
            "dateUtc": "2018-05-02T14:58:00.000Z",
            "dateLocal": "2018-05-02T08:58:00.000"
           },
           "flightPlanPlannedDeparture": {
            "dateUtc": "2018-05-02T15:50:00.000Z",
            "dateLocal": "2018-05-02T09:50:00.000"
           },
           "scheduledRunwayDeparture": {
            "dateUtc": "2018-05-02T15:50:00.000Z",
            "dateLocal": "2018-05-02T09:50:00.000"
           },
           "estimatedRunwayDeparture": {
            "dateUtc": "2018-05-02T16:05:00.000Z",
            "dateLocal": "2018-05-02T10:05:00.000"
           },
           "actualRunwayDeparture": {
            "dateUtc": "2018-05-02T16:05:00.000Z",
            "dateLocal": "2018-05-02T10:05:00.000"
           },
           "publishedArrival": {
            "dateUtc": "2018-05-02T17:01:00.000Z",
            "dateLocal": "2018-05-02T11:01:00.000"
           },
           "flightPlanPlannedArrival": {
            "dateUtc": "2018-05-02T16:41:00.000Z",
            "dateLocal": "2018-05-02T10:41:00.000"
           },
           "scheduledGateArrival": {
            "dateUtc": "2018-05-02T17:01:00.000Z",
            "dateLocal": "2018-05-02T11:01:00.000"
           },
           "estimatedGateArrival": {
            "dateUtc": "2018-05-02T17:14:00.000Z",
            "dateLocal": "2018-05-02T11:14:00.000"
           },
           "actualGateArrival": {
            "dateUtc": "2018-05-02T17:14:00.000Z",
            "dateLocal": "2018-05-02T11:14:00.000"
           },
           "scheduledRunwayArrival": {
            "dateUtc": "2018-05-02T16:41:00.000Z",
            "dateLocal": "2018-05-02T10:41:00.000"
           },
           "estimatedRunwayArrival": {
            "dateUtc": "2018-05-02T17:08:00.000Z",
            "dateLocal": "2018-05-02T11:08:00.000"
           },
           "actualRunwayArrival": {
            "dateUtc": "2018-05-02T17:08:00.000Z",
            "dateLocal": "2018-05-02T11:08:00.000"
           }
          },
          "codeshares": [
           {
            "fsCode": "AF",
            "flightNumber": "4509",
            "relationship": "L"
           },
           {
            "fsCode": "KL",
            "flightNumber": "3009",
            "relationship": "L"
           }
          ],
          "delays": {
           "departureRunwayDelayMinutes": 15,
           "arrivalGateDelayMinutes": 13,
           "arrivalRunwayDelayMinutes": 27
          },
          "flightDurations": {
           "scheduledBlockMinutes": 81,
           "blockMinutes": 136,
           "scheduledAirMinutes": 51,
           "airMinutes": 63,
           "scheduledTaxiOutMinutes": 10,
           "taxiOutMinutes": 67,
           "scheduledTaxiInMinutes": 20,
           "taxiInMinutes": 6
          },
          "airportResources": {
           "departureTerminal": "M",
           "departureGate": "2"
          },
          "flightEquipment": {
           "scheduledEquipmentIataCode": "738",
           "actualEquipmentIataCode": "738",
           "tailNumber": "HP-1537CMP"
          },
          "irregularOperations": []
         },
         {
          "flightId": 957798448,
          "carrierFsCode": "CU",
          "operatingCarrierFsCode": "CU",
          "primaryCarrierFsCode": "CU",
          "flightNumber": "217",
          "departureAirportFsCode": "SJO",
          "arrivalAirportFsCode": "HAV",
          "departureDate": {
           "dateUtc": "2018-05-02T15:45:00.000Z",
           "dateLocal": "2018-05-02T09:45:00.000"
          },
          "arrivalDate": {
           "dateUtc": "2018-05-02T19:30:00.000Z",
           "dateLocal": "2018-05-02T15:30:00.000"
          },
          "status": "U",
          "schedule": {
           "flightType": "J",
           "serviceClasses": "RFY",
           "restrictions": "",
           "uplines": [],
           "downlines": []
          },
          "operationalTimes": {
           "publishedDeparture": {
            "dateUtc": "2018-05-02T15:45:00.000Z",
            "dateLocal": "2018-05-02T09:45:00.000"
           },
           "scheduledGateDeparture": {
            "dateUtc": "2018-05-02T15:45:00.000Z",
            "dateLocal": "2018-05-02T09:45:00.000"
           },
           "flightPlanPlannedDeparture": {
            "dateUtc": "2018-05-02T15:55:00.000Z",
            "dateLocal": "2018-05-02T09:55:00.000"
           },
           "scheduledRunwayDeparture": {
            "dateUtc": "2018-05-02T15:55:00.000Z",
            "dateLocal": "2018-05-02T09:55:00.000"
           },
           "estimatedRunwayDeparture": {
            "dateUtc": "2018-05-02T19:09:00.000Z",
            "dateLocal": "2018-05-02T13:09:00.000"
           },
           "actualRunwayDeparture": {
            "dateUtc": "2018-05-02T19:09:00.000Z",
            "dateLocal": "2018-05-02T13:09:00.000"
           },
           "publishedArrival": {
            "dateUtc": "2018-05-02T19:30:00.000Z",
            "dateLocal": "2018-05-02T15:30:00.000"
           },
           "flightPlanPlannedArrival": {
            "dateUtc": "2018-05-02T19:11:00.000Z",
            "dateLocal": "2018-05-02T15:11:00.000"
           },
           "scheduledGateArrival": {
            "dateUtc": "2018-05-02T19:30:00.000Z",
            "dateLocal": "2018-05-02T15:30:00.000"
           },
           "scheduledRunwayArrival": {
            "dateUtc": "2018-05-02T19:11:00.000Z",
            "dateLocal": "2018-05-02T15:11:00.000"
           }
          },
          "codeshares": [],
          "delays": {
           "departureRunwayDelayMinutes": 194
          },
          "flightDurations": {
           "scheduledBlockMinutes": 225,
           "scheduledAirMinutes": 196,
           "scheduledTaxiOutMinutes": 10,
           "scheduledTaxiInMinutes": 19
          },
          "airportResources": {
           "arrivalTerminal": "3"
          },
          "flightEquipment": {
           "scheduledEquipmentIataCode": "AT7",
           "actualEquipmentIataCode": "AT7",
           "tailNumber": "CU-T1716"
          },
          "irregularOperations": []
         }
        ],
        "appendix": {
         "airlines": [
          {
           "fs": "AA",
           "iata": "AA",
           "icao": "AAL",
           "name": "American Airlines",
           "phoneNumber": "08457-567-567",
           "active": true,
           "category": "I"
          },
          {
           "fs": "KL",
           "iata": "KL",
           "icao": "KLM",
           "name": "KLM",
           "phoneNumber": "1-800-447-4747",
           "active": true,
           "category": "I"
          },
          {
           "fs": "CU",
           "iata": "CU",
           "icao": "CUB",
           "name": "Cubana de Aviacion",
           "active": true,
           "category": "I"
          },
          {
           "fs": "P5",
           "iata": "P5",
           "icao": "RPB",
           "name": "Copa Airlines Colombia",
           "active": true,
           "category": "I"
          },
          {
           "fs": "AF",
           "iata": "AF",
           "icao": "AFR",
           "name": "Air France",
           "phoneNumber": "1-800-237-2747",
           "active": true,
           "category": "I"
          },
          {
           "fs": "TK",
           "iata": "TK",
           "icao": "THY",
           "name": "Turkish Airlines",
           "phoneNumber": "+90 212 444 0 849",
           "active": true,
           "category": "I"
          },
          {
           "fs": "DL",
           "iata": "DL",
           "icao": "DAL",
           "name": "Delta Air Lines",
           "phoneNumber": "1-800-221-1212",
           "active": true,
           "category": "I"
          },
          {
           "fs": "IB",
           "iata": "IB",
           "icao": "IBE",
           "name": "Iberia",
           "phoneNumber": "1800 772 4642",
           "active": true,
           "category": "I"
          },
          {
           "fs": "CM",
           "iata": "CM",
           "icao": "CMP",
           "name": "Copa Airlines",
           "active": true,
           "category": "I"
          },
          {
           "fs": "BA",
           "iata": "BA",
           "icao": "BAW",
           "name": "British Airways",
           "phoneNumber": "1-800-AIRWAYS",
           "active": true,
           "category": "I"
          }
         ],
         "airports": [
          {
           "fs": "LAX",
           "iata": "LAX",
           "icao": "KLAX",
           "faa": "LAX",
           "name": "Los Angeles International Airport",
           "street1": "One World Way",
           "street2": "",
           "city": "Los Angeles",
           "cityCode": "LAX",
           "stateCode": "CA",
           "postalCode": "90045-5803",
           "countryCode": "US",
           "countryName": "United States",
           "regionName": "North America",
           "timeZoneRegionName": "America/Los_Angeles",
           "weatherZone": "CAZ041",
           "localTime": "2018-12-02T10:49:50.723",
           "utcOffsetHours": -8,
           "latitude": 33.943399,
           "longitude": -118.408279,
           "elevationFeet": 126,
           "classification": 1,
           "active": true
          },
          {
           "fs": "GUA",
           "iata": "GUA",
           "icao": "MGGT",
           "name": "La Aurora International Airport",
           "city": "Guatemala City",
           "cityCode": "GUA",
           "countryCode": "GT",
           "countryName": "Guatemala",
           "regionName": "Central America",
           "timeZoneRegionName": "America/Guatemala",
           "localTime": "2018-12-02T12:49:50.722",
           "utcOffsetHours": -6,
           "latitude": 14.588071,
           "longitude": -90.530679,
           "elevationFeet": 4952,
           "classification": 3,
           "active": true
          },
          {
           "fs": "TGU",
           "iata": "TGU",
           "icao": "MHTG",
           "name": "Toncontin Airport",
           "city": "Tegucigalpa",
           "cityCode": "TGU",
           "countryCode": "HN",
           "countryName": "Honduras",
           "regionName": "Central America",
           "timeZoneRegionName": "America/Tegucigalpa",
           "localTime": "2018-12-02T12:49:50.722",
           "utcOffsetHours": -6,
           "latitude": 14.060123,
           "longitude": -87.219716,
           "elevationFeet": 3294,
           "classification": 4,
           "active": true
          },
          {
           "fs": "DFW",
           "iata": "DFW",
           "icao": "KDFW",
           "faa": "DFW",
           "name": "Dallas/Fort Worth International Airport",
           "street1": "International Pkwy",
           "city": "Dallas",
           "cityCode": "DFW",
           "stateCode": "TX",
           "postalCode": "75261",
           "countryCode": "US",
           "countryName": "United States",
           "regionName": "North America",
           "timeZoneRegionName": "America/Chicago",
           "weatherZone": "TXZ119",
           "localTime": "2018-12-02T12:49:50.722",
           "utcOffsetHours": -6,
           "latitude": 32.897462,
           "longitude": -97.036128,
           "elevationFeet": 603,
           "classification": 1,
           "active": true
          },
          {
           "fs": "MIA",
           "iata": "MIA",
           "icao": "KMIA",
           "faa": "MIA",
           "name": "Miami International Airport",
           "street1": "4200 N.W. 21 Street",
           "street2": "",
           "city": "Miami",
           "cityCode": "MIA",
           "stateCode": "FL",
           "postalCode": "33122",
           "countryCode": "US",
           "countryName": "United States",
           "regionName": "North America",
           "timeZoneRegionName": "America/New_York",
           "weatherZone": "FLZ074",
           "localTime": "2018-12-02T13:49:50.722",
           "utcOffsetHours": -5,
           "latitude": 25.796,
           "longitude": -80.278234,
           "elevationFeet": 8,
           "classification": 1,
           "active": true
          },
          {
           "fs": "PTY",
           "iata": "PTY",
           "icao": "MPTO",
           "name": "Tocumen International Airport",
           "city": "Panama City",
           "cityCode": "PTY",
           "countryCode": "PA",
           "countryName": "Panama",
           "regionName": "Central America",
           "timeZoneRegionName": "America/Panama",
           "localTime": "2018-12-02T13:49:50.722",
           "utcOffsetHours": -5,
           "latitude": 9.066897,
           "longitude": -79.387639,
           "elevationFeet": 42,
           "classification": 2,
           "active": true
          },
          {
           "fs": "DTW",
           "iata": "DTW",
           "icao": "KDTW",
           "faa": "DTW",
           "name": "Detroit Metropolitan Wayne County Airport",
           "street1": "1 Detroit Metro Airport",
           "street2": "Smith Building, Mezzanie Level",
           "city": "Detroit",
           "cityCode": "DTT",
           "stateCode": "MI",
           "postalCode": "48242",
           "countryCode": "US",
           "countryName": "United States",
           "regionName": "North America",
           "timeZoneRegionName": "America/New_York",
           "weatherZone": "MIZ076",
           "localTime": "2018-12-02T13:49:50.723",
           "utcOffsetHours": -5,
           "latitude": 42.207808,
           "longitude": -83.356048,
           "elevationFeet": 640,
           "classification": 1,
           "active": true
          },
          {
           "fs": "ATL",
           "iata": "ATL",
           "icao": "KATL",
           "faa": "ATL",
           "name": "Hartsfield-Jackson Atlanta International Airport",
           "street1": "6000 N Terminal Parkway",
           "street2": "",
           "city": "Atlanta",
           "cityCode": "ATL",
           "stateCode": "GA",
           "postalCode": "30320",
           "countryCode": "US",
           "countryName": "United States",
           "regionName": "North America",
           "timeZoneRegionName": "America/New_York",
           "weatherZone": "GAZ044",
           "localTime": "2018-12-02T13:49:50.723",
           "utcOffsetHours": -5,
           "latitude": 33.640067,
           "longitude": -84.44403,
           "elevationFeet": 1026,
           "classification": 1,
           "active": true
          },
          {
           "fs": "SJO",
           "iata": "SJO",
           "icao": "MROC",
           "name": "Juan Santamaria International Airport",
           "city": "San Jose",
           "cityCode": "SJO",
           "countryCode": "CR",
           "countryName": "Costa Rica",
           "regionName": "Central America",
           "timeZoneRegionName": "America/Costa_Rica",
           "localTime": "2018-12-02T12:49:50.722",
           "utcOffsetHours": -6,
           "latitude": 9.998238,
           "longitude": -84.20408,
           "elevationFeet": 3021,
           "classification": 3,
           "active": true
          },
          {
           "fs": "HAV",
           "iata": "HAV",
           "icao": "MUHA",
           "name": "Jose Marti International Airport",
           "city": "Havana",
           "cityCode": "HAV",
           "countryCode": "CU",
           "countryName": "Cuba",
           "regionName": "Caribbean",
           "timeZoneRegionName": "America/Havana",
           "localTime": "2018-12-02T13:49:50.722",
           "utcOffsetHours": -5,
           "latitude": 22.998449,
           "longitude": -82.408183,
           "elevationFeet": 210,
           "classification": 2,
           "active": true
          }
         ],
         "equipments": [
          {
           "iata": "AT7",
           "name": "ATR 72",
           "turboProp": true,
           "jet": false,
           "widebody": false,
           "regional": true
          },
          {
           "iata": "75D",
           "name": "Boeing 757-232",
           "turboProp": false,
           "jet": false,
           "widebody": false,
           "regional": false
          },
          {
           "iata": "757",
           "name": "Boeing 757 Passenger",
           "turboProp": false,
           "jet": true,
           "widebody": false,
           "regional": false
          },
          {
           "iata": "73G",
           "name": "Boeing 737-700 Passenger",
           "turboProp": false,
           "jet": true,
           "widebody": false,
           "regional": false
          },
          {
           "iata": "73H",
           "name": "Boeing 737-800 (winglets) Passenger/BBJ2",
           "turboProp": false,
           "jet": true,
           "widebody": false,
           "regional": false
          },
          {
           "iata": "738",
           "name": "Boeing 737-800 Passenger",
           "turboProp": false,
           "jet": true,
           "widebody": false,
           "regional": false
          },
          {
           "iata": "E90",
           "name": "Embraer 190",
           "turboProp": false,
           "jet": true,
           "widebody": false,
           "regional": true
          }
         ]
        }
       },
       
  };


