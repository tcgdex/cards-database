import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Flygon",
		fr: "Flygon Niv. 65",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		330,
	],
	hp: 120,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Vibrava",
		fr: "Vibraninf",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Rainbow Float",
				fr: "Flottement arc-en-ciel",
			},
			effect: {
				en: "If any basic Energy card attached to Flygon is the same type as any of your Pokémon, the Retreat Cost for those Pokémon is 0.",
				fr: "Si une carte Énergie de base attachée à Libegon est du même type qu'un de vos Pokémon, le Coût de retraite de ces Pokémon est de 0.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sand Wall",
				fr: "Mur de sable",
			},
			effect: {
				en: "Discard a Stadium card your opponent has in play. If you do, prevent all effects of an attack, including damage, done to Flygon during your opponent's next turn.",
				fr: "Défaussez une carte Stade que votre adversaire a en jeu. Prévenez alors tous les effets d'attaque, dégâts inclus, infligés à Libegon lors du prochain tour de votre adversaire.",
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Power Swing",
				fr: "Va-et-vient puissant",
			},
			effect: {
				en: "Does 60 damage plus 10 more damage for each Evolved Pokémon on your Bench.",
				fr: "Inflige 60 dégâts plus 10 dégâts supplémentaires pour chaque Pokémon Évolué se trouvant sur votre Banc.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],




}

export default card
