import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Unown [L]",
		'fr-fr': "Zarbi L",
		'de-de': "Icognito L"
	},

	illustrator: "CR CG gangs",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		201,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "[Laugh]",
				'fr-fr': "Laugh",
				'de-de': "Laugh"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may flip a coin. If heads, each player shuffles his or her deck. This power can be used even if Unown L is Asleep, Confused, or Paralyzed.",
				'fr-fr': "Une fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, chaque joueur mélange son deck. Ce pouvoir fonctionne même si Zarbi [L] est Endormi, Confus ou Paralysé.",
				'de-de': "Du kannst immer einmal in deinem Zug (vor deinem Angriff) eine Münze werden. Bei \"Kopf\" mischt jeder Spieler sein Deck. Diese Fähigkeit kann selbst dann verwendet werden, wenn Icognito J schläft, verwirrt oder gelähmt ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Hidden Power",
				'fr-fr': "Puissance cachée",
				'de-de': "Kraftreserve"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It is believed that the variety of types of this Pokémon were created by evolutionary adaptation, as each possesses a different ability.",
		'fr-fr': "On pense que la variété des types de ce Pokémon particulier est le résultat d'une adaptation due à un caprice de l'évolution, chacun possédant une capacité différente."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274738,
				tcgplayer: 90219
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274738,
				tcgplayer: 90219
			}
		}
	]
}

export default card
