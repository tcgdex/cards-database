import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "利歐路",
		ja: "リオル"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		'zh-tw': "精力充沛，可以奔跑一整夜。由於牠十分活潑， 帶牠散步的人非常辛苦。",
		ja: "一晩中 走っていられる スタミナを もつ。 活発で 散歩の 相手は たいへん。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "踢倒",
			ja: "けたぐり"
		},

		damage: 50,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [447],

	thirdParty: {
		cardmarket: 605905
	}
}

export default card