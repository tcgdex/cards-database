import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [575],

	name: {
		'en-us': "Gothorita",
		'fr-fr': "Mesmérella",
		'es-es': "Gothorita",
		'it-it': "Gothorita",
		'pt-br': "Gothorita",
		'de-de': "Hypnomorba"
	},

	illustrator: "sowsow",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Gothita",
		'fr-fr': "Scrutella",
		'es-es': "Gothita",
		'it-it': "Gothita",
		'pt-br': "Gothita",
		'de-de': "Mollimorba"
	},

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Whiny Voice",
				'fr-fr': "Voix Suppliante",
				'es-es': "Voz Quejica",
				'it-it': "Moine",
				'pt-br': "Voz Chorosa",
				'de-de': "Jammerstimme"
			},
			effect: {
				'en-us': "Choose a random card from your opponent's hand. Your opponent reveals that card and shuffles it into their deck.",
				'fr-fr': "Choisissez une carte au hasard dans la main de votre adversaire. Votre adversaire montre cette carte, puis la mélange avec son deck.",
				'es-es': "Elige 1 carta aleatoria de la mano de tu rival. Tu rival enseña esa carta, la pone en su baraja y las baraja todas.",
				'it-it': "Scegli una carta a caso dalla mano del tuo avversario. Il tuo avversario mostra quella carta e la rimischia nel suo mazzo.",
				'pt-br': "Escolha 1 carta aleatória da mão do seu oponente. Seu oponente revela aquela carta e a embaralha no próprio baralho.",
				'de-de': "Wähle 1 zufällige Karte aus der Hand deines Gegners. Dein Gegner zeigt dir jene Karte und mischt sie in sein Deck."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Double Spin",
				'fr-fr': "Double Tour",
				'es-es': "Doble Giro",
				'it-it': "Doppioturbo",
				'pt-br': "Giro Duplo",
				'de-de': "Doppeldreher"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 30 puntos de daño por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 30 pontos de dano para cada cara.",
				'de-de': "Wirf 2 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "It's said that when stars shine in the night sky, this Pokémon will spirit away sleeping children. Some call it the Witch of Punishment."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483249,
				tcgplayer: 219451
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483249,
				tcgplayer: 219451
			}
		},
	],
}

export default card
