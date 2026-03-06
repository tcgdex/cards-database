import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Omanyte",
		fr: "Amonita",
		de: "Amonitas"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		138,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Mysterious Fossil",
		fr: "Mystérieux fossile"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Team Assembly",
				fr: "Rassemblement d'équipe",
				de: "Teamversammlung"
			},
			effect: {
				en: "Search your deck for Omanyte, Kabuto, or any Basic Pokémon and put as many of them as you like onto your Bench. Shuffle your deck afterward. Treat the new Benched Pokémon as Basic Pokémon.",
				fr: "Cherchez dans votre deck Amonita, Kabuto ou d'autres Pokémon de base et placez-en autant que vous le voulez sur votre Banc. Ensuite, mélangez votre deck. Traitez les nouveaux Pokémon du Banc comme des Pokémon de base.",
				de: "Durchsuche dein Deck nach Amonitas, Kabuto oder beliebigen Basis-Pokémon und lege so viele wie du möchtest von ihnen auf deine Bank. Mische dein Deck danach. Behandle diese neuen Pokémon wie Basis-Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bind",
				fr: "Étreinte",
				de: "Klammergriff"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 275847,
		tcgplayer: 87857
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
	]
}

export default card
