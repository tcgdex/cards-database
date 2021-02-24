import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Metagross",
		fr: "Metalosse",
	},
	illustrator: "Kent Kanetsuna",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		376,
	],
	hp: 120,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Metang",
		fr: "Metang",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Magnetic Reversal",
				fr: "Renversement magnétique",
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. This power can't be used if Metagross is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, échangez 1 des Pokémon de Banc de votre adversaire avec 1 des Pokémon Défenseurs. Ce pouvoir ne peut pas être utilisé si Mammochon est affecté par un État Spécial.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Extra Comet Punch",
				fr: "Poing météore",
			},
			effect: {
				en: "During your next turn, Metagross's Extra Comet Punch attack's base damage is 100.",
				fr: "Lors de votre prochain tour, les dégâts de base de l'attaque Poing météore de Mammochon sont de 100.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+30"
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
