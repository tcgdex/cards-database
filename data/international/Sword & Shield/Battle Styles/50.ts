import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [785],
	set: Set,

	name: {
		'en-us': "Tapu Koko V",
		'fr-fr': "Tokorico V",
		'es-es': "Tapu Koko V",
		'it-it': "Tapu Koko V",
		'pt-br': "Tapu Koko V",
		'de-de': "Kapu-Riki V"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Lightning"],

	attacks: [{
		name: {
			'en-us': "Electro Ball",
			'fr-fr': "Boule Élek",
			'es-es': "Bola Voltio",
			'it-it': "Energisfera",
			'pt-br': "Bola Elétrica",
			'de-de': "Elektroball"
		},

		damage: 40,
		cost: ["Lightning"]
	}, {
		name: {
			'en-us': "Spiral Thunder",
			'fr-fr': "Tonnerre en Spirale",
			'es-es': "Trueno en Espiral",
			'it-it': "Tuonospirale",
			'pt-br': "Relâmpago Espiral",
			'de-de': "Spiraldonner"
		},

		effect: {
			'en-us': "This attack does 40 more damage for each Energy attached to all of your opponent's Pokémon.",
			'fr-fr': "Cette attaque inflige 40 dégâts supplémentaires pour chaque Énergie attachée à tous les Pokémon de votre adversaire.",
			'es-es': "Este ataque hace 40 puntos de daño más por cada Energía unida a todos los Pokémon de tu rival.",
			'it-it': "Questo attacco infligge 40 danni in più per ogni Energia assegnata ai Pokémon del tuo avversario.",
			'pt-br': "Este ataque causa 40 pontos de dano a mais para cada Energia ligada a todos os Pokémon do seu oponente.",
			'de-de': "Diese Attacke fügt für jede an alle Pokémon deines Gegners angelegte Energie 40 Schadenspunkte mehr zu."
		},

		damage: "20+",
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 545361,
				tcgplayer: 234205
			}
		},
	],
}

export default card
