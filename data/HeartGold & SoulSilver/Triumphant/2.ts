import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Altaria",
		fr: "Altaria",
		de: "Altaria"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		334,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Swablu",
		fr: "Tylton",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Midnight Eyes",
				fr: "Yeux de minuit",
				de: "Mitternachtsaugen"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Stadium Power",
				fr: "Stade puissant",
				de: "Stadionpower"
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does 40 damage plus 30 more damage.",
				fr: "Si une carte Stade est en jeu, cette attaque inflige 40 dégâts plus 30 dégâts supplémentaires.",
				de: "Wenn sich eine Stadion-Karte im Spiel befindet, fügt dieser Angriff 40 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		en: "It flies gracefully through the sky. Its melodic humming makes you feel like you’re in a dream."
	},

	variants: [
		{ type: 'reverse', size: 'standard' },
		{ type: 'holo', size: 'standard' }
	],

	thirdParty: {
		cardmarket: 279532,
		tcgplayer: 83518
	}
}

export default card
