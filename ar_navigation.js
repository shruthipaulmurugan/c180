let coordinate = {}

$(document).ready(function(){
    get_coordinates();
})

function get_coordinates(){
    let searchParams = new URLSearchParams(window.location.search)
    if(searchParams.has("source")&&searchParams.has("destination")){
        let source = searchParams.get("source")
        let destination = searchParams.get("destination")
        coordinate.source_lat = source.split(";")[0]
        coordinate.source_lon = source.split(";")[1]
        coordinate.destination_lat = destination.split(";")[0]
        coordinate.destination_lon = destination.split(";")[1]
    }
    else{
        alert("Coordinates are selected")
        window.history.back()
    }
}