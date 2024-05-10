import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {
		ja: "ユンゲラー",
		'zh-tw': "勇基拉"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Uninori",
	dexId: [64],
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "サイコパワーで 宙に 浮いたまま 眠る。 弾力に 優れた しっぽを 枕がわりに するぞ。",
		'zh-tw': "會用精神力量浮在空中睡覺。 牠還會把彈力十足的尾巴 當成枕頭用喔。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "サイコキネシス",
			'zh-tw': "精神強念"
		},

		damage: "10+",

		effect: {
			ja: "相手のバトルポケモンについているエネルギーの数×30ダメージ追加。",
			'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×30點傷害。"
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
