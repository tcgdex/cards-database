import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Cacnea",
		fr: "Cacnea",
		de: "Tuska"
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		331,
	],
	hp: 50,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sneaky Attack",
				fr: "Coup Bas",
				de: "Sneaky Attack"
			},
			effect: {
				en: "If Cacnea has any Darkness Energy attached to it, this attack does 10 damage plus 10 more damage.",
				fr: "Si Cacnea possède de l'Énergie Darkness, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
				de: "If Cacnea has any  Energy attached to it, this attack does 10 damage plus 10 more damage."
			},
			damage: "10+",

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Shoot Needle",
				fr: "Coup de dard",
				de: "Shoot Needle"
			},
			effect: {
				en: "Flip 2 coins. For each heads, choose 1 of your opponent's Pokémon and this attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) (You can choose the same Pokémon more than once, but you can't do more than 10 damage to that Pokémon in this way.)",
				fr: "Lancez 2 pièces. Pour chaque face, choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 10 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) (Vous pouvez choisir le même Pokémon plus d'une fois mais vous ne pouvez pas lui infliger plus de 10 dégâts de cette façon).",
				de: "Flip 2 coins. For each heads, choose 1 of your opponent's Pokémon and this attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) (You can choose the same Pokémon more than once, but you can't do more than 10 damage to that Pokémon in this way.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
