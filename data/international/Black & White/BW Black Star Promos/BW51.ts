import { Card } from 'models/database/card'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Crobat",
		'fr-fr': "Nostenfer",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		169,
	],
	hp: 130,
	types: [
		"Psychic",
	],
	evolveFrom: {
		'en-us': "Golbat",
		'fr-fr': "Nosferalto",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Night Sight",
				'fr-fr': "Vision de Nuit",
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may draw a card.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez piocher une carte.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ultra-Toxic Fang",
				'fr-fr': "Croc Ultratoxik",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned. Put 4 damage counters instead of 1 on that Pokémon between turns.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné. Placez 4 marqueurs de dégâts au lieu d'un sur le Pokémon ciblé entre chaque tour.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],





	description: {
		'en-us': "Having four wings allows it to fly more quickly and quietly so it can sneak up on prey without its noticing.",
	},
}

export default card
