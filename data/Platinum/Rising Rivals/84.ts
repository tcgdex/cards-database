import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Trapinch",
		fr: "Kraknoix Niv. 14",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		328,
	],
	hp: 50,
	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Gather Sand",
				fr: "Groupement de sable",
			},
			effect: {
				en: "Once during your turn (before your attack), if Trapinch is your Active Pokémon, you may search your discard pile for a basic Fighting Energy card and attach it to Trapinch.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Kraknoix est votre Pokémon Actif, vous pouvez chercher dans votre pile de défausse une carte Énergie Fighting et l'attacher à Kraknoix.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Grind",
				fr: "Écrase",
			},
			effect: {
				en: "Does 10 damage times the amount of Energy attached to Trapinch.",
				fr: "Inflige 10 dégâts multipliés par le nombre d'Énergies attachées à Kraknoix.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
