import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Gastly",
		fr: "Fantominus",
		de: "Nebulak"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		92,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	evolveFrom: {
		fr: "Fantominus",
	},

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Pitch-Dark",
				fr: "Noir complet",
				de: "Stockdunkel"
			},
			effect: {
				en: "You opponent can't play any Trainer cards from his or her hand during your opponent's next turn.",
				fr: "Votre adversaire ne peut pas jouer de cartes Dresseur de sa main lors de son prochain tour.",
				de: "In seinem nächsten Zug kann dein Gegner keine Trainerkarten von seiner Hand spielen."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Trick Gas",
				fr: "Gaz piégeant",
				de: "Gas-Trick"
			},
			effect: {
				en: "You may switch Gastly with 1 of your Benched Pokémon.",
				fr: "Vous pouvez échanger Fantominus avec 1 des Pokémon de votre Banc.",
				de: "Du kannst Nebulak gegen 1 Pokémon auf deiner Bank austauschen."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		fr: "Le corps de ce Pokémon est composé de gaz à 95%. Une bourrasque suffit à le disperser."
	},

	thirdParty: {
		cardmarket: 278360,
		tcgplayer: 85653
	}
}

export default card
