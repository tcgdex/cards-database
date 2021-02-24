import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Jumpluff",
		fr: "Cotovol",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		189,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Skiploom",
		fr: "Floravol",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Leave It to the Wind",
				fr: "Vole au Vent",
			},
			effect: {
				en: "Once during your turn (before your attack), you may return this Pokémon and all cards attached to it to your hand.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez reprendre ce Pokémon et toutes les cartes qui lui sont attachées dans votre main.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Acrobatics",
				fr: "Acrobatie",
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
			},
			damage: 20,

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




}

export default card
