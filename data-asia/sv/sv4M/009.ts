import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "チオンジェン",
		'zh-tw': "古簡蝸"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [1001],
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "草木の エネルギーを 吸い上げる。 周囲の 森は たちどころに 枯れ果て 田畑は 不作となる。",
		'zh-tw': "會吸取草木的能量，使周圍的森林霎時乾枯，田地的農作物歉收。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "リーフブリング",
			'zh-tw': "綠葉到來"
		},

		effect: {
			ja: "自分のトラッシュから「基本エネルギー」を2枚まで選び、自分のポケモン1匹につける。",
			'zh-tw': "從自己的棄牌區選擇最多2張「基本【草】能量」卡，附於自己的1隻寶可夢身上。"
		}
	}, {
		cost: ["Grass", "Grass", "Grass", "Colorless"],

		name: {
			ja: "どんよくバインド",
			'zh-tw': "貪欲制約"
		},

		damage: 140,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、ワザを使うためのエネルギーが、エネルギー2個ぶん多くなる。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢使用招式所需的能量增加2個【無】能量。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card