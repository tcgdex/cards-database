import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [816],
	set: Set,

	name: {
		'en-us': "Sobble",
		'fr-fr': "Larméléon",
		'es-es': "Sobble",
		'it-it': "Sobble",
		'pt-br': "Sobble",
		'de-de': "Memmeon"
	},

	illustrator: "Yuu Nishida",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	attacks: [{
		name: {
			'en-us': "Keep Calling",
			'fr-fr': "Appel Continu",
			'es-es': "Llama que te Llama",
			'it-it': "Richiamata",
			'pt-br': "Convocar Esquadrão",
			'de-de': "Dauerruf"
		},

		effect: {
			'en-us': "Search your deck for up to 3 Basic Rapid Strike Pokémon and put them onto your Bench. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 3 Pokémon Mille Poings de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 3 Pokémon Golpe Fluido Básicos y ponlos en tu Banca. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a tre Pokémon Base Colpo Rapido e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 3 Pokémon Golpe Fluido Básicos no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 3 Basis-Fließender-Angriff-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Double Spin",
			'fr-fr': "Double Tour",
			'es-es': "Doble Giro",
			'it-it': "Doppioturbo",
			'pt-br': "Giro Duplo",
			'de-de': "Doppeldreher"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 20 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
			'es-es': "Lanza 2 monedas. Este ataque hace 20 puntos de daño por cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 20 pontos de dano para cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu."
		},

		damage: "20×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "When it gets wet, its skin changes color, and this Pokémon becomes invisible as if it were camouflaged."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567121,
				tcgplayer: 241694
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567121,
				tcgplayer: 241694
			}
		},
	],
}

export default card
