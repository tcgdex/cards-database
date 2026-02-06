import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "スナバァ",
		'zh-tw': "沙丘娃",
		'zh-cn': "沙丘娃"
	},

	illustrator: "Koji Nakata",
	rarity: "Common",
	category: "Pokemon",
	dexId: [769],
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "獲物の 目を 砂で 潰し その隙に 近づこうとするが 動きが 遅いので 逃げられる。",
		'zh-tw': "會用沙子攻擊獵物的眼睛後 趁機接近，但卻總是因為 行動緩慢而讓獵物逃走。",
		'zh-cn': "會用沙子攻擊獵物的眼睛後 趁機接近，但卻總是因為 行動緩慢而讓獵物逃走。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "すなしぶき",
			'zh-tw': "沙沫",
			'zh-cn': "沙沫"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "H",

	thirdParty: {
		cardmarket: 793490
	}
}

export default card