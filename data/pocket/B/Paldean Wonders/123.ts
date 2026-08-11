import { Card } from "models/database/card";
import Set from "../Paldean Wonders";

const card: Card = {
    set: Set,

	name: {
		'en-us': "Tinkatink",
		'fr-fr': "Forgerette",
		'de-de': "Forgita",
		'it-it': "Tinkatink",
		'es-es': "Tinkatink",
		'pt-br': "Tinkatink",
		'es-mx': "Tinkatink"
	},

    illustrator: "kurumitsu",
    rarity: "One Shiny",
    category: "Pokemon",

    hp: 60,
    types: ["Metal"],
    dexId: [957],
    
    description: {
        en: "This Pokémon pounds iron scraps together to make a hammer. It will remake the hammer again and again until it's satisfied with the result.",
    },

    stage: "Basic",

    attacks: [
        {
		name: {
			'en-us': "Beat",
			'fr-fr': "Bataille",
			'de-de': "Verprügler",
			'it-it': "Battuta",
			'es-es': "Toque",
			'pt-br': "Pulso",
			'es-mx': "Golpeteo"
		},
        damage: "30",
        cost: ["Metal", "Colorless"],
        },
    ],

    weaknesses: [
        {
        type: "Fire",
        value: "+20",
        },
    ],

    retreat: 1,
}

export default card