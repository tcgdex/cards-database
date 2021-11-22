import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Vileplume",
		fr: "Raflésia"
	},
	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		45,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Gloom",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Poison Pollen",
				fr: "Pollen toxik"
			},
			effect: {
				en: "Once during your turn (before you attack), you may flip a coin. If heads, the Defending Pokémon is now Poisoned. This power can't be used if Vileplume is affected by a Special Condition.",
				fr: "Une fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné. Ce pouvoir ne peut pas être utilisé si Raflésia est affecté par un État spécial."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Petal Dance",
				fr: "Danse-fleur"
			},
			effect: {
				en: "Flip 3 coins. This attack does 30 damage times the number of heads. Vileplume is now Confused.",
				fr: "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces. Raflésia est maintenant Confus."
			},
			damage: "30×",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
