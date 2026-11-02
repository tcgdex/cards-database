import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Furret",
		fr: "Fouinar",
		de: "Wiesenior"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [162],

	hp: 70,

	types: [
		"Colorless"
	],

	evolveFrom: {
		en: "Sentret",
		fr: "Fouinette",
		de: "Wiesor"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Scavenger Hunt",
				fr: "Chasse au trésor",
				de: "Schatzsuche"
			},
			effect: {
				en: "Once during your turn (before your attack), you may put 2 cards from your hand into your deck. Then, search your deck for an Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward. This power can't be used if Furret is affected by a Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez remettre 2 cartes de votre main dans votre deck. Ensuite, cherchez une carte Énergie dans votre deck, montrez-la à votre adversaire et ajoutez-la à votre main. Mélangez ensuite votre deck. Ce pouvoir ne peut pas être utilisé si Fouinar est affecté par un État spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du 2 Karten aus deiner Hand in dein Deck legen. Durchsuche dann dein Deck nach einer Energiekarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische dein Deck danach. Diese Fähigkeit kann nicht verwendet werden, falls Wiesenior von einem Speziellen Zustand betroffen ist."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spinning Attack",
				fr: "Attaque tournante",
				de: "Rundumangriff"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 85590,
				cardmarket: 275120
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 85590,
				cardmarket: 275120
			}
		},
	]
}

export default card
