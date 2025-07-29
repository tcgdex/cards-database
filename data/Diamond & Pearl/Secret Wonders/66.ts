import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Smeargle",
		fr: "Queulorior",
		de: "Farbeagle"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		235,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Color Pick",
				fr: "Choix de couleur",
				de: "Farbwahl"
			},
			effect: {
				en: "Search your deck for up to 3 basic Energy cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck jusqu'à 3 cartes Énergie de base, montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach bis zu 3 Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Trace",
				fr: "Calque",
				de: "Fährte"
			},
			effect: {
				en: "Flip a coin. If heads, choose an attack on 1 of your opponent's Benched Pokémon. Trace copies that attack except for its Energy cost. (You must still do anything else required for that attack.) Smeargle performs that attack.",
				fr: "Lancez une pièce. Si c'est face, choisissez une attaque d'1 des Pokémon de Banc de votre adversaire. Calque copie cette attaque, Coût en Énergie excepté. (Vous devez toujours faire ce qu'indique l'attaque.) Queulorior utilise cette attaque.",
				de: "Wirf 1 Münze. Wähle bei \"Kopf\" 1 Angriff von 1 Pokémon auf der Bank deines Gegners. Fährte kopiert diesen Angriff, mit Ausnahme der Energiekosten. (Du musst immer noch alles tun, was verlangt wird, um diesen Angriff durchzuführen.) Farbeagle führt diesen Angriff aus."
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

	thirdParty: {
		cardmarket: 277819
	}
}

export default card
