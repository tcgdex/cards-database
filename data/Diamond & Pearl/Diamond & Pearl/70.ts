import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Bidoof",
		fr: "Keunotor",
		de: "Bidiza"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		399,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Amnesia",
				fr: "Amnésie",
				de: "Amnesie"
			},
			effect: {
				en: "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
				fr: "Choisissez 1 des attaques du Pokémon Défenseur. Ce Pokémon ne peut pas utiliser cette attaque lors du prochain tour de votre adversaire.",
				de: "Wähle 1 Angriff des Verteidigenden Pokémon. Dieses Pokémon kann den gewählten Angriff im nächsten Zug deines Gegners nicht einsetzen."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scavenge",
				fr: "Farfouille",
				de: "Aasfresser"
			},
			effect: {
				en: "Search your discard pile for a Trainer card, show it to your opponent, and put it into your hand.",
				fr: "Choisissez une carte Dresseur dans votre pile de défausse, montrez-la à votre adversaire et placez-la dans votre main.",
				de: "Durchsuche deinen Ablagestapel nach einer Trainerkarte, zeige sie deinem Gegner und nimm sie auf die Hand."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		fr: "Rien ne peut perturber ses nerfs d'acier. Il est plus agile et énergique qu'il n'y paraît."
	},

	thirdParty: {
		cardmarket: 277569,
		tcgplayer: 83824
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		}
	]
}

export default card
