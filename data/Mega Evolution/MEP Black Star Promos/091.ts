import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Dragonite ex",
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	hp: 370,
	types: ["Dragon"],
	stage: "Stage2",
	dexId: [149],

	evolveFrom: {
		en: "Dragonair",
		fr: "Draco",
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Sky Transport",
			fr: "Transport Ciel",
		},

		effect: {
			en: "Once during your turn, you may use this Ability. Switch your Active Pokémon with 1 of your Benched Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez utiliser ce talent. Échangez votre Pokémon Actif contre l'un de vos Pokémon de Banc.",
		}
	}],

	attacks: [{
		cost: ["Water", "Lightning", "Lightning"],

		name: {
			en: "Ryuno Glide",
			fr: "Planement de Dragon",
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon.",
		},

		damage: 330
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 903681,
				tcgplayer: 710757
			}
		}
	],
}

export default card
