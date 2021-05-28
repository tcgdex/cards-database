import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Oricorio-GX",
		fr: "Plumeline-GX",
	},
	illustrator: "PLANETA Tsuji",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		741,
	],
	hp: 170,
	types: [
		"Psychic",
	],

	stage: "Basic",
	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dance of Tribute",
				fr: "Danse Respectueuse",
			},
			effect: {
				en: "Once during your turn (before your attack), if any of your Pokémon were Knocked Out during your opponent's last turn, you may draw 3 cards. You can't use more than 1 Dance of Tribute Ability each turn.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si l’un de vos Pokémon a été mis K.O. pendant le dernier tour de votre adversaire, vous pouvez piocher 3 cartes. Vous ne pouvez pas utiliser plus d’un talent Danse Respectueuse par tour.",
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
				en: "Razor Wing",
				fr: "Aile Tranchante",
			},

			damage: 80,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Strafe GX",
				fr: "Bombarder-GX",
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Échangez ce Pokémon avec l’un de vos Pokémon de Banc. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
