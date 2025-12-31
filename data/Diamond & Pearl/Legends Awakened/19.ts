import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Azelf",
		fr: "Créfadet",
		de: "Tobutz"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		482,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Time Walk",
				fr: "Marche temporelle",
				de: "Lauf der Zeit"
			},
			effect: {
				en: "Once during your turn, when you put Azelf from your hand onto your Bench, you may look at all of your face-down Prize cards. If you do, you may choose 1 Pokémon you find there, show it to your opponent, and put it into your hand. Then, choose 1 card in your hand and put it as a Prize card face down.",
				fr: "Une seule fois lors de votre tour, lorsque vous placez Créfadet de votre main sur votre Banc, vous pouvez regarder toutes vos cartes Récompense se trouvant face cachée. Vous pouvez alors y choisir 1 Pokémon. Montrez-le à votre adversaire et placez-le dans votre main. Ensuite, choisissez 1 carte de votre main et placez-la comme carte Récompense face cachée.",
				de: "Einmal während deines Zuges kannst du, wenn du Tobutz von deiner Hand auf deine Bank legst, alle deine verdeckten Preise ansehen. Wenn du das machst, kannst du 1 Pokémon-Karte, die du dort gefunden hast, wählen, deinem Gegner zeigen und auf die Hand nehmen. Danach wähle 1 Karte von deiner Hand und spiele sie verdeckt als Preis."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Lock Up",
				fr: "Enfermer",
				de: "Einsperren"
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
				de: "Das Verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		fr: "On l'appelle \"être de la volonté\". Il dort au fond d'un lac pour maintenir l'équilibre du monde."
	},

	thirdParty: {
		cardmarket: 278168,
		tcgplayer: 83675
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "holo",
			foil: "league"
		},
		{
			type: "normal",
			stamp: ["tsubasa-nakamura"]
		},
		{
			type: "normal",
			stamp: ["stephen-silvestro"]
		},
		{
			type: "normal",
			stamp: ["david-cohen"]
		},
		{
			type: "normal",
			stamp: ["michael-pramawat"]
		},
		{
			type: "normal",
			stamp: ["mychael-bryan"]
		},
		{
			type: "normal",
			stamp: ["yuta-komatsuda"]
		}
	]
}

export default card
