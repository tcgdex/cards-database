import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Cinccino",
		fr: "Pashmilla",
		es: "Cinccino",
		it: "Cinccino",
		pt: "Cinccino",
		de: "Chillabell"
	},

	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		573,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Minccino",
		fr: "Chinchidou",
		de: "Picochilla"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Captivate",
				fr: "Séduction",
				de: "Liebreiz"
			},
			effect: {
				en: "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon.",
				fr: "Échangez le Pokémon Défenseur avec 1 des Pokémon de Banc de votre adversaire.",
				de: "Tausche das Verteidigende Pokémon gegen 1 Pokémon auf der Bank deines Gegners aus."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fluffy Tail",
				fr: "Queue Touffue",
				de: "Schlummerschweif"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "Their white fur feels amazing to touch. Their fur repels dust and prevents static electricity from building up.",
		de: "Sein weißer Flaum fühlt sich wunderbar flauschig an und zieht weder Staub noch statische Elektrizität an."
	},

	thirdParty: {
		cardmarket: 280050,
		tcgplayer: 84318
	}
}

export default card
