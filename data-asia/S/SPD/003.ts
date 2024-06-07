import { Card } from "../../../interfaces"
import Set from "../SPD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "寶石海星",
		ja: "スターミー"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'zh-tw': "釋放強烈的精神力量時，被稱為核心的器官就會 閃爍七彩光芒。",
		ja: "強烈な サイコパワーを 放つとき コアと 呼ばれる 器官が 七色に きらめく。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "精神強念",
			ja: "サイコキネシス"
		},

		effect: {
			'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×30點傷害。",
			ja: "相手のバトルポケモンについているエネルギーの数×30ダメージ追加。"
		},

		damage: "10＋",
		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "力量寶石",
			ja: "パワージェム"
		},

		damage: 60,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 0,
	regulationMark: "F",
	dexId: [121]
}

export default card