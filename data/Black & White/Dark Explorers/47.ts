import { Card } from '../../../interfaces'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		en: "Eelektross",
		fr: "Ohmassacre",
		es: "Eelektross",
		it: "Eelektross",
		pt: "Eelektross",
		de: "Zapplarang"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		604,
	],

	hp: 140,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Eelektrik",
		fr: "Lampéroie",
		de: "Zapplalek"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Suction Heal",
				fr: "Succion Guérisseuse",
				de: "Saugheilung"
			},
			effect: {
				en: "Heal from this Pokémon the same amount of damage you did to the Defending Pokémon.",
				fr: "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Défenseur.",
				de: "Heile bei diesem Pokémon genauso viel Schaden, wie du dem Verteidigenden Pokémon zugefügt hast."
			},
			damage: 40,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slurp Shakedown",
				fr: "Aspiration Brutale",
				de: "Ansaugen und Zuschlagen"
			},
			effect: {
				en: "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon. This attack does 60 damage to the new Defending Pokémon.",
				fr: "Échangez le Pokémon Défenseur avec 1 des Pokémon de Banc de votre adversaire. Cette attaque inflige 60 dégâts au nouveau Pokémon Défenseur.",
				de: "Tausche das Verteidigende Pokémon gegen 1 Pokémon auf der Bank deines Gegners aus. Dieser Angriff fügt dem neuen Verteidigenden Pokémon 60 Schadenspunkte zu."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "With their sucker mouths, they suck in prey. Then they use their fangs to shock the prey with electricity.",
		de: "Mit dem Saugnapf an seinem Maul hakt es sich an seiner Beute fest und versetzt ihr über seine Fangzähne Stromschläge."
	},

	thirdParty: {
		cardmarket: 280375,
		tcgplayer: 85071
	}
}

export default card
