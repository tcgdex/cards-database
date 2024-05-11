import { Card } from "../../../interfaces"
import Set from "../S6H"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "詛咒娃娃"
	},

	illustrator: "Megumi Higuchi",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		'zh-tw': "誕生自遭到捨棄時的怨念。據說只要讓牠感覺自己受到重視，牠就會滿意地變回原本的玩偶。"
	},

	stage: "Stage1",

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card