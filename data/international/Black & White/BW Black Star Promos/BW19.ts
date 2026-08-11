import { Card } from 'models/database/card'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Zoroark",
		'fr-fr': "Zoroark",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		571,
	],
	hp: 100,
	types: [
		"Darkness",
	],
	evolveFrom: {
		'en-us': "Zorua",
		'fr-fr': "Zorua",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Punishment",
				'fr-fr': "Punition",
			},
			effect: {
				'en-us': "If the Defending Pokémon is a Stage 2 Pokémon, this attack does 20 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon de Niveau 2, cette attaque inflige 20 dégâts supplémentaires",
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Snarl",
				'fr-fr': "Aboiement",
			},
			effect: {
				'en-us': "During your opponent's next turn, damage from the Defending Pokémon attacks is reduced by 20.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, les dégâts infligés par les attaques du Pokémon Défenseur sont réduits de 20.",
			},
			damage: 60,

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
			value: "-20"
		},
	],
	retreat: 1,




	description: {
		'en-us': "Bonds between these Pokémon are very strong. It protects the safety of its pack by tricking its opponents.",
	},
}

export default card
