import { Card } from 'models/database/card'
import Set from '../POP Series 2'

const card: Card = {
	name: {
		'en-us': "Suicune",
		'fr-fr': "Suicune"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [245],

	hp: 70,

	types: [
		"Water"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Mirror Coat",
				'fr-fr': "Voile miroir"
			},
			effect: {
				'en-us': "If Suicune is Burned or Poisoned by an opponent's attack (even if Suicune is Knocked Out), the Attacking Pokémon is now affected by the same Special Conditions (1 if there is only 1).",
				'fr-fr': "Si Suicune est Brûlé ou Empoisonné par une attaque de votre adversaire (même si Suicune est mis K.O.), le Pokémon Attaquant est maintenant affecté par les mêmes États Spéciaux (ou 1 s'il n'y en a qu'1)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Bubblebeam",
				'fr-fr': "Bulles d'O"
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
			type: "Lightning"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89602,
				cardmarket: 277435
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 89602,
				cardmarket: 277435
			},
		},
	],

}

export default card
