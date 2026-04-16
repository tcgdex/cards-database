import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "レアコイル",
		'zh-tw': "三合一磁怪",
		'zh-cn': "三合一磁怪"
	},

	illustrator: "Nisota Niso",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [82],
	hp: 100,
	types: ["Lightning"],

	description: {
		ja: "連結した タイプの コイルは 太陽の 黒点が 多いとき たくさん 現れると 言われる。",
		'zh-tw': "據說太陽黑子多的時候， 這類連結在一起的小磁怪 會大量出現。",
		'zh-cn': "據說太陽黑子多的時候， 這類連結在一起的小磁怪 會大量出現。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "かじょうほうでん",
			'zh-tw': "‌‌‌過度放電",
			'zh-cn': "‌‌‌過度放電"
		},

		effect: {
			ja: "自分の番に1回使えて、使ったなら、このポケモンをきぜつさせる。自分のトラッシュから基本エネルギーを3枚まで選び、自分のポケモンに好きなようにつける。",
			'zh-tw': "在自己的回合時可使用1次，若使用，則將這隻寶可夢【昏厥】。從自己的棄牌區選擇最多3張基本能量卡，以任意方式附於自己的【雷】寶可夢身上。",
			'zh-cn': "在自己的回合時可使用1次，若使用，則將這隻寶可夢【昏厥】。從自己的棄牌區選擇最多3張基本能量卡，以任意方式附於自己的【雷】寶可夢身上。"
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			ja: "ライトニングボール",
			'zh-tw': "雷電球",
			'zh-cn': "雷電球"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",

	thirdParty: {
		cardmarket: 793469
	}
}

export default card