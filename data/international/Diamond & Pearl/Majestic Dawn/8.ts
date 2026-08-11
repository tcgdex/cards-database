import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Manaphy",
		'fr-fr': "Manaphy",
		'de-de': "Manaphy"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		490,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Aqua Skin",
				'fr-fr': "Aqua peau",
				'de-de': "Aquahaut"
			},
			effect: {
				'en-us': "When you attach a Water Energy card from your hand to Manaphy, remove 2 damage counters from Manaphy.",
				'fr-fr': "Lorsque vous attachez une carte Énergie Water de votre main à Manaphy, retirez-lui 2 marqueurs de dégât.",
				'de-de': "Wenn du 1 -Energiekarte von deiner Hand an Manaphy anlegst, entferne 2 Schadensmarken von Manaphy."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Chase Up",
				'fr-fr': "Relancer",
				'de-de': "Dampf machen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, search your deck for any 1 card and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Lancez une pièce. Si c'est face, choisissez 1 carte dans votre deck et placez-la dans votre main. Ensuite, mélangez votre deck.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" durchsuche dein Deck nach 1 Karte und nimm sie auf die Hand. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Fountain",
				'fr-fr': "Fontaine",
				'de-de': "Fontäne"
			},
			effect: {
				'en-us': "You may attach up to 2 basic Water Energy cards from your hand to your Benched Pokémon in any way you like.",
				'fr-fr': "Vous pouvez attacher jusqu'à 2 cartes Énergie de base Water de votre main à vos Pokémon de Banc de la façon que vous voulez.",
				'de-de': "Du kannst bis zu 2 -Basis-Energiekarten von deiner Hand in beliebiger Verteilung an Pokémon auf deiner Bank anlegen."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Born on a cold seafloor, it will swim great distances to return to its birthplace.",
	},

	thirdParty: {
		cardmarket: 278057,
		tcgplayer: 87146
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card
