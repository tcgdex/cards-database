import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Crobat",
		fr: "Nostenfer",
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
		en: "Golbat",
		fr: "Nosferalto",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Night Sight",
				fr: "Vision de Nuit",
			},
			effect: {
				en: "Once during your turn (before your attack), you may draw a card.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez piocher une carte.",
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
				en: "Ultra-Toxic Fang",
				fr: "Croc Ultratoxik",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. Put 4 damage counters instead of 1 on that Pokémon between turns.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné. Placez 4 marqueurs de dégâts au lieu d'un sur le Pokémon ciblé entre chaque tour.",
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
			type: "Fightning",
			value: "-20"
		},
	],




}

export default card
