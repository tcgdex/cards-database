import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [878],
	set: Set,

	name: {
		fr: "Charibari",
		en: "Cufant",
		es: "Cufant",
		it: "Cufant",
		pt: "Cufant",
		de: "Kupfanti"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			fr: "Ruée",
			en: "Stampede",
			es: "Estampida",
			it: "Fuggi Fuggi",
			pt: "Estouro",
			de: "Zertrampeln"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715624,
				tcgplayer: 497566,
				cardtrader: 248801
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715624,
				tcgplayer: 497566,
				cardtrader: 248801
			}
		},
	],

	illustrator: "Oswaldo KATO",

	description: {
		en: "Using the pointy tip of its trunk, it carves off chunks of hard rocks to eat. It is very docile and helps people with physical labor.",
	},
}

export default card
