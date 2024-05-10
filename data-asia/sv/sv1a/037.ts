import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ブーピッグ",
		'zh-tw': "噗噗豬"
	},

	illustrator: "Scav",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [326],
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "相手を 操るときの 不思議な ステップは 昔 外国で 大流行したことが ある。",
		'zh-tw': "操縱對手時跳的奇異舞步，過去曾在外國掀起過 一陣風潮。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "パワーステップ",
			'zh-tw': "力量舞步"
		},

		effect: {
			ja: "自分の山札から基本エネルギーを2枚まで選び、自分のポケモンに好きなようにつける。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇最多2張基本能量卡，以任意方式附於自己的寶可夢身上。並且重洗牌庫。"
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "しねんのずつき",
			'zh-tw': "意念頭錘"
		},

		damage: 100
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