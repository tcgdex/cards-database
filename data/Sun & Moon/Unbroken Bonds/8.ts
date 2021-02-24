import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Vileplume",
		fr: "Rafflesia",
	},
	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		45,
	],
	hp: 140,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Gloom",
		fr: "Ortide",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Varied Pollen",
				fr: "Pollens Variés",
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, choose Asleep, Burned, Confused, or Poisoned. Your opponent's Active Pokémon is now affected by that Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, choisissez entre Brûlé, Confus, Empoisonné ou Endormi. Le Pokémon Actif de votre adversaire est maintenant affecté par cet État Spécial.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Giant Bloom",
				fr: "Pousse Géante",
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
