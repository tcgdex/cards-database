import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Persian-GX",
		fr: "Persian-GX",
	},
	illustrator: "PLANETA Igarashi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		53,
	],
	hp: 200,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Meowth",
		fr: "Miaouss",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Cat Walk",
				fr: "Marche Féline",
			},
			effect: {
				en: "Once during your turn (before your attack), if 1 of your Pokémon-GX or Pokémon-EX was Knocked Out during your opponent's last turn, you may search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck. You can't use more than 1 Cat Walk Ability each turn.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si l’un de vos Pokémon-GX ou Pokémon-EX a été mis K.O. pendant le dernier tour de votre adversaire, vous pouvez chercher jusqu’à 2 cartes dans votre deck, puis les ajouter à votre main. Mélangez ensuite votre deck. Vous ne pouvez utiliser plus d’un talent Marche Féline par tour.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Vengeance",
				fr: "Rétorsion",
			},
			effect: {
				en: "This attack does 20 more damage for each Pokémon in your discard pile. You can't add more than 180 damage in this way.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Pokémon dans votre pile de défausse. Vous ne pouvez pas ajouter plus de 180 dégâts de cette façon.",
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash Back-GX",
				fr: "Retour de Frappe-GX",
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Échangez ce Pokémon avec l’un de vos Pokémon de Banc. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 150,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
