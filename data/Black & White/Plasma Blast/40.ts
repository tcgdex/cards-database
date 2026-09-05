import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Musharna",
		fr: "Mushana",
		es: "Musharna",
		it: "Musharna",
		pt: "Musharna",
		de: "Somnivora"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		518,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Munna",
		fr: "Munna",
		de: "Somniam"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Precognitive Dream",
				fr: "Rêve Prémonitoire",
				de: "Visionärer Traum"
			},
			effect: {
				en: "Draw 3 cards. This Pokémon is now Asleep.",
				fr: "Piochez 3 cartes. Ce Pokémon est maintenant Endormi.",
				de: "Ziehe 3 Karten. Dieses Pokémon schläft jetzt."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psybeam",
				fr: "Rafale Psy",
				de: "Psystrahl"
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
				fr: "Le Pokémon Défenseur est maintenant Confus.",
				de: "Das Verteidigende Pokémon ist jetzt verwirrt."
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

	retreat: 3,

	description: {
		en: "The dream mist coming from its forehead changes into many different colors depending on the dream that was eaten.",
		de: "Je nach Inhalt der Träume, die es frisst, nimmt der Dunst, der aus seiner Stirn austritt, unterschiedliche Farben an."
	},

	thirdParty: {
		cardmarket: 281061,
		tcgplayer: 87662
	}
}

export default card
