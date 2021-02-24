import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Lugia-GX",
		fr: "Lugia-GX",
	},
	illustrator: "PLANETA Igarashi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		249,
	],
	hp: 190,
	types: [
		"Colorless",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psychic",
				fr: "Psyko",
			},
			effect: {
				en: "This attack does 30 more damage times the amount of Energy attached to your opponent's Active Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire.",
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pelagic Blade",
				fr: "Lame Pélagique",
			},
			effect: {
				en: "This Pokémon can't use Pelagic Blade during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Lame Pélagique pendant votre prochain tour.",
			},
			damage: 170,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lost Purge-GX",
				fr: "Purge Perdue-GX",
			},
			effect: {
				en: "Put your opponent's Active Pokémon and all cards attached to it in the Lost Zone. (You can't use more than 1 GX attack in a game.)",
				fr: "Placez le Pokémon Actif de votre adversaire et toutes les cartes qui lui sont attachées dans la Zone Perdue. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

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
	retreat: 2,



}

export default card
