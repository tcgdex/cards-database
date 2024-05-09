import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ズバット"
	},

	illustrator: "Scav",
	rarity: "Common",
	category: "Pokemon",
	dexId: [41],
	hp: 40,
	types: ["Darkness"],

	description: {
		ja: "陽の 当たらない 洞窟に 棲む。 朝になると 仲間で 集まり 体を 温めあいながら 寝る。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "まるみえエコー"
		},

		effect: {
			ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。相手の手札を見る。"
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "かみつく"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1
}

export default card