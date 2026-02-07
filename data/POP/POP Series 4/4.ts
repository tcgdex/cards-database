import { Card } from '../../../interfaces'
import Set from '../POP Series 4'

const card: Card = {
	name: {
		en: "Mew",
		fr: "Mew"
	},

	illustrator: "Nakaoka",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		151,
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
				en: "Reactive Barrier",
				fr: "Barrière réactive"
			},
			effect: {
				en: "As long as Mew has any React Energy cards attached to it, prevent all effects, excluding damage, done to Mew by attacks from your opponent’s Pokémon.",
				fr: "Tant que Mew possède des cartes Énergie réaction, prévenez tous les effets, dégâts exclus, infligés à Mew par des attaques de Pokémon de votre adversaire."
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
				en: "Psyshock",
				fr: "Choc psy"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic"
		},
	],

	retreat: 1,

	variants: [
		{ type: 'normal', size: 'standard' },
		{ type: 'holo', size: 'standard' }
	],

	thirdParty: {
		cardmarket: 277469,
		tcgplayer: 87401
	}
}

export default card
