import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "カラマネロ",
		'zh-tw': "烏賊王"
	},

	illustrator: "Nelnal",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [687],
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "歴史を 変えるほどの 大事件は カラマネロの 催眠能力が かかわっていたと いわれている。",
		'zh-tw': "據說那些能夠改變歷史的重大事件其實都和烏賊王的催眠能力有關。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "サイコビジョン",
			'zh-tw': "精神視角"
		},

		effect: {
			ja: "自分の番に1回使える。相手の山札を上から1枚見て、もとにもどす。その後、自分の山札を上から1枚見て、もとにもどす。",
			'zh-tw': "在自己的回合時可使用1次。查看對手的牌庫上方1張卡，回復原樣。然後，查看自己的牌庫上方1張卡，回復原樣。"
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			ja: "さいみんこうせん",
			'zh-tw': "催眠光線"
		},

		damage: 90,

		effect: {
			ja: "相手のバトルポケモンをねむりにする。",
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card