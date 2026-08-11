import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Misdreavus",
		'fr-fr': "Feuforêve",
		'es-es': "Misdreavus",
		'es-mx': "Misdreavus",
		'de-de': "Traunfugil",
		'it-it': "Misdreavus",
		'pt-br': "Misdreavus"
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [200],
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Petty Grudge",
			'fr-fr': "Rancune Mesquine",
			'es-es': "Rencor Ruin",
			'es-mx': "Rencor Ruin",
			'de-de': "Mini-Groll",
			'it-it': "Rancormeschino",
			'pt-br': "Rancinho"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "This Pokémon startles people in the middle of the night. It gathers fear as its energy.",
	},

	illustrator: "Mousho",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857610,
				tcgplayer: 662198,
				cardtrader: 356818
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857610,
				tcgplayer: 662198,
				cardtrader: 356818
			}
		},
	],
}

export default card
