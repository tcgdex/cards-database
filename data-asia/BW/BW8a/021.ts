import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ニドリーナ"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	dexId: [30],
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		ja: "ニドラン♀"
	},

	description: {
		ja: "危険を 感じると 全身のトゲを 逆立てる。 ニドリーノに 比べて トゲの 育ちが 遅い。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "どくばり"
		},

		effect: {
			ja: "相手のバトルポケモンをどくにする。"
		},

		damage: 20,
		cost: ["Psychic", "Colorless"]
	}, {
		name: {
			ja: "にどげり"
		},

		effect: {
			ja: "コインを2回投げ、オモテの数×40ダメージ。"
		},

		damage: "40×",
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 567864, tcgplayer: 602216, cardtrader: 142996 }, stamp: ["1st-edition"] }
	]
}

export default card
