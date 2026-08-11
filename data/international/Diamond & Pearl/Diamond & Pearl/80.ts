import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Duskull",
		'fr-fr': "Skélénox",
		'de-de': "Zwirrlicht"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		355,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Disable",
				'fr-fr': "Entrave",
				'de-de': "Aussetzer"
			},
			effect: {
				'en-us': "Flip a coin. If heads, choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, choisissez 1 des attaques du Pokémon Défenseur. Ce Pokémon ne peut pas utiliser cette attaque lors du prochain tour de votre adversaire.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" wähle 1 Angriff des Verteidigenden Pokémon. Dieses Pokémon kann den gewählten Angriff im nächsten Zug deines Gegners nicht einsetzen."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Night Shade",
				'fr-fr': "Ténèbres",
				'de-de': "Nachtnebel"
			},
			effect: {
				'en-us': "Does 10 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It doggedly pursues its prey wherever it goes. However, the chase is abandoned at sunrise.",
		'fr-fr': "Il poursuit assidûment sa proie, où qu'elle aille. Il n'abandonne sa traque qu'au lever du soleil."
	},

	thirdParty: {
		cardmarket: 277579,
		tcgplayer: 85050
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["jason-klaczynski"]
		},
		{
			type: "normal",
			stamp: ["dylan-lefavour"]
		}
	]
}

export default card
