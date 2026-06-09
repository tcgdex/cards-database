import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "倫琴貓",
		ja: "レントラー"
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 150,
	types: ["Lightning"],

	description: {
		'zh-tw': "擁有透視能力的寶可夢。能夠在眨眼間就發現躲在 厚厚牆壁另一側的獵物。",
		ja: "透視能力を もつ ポケモン。 厚い 壁の 向こうに 隠れる 獲物を たちまち 見つけだす。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "能量粉碎",
			ja: "エナジークラッシュ"
		},

		effect: {
			'zh-tw': "造成對手的場上寶可夢身上附加的能量的數量×50點傷害。",
			ja: "相手の場のポケモンについているエネルギーの数×50ダメージ。"
		},

		damage: "50×",
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "閃光衝擊",
			ja: "フラッシュインパクト"
		},

		effect: {
			'zh-tw': "自己的1隻備戰寶可夢也受到30點傷害。[在備戰區不計算弱點・抵抗力。]",
			ja: "自分のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		},

		damage: 110,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [405],

	thirdParty: {
		cardmarket: 605890
	}
}

export default card