import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "コドラ",
		'zh-tw': "可多拉",
		th: "โคโดรา"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "takashi shiraishi",
	dexId: [305],
	hp: 110,
	types: ["Metal"],

	description: {
		ja: "コドラが 暮らす 山は 湧き水と 鉄鉱石が 豊富なので 人と 争いに なることも 多かった。",
		'zh-tw': "可多拉棲息的山區有 豐富的泉水和鐵礦石， 因此常會與人類起紛爭。",
		th: "ภูเขาที่โคโดราอาศัยอยู่อุดมไปด้วยน้ำแร่และแร่เหล็ก ดังนั้นจึงเคยเกิดการต่อสู้กับมนุษย์หลายครั้ง"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			ja: "こうてつタックル",
			'zh-tw': "鋼鐵衝撞",
			th: "กระแทกพลังเหล็ก"
		},

		damage: 40,

		effect: {
			ja: "このポケモンにも20ダメージ。",
			'zh-tw': "這隻寶可夢也受到20點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 20 ด้วย"
		}
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			ja: "メタルクロー",
			'zh-tw': "金屬爪",
			th: "เมทัลคลอว์"
		},

		damage: 60
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
	regulationMark: "H"
}

export default card