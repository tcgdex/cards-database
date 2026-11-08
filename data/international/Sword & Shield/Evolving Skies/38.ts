import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Milotic",
		'fr-fr': "Milobellus",
		'es-es': "Milotic",
		'it-it': "Milotic",
		'pt-br': "Milotic",
		'de-de': "Milotic"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Stage1",
	illustrator: "sui",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Dew Guard",
			'fr-fr': "Garde Rosée",
			'es-es': "Defensa Rocío",
			'it-it': "Scudo di Rugiada",
			'pt-br': "Dew Guard",
			'de-de': "Schutztau"
		},

		effect: {
			'en-us': "Whenever your opponent plays a Supporter card from their hand, prevent all effects of that card done to you or your hand.",
			'fr-fr': "Chaque fois que votre adversaire joue une carte Supporter de sa main, évitez tous les effets de cette carte sur vous ou votre main.",
			'es-es': "Cada vez que tu rival juegue 1 carta de Partidario de su mano, evita todos los efectos de esa carta infligidos a ti o a tu mano.",
			'it-it': "Ogni volta che il tuo avversario gioca una carta Aiuto che ha in mano, previeni tutti gli effetti di quella carta su di te e sulle carte che hai in mano.",
			'pt-br': "Whenever your opponent plays a Supporter card from their hand, prevent all effects of that card done to you or your hand.",
			'de-de': "Verhindere jedes Mal, wenn dein Gegner 1 Unterstützerkarte aus seiner Hand spielt, alle Effekte jener Karte, die dir oder deinen Handkarten zugefügt werden."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Double Smash",
			'fr-fr': "Double Broiement",
			'es-es': "Golpe Doble",
			'it-it': "Colpo Duplice",
			'pt-br': "Double Smash",
			'de-de': "Doppelstoß"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 70 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 70 dégâts pour chaque côté face.",
			'es-es': "Lanza 2 monedas. Este ataque hace 70 puntos de daño por cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 70 danni ogni volta che esce testa.",
			'pt-br': "Flip 2 coins. This attack does 70 damage for each heads.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 70 Schadenspunkte pro Kopf zu."
		},

		damage: "70×",
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,

	evolveFrom: {
		'en-us': "Feebas",
		'fr-fr': "Barpau",
		'es-es': "Feebas",
		'it-it': "Feebas",
		'pt-br': "Feebas",
		'de-de': "Barschwa"
	},

	description: {
		'en-us': "It's said that a glimpse of a Milotic and its beauty will calm any hostile emotions you're feeling."
	},

	dexId: [350],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574062,
				tcgplayer: 246851
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574062,
				tcgplayer: 246851
			}
		},
	],
}

export default card
