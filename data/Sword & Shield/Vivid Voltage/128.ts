import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Magearna",
		fr: "Magearna",
		es: "Magearna",
		it: "Magearna",
		pt: "Magearna",
		de: "Magearna"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Rare",
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
				en: "Overhaul",
				fr: "Refonte",
				es: "Reparación",
				it: "Revisione",
				pt: "Reconstrução",
				de: "Überholung"
			},
			effect: {
				en: "Shuffle your hand into your deck. Then, draw 6 cards.",
				fr: "Mélangez votre main avec votre deck. Ensuite, piochez 6 cartes.",
				es: "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 6 cartas.",
				it: "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca sei carte.",
				pt: "Embaralhe a sua mão no seu baralho. Em seguida, compre 6 cartas.",
				de: "Mische deine Handkarten in dein Deck. Ziehe anschließend 6 Karten."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Windup Cannon",
				fr: "Canon à Remontoir",
				es: "Cañón de Cuerda",
				it: "Cannone Caricato",
				pt: "Canhão de Corda",
				de: "Aufziehkanone"
			},
			effect: {
				en: "This attack does 20 more damage for each of your opponent’s Benched Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chacun des Pokémon de Banc de votre adversaire.",
				es: "Este ataque hace 20 puntos de daño más por cada uno de los Pokémon en Banca de tu rival.",
				it: "Questo attacco infligge 20 danni in più per ogni Pokémon nella panchina del tuo avversario.",
				pt: "Este ataque causa 20 pontos de dano a mais para cada Pokémon no Banco do seu oponente.",
				de: "Diese Attacke fügt für jedes Pokémon auf der Bank deines Gegners 20 Schadenspunkte mehr zu."
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
	regulationMark: "D"
}

export default card
