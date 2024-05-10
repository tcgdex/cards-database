import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ネイティオ",
		'zh-tw': "天然鳥"
	},

	illustrator: "DOM",
	category: "Pokemon",
	dexId: [178],
	hp: 100,
	types: ["Psychic"],

	description: {
		ja: "過去と 未来を 見通せる。 毎日 太陽の 動きを 見続けている 不思議な ポケモン。",
		'zh-tw': "能夠看穿過去和未來。日復一日注視著太陽 動向的奇異寶可夢。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "アカシックセンス",
			'zh-tw': "虛寂意識"
		},

		effect: {
			ja: "自分の番に1回使える。自分の手札から「基本エネルギー」を1枚選び、ベンチポケモンにつける。その後、自分の山札を2枚引く。",
			'zh-tw': "在自己的回合時可使用1次。從自己的手牌選擇1張「基本【超】能量」卡，附於備戰寶可夢身上。然後，從自己的牌庫抽出2張卡。"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "ちょうねんりき",
			'zh-tw': "超念力"
		},

		damage: 80
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
	regulationMark: "G"
}

export default card