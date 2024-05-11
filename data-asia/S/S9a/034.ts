import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "艾路雷朵",
		ja: "エルレイド"
	},

	illustrator: "Atsushi Furusawa",
	category: "Pokemon",
	hp: 160,
	types: ["Psychic"],

	description: {
		'zh-tw': "被稱為武神的寶可夢。只有在為了保護什麼的時候， 才會去使用自己的肘刀。",
		ja: "武人と 呼ばれる ポケモン。 なにかを 守るためで なければ 肘の 刀は 使わない。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "拍檔捕捉",
			ja: "バディキャッチ"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。從自己的牌庫選擇1張支援者卡，在給對手看過後加入手牌。並且重洗牌庫。",
			ja: "自分の番に1回使える。自分の山札からサポートを1枚選び、相手に見せて、手札に加える。そして山札を切る。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "螺旋斬",
			ja: "らせんぎり"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，改附於備戰寶可夢身上。",
			ja: "このポケモンについているエネルギーを1個選び、ベンチポケモンにつけ替える。"
		},

		damage: 160,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [475]
}

export default card