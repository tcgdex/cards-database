import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "チャデス",
		'zh-tw': "斯魔茶"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Souichirou Gunjima",
	dexId: [1012],
	hp: 40,
	types: ["Grass"],

	description: {
		ja: "ヤバチャの リージョンフォームに 見えるが まったく 関係のない ポケモンと 最近 判明した。",
		'zh-tw': "雖然這種寶可夢看起來像是 來悲茶的地區型態，但最近 被發現其實兩者毫無關係。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "おちゃだし",
			'zh-tw': "上茶"
		},

		effect: {
			ja: "自分のトラッシュから「基本エネルギー」を1枚選び、相手に見せて、手札に加える。",
			'zh-tw': "從自己的棄牌區選擇1張「基本【草】能量」卡，在給對手看過後加入手牌。"
		}
	}, {
		cost: ["Grass"],

		name: {
			ja: "ふいをつく",
			'zh-tw': "偷襲"
		},

		damage: 30,

		effect: {
			ja: "コインを1回投げウラなら、このワザは失敗。",
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。"
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