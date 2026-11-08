import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [877],
	set: Set,

	name: {
		'en-us': "Morpeko",
		'fr-fr': "Morpeko",
		'es-es': "Morpeko",
		'it-it': "Morpeko",
		'pt-br': "Morpeko",
		'de-de': "Morpeko"
	},

	illustrator: "NC Empire",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	attacks: [{
		name: {
			'en-us': "Gather Food",
			'fr-fr': "Approvisionnement",
			'es-es': "Avituallamiento",
			'it-it': "Raccolta di Cibo",
			'pt-br': "Catar Comida",
			'de-de': "Futter sammeln"
		},

		effect: {
			'en-us': "Put an Item card from your discard pile into your hand.",
			'fr-fr': "Ajoutez une carte Objet de votre pile de défausse à votre main.",
			'es-es': "Pon 1 carta de Objeto de tu pila de descartes en tu mano.",
			'it-it': "Prendi una carta Strumento dalla tua pila degli scarti e aggiungila a quelle che hai in mano.",
			'pt-br': "Coloque uma carta de Item da sua pilha de descarte na sua mão.",
			'de-de': "Nimm 1 Itemkarte aus deinem Ablagestapel auf deine Hand."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Hangry Tackle",
			'fr-fr': "Charge Affamée",
			'es-es': "Placaje Voraz",
			'it-it': "Azione Panciavuota",
			'pt-br': "Colisão Voraz",
			'de-de': "Kohldampf-Tackle"
		},

		effect: {
			'en-us': "If you have no cards in your hand, this attack does 90 more damage.",
			'fr-fr': "Si vous n'avez aucune carte dans votre main, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Si no tienes ninguna carta en tu mano, este ataque hace 90 puntos de daño más.",
			'it-it': "Se non hai carte in mano, questo attacco infligge 90 danni in più.",
			'pt-br': "Se você não tiver cartas na sua mão, este ataque causará 90 pontos de dano a mais.",
			'de-de': "Wenn du keine Karten auf deiner Hand hast, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "20+",
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "Hunger hormones affect its temperament. Until its hunger is appeased, it gets up to all manner of evil deeds."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545571,
				tcgplayer: 234229
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545571,
				tcgplayer: 234229
			}
		},
	],
}

export default card
