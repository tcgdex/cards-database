import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Metagross",
		fr: "Metalosse",
	},
	illustrator: "Wataru Kawahara",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		376,
	],
	hp: 130,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Metang",
		fr: "Metang",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Psychic Float",
				fr: "Psy-flotteur",
			},
			effect: {
				en: "If you have any Psychic Energy attached to your Active Pokémon, the Retreat Cost for that Pokémon is 0.",
				fr: "Si une ou plusieurs cartes Énergie Psychic sont attachées à votre Pokémon Actif, le Coût de retraite de ce dernier est de 0.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pulse Blast",
				fr: "Explosion vibrante",
			},

			damage: 60,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Double Leg Hammer",
				fr: "Marteau têtu",
			},
			effect: {
				en: "Choose 2 of your opponent's Benched Pokémon. This attack does 40 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 2 des Pokémon se trouvant sur le Banc de votre adversaire. Cette attaque inflige 40 dégâts à chacun d'entre eux. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
