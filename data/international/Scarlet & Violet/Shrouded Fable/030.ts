import { Card } from "models/database/card"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [359],
	set: Set,

	name: {
		'en-us': "Absol",
		'fr-fr': "Absol",
		'es-es': "Absol",
		'it-it': "Absol",
		'pt-br': "Absol",
		'de-de': "Absol"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Darkfall",
			'fr-fr': "Plongée Dans l'Obscurité",
			'es-es': "Caída Oscura",
			'it-it': "Caduta nell'Oscurità",
			'pt-br': "Declínio",
			'de-de': "Einfallende Finsternis"
		},

		effect: {
			'en-us': "If you have at least 3 {D} Energy in play, this attack does 50 more damage.",
			'fr-fr': "Si vous avez au moins 3 Énergies {D} en jeu, cette attaque inflige 50 dégâts supplémentaires.",
			'es-es': "Si tienes por lo menos 3 Energías {D} en juego, este ataque hace 50 puntos de daño más.",
			'it-it': "Se hai almeno tre Energie {D} in gioco, questo attacco infligge 50 danni in più.",
			'pt-br': "Se você tiver pelo menos 3 Energias {D} em jogo, este ataque causará 50 pontos de dano a mais.",
			'de-de': "Wenn du mindestens 3 {D}-Energien im Spiel hast, fügt diese Attacke 50 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",


	illustrator: "rika",

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 780925,
				tcgplayer: 560340
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 780925,
				tcgplayer: 560340
			}
		},
	],
}

export default card
