import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Genesect-GX",
		fr: "Genesect-GX",
	},
	illustrator: "Yoshinobu Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		649,
	],
	hp: 180,
	types: [
		"Metal",
	],


	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Double Drive",
				fr: "Double Module",
			},
			effect: {
				en: "This Pokémon may have up to 2 Pokémon Tool cards attached to it. If it loses this Ability, discard Pokémon Tool cards from it until only 1 remains.",
				fr: "Jusqu’à 2 cartes Outil Pokémon peuvent être attachées à ce Pokémon. S’il perd ce talent, défaussez-en des cartes Outil Pokémon jusqu’à ce qu’il n’en reste qu’une.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Burst Shot",
				fr: "Tir en Rafale",
			},

			damage: 130,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Break Buster-GX",
				fr: "Éclat Brisé-GX",
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance. (You can't use more than 1 GX attack in a game.)",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 190,

		},
	],
	weaknesses: [
		{
			type: "Fire",
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
