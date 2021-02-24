import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Cherrim",
		fr: "Ceriflor",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		421,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Cherubi",
		fr: "Ceribou",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Fair-Weather Heal",
				fr: "Soin des Beaux Jours",
			},
			effect: {
				en: "Once during your turn (before your attack), you may heal 20 damage from 1 of your Pokémon that has any { Grass } Energy attached to it.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez soigner 20 dégâts à 1 de vos Pokémon auquel de l'Énergie Grass est attachée.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Random Peck",
				fr: "Coup d'Bec au Pif",
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
			},
			damage: 20,

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
			type: "Water",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
