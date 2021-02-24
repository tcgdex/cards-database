import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Ferrothorn",
		fr: "Noacier",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		598,
	],
	hp: 100,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Ferroseed",
		fr: "Grindur",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Metal Claw",
				fr: "Griffe Acier",
			},

			damage: 40,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spike Lash",
				fr: "Coup d'Fouet à Clous",
			},
			effect: {
				en: "This attack does 10 damage to each of your opponent's Pokémon for each Colorless in that Pokémon's Retreat Cost. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire pour chaque Colorless dans son Coût de Retraite. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

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
	retreat: 3,



}

export default card
