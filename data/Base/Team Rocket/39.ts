import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Dark Kadabra",
		fr: "Kadabra obscur",
		de: "Dunkles Kadabra"
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
		en: "Abra",
		fr: "Abra",
		de: "Abra"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Matter Exchange",
				fr: "Échange de matière",
				de: "Materieaustausch"
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard a card from your hand in order to draw a card. This power can't be used if Dark Kadabra is Asleep, Confused, or Paralyzed.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une carte de votre main afin de piocher une carte. Ce pouvoir ne peut être utilisé si Kadabra obscur est Endormi, Confus ou Paralysé.",
				de: "Einmal während deines Zuges (vor deinem Angriff) darfst du eine Karte von deiner Hand ablegen, um eine Karte zu ziehen. Diese Fähigkeit kann nicht gespielt werden, falls Dunkles Kadabra schläft, verwirrt oder gelähmt ist."
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
				en: "Mind Shock",
				fr: "Choc cérébral",
				de: "Verstandesschock"
			},
			effect: {
				en: "Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
				fr: "N'appliquez pas la Faiblesse et la Résistance à cette attaque. (Tous les autres effets ayant lieu après application de la Faiblesse et la Résistance subsistent.)",
				de: "Schwäche und Resistenz für diesen Angriff nicht anwenden. (Alle anderen Auswirkungen nach der Anwendung von Schwäche und Resistenz finden immer noch statt.)"
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
		en: "Some people say that Kadabras are responsible for many of the mysterious events reported in the news.",
		fr: "Certaines personnes disent que les Kadabra sont responsables de bon nombre des mystérieux événements rapportés par les médias.",
		de: "Manche Leute sagen, dass Kadabras für viele der geheimnisvollen Ereignisse verantwortlich sind, von denen in den Nachrichten berichtet wird."
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
