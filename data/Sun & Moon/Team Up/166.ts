import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Hoopa-GX",
		fr: "Hoopa-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		720,
	],
	hp: 190,
	types: [
		"Darkness",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Rogue Ring",
				fr: "Anneau de Truand",
			},
			effect: {
				en: "Search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
				fr: "Cherchez jusqu’à 2 cartes dans votre deck, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Dark Strike",
				fr: "Frappe Ténébreuse",
			},
			effect: {
				en: "This Pokémon can't use Dark Strike during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Frappe Ténébreuse pendant votre prochain tour.",
			},
			damage: 160,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Devilish Hands-GX",
				fr: "Mains Diaboliques-GX",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon-GX or Pokémon-{EX} 6 times. (You can choose the same Pokémon more than once.) For each time you chose a Pokémon, do 30 damage to it. This damage isn't affected by Weakness or Resistance. (You can't use more than 1 GX attack in a game.)",
				fr: "Choisissez 6 fois l’un des Pokémon-GX ou des Pokémon-{EX} de votre adversaire. (Vous pouvez choisir le même Pokémon plusieurs fois.) Chaque fois qu’un Pokémon est choisi, infligez 30 dégâts à celui-ci. Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
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
	retreat: 3,



}

export default card
