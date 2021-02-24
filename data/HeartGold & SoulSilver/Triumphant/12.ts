import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Victreebel",
		fr: "Empiflor",
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		71,
	],
	hp: 110,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Weepinbell",
		fr: "Boustiflor",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Tangling Tendrils",
				fr: "Enchevêtrement végétal",
			},
			effect: {
				en: "As long as Victreebel is your Active Pokémon, your opponent's Active Pokémon's Retreat Cost is ColorlessColorless more.",
				fr: "Tant qu'Empiflor est votre Pokémon Actif, le Coût de retraite du Pokémon Actif de votre adversaire est augmenté de ColorlessColorless.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Acidic Drain",
				fr: "Ponction acide",
			},
			effect: {
				en: "The Defending Pokémon is now Burned and Poisoned. Remove 3 damage counters from Victreebel.",
				fr: "Le Pokémon Défenseur est maintenant Brûlé et Empoisonné. Retirez 3 marqueurs de dégât à Empiflor.",
			},
			damage: 30,

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
