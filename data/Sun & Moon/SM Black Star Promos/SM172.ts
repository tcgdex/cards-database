import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Vaporeon-GX",
		fr: "Aquali-GX",
	},
	illustrator: "PLANETA Otani",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		134,
	],
	hp: 210,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Hydrating Drops",
				fr: "Gouttes Hydratantes",
			},
			effect: {
				en: "Once during your turn (before your attack), you may heal 30 damage from your Active Water Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez soigner 30 dégâts à votre Pokémon Actif Water.",
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
				en: "Hydro Pump",
				fr: "Hydrocanon",
			},
			effect: {
				en: "This attack does 30 more damage times the amount of Water Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires multipliés par le nombre d’Énergies Water attachées à ce Pokémon.",
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Cure Shower GX",
				fr: "Pluie Curative-GX",
			},
			effect: {
				en: "Heal all damage from all of your Water Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Soignez tous les dégâts de vos Pokémon Water. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
