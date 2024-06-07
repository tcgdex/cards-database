import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "烏賊王"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'zh-tw': "據說那些能夠改變歷史的重大事件其實都和 烏賊王的催眠能力有關。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "連擊觸手"
		},

		effect: {
			'zh-tw': "從自己的手牌將任意數量的「連擊」卡給對手看過後，造成其張數×40點傷害。然後，將給對手看過的「連擊」卡放回牌庫並重洗。"
		},

		damage: "40×",
		cost: ["Psychic"]
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
	regulationMark: "E"
}

export default card