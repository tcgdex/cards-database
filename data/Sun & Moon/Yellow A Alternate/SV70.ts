import { Card } from '../../../interfaces'
import Set from '../Yellow A Alternate'

const card: Card = {
	name: {
		en: "Darkrai-GX",
		fr: "Darkrai-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		491,
	],
	hp: 180,
	types: [
		"Darkness",
	],


	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Restoration",
				fr: "Renouveau",
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is in your discard pile, you may put it onto your Bench. Then, attach a Darkness Energy card from your discard pile to this Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon se trouve dans votre pile de défausse, vous pouvez le placer sur votre Banc. Ensuite, attachez une carte Énergie Darkness de votre pile de défausse à ce Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Dark Cleave",
				fr: "Pénombre Pourfendue",
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			},
			damage: 130,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Dead End-GX",
				fr: "Sans Issue-GX",
			},
			effect: {
				en: "If your opponent's Active Pokémon is affected by a Special Condition, that Pokémon is Knocked Out. (You can't use more than 1 GX attack in a game.)",
				fr: "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, ce dernier est mis K.O. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
