import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Meowth",
		fr: "Miaouss d'Alola"
	},

	illustrator: "Sekio",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		en: "It's accustomed to luxury because it\nused to live with Alolan royalty. As a\nresult, it's very picky about food.",
		fr: "Par le passé, il menait une vie de luxe auprès de la famille royale d'Alola, et il en a gardé des goûts alimentaires très sélectifs."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Meddle",
			fr: "Intrusion"
		},

		cost: ["Darkness"],

		effect: {
			en: "Discard a random Pokémon Tool card from your opponent's hand.",
			fr: "Défaussez au hasard une carte Outil Pokémon de la main de votre adversaire."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card