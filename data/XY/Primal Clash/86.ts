import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Primal Groudon EX",
		fr: "Primo-Groudon-EX",
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		383,
	],

	hp: 240,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Groudon-EX",
		fr: "Groudon-EX",
	},

	stage: "MEGA",

	abilities: [
		{
			type: "Ancient Trait",
			name: {
				fr: "Barrière Ω",
				en: "Ω Barrier"
			},
			effect: {
				fr: "Chaque fois que votre adversaire joue une carte Dresseur (excepté les Outils Pokémon et les cartes Stade), évitez tous les effets de la carte Dresseur sur ce Pokémon.",
				en: "Whenever your opponent plays a Trainer card (excluding Pokémon Tools and Stadium cards), prevent all effects of that card done to this Pokémon."
			},
		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	attacks: [{
		name: {
			en: "Gaia Volcano"
		},

		effect: {
			en: "If there is any Stadium card in play, this attack does 100 more damage. Discard that Stadium card."
		},

		damage: "100+",
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"]
	}]
}

export default card
