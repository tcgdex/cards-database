import { Card } from 'models/database/card'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		'en-us': "Unown [K]",
		'fr-fr': "Zarbi K",
		'de-de': "Icognito K"
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
				'en-us': "[Keep]",
				'fr-fr': "Keep",
				'de-de': "Keep"
			},
			effect: {
				'en-us': "Your opponent's attacks, Pokémon Powers, and Trainer cards can't discard Energy cards from your Pokémon with Unown in their names. (Any other effects of attacks still happen.)",
				'fr-fr': "Les attaques de votre adversaire, les Pouvoirs Pokémon, et les cartes Dresseur ne peuvent pas défausser les cartes Énergie attachées à vos différents Pokémon Zarbi. (Tout autre effet ou attaque est toujours valide.)",
				'de-de': "Die Angriffe, Pokémon-Power und Trainerkarten deines Gegners können keine Energiekarten von deinen Pokémon, die Icognito in ihrem Namen haben, entfernen. (Alle anderen Auswirkungen von Angriffen finden immer noch statt.)"
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
				cardmarket: 274644,
				tcgplayer: 90217
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274644,
				tcgplayer: 90217
			}
		}
	]
}

export default card

