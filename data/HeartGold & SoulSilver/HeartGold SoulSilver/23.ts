import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Hypno",
		fr: "Hypnomade",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		97,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Drowzee",
		fr: "Soporifik",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Sleep Pendulum",
				fr: "Pendulo dodo",
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, the Defending Pokémon is now Asleep. This power can't be used if Hypno is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, le Pokémon Défenseur est maintenant Endormi. Ce pouvoir ne peut pas être utilisé si Hypnomade est affecté par un État spécial.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psychic Shot",
				fr: "Attaque Psy",
			},
			effect: {
				en: "Does 10 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à l’un des Pokémon du Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon du Banc.)",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
