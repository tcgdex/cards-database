import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [997],
	set: Set,

	name: {
		'fr-fr': "Cryodo",
		'en-us': "Arctibax",
		'es-es': "Arctibax",
		'it-it': "Arctibax",
		'pt-br': "Arctibax",
		'de-de': "Cryospino"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	evolveFrom: {
		'fr-fr': "Frigodo",
		'en-us': "Frigibax",
		'es-es': "Frigibax",
		'it-it': "Frigibax",
		'pt-br': "Frigibax",
		'de-de': "Frospino"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'fr-fr': "Aileron Aiguisé",
			'en-us': "Sharp Fin",
			'es-es': "Cortaleta",
			'it-it': "Pinnaffilata",
			'pt-br': "Barbatana Afiada",
			'de-de': "Schneidige Flosse"
		},

		damage: 40
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'fr-fr': "Impact Glacial",
			'en-us': "Frost Smash",
			'es-es': "Golpe Gélido",
			'it-it': "Gelocolpo",
			'pt-br': "Pancada Congelada",
			'de-de': "Frostschlag"
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715684,
				tcgplayer: 497612,
				cardtrader: 248862
			}
		},
	],

	illustrator: "Tomokazu Komiya",

	description: {
		'en-us': "Arctibax freezes the air around it, protecting its face with an ice mask and turning its dorsal fin into a blade of ice.",
	},
}

export default card
