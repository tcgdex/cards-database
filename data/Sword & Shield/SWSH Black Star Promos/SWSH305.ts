import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [658],
	set: Set,
	illustrator: "Taiga Kasai",

	name: {
		en: "Greninja",
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],
	stage: "Stage2",

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Coordinated Shuriken",
		},

		effect: {
			en: "This attack also does 10 damage to 3 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon",
		},

		damage: 120
	}],

	evolveFrom: {
		en: "Frogadier",
	},

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,

	description: {
		ja: "水を圧縮して手裏剣を作り出す。高速回転させて飛ばすと金属も真っ二つ。"
	},

	variants: [
		{
			type: "normal",
			stamp: ["illustration-contest-2022"],
			thirdParty: {
				tcgplayer: 485845
			},
		},
	],

	regulationMark: "F"
}

export default card
