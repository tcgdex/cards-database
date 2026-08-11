import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [997],
	set: Set,

	name: {
		'en-us': "Arctibax",
		'fr-fr': "Cryodo",
		'es-es': "Arctibax",
		'it-it': "Arctibax",
		'pt-br': "Arctibax",
		'de-de': "Cryospino"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Frigibax",
		'fr-fr': "Frigodo",
		'es-es': "Frigibax",
		'it-it': "Frigibax",
		'pt-br': "Frigibax",
		'de-de': "Frospino"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Sharp Fin",
			'fr-fr': "Aileron Aiguisé",
			'es-es': "Cortaleta",
			'it-it': "Pinnaffilata",
			'pt-br': "Barbatana Afiada",
			'de-de': "Schneidige Flosse"
		},

		damage: 40
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Frost Smash",
			'fr-fr': "Impact Glacial",
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
				cardmarket: 751668,
				tcgplayer: 534520,
				cardtrader: 274313
			}
		},
	],

	illustrator: "Kouki Saitou",

	description: {
		'en-us': "Arctibax freezes the air around it, protecting its face with an ice mask and turning its dorsal fin into a blade of ice.",
	},

}

export default card
