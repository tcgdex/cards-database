import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "タマタマ"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [102],
	hp: 30,
	types: ["Grass"],

	description: {
		ja: "テレパシーで 会話をしているため タマタマを 引き離そうとしても すぐに 集まって ６匹になる。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ぞうしょく"
		},

		effect: {
			ja: "この特性は、このカードがトラッシュにあるなら、自分の番に1回使える。このカードを、自分の手札にもどす。"
		}
	}],

	attacks: [{
		name: {
			ja: "タネばくだん"
		},

		damage: 20,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Water",
		value: "-20"
	}],

	retreat: 1,
	variants: [
		{ type: "normal", thirdParty: {
			cardmarket: 567836, tcgplayer: 602205, cardtrader: 142976 }, stamp: ["1st-edition"] }
	]
}

export default card
