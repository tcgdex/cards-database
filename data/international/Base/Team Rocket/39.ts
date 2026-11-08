import { Card } from 'models/database/card'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		'en-us': "Dark Kadabra",
		'fr-fr': "Kadabra obscur",
		'de-de': "Dunkles Kadabra"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		64,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Abra",
		'fr-fr': "Abra"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Matter Exchange",
				'fr-fr': "Échange de matière",
				'de-de': "Matter Exchange"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may discard a card from your hand in order to draw a card. This power can't be used if Dark Kadabra is Asleep, Confused, or Paralyzed.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une carte de votre main afin de piocher une carte. Ce pouvoir ne peut être utilisé si Kadabra obscur est Endormi, Confus ou Paralysé.",
				'de-de': "Once during your turn (before your attack), you may discard a card from your hand in order to draw a card. This power can't be used if Dark Kadabra is Asleep, Confused, or Paralyzed."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Mind Shock",
				'fr-fr': "Choc cérébral",
				'de-de': "Mind Shock"
			},
			effect: {
				'en-us': "Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
				'fr-fr': "N'appliquez pas la Faiblesse et la Résistance à cette attaque. (Tous les autres effets ayant lieu après application de la Faiblesse et la Résistance subsistent.)",
				'de-de': "Don't apply Weakness and resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)"
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		'en-us': "Some people say that Kadabras are responsible for many of the mysterious events reported in the news.",
		'fr-fr': "Certaines personnes disent que les Kadabra sont responsables de bon nombre des mystérieux événements rapportés par les médias."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274092,
				tcgplayer: 84618
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274092,
				tcgplayer: 84618
			}
		}
	]
}

export default card
