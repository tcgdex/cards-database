import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤバソチャ",
		'zh-tw': "來悲粗茶"
	},

	category: "Pokemon",
	rarity: "Rare",
	illustrator: "Kouki Saitou",
	dexId: [1013],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "民家の 床下や 棚の奥など 冷暗所を 好む。 日没後 獲物を 探して 徘徊する。",
		'zh-tw': "喜歡待在民宅的地板下或 架子深處等陰涼的地方。 日落後會四處徘徊尋找獵物。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "のろいのしずく",
			'zh-tw': "詛咒水滴"
		},

		effect: {
			ja: "ダメカン4個を、相手のポケモンに好きなようにのせる。",
			'zh-tw': "將4個傷害指示物以任意方式放置於對手的寶可夢身上。"
		}
	}, {
		cost: ["Grass"],

		name: {
			ja: "ぶちまけちゃ",
			'zh-tw': "傾瀉茶"
		},

		damage: "70×",

		effect: {
			ja: "自分の場のポケモンについているエネルギーを3枚までトラッシュし、その枚数×70ダメージ。",
			'zh-tw': "將最多3張自己的場上寶可夢身上附加的【草】能量卡丟棄，造成其張數×70點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card
