import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [687],
	set: Set,

	name: {
		'en-us': "Malamar",
		'fr-fr': "Sepiatroce",
		'es-es': "Malamar",
		'it-it': "Malamar",
		'pt-br': "Malamar",
		'de-de': "Calamanero"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Inkay",
		'fr-fr': "Sepiatop",
		'es-es': "Inkay",
		'it-it': "Inkay",
		'pt-br': "Inkay",
		'de-de': "Iscalar"
	},

	attacks: [{
		name: {
			'en-us': "Rapid Strike Tentacles",
			'fr-fr': "Tentacules Mille Poings",
			'es-es': "Tentáculos Golpe Fluido",
			'it-it': "Tentacoli Colpo Rapido",
			'pt-br': "Tentáculos Golpe Fluido",
			'de-de': "Fließender-Angriff-Tentakel"
		},

		effect: {
			'en-us': "Reveal any number of Rapid Strike cards from your hand. This attack does 40 damage for each card you revealed in this way. Then, shuffle those cards into your deck.",
			'fr-fr': "Montrez autant de cartes Mille Poings que vous le voulez de votre main. Cette attaque inflige 40 dégâts pour chaque carte montrée de cette façon. Mélangez ensuite ces cartes avec votre deck.",
			'es-es': "Enseña cualquier cantidad de cartas de Golpe Fluido de tu mano. Este ataque hace 40 puntos de daño por cada carta que hayas enseñado de esta manera. Después, pon esas cartas en tu baraja y barájalas todas.",
			'it-it': "Mostra un numero qualsiasi di carte Colpo Rapido che hai in mano. Questo attacco infligge 40 danni per ogni carta che hai mostrato in questo modo. Poi rimischia quelle carte nel tuo mazzo.",
			'pt-br': "Revele qualquer número de cartas Golpe Fluido da sua mão. Este ataque causa 40 pontos de dano para cada carta revelada desta forma. Em seguida, embaralhe aquelas cartas no seu baralho.",
			'de-de': "Zeige deinem Gegner beliebig viele Fließender-Angriff-Karten auf deiner Hand. Diese Attacke fügt für jede auf diese Weise gezeigte Karte 40 Schadenspunkte zu. Mische jene Karten anschließend in dein Deck."
		},

		damage: "40×",
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "It's said that Malamar's hypnotic powers played a role in certain history-changing events."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567178,
				tcgplayer: 241731
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567178,
				tcgplayer: 241731
			}
		},
	],
}

export default card
