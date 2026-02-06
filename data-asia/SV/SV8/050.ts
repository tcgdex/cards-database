import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "アグノム",
		'zh-tw': "亞克諾姆",
		'zh-cn': "亞克諾姆"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	dexId: [482],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "意思の神と 呼ばれている。 湖の 底で 眠り続け 世界の バランスを とっている。",
		'zh-tw': "被稱為意志之神。 在湖底沉睡著， 維持世界的平衡。",
		'zh-cn': "被稱為意志之神。 在湖底沉睡著， 維持世界的平衡。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "マインドキネシス",
			'zh-tw': "意志強念",
			'zh-cn': "意志強念"
		},

		damage: "10+",

		effect: {
			ja: "相手のポケモン全員にのっているダメカンの数×10ダメージ追加。",
			'zh-tw': "增加對手的所有寶可夢身上放置的傷害指示物的數量×10點傷害。",
			'zh-cn': "增加對手的所有寶可夢身上放置的傷害指示物的數量×10點傷害。"
		}
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
	regulationMark: "H",

	thirdParty: {
		cardmarket: 793484
	}
}

export default card