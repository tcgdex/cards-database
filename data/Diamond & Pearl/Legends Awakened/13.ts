import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Probopass",
		fr: "Tarinorme",
	},
	illustrator: "Kent Kanetsuna",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		476,
	],
	hp: 90,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Nosepass",
		fr: "Nasgnet",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Steel Coating",
				fr: "Couche d'acier",
			},
			effect: {
				en: "Any damage done to Probopass by your opponent's attacks is reduced by 10 for each Metal Energy attached to Probopass (after applying Weakness and Resistance). You can't reduce more than 20 damage in this way.",
				fr: "Tous dégâts infligés à Tarinorme par des attaques de votre adversaire sont réduits de 10 pour chaque Énergie Metal attachée à Tarinorme (après application de la Faiblesse et de la Résistance). Vous ne pouvez réduire de plus de 20 dégâts de cette façon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Metal Bomber",
				fr: "Bombardier métallique",
			},
			effect: {
				en: "Choose a number of your opponent's Benched Pokémon up to the amount of Metal Energy attached to Probopass. This attack does 20 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Vous pouvez choisir autant de Pokémon de Banc de votre adversaire qu'il y a d'Énergie Metal attachée à Tarinorme. Cette attaque inflige 20 dégâts à chacun de ces Pokémon. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	retreat: 3,



}

export default card
