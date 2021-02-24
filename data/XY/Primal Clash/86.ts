import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Primal Groudon-EX",
		fr: "Primo-Groudon-EX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Trainer",

	set: Set,
	dexId: [
		383,
	],
	hp: 240,
	types: [
		"Fightning",
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
			},
			effect: {
				fr: "Chaque fois que votre adversaire joue une carte Dresseur (excepté les Outils Pokémon et les cartes Stade), évitez tous les effets de la carte Dresseur sur ce Pokémon.",
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
	effect: {
		en: "If there is any Stadium card in play, this attack does 100 more damage. Discard that Stadium card.",
	},


}

export default card
