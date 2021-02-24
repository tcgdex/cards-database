import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Lurantis-GX",
		fr: "Floramantis-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		754,
	],
	hp: 210,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Fomantis",
		fr: "Mimantis",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Flower Supply",
				fr: "Provision Florale",
			},
			effect: {
				en: "Attach 2 basic Energy cards from your discard pile to your Pokémon in any way you like.",
				fr: "Attachez 2 cartes Énergie de base de votre pile de défausse à vos Pokémon, de la manière que vous voulez.",
			},
			damage: 40,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Solar Blade",
				fr: "Lame Solaire",
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon.",
			},
			damage: 120,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Chloroscythe-GX",
				fr: "Chlorofaucille-GX",
			},
			effect: {
				en: "This attack does 50 damage times the amount of Grass Energy attached to this Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 50 dégâts multipliés par le nombre d’Énergies Grass attachées à ce Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
