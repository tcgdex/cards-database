import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Venomoth",
		fr: "Aéromite"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		49,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Venonat",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Shift",
				fr: "Transmutation"
			},
			effect: {
				en: "Once during your turn (before your attack), you may change the type of Venomoth to the type of any other Pokémon in play other than Colorless. This power can't be used if Venomoth is Asleep, Confused, or Paralyzed.",
				fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez changer le type d'Aéromite pour le type de n'importe quel Pokémon en jeu autre qu'Incolore. Ce pouvoir ne peut être utilisé si Aéromite est Endormi, Confus, ou Paralysé."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],

			name: {
				en: "Venom Powder",
				fr: "Poudre venimeuse"
			},

			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused and Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus et Empoisonné."
			},

			damage: 10
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
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "Les motifs ocres de ses ailes changent en fonction de son type de poison."
	}
}

export default card
