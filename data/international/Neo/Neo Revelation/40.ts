import { Card } from 'models/database/card'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		'en-us': "Unown [Y]",
		'fr-fr': "Zarbi Y",
		'de-de': "Icognito Y"
	},

	illustrator: "CR CG gangs",
	rarity: "Uncommon",
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
				'en-us': "[Yield]",
				'fr-fr': "Yield",
				'de-de': "Yield"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may flip a coin. If heads, search your deck for a Psychic Energy card and attach it to 1 of your Pokémon with Unown in its name. Shuffle your deck afterward. This power can be used even if Unown is Asleep, Confused, or Paralyzed.",
				'fr-fr': "Une fois durant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est face, cherchez une carte Énergie  dans votre deck et attachez-la à l'un de vos Pokémon Zarbi. Mélangez ensuite votre deck. Ce pouvoir fonctionne même si Zarbi Y est Endormi, Confus ou Paralysé.",
				'de-de': "Du kannst einmal während deines Zuges (vor deinem Angriff) eine Münze werfen. Durchsuche bei Kopf dein Deck nach einer -Energiekarte und lege sie an eins deiner Pokémon, die Icognito in ihren Namen haben, an. Mische danach dein Deck. (Diese Fähigkeit wirkt selbst dann, wenn Icognito Y schläft, verwirrt oder gelähmt ist.)"
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
		'en-us': "Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.",
		'fr-fr': "Ils ressemblent à des hiéroglyphes inscrits sur d'antiques tablettes. On prétend qu'ils sont de la même origine."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274626,
				tcgplayer: 90244
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274626,
				tcgplayer: 90244
			}
		}
	]
}

export default card

