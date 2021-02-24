import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Blastoise",
		fr: "Tortank",
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		9,
	],
	hp: 160,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Wartortle",
		fr: "Carabaffe",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Powerful Squall",
				fr: "Rafale Massive",
			},
			effect: {
				en: "Once during your turn (before your attack), you may look at the top 6 cards of your deck and attach any number of Water Energy cards you find there to your Pokémon in any way you like. Shuffle the other cards back into your deck.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez regarder les 6 cartes du dessus de votre deck et attacher autant de cartes Énergie Water que vous y trouvez à vos Pokémon, de la manière que vous voulez. Mélangez les autres cartes avec votre deck.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Hydro Tackle",
				fr: "Hydro-Charge",
			},
			effect: {
				en: "This Pokémon does 30 damage to itself.",
				fr: "Ce Pokémon s’inflige 30 dégâts.",
			},
			damage: 150,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
