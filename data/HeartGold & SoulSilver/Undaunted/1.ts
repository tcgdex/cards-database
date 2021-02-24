import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Bellossom",
		fr: "Joliflor",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		182,
	],
	hp: 110,
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
			type: "Poke-POWER",
			name: {
				en: "Hustle Step",
				fr: "Foulée rapide",
			},
			effect: {
				en: "Once during your turn (before your attack), you may remove 1 damage counter from each of your Pokémon. This power can't be used if Bellossom is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez retirer un marqueur de dégât à chacun de vos Pokémon. Ce pouvoir ne peut pas être utilisé si Joliflor est affecté par un État Spécial.",
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
				en: "Dance 'til Dawn",
				fr: "Danse nocturne",
			},
			effect: {
				en: "Flip 3 coins. This attack does 30 damage times the number of heads. Bellossom is now Asleep.",
				fr: "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face. Joliflor est maintenant Endormi.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
