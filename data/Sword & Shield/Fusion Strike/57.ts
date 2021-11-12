import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Feraligatr",
		fr: "Aligatueur",
		es: "Feraligatr",
		it: "Feraligatr",
		pt: "Feraligatr",
		de: "Impergator"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],

	evolveFrom: {
		en: "Croconaw",
		fr: "Crocrodil",
		es: "Croconaw",
		it: "Croconaw",
		pt: "Croconaw",
		de: "Tyracroc"
	},

	stage: "Stage2",
	retreat: 3,
	regulationMark: "E",
	illustrator: "Anesaki Dynamic",

	description: {
		en: "When it bites with its massive and powerful jaws, it shakes its head and savagely tears its victim up."
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Rowdy"
		},

		effect: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you must flip a coin. If heads, discard the top 5 cards of your opponent's deck. If tails, discard the top 5 cards of your deck."
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Crunch"
		},

		damage: 140,

		effect: {
			en: "Discard an Energy from your opponent's Active Pokémon."
		}
	}],

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card