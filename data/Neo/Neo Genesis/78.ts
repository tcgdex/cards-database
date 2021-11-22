import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Sunkern",
		fr: "Tournegrin"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		191,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Growth",
				fr: "Croissance"
			},
			effect: {
				en: "Flip a coin. If heads, you may attach up to 2 Energy cards from your hand to Sunkern.",
				fr: "Lancez une pièce. Si c'est face, vous pouvez attacher jusqu'à 2 cartes Énergies  de votre main à Tournegrin."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				en: "Mega Drain",
				fr: "Mega-sangsue"
			},
			effect: {
				en: "Remove a number of damage counters from Sunkern equal to half the damage done to the Defending Pokémon (after applying Weakness and Resistance) (rounded up to the nearest 10). If Sunkern has fewer damage counters than that, remove all of them.",
				fr: "Retirez de Tournegrin un nombre de marqueurs de dégâts égal à la moitié des dégâts infligés au Pokémon Défenseur (après application de la Faiblesse et de la Résistance) (arrondi à la dizaine la plus proche). Si Tournegrin a moins de dégâts que cela, retirez-les tous."
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

	description: {
		fr: "Il tombe parfois du ciel sans prévenir. Quand un Piafabec l'attaque, il secoue violemment ses feuilles."
	}
}

export default card
