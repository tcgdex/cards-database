import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Stantler",
		fr: "Cerfrousse",
		de: "Damhirplex"
	},

	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		234,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Terrorize",
				fr: "Terreur",
				de: "Terrorize"
			},
			effect: {
				en: "If the Defending Pokémon is a Basic, choose 1 of its attacks. That Pokémon can't use that attack during your opponent's next turn.",
				fr: "Si le Pokémon Défenseur est un Pokémon de base, choisissez 1 de ses attaques. Ce Pokémon ne peut pas utiliser cette attaque durant le prochain tour de votre adversaire.",
				de: "If the Defending Pokémon is a Basic Pokémon, choose 1 of its attacks. That Pokémon can't use that attack during your opponent's next turn."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Overhead Toss",
				fr: "Souléve'korne",
				de: "Overhead Toss"
			},
			effect: {
				en: "If you have any Benched Pokémon, flip a coin. If tails, this attack does 10 damage to 1 of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Si vous avez des Pokémon sur votre Banc, lancez une pièce. Si c'est pile, cette attaque inflige 10 dégâts à l'un d'entre eux. (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon sur le Banc.)",
				de: "If you have any Benched Pokémon, flip a coin. If tails, this attack does 10 damage to 1 of them. (Don't apply Weakness and Resistance for Benched Pokémon.)"
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

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	description: {
		fr: "Quiconque fixe ses bois perd peu à peu le contrôle de ses sens et finit par ne plus pouvoir tenir debout."
	},

	thirdParty: {
		cardmarket: 274624,
		tcgplayer: 89500
	}
}

export default card
