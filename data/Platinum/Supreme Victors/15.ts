import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Arcanine G",
		fr: "Arcanin ",
	},
	illustrator: "Yusuke Ishikawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		59,
	],
	hp: 90,
	types: [
		"Fire",
	],

	stage: "Basic",
	suffix: "SP",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Extreme Speed",
				fr: "Vitesse extrême",
			},
			effect: {
				en: "Arcanine G's Retreat Cost is Colorless less for each Fire Energy attached to Arcanine G.",
				fr: "Le Coût de retraite d'Arcanin  est Colorless de moins pour chaque Énergie Fire attachée à Arcanin .",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Overrun",
				fr: "Dépassement",
			},
			effect: {
				en: "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
