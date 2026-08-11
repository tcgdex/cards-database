import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Electabuzz",
		'fr-fr': "Elektek",
		'de-de': "Elektek"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		125,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Stages of Evolution",
				'fr-fr': "Niveaux d'Évolution",
				'de-de': "Stages of Evolution"
			},
			effect: {
				'en-us': "As long as Electabuzz is an Evolved Pokémon, damage done by attacks from your opponent's Pokémon that has any Special Energy cards attached to it is reduced by 40 (after applying Weakness and Resistance).",
				'fr-fr': "Tant qu'Elektek est un Pokémon Évolué, les dégâts infligés par les attaques de Pokémon de votre adversaire possédant des cartes Énergie spéciales sont réduits de 40 (après application de la Faiblesse et de la Résistance).",
				'de-de': "As long as Electabuzz is an Evolved Pokémon, any damage done to Electabuzz by attacks from your opponent's Pokémon that has any Special Energy cards attached to it is reduced by 40 (after applying Weakness and Resistance)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Double Shock",
				'fr-fr': "Double choc",
				'de-de': "Double Shock"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 10 damage times the number of heads. If either of the coins is heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces. Si une des pièces est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Flip 2 coins. This attack does 10 damage times the number of heads. If either one of the coins is heads, the Defending Pokémon is now Paralyzed."
			},
			damage: "10x",

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Luster Blast",
				'fr-fr': "Explosion étincelante",
				'de-de': "Luster Blast"
			},
			effect: {
				'en-us': "Discard 3 Energy attached to Electabuzz.",
				'fr-fr': "Défaussez 3 Énergies attachées à Elektek.",
				'de-de': "Discard 3 Energy attached to Electabuzz."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85113,
				cardmarket: 276668
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 85113,
				cardmarket: 276668
			},
		}
	],
}

export default card
