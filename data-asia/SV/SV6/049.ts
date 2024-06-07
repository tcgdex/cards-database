import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "フーディン",
		'zh-tw': "胡地"
	},

	category: "Pokemon",
	rarity: "Rare",
	illustrator: "Masako Tomii",
	dexId: [65],
	hp: 140,
	types: ["Psychic"],

	description: {
		ja: "非常に 高い 知能を 持つ。 生まれてから 死ぬまでの できごとを すべて 覚えている という。",
		'zh-tw': "擁有非常高的智商。 據說牠能記住從出生到死 一輩子發生過的所有事情。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "ストレンジハック",
			'zh-tw': "奇異駭入"
		},

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。相手の場のポケモンにのっているダメカンを好きなだけ選び、相手の場のポケモンに好きなようにのせ替える。",
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。選擇任意數量的對手的場上寶可夢身上放置的傷害指示物，以任意方式改放於對手的場上寶可夢身上。"
		}
	}, {
		cost: ["Psychic"],

		name: {
			ja: "サイコキネシス",
			'zh-tw': "精神強念"
		},

		damage: "10+",

		effect: {
			ja: "相手のバトルポケモンについているエネルギーの数×50ダメージ追加。",
			'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×50點傷害。"
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
	regulationMark: "H"
}

export default card