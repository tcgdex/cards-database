import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Miltank",
		'fr-fr': "Écrémeuh",
		'es-es': "Miltank",
		'it-it': "Miltank",
		'pt-br': "Miltank",
		'de-de': "Miltank"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		241,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Milk Cannon",
				'fr-fr': "Canon à Lait",
				'es-es': "Cañón Leche",
				'it-it': "Cannone Mumu",
				'pt-br': "Canhão de Leite",
				'de-de': "Milchkanone"
			},
			effect: {
				'en-us': "Reveal any number of Moomoo Milk cards in your hand. This attack does 60 damage for each card you revealed in this way.",
				'fr-fr': "Montrez autant de cartes Lait Meumeu que vous voulez de votre main. Cette attaque inflige 60 dégâts pour chaque carte montrée de cette façon.",
				'es-es': "Enseña cualquier cantidad de cartas de Leche Mu-mu de tu mano. Este ataque hace 60 puntos de daño por cada carta que hayas enseñado de esta manera.",
				'it-it': "Mostra un numero qualsiasi di carte Latte Mumu che hai in mano. Questo attacco infligge 60 danni per ogni carta che hai mostrato in questo modo.",
				'pt-br': "Revele qualquer número de cartas Leite de Moomoo na sua mão. Este ataque causa 60 pontos de dano para cada carta revelada desta forma.",
				'de-de': "Zeige deinem Gegner beliebig viele Kuhmuh-Milch-Karten auf deiner Hand. Diese Attacke fügt 60 Schadenspunkte mal der Anzahl der auf diese Weise gezeigten Karten zu."
			},
			damage: "60×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Most people raise it for its milk, but it's quite tough and strong, so it's also well suited for battle.",
	},

	thirdParty: {
		cardmarket: 365795,
		tcgplayer: 178979
	}
}

export default card
