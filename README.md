# sitereports-map

Airtable with map data is here: https://airtable.com/apptaxa8tngi8lTwS/tbl8eeBpmCxl5W0M8/viwtsXIPFsDYEfz2Y?blocks=hide

## data model

This might change!

### Sample entry:

```
  {
    "name": "Sampangan", 
    "type": "immovable architectural remains",
    "lat": -7.811111,
    "long": 110.419528,
    "elevation": 90,
    "locationNotes": "",
    "notes": "No visible remains. Reported by Bernet Kempers",
    "lastExcavationEnded": "",
    "approximateStartDate": "",
    "approximateEndDate": "",
    "citations": "",
    "status": "",
    "compilersNotes": "",
    "map": ["Southeast Asia Map"]
    "siteReportsSlug": ""
  },
```

### Typing:

```
  {
    "name": string, 
    "type": string (or enum?),
    "lat": number,
    "long": number,
    "elevation": number || "",
    "locationNotes": string,
    "notes": string,
    "lastExcavationEnded": date,
    "approximateStartDate": date,
    "approximateEndDate": date,
    "citations": string,
    "status": string, not currently used
    "compilersNotes": string,
    "map": [enum["Southeast Asia Map", "Singapore Map"]]
		"siteReportsSlug": string
  },
```

I'm using https://csvjson.com/csv2json to convert the JSON, using this as a first line:
```
name,type,lat,long,elevation,locationNotes,notes,lastExcavationEnded,approximateStartDate,approximateEndDate,citations,status,compilersNotes,map,siteReportsSlug
```
Note that `map` comes in as a string, not an array, and will need some attention. `elevation` sometimes comes in as "" not 0 – maybe this means undefined?

## map display

 - Zoom is set manually and may need to be adjusted.
 - Currently some entries don't have lat/long and are not displayed on the map.
 - If there's a string in `siteReportsSlug`, I'm showing it on the `/sitereports` page.
 - 