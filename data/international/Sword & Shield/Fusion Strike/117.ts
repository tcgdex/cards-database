import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [222],
	set: Set,

	name: {
		'en-us': "Galarian Corsola",
		'fr-fr': "Corayon de Galar",
		'es-es': "Corsola de Galar",
		'it-it': "Corsola di Galar",
		'pt-br': "Corsola de Galar",
		'de-de': "Galar-Corasonn"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",
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
	regulationMark: "E",
	illustrator: "Kouki Saitou",

	description: {
		'en-us': "Sudden climate change wiped out this ancient kind of Corsola. This Pokémon absorbs others' life-force through its branches."
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'de-de': "Tackle",
			'es-es': "Placaje",
			'pt-br': "Investida",
			'it-it': "Azione"
		},

		damage: 30
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582622,
				tcgplayer: 253283
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582622,
				tcgplayer: 253283
			}
		},
	],
}

export default card
