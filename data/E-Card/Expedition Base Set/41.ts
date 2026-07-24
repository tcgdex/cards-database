import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Umbreon",
		fr: "Mélodelfe",
		de: "Pixi"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [197],

	hp: 80,

	types: [
		"Darkness"
	],

	evolveFrom: {
		en: "Clefairy",
		fr: "Mélofée"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Dark Moon",
				fr: "Rayon de lune",
				de: "Mondschein"
			},
			effect: {
				en: "As long as Umbreon is your Active Pokémon and has a Darkness Energy attached to it, once during your turn (before your attack), you may look at your opponent's hand. Choose from it a number of cards up to the number of Darkness Energy attached to Umbreon and shuffle them into your opponent's deck. Your opponent then draws the same number of cards from his or her deck. This power can't be used if Umbreon is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez remettre une carte de votre main au-dessus de votre deck. Si vous faites ainsi, cherchez dans votre deck une carte Énergie de base, montrez-la à votre adversaire et ajoutez-la à votre main. Mélangez ensuite votre deck. Ce pouvoir ne peut pas être utilisé si Mélodelfe est affecté par un État spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du eine Karte aus deiner Hand oben auf dein Deck legen. Falls du dies tust, durchsuche dein Deck nach einer Basis-Energiekarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische dein Deck danach. Diese Fähigkeit kann nicht verwendet werden, falls Pixi von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shadow Bind",
				fr: "Torgnoles",
				de: "Duplexhieb"
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl 'Kopf' zu."
			},
			damage: 30,

		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],,
	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84344,
				cardmarket: 274882
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
