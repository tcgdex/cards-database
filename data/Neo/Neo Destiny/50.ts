import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Light Ninetales",
		fr: "Feunard lumineux"
	},

	illustrator: "Masako Yamashita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		38,
	],

	hp: 90,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Vulpix",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Guiding Flame",
				fr: "Flambeau"
			},
			effect: {
				en: "Put a Baby Pokémon or a Basic Pokémon card from your discard pile onto your Bench. (You can't use this attack if your Bench is full.)",
				fr: "Placez une carte Bébé Pokémon ou Pokémon de base de votre pile de défausse sur votre Banc. (Vous ne pouvez pas utiliser cette attaque si votre Banc est plein.)"
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Fire Blast",
				fr: "Déflagration"
			},
			effect: {
				en: "Discard a Energy card attached to Light Ninetales in order to use this attack.",
				fr: "Défaussez-vous d'une carte Énergie  attachée à Feunard lumineux pour utiliser cette attaque."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	description: {
		fr: "On dit que chacune de ses neuf queues renferme un pouvoir magique différent."
	}
}

export default card
