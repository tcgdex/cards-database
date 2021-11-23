import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Tyranitar",
		fr: "Tyranocif"
	},
	illustrator: "Kimiya Masago",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		248,
	],
	hp: 120,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Pupitar",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dark Aura",
				fr: "Sombre aura"
			},
			effect: {
				en: "All Energy attached to Tyranitar is Dark instead of its usual type.",
				fr: "Toutes les cartes Énergie attachées à Tyranocif sont d'Énergie  au lieu de leur type habituel."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Stamp",
				fr: "Piaffement"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 50 damage plus 10 more damage and does 10 damage to each of your opponent's Benched Pokémon, if any. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts plus 10 dégâts supplémentaires et inflige 10 dégâts à chaque Pokémon du Banc de votre adversaire, s'il en possède. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon du Banc.)"
			},
			damage: "50+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],




}

export default card
