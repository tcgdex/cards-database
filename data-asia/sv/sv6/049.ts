import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "フーディン"
	},

	category: "Pokemon",
	rarity: "Rare",
	illustrator: "Masako Tomii",
	dexId: [65],
	hp: 140,
	types: ["Psychic"],

	description: {
		ja: "非常に 高い 知能を 持つ。 生まれてから 死ぬまでの できごとを すべて 覚えている という。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "ストレンジハック"
		},

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。相手の場のポケモンにのっているダメカンを好きなだけ選び、相手の場のポケモンに好きなようにのせ替える。"
		}
	}, {
		cost: ["Psychic"],

		name: {
			ja: "サイコキネシス"
		},

		damage: "10＋",

		effect: {
			ja: "相手のバトルポケモンについているエネルギーの数×50ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1
}

export default card
