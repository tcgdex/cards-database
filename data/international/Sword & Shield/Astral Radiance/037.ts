import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [378],
	set: Set,

	name: {
		'en-us': "Regice",
		'fr-fr': "Regice",
		'es-es': "Regice",
		'it-it': "Regice",
		'pt-br': "Regice",
		'de-de': "Regice"
	},

	illustrator: "aoki",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Regi Gate",
			'fr-fr': "Porte Regi",
			'es-es': "Regi Puerta",
			'it-it': "Portale Regi",
			'pt-br': "Portal Regi",
			'de-de': "Regi-Pforte"
		},

		effect: {
			'en-us': "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck un Pokémon de base, puis placez-le sur votre Banc. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja 1 Pokémon Básico y ponlo en tu Banca. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo un Pokémon Base e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por 1 Pokémon Básico no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Basis-Pokémon und lege es auf deine Bank. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Blizzard Bind",
			'fr-fr': "Étreinte Blizzard",
			'es-es': "Ventisca Atadura",
			'it-it': "Legabora",
			'pt-br': "Nevasca Aprisionante",
			'de-de': "Blizzardbindung"
		},

		effect: {
			'en-us': "If the Defending Pokémon is a Pokémon V, it can't attack during your opponent's next turn.",
			'fr-fr': "Si le Pokémon Défenseur est un Pokémon-V, il ne peut pas attaquer pendant le prochain tour de votre adversaire.",
			'es-es': "Si el Pokémon Defensor es un Pokémon V, no puede atacar durante el próximo turno de tu rival.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare se è un Pokémon-V.",
			'pt-br': "Se o Pokémon Defensor for um Pokémon V, ele não poderá atacar durante o próximo turno do seu oponente.",
			'de-de': "Wenn das Verteidigende Pokémon ein Pokémon-V ist, kann es während des nächsten Zuges deines Gegners nicht angreifen."
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "With cold air that can reach temperatures as low as −328 degrees Fahrenheit, Regice instantly freezes any creature that approaches it.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658545,
				tcgplayer: 272237
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658545,
				tcgplayer: 272237
			}
		},
	],
}

export default card
