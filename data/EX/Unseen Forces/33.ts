import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Tyrogue",
		fr: "Debugant",
		de: "Rabauz"
	},

	illustrator: "Yuka Morii",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		236,
	],

	hp: 40,

	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Baby Evolution",
				fr: "Évolution bébé",
				de: "Baby Evolution"
			},
			effect: {
				en: "Once during your turn (before your attack), you may put Hitmonlee, Hitmonchan, or Hitmontop from your hand onto Tyrogue (this counts as evolving Tyrogue) and remove all damage counters from Tyrogue.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Kicklee, Tygnon ou Kapoera de votre main sur Debugant (vous faites ainsi évoluer Debugant) et retirer à Debugant tous ses marqueurs de dégât.",
				de: "Once during your turn (before your attack), you may put Hitmonlee, Hitmonchan, or Hitmontop from your hand onto Tyrogue (this counts as evolving Tyrogue) and remove all damage counters from Tyrogue."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Desperate Punch",
				fr: "Poing désespéré",
				de: "Desperate Punch"
			},
			effect: {
				en: "Does 10 damage times the number of Pokémon in play your opponent has more than you.",
				fr: "Inflige 10 dégâts multipliés par le nombre de Pokémon en jeu que votre adversaire a en plus par rapport à vous.",
				de: "Does 10 damage times the number of Pokémon in play your opponent has more than you."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276679,
		tcgplayer: 90129
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
