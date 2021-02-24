import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Quagsire",
		fr: "Maraiste",
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		195,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Wooper",
		fr: "Axoloto",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Aqua Healing",
				fr: "Aqua guérison",
			},
			effect: {
				en: "Once during your turn (before your attack), if Quagsire is your Active Pokémon and the Defending Pokémon has any Water Energy attached to it, you may remove 3 damage counters from Quagsire.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Maraiste est votre Pokémon Actif et que le Pokémon Défenseur possède de l'Énergie Water, vous pouvez retirer à Maraiste 3 marqueurs de dégât.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Muddy Water",
				fr: "Ocroupi",
			},
			effect: {
				en: "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse ou la Résistance aux Pokémon de Banc.)",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
