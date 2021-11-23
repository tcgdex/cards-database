import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Masquerain",
		fr: "Maskadra"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		284,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Surskit",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Centrifugal Force",
				fr: "Force centrifuge"
			},
			effect: {
				en: "Does 20 damage times the number of Colorless Energy in the Defending Pokémon's Retreat Cost (after applying effects to the Retreat Cost).",
				fr: "Inflige 20 dégâts multipliés par le nombre d'Énergie Colorless dans le Coût de retraite du Pokémon Défenseur (après application des effets du Coût de retraite)."
			},
			damage: "20×",

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Swirling Ripple",
				fr: "Clapotis tourbillonnant"
			},
			effect: {
				en: "If your opponent has any Water Pokémon in play, this attack does 30 damage plus 30 more damage and the Defending Pokémon is now Confused.",
				fr: "Si votre adversaire possède des Pokémon Water en jeu, cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires et le Pokémon Défenseur est maintenant Confus."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	description: {
		fr: "Des motifs en forme d'yeux ornent ses antennes. Ses 4 ailes l'aident à voler dans toutes les directions."
	}
}

export default card
