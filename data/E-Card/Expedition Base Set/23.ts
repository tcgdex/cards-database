import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Pidgeot",
		fr: "Roucarnage"
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		18,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Pidgeotto",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Beating Wings",
				fr: "Badelaile"
			},
			effect: {
				en: "Once during your turn (before your attack), If Pidgeot is your Active Pokémon, you may shuffle 1 of your Benched Pokémon and all cards attached to it in your deck. This power can't be used if Pidgeot is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si Roucarnage est votre Pokémon Actif, vous pouvez mélanger un des Pokémon de votre Banc et toutes les cartes qui lui sont attachées à votre deck. Ce pouvoir ne peut être utilisé si Roucarnage est affecté par un État spécial."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sharp Beak",
				fr: "Bec-aiguisé"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 30 dégâts supplémentaires."
			},
			damage: "20+",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
