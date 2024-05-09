import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ドータクン"
	},

	illustrator: "Katsunori Sato",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [437],
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "雨雲を 呼べる ポケモンとして 大昔から 祀られていた。 ときどき 地面に 埋められている。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "しんかジャマー"
		},

		damage: 30,

		effect: {
			ja: "次の相手の番、相手は手札からポケモンを出して進化させられない。"
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "ちょうねんりき"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 3
}

export default card