import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "安瓢蟲",
		'zh-cn': "安瓢蟲",
		ja: "レディアン"
	},

	illustrator: "Masako Tomii",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'zh-tw': "夜空中星光閃爍時， 牠會一邊灑著閃亮的粉末， 一邊翩翩飛過。",
		'zh-cn': "夜空中星光閃爍時， 牠會一邊灑著閃亮的粉末， 一邊翩翩飛過。",
		ja: "夜空に 星が 瞬くとき 輝く 粉を 振りまきながら ひらひらと 飛んでいく。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "高速星星",
			'zh-cn': "高速星星",
			ja: 'スピードスター'
		},

		effect: {
			'zh-tw': "這個招式的傷害不計算弱點・抵抗力與對手的戰鬥寶可夢身上的附加效果。",
			'zh-cn': "這個招式的傷害不計算弱點・抵抗力與對手的戰鬥寶可夢身上的附加效果。",
			ja: 'このワザのダメージは、弱点・抵抗力と、相手のバトルポケモンにかかっている効果を計算しない。'
		},

		damage: 70,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [166],

	abilities: [{
		type: "Ability",

		name: {
			ja: "きらぼしもよう",
			'zh-tw': "‌[特性]繁星花紋",
			'zh-cn': "‌[特性]繁星花紋",
		},

		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手のベンチの残りHPが「90」以下のポケモンを1匹選び、バトルポケモンと入れ替える。",
			'zh-tw': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。選擇1隻對手備戰區剩餘HP為「90」以下的寶可夢，與戰鬥寶可夢互換。",
			'zh-cn': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。選擇1隻對手備戰區剩餘HP為「90」以下的寶可夢，與戰鬥寶可夢互換。",
		}
	}],

	thirdParty: {
		cardmarket: 778994
	}
}

export default card
