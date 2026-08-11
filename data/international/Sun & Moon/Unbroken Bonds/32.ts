import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Blacephalon",
		'fr-fr': "Pierroteknik",
		'es-es': "Blacephalon",
		'it-it': "Blacephalon",
		'pt-br': "Blacephalon",
		'de-de': "Kopplosio"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		806,
	],

	hp: 120,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Blazer",
				'fr-fr': "Brasero",
				'es-es': "Calcinador",
				'it-it': "Incendiario",
				'pt-br': "Incendiar",
				'de-de': "Geloder"
			},
			effect: {
				'en-us': "Turn 1 of your face-down Prize cards face up. If it’s a Fire Energy card, this attack does 50 more damage. (That Prize card remains face up for the rest of the game.)",
				'fr-fr': "Retournez l’une de vos cartes Récompense (actuellement face cachée) face découverte. Si c’est une carte Énergie Fire, cette attaque inflige 50 dégâts supplémentaires. (Cette carte Récompense reste face découverte jusqu’à la fin de la partie.)",
				'es-es': "Pon 1 de tus cartas de Premio que están boca abajo boca arriba. Si es 1 carta de Energía Fire, este ataque hace 50 puntos de daño más. (Esa carta de Premio permanecerá boca arriba durante el resto de la partida).",
				'it-it': "Gira a faccia in su una delle tue carte Premio che sono a faccia in giù. Se quella carta Premio è una carta Energia Fire, questo attacco infligge 50 danni in più. La carta Premio resta a faccia in su per il resto della partita.",
				'pt-br': "Vire para cima 1 das suas cartas de Prêmio. Se for uma carta de Energia Fire, este ataque causará 50 pontos de dano a mais (aquela carta de Prêmio permanecerá virada para cima pelo resto da partida).",
				'de-de': "Decke 1 deiner verdeckten Preiskarten auf. Wenn sie eine Fire-Energiekarte ist, fügt diese Attacke 50 Schadenspunkte mehr zu. (Jene Preiskarte bleibt für den Rest des Spiels aufgedeckt.)"
			},
			damage: "10+",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Fireball Circus",
				'fr-fr': "Cirque Boule de Feu",
				'es-es': "Circo de Bolas de Fuego",
				'it-it': "Palladifuoco Circense",
				'pt-br': "Bola de Fogo Circense",
				'de-de': "Feuerballzirkus"
			},
			effect: {
				'en-us': "Discard any number of Fire Energy cards from your hand. This attack does 50 damage for each card you discarded in this way.",
				'fr-fr': "Défaussez autant de cartes Énergie Fire que vous le voulez de votre main. Cette attaque inflige 50 dégâts pour chaque carte défaussée de cette façon.",
				'es-es': "Descarta cualquier cantidad de cartas de Energía Fire de tu mano. Este ataque hace 50 puntos de daño por cada carta que hayas descartado de esta manera.",
				'it-it': "Scarta un numero qualsiasi di carte Energia Fire che hai in mano. Questo attacco infligge 50 danni per ogni carta che hai scartato in questo modo.",
				'pt-br': "Descarte qualquer número de cartas de Energia Fire da sua mão. Este ataque causa 50 pontos de dano para cada carta descartada desta forma.",
				'de-de': "Lege beliebig viele Fire-Energiekarten aus deiner Hand auf deinen Ablagestapel. Diese Attacke fügt 50 Schadenspunkte mal der Anzahl der auf diese Weise auf deinen Ablagestapel gelegten Karten zu."
			},
			damage: "50×",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It slithers toward people. Then, without warning, it triggers the explosion of its own head. It's apparently one kind of Ultra Beast.",
	},

	thirdParty: {
		cardmarket: 372324,
		tcgplayer: 189084
	}
}

export default card
