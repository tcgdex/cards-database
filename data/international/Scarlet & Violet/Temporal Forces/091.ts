import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [749],
	set: Set,

	name: {
		'en-us': "Mudbray",
		'fr-fr': "Tiboudet",
		'es-es': "Mudbray",
		'it-it': "Mudbray",
		'pt-br': "Mudbray",
		'de-de': "Pampuli"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Smash Kick",
			'fr-fr': "Coud'Pattes",
			'es-es': "Patada Destrucción",
			'it-it': "Calcio Esplosivo",
			'pt-br': "Chute Poderoso",
			'de-de': "Schmetterkick"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Mud-Slap",
			'fr-fr': "Coud'Boue",
			'es-es': "Bofetón Lodo",
			'it-it': "Fangosberla",
			'pt-br': "Tapa de Lama",
			'de-de': "Lehmschelle"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "This Pokémon covers itself in mud that it has regurgitated. The mud won't dry out even if it's exposed to the sun for a long time.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760721,
				tcgplayer: 542835
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760721,
				tcgplayer: 542835
			}
		},
	],

	illustrator: "Narumi Sato",

}

export default card