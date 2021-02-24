import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Blissey",
		fr: "Leuphorie",
	},
	illustrator: "MAHOU",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		242,
	],
	hp: 160,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Chansey",
		fr: "Leveinard",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Happiness Supplement",
				fr: "Complément de Joie",
			},
			effect: {
				en: "Once during your turn (before your attack), you may remove a Special Condition from your Active Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez retirer un État Spécial de votre Pokémon Actif.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Powerful Slap",
				fr: "Grosse Baffe",
			},
			effect: {
				en: "Flip a coin for each Energy attached to this Pokémon. This attack does 80 damage for each heads.",
				fr: "Lancez une pièce pour chaque Énergie attachée à ce Pokémon. Cette attaque inflige 80 dégâts pour chaque côté face.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
