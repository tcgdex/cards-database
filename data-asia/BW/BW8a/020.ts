import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ニドラン♀"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	dexId: [29],
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "戦いを 好まない 性格。 毒針から 分泌される 毒は 一滴でも 命取りだ。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "どくばり"
		},

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをどくにする。"
		},

		damage: 20,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 567863, tcgplayer: 602215, cardtrader: 142995 }, stamp: ["1st-edition"] }
	]
}

export default card
