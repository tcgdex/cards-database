import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "サザンドラ",
		'zh-tw': "三首惡龍"
	},

	illustrator: "Teeziro",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [635],
	hp: 180,
	types: ["Darkness"],

	description: {
		ja: "本体の 頭のみが 脳を 持っている。 知性は 高いが 破壊のことしか 考えていない。",
		'zh-tw': "只有本體上的頭才有大腦。雖然智力很高， 但卻滿腦子只想著要破壞。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "トライハウル",
			'zh-tw': "三重嚎鳴"
		},

		effect: {
			ja: "自分の番に1回使える。自分の山札を上から3枚見て、その中からエネルギーを好きなだけ選び、自分のポケモンに好きなようにつける。残りのカードはトラッシュする。",
			'zh-tw': "在自己的回合時可使用1次。查看自己的牌庫上方3張卡，從其中選擇任意數量的能量卡，以任意方式附於自己的寶可夢身上。將剩餘卡丟棄。"
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			ja: "ダークカッター",
			'zh-tw': "暗黑利刃"
		},

		damage: 160
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card