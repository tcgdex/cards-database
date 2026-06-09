import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "彷徨夜靈",
		ja: "サマヨール"
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'zh-tw': "身體內部是空的。只要一張開嘴就會像 黑洞一樣吸入所有東西。",
		ja: "体の 中は 空っぽ。 口を 開けると ブラックホールの ように なんでも 吸いこんでしまう。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "漆黑",
			ja: "あんこく"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			ja: "相手のバトルポケモンをこんらんにする。"
		},

		damage: 30,
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

	retreat: 2,
	regulationMark: "F",
	rarity: "Common",
	dexId: [356],

	thirdParty: {
		cardmarket: 605897
	}
}

export default card