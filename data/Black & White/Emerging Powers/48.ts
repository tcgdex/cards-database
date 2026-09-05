import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Gothitelle",
		fr: "Sidérella",
		es: "Gothitelle",
		it: "Gothitelle",
		pt: "Gothitelle",
		de: "Morbitesse"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		576,
	],

	hp: 120,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Gothorita",
		fr: "Mesmérella",
		de: "Hypnomorba"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Smack",
				fr: "Claque",
				de: "Klatscher"
			},

			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mental Shock",
				fr: "Choc Émotionnel",
				de: "Schockstarre"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused. If tails, discard an Energy attached to the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus. Si c'est pile, défaussez une Énergie attachée au Pokémon Défenseur.",
				de: "Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt verwirrt. Lege bei „Zahl“ 1 an das Verteidigende Pokémon angelegte Energie auf den Ablagestapel deines Gegners."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "They can predict the future from the placement and movement of the stars. They can see Trainers' life spans.",
		de: "Kann anhand der Sternenkonstellationen die Zukunft voraussagen. Es weiß sogar, wie alt sein Trainer werden wird."
	},

	thirdParty: {
		cardmarket: 280012,
		tcgplayer: 85852
	}
}

export default card
