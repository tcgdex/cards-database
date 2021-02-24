import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Ludicolo",
		fr: "Ludicolo",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		272,
	],
	hp: 140,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Lombre",
		fr: "Lombre",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Swing Dance",
				fr: "Danse Qui Balance",
			},
			effect: {
				en: "Once during your turn (before your attack), you may draw a card.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez piocher une carte.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Circular Steps",
				fr: "Pas Circulaires",
			},
			effect: {
				en: "This attack does 10 more damage for each other Pokémon in play (both yours and your opponent's).",
				fr: "Cette attaque inflige 10 dégâts supplémentaires pour chacun des autres Pokémon en jeu (les vôtres et ceux de votre adversaire).",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
