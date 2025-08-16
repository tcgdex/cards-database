import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Miltank",
		fr: "Écrémeuh",
		es: "Miltank",
		it: "Miltank",
		pt: "Miltank",
		de: "Miltank"
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
				en: "Milk Cannon",
				fr: "Canon à Lait",
				es: "Cañón Leche",
				it: "Cannone Mumu",
				pt: "Canhão de Leite",
				de: "Milchkanone"
			},
			effect: {
				en: "Reveal any number of Moomoo Milk cards in your hand. This attack does 60 damage for each card you revealed in this way.",
				fr: "Montrez autant de cartes Lait Meumeu que vous voulez de votre main. Cette attaque inflige 60 dégâts pour chaque carte montrée de cette façon.",
				es: "Enseña cualquier cantidad de cartas de Leche Mu-mu de tu mano. Este ataque hace 60 puntos de daño por cada carta que hayas enseñado de esta manera.",
				it: "Mostra un numero qualsiasi di carte Latte Mumu che hai in mano. Questo attacco infligge 60 danni per ogni carta che hai mostrato in questo modo.",
				pt: "Revele qualquer número de cartas Leite de Moomoo na sua mão. Este ataque causa 60 pontos de dano para cada carta revelada desta forma.",
				de: "Zeige deinem Gegner beliebig viele Kuhmuh-Milch-Karten auf deiner Hand. Diese Attacke fügt 60 Schadenspunkte mal der Anzahl der auf diese Weise gezeigten Karten zu."
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

	thirdParty: {
		cardmarket: 365795,
		tcgplayer: 178979
	}
}

export default card
