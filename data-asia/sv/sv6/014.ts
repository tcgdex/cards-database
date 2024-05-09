import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "ヤバソチャ"
	},

	category: "Pokemon",
	rarity: "Rare",
	illustrator: "Kouki Saitou",
	dexId: [1013],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "民家の 床下や 棚の奥など 冷暗所を 好む。 日没後 獲物を 探して 徘徊する。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "のろいのしずく"
		},

		effect: {
			ja: "ダメカン4個を、相手のポケモンに好きなようにのせる。"
		}
	}, {
		cost: ["Grass"],

		name: {
			ja: "ぶちまけちゃ"
		},

		damage: "70×",

		effect: {
			ja: "自分の場のポケモンについているエネルギーを3枚までトラッシュし、その枚数×70ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card
