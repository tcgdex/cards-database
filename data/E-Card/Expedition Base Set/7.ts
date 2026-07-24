import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Donphan",
		fr: "Mélodelfe",
		de: "Pixi"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [232],

	hp: 80,

	types: [
		"Fighting"
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
				en: "Moonlight",
				fr: "Rayon de lune",
				de: "Mondschein"
			},
			effect: {
				en: "Once during your turn (before you attack), you may put a card from your hand back on your deck. If you do so, search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward. This power can't be used if Clefable is affected by a Special Condition.",
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
				en: "Earthquake",
				fr: "Torgnoles",
				de: "Duplexhieb"
			},
			effect: {
				en: "Does 10 damage to each of your own Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: 30,

		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],,
	weaknesses: [
		{
			type: "Grass",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 84342,
				cardmarket: 274882
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
