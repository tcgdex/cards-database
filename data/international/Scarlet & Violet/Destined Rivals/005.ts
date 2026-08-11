import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [285],
	set: Set,

	name: {
		'en-us': "Shroomish",
		'fr-fr': "Balignon",
		'de-de': "Knilz",
		'it-it': "Shroomish",
		'es-es': "Shroomish",
		'pt-br': "Shroomish",
		'es-mx': "Shroomish"
	},

	illustrator: "IKEDA Saki",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Rolling Tackle",
			'fr-fr': "Roulé-Boulé",
			'de-de': "Rolltackle",
			'it-it': "Rollazione",
			'es-es': "Placaje Giro",
			'pt-br': "Golpe de Colisão Rolante",
			'es-mx': "Tacleada Rodante"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825879,
				tcgplayer: 632833
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825879,
				tcgplayer: 632833
			}
		},
	],
}

export default card
