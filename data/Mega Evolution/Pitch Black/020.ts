import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	description: {
		en: "Also known as a songstress, it is a sight to behold on moonlit nights when it sings in front of the colony it leads."
	},

	name: {
		en: "Primarina",
		fr: "Oratoria",
		es: "Primarina",
		'es-mx': "Primarina",
		de: "Primarene"
	},

	illustrator: "Taira Akitsu",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [730],
	hp: 150,
	types: ["Water"],

	evolveFrom: {
		en: "Brionne"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Enriching Melody"
		},

		effect: {
			en: "Once during your turn (before your attack), when you play this card from your hand to evolve 1 of your Pokémon, you may use this Ability. Heal all damage from 1 of your Pokémon"
		}
	}],

	attacks: [{
		name: {
			en: "Aqua Return"
		},

		cost: ["Water"],

		damage: 120,

		effect: {
			en: "Shuffle this Pokémon and all cards attached to it into your deck"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895808,
				tcgplayer: 704777
			}
		},
	],
}

export default card
