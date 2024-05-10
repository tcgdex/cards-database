import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ムックル",
		'zh-tw': "姆克兒"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	dexId: [396],
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "虫ポケモンを 狙って 野山を 大勢の 群れで 飛びまわる。 鳴き声が とても やかましい。",
		'zh-tw': "為了獵捕蟲寶可夢，以龐大的群體在山野間飛來飛去。 叫聲非常吵鬧。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "はばたく",
			'zh-tw': "羽擊"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
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