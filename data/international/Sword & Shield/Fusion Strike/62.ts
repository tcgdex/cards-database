import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [258],
	set: Set,

	name: {
		'en-us': "Mudkip",
		'fr-fr': "Gobou",
		'es-es': "Mudkip",
		'it-it': "Mudkip",
		'pt-br': "Mudkip",
		'de-de': "Hydropi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "KIYOTAKA OSHIYAMA",

	description: {
		'en-us': "To alert it, the fin on its head senses the flow of water. It has the strength to heft boulders."
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Mud-Slap",
			'fr-fr': "Coud'Boue",
			'de-de': "Lehmschelle",
			'es-es': "Bofetón Lodo",
			'pt-br': "Tapa de Lama",
			'it-it': "Fangosberla"
		},

		damage: 20
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Playful Kick",
			'fr-fr': "Coup de Pied de Garnement",
			'de-de': "Verspielter Kick",
			'es-es': "Patada Juguetona",
			'pt-br': "Chute Brincalhão",
			'it-it': "Calcio Briccone"
		},

		damage: 30
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582196,
				tcgplayer: 253199
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582196,
				tcgplayer: 253199
			}
		},
	],
}

export default card
