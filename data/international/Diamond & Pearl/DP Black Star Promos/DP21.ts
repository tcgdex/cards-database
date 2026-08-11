import { Card } from 'models/database/card'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Raichu",
		'fr-fr': "Raichu",
		'de-de': "Raichu"
	},

	illustrator: "Daisuke Ito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		26,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu"
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				'en-us': "Electromagnetic Induction",
				'fr-fr': "Démarrage électromagnétìque",
				'de-de': "Elektromagnetische Induktion"
			},
			effect: {
				'en-us': "Search your deck for up to 2 Lightning Energy cards and attach them to 1 of your Pokémon. Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck jusqu'à 2 cartes Énergie Lightning et attachez-les à 1 de vos Pokémon. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach bis zu 2 -Energiekarten und lege sie an 1 deiner Pokémon an. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Explosive Thunder",
				'fr-fr': "Tonnerre explosif",
				'de-de': "Explosiver Donner"
			},
			effect: {
				'en-us': "Discard all basic Lightning Energy cards attached to Raichu. This attack does 30 damage times the number of Lightning Energy cards you discarded.",
				'fr-fr': "Défaussez toutes les cartes Énergie Lightning attachées à Raichu. Cette attaque inflige 30 dégâts multipliés par le nombre de cartes Énergie défaussées.",
				'de-de': "Lege alle an Raichu angelegten -Basis-Energiekarten auf deinen Ablagestapel. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl der auf diese Weise auf den Ablagestapel gelegten -Energiekarten zu."
			},
			damage: "30x",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It turns aggressive if it has too much electricity in its body. It discharges power through its tail.",
		'fr-fr': "Il devient agressif lorsque son corps contient trop d'électricité. Il la décharge par sa queue."
	},

	variants: [
		{
			type: "holo",
		}
	],
}

export default card
