import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [139],
	set: Set,

	name: {
		'en-us': "Omastar V",
		'fr-fr': "Amonistar V",
		'es-es': "Omastar V",
		'it-it': "Omastar V",
		'pt-br': "Omastar V",
		'de-de': "Amoroso V"
	},

	illustrator: "Saki Hayashiro",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Primal Guidance",
			'fr-fr': "Conseil Primitif",
			'es-es': "Guía Primigenia",
			'it-it': "Guida Primordiale",
			'pt-br': "Orientação Primitiva",
			'de-de': "Urzeitliches Geleit"
		},

		effect: {
			'en-us': "Search your deck for up to 2 Pokémon that evolve from an Item card that has \"Fossil\" in its name and put them onto your Bench. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 Pokémon évoluant d'une carte Objet ayant \" Fossile \" dans son nom, et placez-les sur votre Banc. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 Pokémon que evolucionen de una carta de Objeto que tenga \"Fósil\" en su nombre y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a due Pokémon che si evolvono da una carta Strumento che ha \"Fossile\" nel nome e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 Pokémon no seu baralho que evoluam de uma carta de Item que tenha \"Fóssil\" em seu nome e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Pokémon, die sich aus einer Itemkarte entwickeln, bei der \"Fossil\" zum Namen gehört, und lege sie auf deine Bank. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Tentacle Lock",
			'fr-fr': "Blocage Tentaculaire",
			'es-es': "Bloqueo Tentacular",
			'it-it': "Blocco Tentacolare",
			'pt-br': "Trava de Tentáculo",
			'de-de': "Tentakelgriff"
		},

		effect: {
			'en-us': "If the Defending Pokémon is an Evolution Pokémon, it can't attack during your opponent's next turn.",
			'fr-fr': "Si le Pokémon Défenseur est un Pokémon Évolutif, il ne peut pas attaquer pendant le prochain tour de votre adversaire.",
			'es-es': "Si el Pokémon Defensor es un Pokémon Evolución, no puede atacar durante el próximo turno de tu rival.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare se è un Pokémon Evoluzione.",
			'pt-br': "Se o Pokémon Defensor for um Pokémon de Evolução, ele não poderá atacar durante o próximo turno do seu oponente.",
			'de-de': "Wenn das Verteidigende Pokémon ein Entwicklungs-Pokémon ist, kann es während des nächsten Zuges deines Gegners nicht angreifen."
		},

		damage: 110
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 682221,
				tcgplayer: 451822
			}
		},
	],
}

export default card
