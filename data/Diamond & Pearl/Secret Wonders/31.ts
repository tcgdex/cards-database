import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Magmortar",
		fr: "Maganon",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		467,
	],
	hp: 110,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Magmar",
		fr: "Magmar",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Flame Body",
				fr: "Corps ardent",
			},
			effect: {
				en: "When you attach a Fire Energy card from your hand to Magmortar, remove 2 damage counters from Magmortar.",
				fr: "Lorsque vous attachez une carte Énergie Fire de votre main à Maganon, retirez à Maganon 2 marqueurs de dégât.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Flame Blast",
				fr: "Explosion de flammes",
			},
			effect: {
				en: "Does 20 damage times the number of Fire Energy attached to Magmortar.",
				fr: "Inflige 20 dégâts multipliés par le nombre d'Énergies Fire attachées à Maganon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fireball Bazooka",
				fr: "Boule de feu bazooka",
			},
			effect: {
				en: "Does 20 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 20 dégâts à 2 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+30"
		},
	],

	retreat: 3,



}

export default card
