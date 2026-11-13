import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "テツノワダチex"
	},

	illustrator: "toriyufu",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [990],
	hp: 220,
	types: ["Metal"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			ja: "クラッドローリング"
		},

		effect: {
			ja: "のぞむなら、ダメージを与えたあとに、このポケモンについている「ブーストエナジー 未来」をトラッシュする。その場合、次の相手の番、このポケモンが受けるワザのダメージは「-150」される。"
		},

		damage: 150,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "G",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 746514,
				tcgplayer: 567533,
				cardtrader: 269711,
			},
		},
	]
}

export default card
