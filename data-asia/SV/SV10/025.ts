import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "櫻花魚",
		'zh-cn': "櫻花魚",
		ja: "サクラビス"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'zh-tw': "會吸取獵物的體液。 剩下的肉會沉入海底， 成為其他寶可夢的食物。",
		'zh-cn': "會吸取獵物的體液。 剩下的肉會沉入海底， 成為其他寶可夢的食物。",
		ja: "獲物の 体液を 吸う。 肉は 海底に 沈み 他の ポケモンの エサに なるのだ。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "漸強波",
			'zh-cn': "漸強波",
			ja: "クレシェンドウェーブ"
		},

		effect: {
			'zh-tw': "造成這隻寶可夢身上附加的【水】能量的數量×30點傷害。若希望，在造成傷害前，從自己的手牌選擇任意數量的「基本【水】能量」卡，附於這隻寶可夢身上。",
			'zh-cn': "造成這隻寶可夢身上附加的【水】能量的數量×30點傷害。若希望，在造成傷害前，從自己的手牌選擇任意數量的「基本【水】能量」卡，附於這隻寶可夢身上。",
			ja: "このポケモンについているエネルギーの数×30ダメージ。のぞむなら、ダメージを与える前に、自分の手札から「基本エネルギー」を好きなだけ選び、このポケモンにつける。"
		},

		damage: "30×",
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [368]
}

export default card