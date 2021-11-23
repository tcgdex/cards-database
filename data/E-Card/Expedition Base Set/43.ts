import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Dragonite",
		fr: "Dracolosse"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		149,
	],
	hp: 100,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Dragonair",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Tailwind",
				fr: "Vent arrière"
			},
			effect: {
				en: "Once during your turn (before you attack), if Dragonite is on your Bench, you may reduce your Active Pokémon's Retreat cost to 0.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si Dracolosse est sur votre Banc, vous pouvez réduire le Coût de Retraite de votre Pokémon Actif à 0."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Water",
				"Fighting",
			],
			name: {
				en: "Dragon Tail",
				fr: "Queue de dragon"
			},
			effect: {
				en: "Flip 2 coins. This attack does 40 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque fait 40 dégâts multipliés par le nombre de faces."
			},
			damage: "40×",

		},
	],






}

export default card
