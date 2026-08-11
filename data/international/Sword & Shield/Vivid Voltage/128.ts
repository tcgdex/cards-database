import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [801],

	name: {
		'en-us': "Magearna",
		'fr-fr': "Magearna",
		'es-es': "Magearna",
		'it-it': "Magearna",
		'pt-br': "Magearna",
		'de-de': "Magearna"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Metal",
	],

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Overhaul",
				'fr-fr': "Refonte",
				'es-es': "Reparación",
				'it-it': "Revisione",
				'pt-br': "Reconstrução",
				'de-de': "Überholung"
			},
			effect: {
				'en-us': "Shuffle your hand into your deck. Then, draw 6 cards.",
				'fr-fr': "Mélangez votre main avec votre deck. Ensuite, piochez 6 cartes.",
				'es-es': "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 6 cartas.",
				'it-it': "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca sei carte.",
				'pt-br': "Embaralhe a sua mão no seu baralho. Em seguida, compre 6 cartas.",
				'de-de': "Mische deine Handkarten in dein Deck. Ziehe anschließend 6 Karten."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Windup Cannon",
				'fr-fr': "Canon à Remontoir",
				'es-es': "Cañón de Cuerda",
				'it-it': "Cannone Caricato",
				'pt-br': "Canhão de Corda",
				'de-de': "Aufziehkanone"
			},
			effect: {
				'en-us': "This attack does 20 more damage for each of your opponent's Benched Pokémon.",
				'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chacun des Pokémon de Banc de votre adversaire.",
				'es-es': "Este ataque hace 20 puntos de daño más por cada uno de los Pokémon en Banca de tu rival.",
				'it-it': "Questo attacco infligge 20 danni in più per ogni Pokémon nella panchina del tuo avversario.",
				'pt-br': "Este ataque causa 20 pontos de dano a mais para cada Pokémon no Banco do seu oponente.",
				'de-de': "Diese Attacke fügt für jedes Pokémon auf der Bank deines Gegners 20 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Built roughly 500 years ago by a scientist, the part called the Soul-Heart is the actual life-form."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 512350,
				tcgplayer: 226584
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 512350,
				tcgplayer: 226584
			}
		},
	],
}

export default card
