import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "ジラーチV"
	},

	illustrator: "N-DESIGN Inc.",
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [385],
	hp: 180,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ねがいのかけはし"
		},

		effect: {
			ja: "自分のたねポケモンの「ポケモンV」が、相手のポケモンからワザのダメージを受けてきぜつするたび、1回使える。きぜつしたポケモンについている基本エネルギーを1枚選び、自分の別のポケモンにつけ替える。"
		}
	}],

	attacks: [{
		name: {
			ja: "ヒプノストライク"
		},

		effect: {
			ja: "おたがいのバトルポケモンを、それぞれねむりにする。"
		},

		damage: 60,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "F",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651313,
				tcgplayer: 569826,
				cardtrader: 234211,
			},
		},
	]
}

export default card
