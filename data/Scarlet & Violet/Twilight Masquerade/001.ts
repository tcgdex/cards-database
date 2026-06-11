import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [114],
	set: Set,

	name: {
		en: "Tangela",
		fr: "Saquedeneu",
		es: "Tangela",
		it: "Tangela",
		pt: "Tangela",
		de: "Tangela"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Gentle Slap",
			fr: "Gifle Douce",
			es: "Bofetada Gentil",
			it: "Schiaffetto",
			pt: "Tapinha",
			de: "Sanfter Hieb"
		},

		damage: 10
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Vine Slap",
			fr: "Gifle de Liane",
			es: "Bofetón Látigo",
			it: "Lianasberla",
			pt: "Tapa de Vinhas",
			de: "Rankenklatscher"
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
		en: "Hidden beneath a tangle of vines that grows nonstop even if the vines are torn off, this Pokémon's true appearance remains a mystery.",
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