import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [200],
	set: Set,

	name: {
		'en-us': "Misdreavus",
		'fr-fr': "Feuforêve",
		'es-es': "Misdreavus",
		'it-it': "Misdreavus",
		'pt-br': "Misdreavus",
		'de-de': "Traunfugil"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Mumble",
			'fr-fr': "Murmure",
			'es-es': "Farfullar",
			'it-it': "Borbottio",
			'pt-br': "Resmungo",
			'de-de': "Grummeln"
		},

		damage: 10
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
	regulationMark: "F",


	description: {
		'en-us': "It conceals itself in darkness, sending chills up travelers' spines with its childlike weeping. As it observes the frightened travelers with glee, the red orbs upon its chest let off an eerie light.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658625,
				tcgplayer: 272259
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658625,
				tcgplayer: 272259
			}
		},
	],
}

export default card
