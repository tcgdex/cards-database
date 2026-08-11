import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [303],

	name: {
		'en-us': "Mawile",
		'fr-fr': "Mysdibule",
		'es-es': "Mawile",
		'es-mx': "Mawile",
		'de-de': "Flunkifer",
		'it-it': "Mawile",
		'pt-br': "Mawile"
	},

	illustrator: "OKACHEKE",
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Double Eater",
			'fr-fr': "Double Portion",
			'es-es': "Doble Ración",
			'es-mx': "Doble Ración",
			'de-de': "Doppelschmaus",
			'it-it': "Divoratore Doppio",
			'pt-br': "Comer em Dobro"
		},

		effect: {
			'en-us': "Discard up to 2 Energy cards from your hand, and this attack does 60 damage for each card you discarded in this way.",
			'fr-fr': "Défaussez jusqu'à 2 cartes Énergie de votre main. Cette attaque inflige 60 dégâts pour chaque carte défaussée de cette façon.",
			'es-es': "Descarta hasta 2 cartas de Energía de tu mano, y este ataque hace 60 puntos de daño por cada carta que hayas descartado de esta manera.",
			'es-mx': "Descarta hasta 2 cartas de Energía de tu mano, y este ataque hace 60 puntos de daño por cada carta que descartaste de esta manera.",
			'de-de': "Lege bis zu 2 Energiekarten aus deiner Hand auf deinen Ablagestapel, und diese Attacke fügt für jede auf diese Weise abgelegte Karte 60 Schadenspunkte zu.",
			'it-it': "Scarta fino a due carte Energia dalla tua mano e questo attacco infligge 60 danni per ogni carta che hai scartato in questo modo.",
			'pt-br': "Descarte até 2 cartas de Energia da sua mão, e este ataque causa 60 pontos de dano para cada carta descartada desta forma."
		},

		damage: "60×"
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684416,
				cardmarket: 877446
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684416,
				cardmarket: 877446
			}
		}
	],

}

export default card
