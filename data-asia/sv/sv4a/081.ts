import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "キルリア",
		'zh-tw': "奇魯莉安"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	dexId: [281],
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "サイコパワーを 操り まわりの 空間を ねじ曲げることで 未来を 見通すことができる。",
		'zh-tw': "能夠操縱精神力量來扭曲周圍的空間， 讓自己看見未來。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "マジカルショット",
			'zh-tw': "魔法射擊"
		},

		damage: 30
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			ja: "サイコキネシス",
			'zh-tw': "精神強念"
		},

		damage: "60+",

		effect: {
			ja: "相手のバトルポケモンについているエネルギーの数×20ダメージ追加。",
			'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×20點傷害。"
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
	regulationMark: "G"
}

export default card