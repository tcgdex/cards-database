import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Sneasel",
		'fr-fr': "Farfuret",
		'de-de': "Sniebel",
		'it-it': "Sneasel",
		'es-es': "Sneasel",
		'pt-br': "Sneasel"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",
	dexId: [215],

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Dig Claws",
			'fr-fr': "Creusogriffes",
			'de-de': "Schaufelkrallen",
			'it-it': "Scavazanne",
			'es-es': "Hundir Garras",
			'pt-br': "Fincar Garras"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			'en-us': "Scratch",
			'fr-fr': "Griffe",
			'de-de': "Kratzer",
			'it-it': "Graffio",
			'es-es': "Arañazo",
			'pt-br': "Arranhão"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	weaknesses: [{
		type: "Grass",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 859024,
				tcgplayer: 664055
			}
		},
	],
}

export default card
