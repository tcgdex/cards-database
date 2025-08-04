import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Electabuzz",
		fr: "Élektek",
		de: "Elektek"
	},

	illustrator: "Hiroaki Ito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		125,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Draw",
				fr: "Absorption électrik",
				de: "Energieanziehung"
			},
			effect: {
				en: "Search your deck for a basic Energy card and attach it to Electabuzz. Shuffle your deck afterward.",
				fr: "Vous pouvez chercher une carte Énergie de base et l'attacher à Élektek. Mélangez ensuite votre deck.",
				de: "Du kannst dein Deck nach einer Basis-Energiekarte durchsuchen und an Elektek anlegen. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Reflect Energy",
				fr: "Renvoi d'énergie",
				de: "Energiereflektion"
			},
			effect: {
				en: "If you have any Benched Pokémon and if there are any basic Energy cards attached to Electabuzz, take 1 of those Energy cards and attach it to 1 of those Pokémon.",
				fr: "Si vous avez des Pokémon sur votre Banc et s'il y a des cartes Énergie de base attachées à Élektek, prenez une de ces cartes Énergie et attachez-la à l'un de ces Pokémon.",
				de: "Falls du mindestens ein Pokémon auf deiner Bank hast und mindestens eine Basis-Energiekarte an Elektek angelegt ist, nimm 1 dieser Energiekarten und lege sie an 1 dieser Pokémon an."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274951,
		tcgplayer: 85112
	}
}

export default card
