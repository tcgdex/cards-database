import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [114],
	set: Set,

	name: {
		'en-us': "Tangela",
		'fr-fr': "Saquedeneu",
		'es-es': "Tangela",
		'it-it': "Tangela",
		'pt-br': "Tangela",
		'de-de': "Tangela"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Gentle Slap",
			'fr-fr': "Gifle Douce",
			'es-es': "Bofetada Gentil",
			'it-it': "Schiaffetto",
			'pt-br': "Tapinha",
			'de-de': "Sanfter Hieb"
		},

		damage: 10
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Vine Slap",
			'fr-fr': "Gifle de Liane",
			'es-es': "Bofetón Látigo",
			'it-it': "Lianasberla",
			'pt-br': "Tapa de Vinhas",
			'de-de': "Rankenklatscher"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "Hidden beneath a tangle of vines that grows nonstop even if the vines are torn off, this Pokémon's true appearance remains a mystery.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769175,
				tcgplayer: 550045
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769175,
				tcgplayer: 550045
			}
		},
	],

	illustrator: "Yoriyuki Ikegami",

}

export default card