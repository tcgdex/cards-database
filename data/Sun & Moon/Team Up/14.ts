import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Charizard",
		fr: "Dracaufeu",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		6,
	],
	hp: 150,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Charmeleon",
		fr: "Reptincel",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Roaring Resolve",
				fr: "Détermination Rugissante",
			},
			effect: {
				en: "Once during your turn (before your attack), you may put 2 damage counters on this Pokémon. If you do, search your deck for up to 2 Fire Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer 2 marqueurs de dégâts sur ce Pokémon. Dans ce cas, cherchez jusqu’à 2 cartes Énergie Fire dans votre deck et attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Continuous Blaze Ball",
				fr: "Balle Incendiaire Continue",
			},
			effect: {
				en: "Discard all Fire Energy from this Pokémon. This attack does 50 more damage for each card you discarded in this way.",
				fr: "Défaussez toute l’Énergie Fire de ce Pokémon. Cette attaque inflige 50 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
