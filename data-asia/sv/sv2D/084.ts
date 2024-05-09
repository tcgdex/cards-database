import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "フォレトスex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 270,
	types: ["Grass"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ばくれつエナジー"
		},

		effect: {
			ja: "自分の番に1回使えて、使ったなら、このポケモンをきぜつさせる。自分の山札から「基本エネルギー」を5枚まで選び、自分のポケモンに好きなようにつける。そして山札を切る。"
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			ja: "ガードプレス"
		},

		damage: 120,

		effect: {
			ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3
}

export default card