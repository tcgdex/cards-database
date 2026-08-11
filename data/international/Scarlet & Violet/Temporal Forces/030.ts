import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [494],
	set: Set,

	name: {
		'en-us': "Victini",
		'fr-fr': "Victini",
		'es-es': "Victini",
		'it-it': "Victini",
		'pt-br': "Victini",
		'de-de': "Victini"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Flippity Flap",
			'fr-fr': "Flip Flap",
			'es-es': "Aleteo Repentino",
			'it-it': "Batti e Ribatti",
			'pt-br': "Bater de Asas",
			'de-de': "Großes Flattern"
		},

		effect: {
			'en-us': "Shuffle your hand into your deck. Then, draw 6 cards.",
			'fr-fr': "Mélangez votre main avec votre deck. Ensuite, piochez 6 cartes.",
			'es-es': "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 6 cartas.",
			'it-it': "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca sei carte.",
			'pt-br': "Embaralhe a sua mão no seu baralho. Em seguida, compre 6 cartas.",
			'de-de': "Mische deine Handkarten in dein Deck. Ziehe anschließend 6 Karten."
		}
	}, {
		cost: ["Fire"],

		name: {
			'en-us': "Singe Off",
			'fr-fr': "Retrait Roussi",
			'es-es': "Chamuscar",
			'it-it': "Bruciacchiare",
			'pt-br': "Calcinar",
			'de-de': "Absengen"
		},

		effect: {
			'en-us': "Discard a Special Energy from your opponent's Active Pokémon.",
			'fr-fr': "Défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
			'es-es': "Descarta 1 Energía Especial del Pokémon Activo de tu rival.",
			'it-it': "Scarta un'Energia speciale dal Pokémon attivo del tuo avversario.",
			'pt-br': "Descarte uma Energia Especial do Pokémon Ativo do seu oponente.",
			'de-de': "Lege 1 Spezial-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "This Pokémon brings victory. It is said that Trainers with Victini always win, regardless of the type of encounter.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760660,
				tcgplayer: 542774
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760660,
				tcgplayer: 542774
			}
		},
	],

	illustrator: "Shibuzoh.",

}

export default card