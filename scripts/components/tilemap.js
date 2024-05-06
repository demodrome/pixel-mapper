/**
 * Create a new Tilemap object
 * @class
 */
class Tilemap {
    /**
     * Create the tilemap
     * @param {Object} config The tilemap configuration object
     * @param {HTMLElement} config.mapContainer The container for the map to be rendered in
     * @param {Number} config.mapWidth The width of the map
     * @param {Number} config.mapHeight The height of the map
     * @param {Number} config.tileDimensions The dimensions of each individual tile in the map
     */
    constructor(config = { mapContainer: document.createElement('div'), mapWidth: 10, mapHeight: 10, tileDimensions: 32 }) {
        this.mapContainer = config.mapContainer;
        this.mapWidth = config.mapWidth;
        this.mapHeight = config.mapHeight;
        this.tileDimensions = config.tileDimensions;

        this._generate();
    }

    /**
     * Create and append a tilemap to the container element
     */
    _generate() {
        const tilemap = createElement('div', {
            classes: ['tilemap'],
            attributes: {
                style: `background-color: var(--color-ui-light)`
            }
        });

        const tiles = [];

        // Loop through rows
        for (let i = 0; i <= this.mapHeight; i++) {
            // Create a new map row
            const mapRow = createElement(
                'div',
                { 
                    classes: ['map-row'],
                    attributes: {
                        style: `display: flex`,
                    }
                }
            );

            tiles.push(mapRow);

            // Loop through map columns
            for (let j = 0; j < this.mapWidth; j++) {
                // Create a new tile
                const tile = createElement(
                    'div',
                    {
                        classes: ['tile'],
                        attributes: {
                            style: `width: ${this.tileDimensions}px; height: ${this.tileDimensions}px`
                        }
                    }
                );

                tiles[i].appendChild(tile);
            }
        }

        // Add tiles to tilemap
        for (let i = 0; i < tiles.length - 1; i++) {
            tilemap.appendChild(tiles[i]);
        }

        // Add the tilemap to the container
        this.mapContainer.appendChild(tilemap);
    }

    draw() {
        // Re-draw the map
    }
}