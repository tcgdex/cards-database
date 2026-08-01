import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Solrock",
		fr: "Solaroc",
		de: "Sonnfel"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		338,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Sunbeam",
				fr: "Rayon de soleil",
				de: "Sunbeam"
			},
			effect: {
				en: "The maximum HP for each Lunatone you have in play is now 80.",
				fr: "Le total de Points de vie maximum pour chaque Seleroc que vous avez en jeu est maintenant de 80.",
				de: "The maximum HP for each Lunastone you have in play is now 80."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scorching Light",
				fr: "Lumière aveuglante",
				de: "Scorching Light"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, the Defending Pokémon is now Burned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé. Si c'est pile, le Pokémon Défenseur est maintenant Brûlé.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, the Defending Pokémon is now Burned."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Reflected Beam",
				fr: "Reflet lumineux",
				de: "Reflected Beam"
			},
			effect: {
				en: "Choose 1 of your opponent's Benched Pokémon. This attack does 10 damage to that Pokémon for each Lunatone you have in play. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de Banc de votre adversaire. Cette attaque lui inflige 10 dégâts pour chaque Seleroc que vous avez en jeu. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
				de: "Choose 1 of your opponent's Benched Pokémon. This attack does 10 damage to that Pokémon for each Lunastone you have in play. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],


	retreat: 2,


	variants: [
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 89426,
				cardmarket: 276450
			},
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89426,
				cardmarket: 276450
			},
		},
		{
			type: "normal",
			stamp: ["miska-saari"],
			thirdParty: {
				tcgplayer: 477962,
				cardmarket: 869549
			},
		},
		{
			type: "normal",
			stamp: ["jeremy-scharff-kim"],
			thirdParty: {
				tcgplayer: 479732,
				cardmarket: 869383
			},
		},
	],

}

export default card
