import { Card } from 'models/database/card'
import Set from '../POP Series 4'

const card: Card = {
	name: {
		'en-us': "Mew",
		'fr-fr': "Mew"
	},

	illustrator: "Nakaoka",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [151],

	hp: 70,

	types: [
		"Psychic"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Reactive Barrier",
				'fr-fr': "Barrière réactive"
			},
			effect: {
				'en-us': "As long as Mew has any React Energy cards attached to it, prevent all effects, excluding damage, done to Mew by attacks from your opponent's Pokémon.",
				'fr-fr': "Tant que Mew possède des cartes Énergie réaction, prévenez tous les effets, dégâts exclus, infligés à Mew par des attaques de Pokémon de votre adversaire."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Psyshock",
				'fr-fr': "Choc psy"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87401,
				cardmarket: 277469
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87401,
				cardmarket: 277469
			},
		},
	],

}

export default card
