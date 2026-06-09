import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "龍捲雲",
		ja: "トルネロス"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		'zh-tw': "從龍捲雲尾部噴出的能量會引起暴風雨。 威力足以將整棟房屋吹走。",
		ja: "トルネロスの 尻尾から 噴き出した エネルギーが 大嵐を 起こす。 民家を 吹き飛ばす パワー。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "臨場旋風",
			ja: "でたとこサイクロン"
		},

		effect: {
			'zh-tw': "在自己的回合，當從手牌將這張卡放置於備戰區時，可使用1次。將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]",
			ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "爆破之風",
			ja: "ブラストウインド"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [641],

	thirdParty: {
		cardmarket: 605938
	}
}

export default card