import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Jolteon",
		fr: "Voltali Niv. 43",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		135,
	],
	hp: 80,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Eevee",
		fr: "Evoli",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Undevelop",
				fr: "Dé-développer",
			},
			effect: {
				en: "Once during your turn (before your attack), you may devolve Jolteon and put Jolteon into your hand. This power can't be used if Jolteon is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez dés-évoluer Voltali et le placer dans votre main. Ce pouvoir ne peut pas être utilisé si Voltali est affecté par un État Spécial.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Quick Attack",
				fr: "Vive-attaque",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage plus 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 30 dégâts supplémentaires.",
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Evolving Thunder",
				fr: "Tonnerre évoluant",
			},
			effect: {
				en: "If Jolteon evolved from Eevee during this turn, this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Si Voltali a évolué d'Evoli lors de ce tour, cette attaque inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],




}

export default card
