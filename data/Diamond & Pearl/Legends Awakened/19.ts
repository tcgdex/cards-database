import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Azelf",
		fr: "Créfadet",
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
			},
			effect: {
				en: "Once during your turn, when you put Azelf from your hand onto your Bench, you may look at all of your face-down Prize cards. If you do, you may choose 1 Pokémon you find there, show it to your opponent, and put it into your hand. Then, choose 1 card in your hand and put it as a Prize card face down.",
				fr: "Une seule fois lors de votre tour, lorsque vous placez Créfadet de votre main sur votre Banc, vous pouvez regarder toutes vos cartes Récompense se trouvant face cachée. Vous pouvez alors y choisir 1 Pokémon. Montrez-le à votre adversaire et placez-le dans votre main. Ensuite, choisissez 1 carte de votre main et placez-la comme carte Récompense face cachée.",
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
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
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
	}
}

export default card
