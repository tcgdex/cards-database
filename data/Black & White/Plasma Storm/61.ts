import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Gallade",
		fr: "Gallame",
		es: "Gallade",
		it: "Gallade",
		pt: "Gallade",
		de: "Galagladi"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		475,
	],

	hp: 140,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Kirlia",
		fr: "Kirlia",
		de: "Kirlia"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Powerful Storm",
				fr: "Tempête Puissante",
				de: "Mächtiger Sturm"
			},
			effect: {
				en: "Does 20 damage times the amount of Energy attached to all of your Pokémon.",
				fr: "Inflige 20 dégâts multipliés par le nombre d'Énergies attachées à tous vos Pokémon.",
				de: "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der an all deinen Pokémon angelegten Energien zu."
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Swift Lunge",
				fr: "Estocade",
				de: "Flinker Ausfall"
			},
			effect: {
				en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
				de: "Dein Gegner tauscht das Verteidigende Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "When trying to protect someone, it extends its elbows as if they were swords and fights savagely.",
		de: "Will es beschützen, streckt es seine Ellbogen zu etwas Schwertähnlichem und kämpft auf wilde Art."
	},

	thirdParty: {
		cardmarket: 280801,
		tcgplayer: 85606
	}
}

export default card
