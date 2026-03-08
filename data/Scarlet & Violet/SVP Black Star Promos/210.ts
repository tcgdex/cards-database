import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [641],
	set: Set,

	name: {
		en: "Tornadus",
		fr: "Boréas"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Basic",
	illustrator: "Kouki Saitou",

	attacks: [
		{
			cost: ["Colorless"],

			name: {
				en: "Wrapped in Wind",
				fr: "Enveloppement Éolien"
			},

			effect: {
				en: "Attach a Basic Energy card from your hand to this Pokémon.",
				fr: "Attachez une carte Énergie de base de votre main à ce Pokémon."
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],

			name: {
				en: "Hurricane",
				fr: "Vent Violent"
			},

			effect: {
				en: "Move a Basic Energy from this Pokémon to 1 of your Benched Pokémon.",
				fr: "Déplacez une Énergie de base de ce Pokémon vers l'un de vos Pokémon de Banc."
			},

			damage: 100
		}
	],

	retreat: 1,
	regulationMark: "I",

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		}
	],

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["pokemon-center"]
		}
	],

	thirdParty: {
		cardmarket: 836656,
		tcgplayer: 644835,
	}
}

export default card
