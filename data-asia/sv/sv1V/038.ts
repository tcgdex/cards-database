import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "スリープ",
		'zh-tw': "催眠貘"
	},

	illustrator: "OKACHEKE",
	rarity: "Common",
	category: "Pokemon",
	dexId: [96],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "突き出た 鼻を ひくひくさせると どこの だれが どんな 夢を 見ているのか 全部 わかるという。",
		'zh-tw': "據說當牠抽動凸出的鼻子，無論是誰在哪裡做著什麼夢， 都會被牠知道得一清二楚。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "むりやりねかす",
			'zh-tw': "強行入眠"
		},

		effect: {
			ja: "相手は相手自身のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンをねむりにする。",
			'zh-tw': "對手選擇對手自己的1隻備戰寶可夢，與戰鬥寶可夢互換。然後，將新上場的寶可夢【睡眠】。"
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "ひっぱたく",
			'zh-tw': "重摑"
		},

		damage: 30
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