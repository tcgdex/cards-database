import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [866],
	set: Set,

	name: {
		'en-us': "Galarian Mr. Rime",
		'fr-fr': "M. Glaquette de Galar",
		'es-es': "Mr. Rime de Galar",
		'it-it': "Mr. Rime di Galar",
		'pt-br': "Mr. Rime de Galar",
		'de-de': "Galar-Pantifrost"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Galarian Mr. Mime",
		'fr-fr': "M. Mime de Galar",
		'es-es': "Mr. Mime de Galar",
		'it-it': "Mr. Mime di Galar",
		'pt-br': "Mr. Mime de Galar",
		'de-de': "Galar-Pantimos"
	},

	attacks: [{
		name: {
			'en-us': "Ball Juggling",
			'fr-fr': "Jeu de Balls",
			'es-es': "Malabarismo con Bolas",
			'it-it': "Giocoleria Ball",
			'pt-br': "Malabarismo com Bolas",
			'de-de': "Ball-Jongleur"
		},

		effect: {
			'en-us': "Discard any number of Item cards that have the word \"Ball\" in their name from your hand. This attack does 40 more damage for each card you discarded in this way.",
			'fr-fr': "Défaussez de votre main autant de cartes Objet que vous le souhaitez dont le nom contient le mot « Ball ». Cette attaque inflige 40 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			'es-es': "Descarta de tu mano cualquier cantidad de cartas de Objeto que tengan la palabra \"Ball\" en su nombre. Este ataque hace 40 puntos de daño más por cada carta que hayas descartado de esta manera.",
			'it-it': "Scarta un numero qualsiasi di carte Strumento con \"Ball\" nel nome dalla tua mano. Questo attacco infligge 40 danni in più per ogni carta che hai scartato in questo modo.",
			'pt-br': "Descarte qualquer número de cartas de Item que tenham a palavra \"Bola\" em seu nome da sua mão. Este ataque causa 40 pontos de dano a mais para cada carta descartada desta forma.",
			'de-de': "Lege beliebig viele Itemkarten, bei denen das Wort \"Ball\" zum Namen gehört, aus deiner Hand auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 40 Schadenspunkte mehr zu."
		},

		damage: "10+",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Frost Smash",
			'fr-fr': "Impact Glacial",
			'es-es': "Golpe Gélido",
			'it-it': "Gelocolpo",
			'pt-br': "Pancada Congelada",
			'de-de': "Frostschlag"
		},

		damage: 80,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "Its amusing movements make it very popular. It releases its psychic power from the pattern on its belly."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545176,
				tcgplayer: 234166
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545176,
				tcgplayer: 234166
			}
		},
	],
}

export default card
