import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [475],
	set: Set,

	name: {
		'en-us': "Gallade",
		'fr-fr': "Gallame",
		'es-es': "Gallade",
		'it-it': "Gallade",
		'pt-br': "Gallade",
		'de-de': "Galagladi"
	},

	illustrator: "NC Empire",
	rarity: "Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Kirlia",
		'fr-fr': "Kirlia",
		'es-es': "Kirlia",
		'it-it': "Kirlia",
		'pt-br': "Kirlia",
		'de-de': "Kirlia"
	},

	attacks: [{
		name: {
			'en-us': "Feint",
			'fr-fr': "Ruse",
			'es-es': "Amago",
			'it-it': "Fintoattacco",
			'pt-br': "Fintar",
			'de-de': "Offenlegung"
		},

		effect: {
			'en-us': "This attack's damage isn't affected by Resistance.",
			'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			'es-es': "El daño de este ataque no se ve afectado por Resistencia.",
			'it-it': "I danni di questo attacco non sono influenzati dalla resistenza.",
			'pt-br': "O dano deste ataque não é afetado por Resistência.",
			'de-de': "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
		},

		damage: 60,
		cost: ["Psychic"]
	}, {
		name: {
			'en-us': "Dynablade",
			'fr-fr': "Dynalame",
			'es-es': "Dinacuchilla",
			'it-it': "Dinasquarcio",
			'pt-br': "Lâmina Dinâmica",
			'de-de': "Dynamische Klinge"
		},

		effect: {
			'en-us': "This attack does 60 damage for each of your opponent's Pokémon V in play.",
			'fr-fr': "Cette attaque inflige 60 dégâts pour chacun des Pokémon-V en jeu de votre adversaire.",
			'es-es': "Este ataque hace 60 puntos de daño por cada uno de los Pokémon V en juego de tu rival.",
			'it-it': "Questo attacco infligge 60 danni per ogni Pokémon-V in gioco del tuo avversario.",
			'pt-br': "Este ataque causa 60 pontos de dano para cada Pokémon V do seu oponente em jogo.",
			'de-de': "Diese Attacke fügt für jedes Pokémon-V deines Gegners im Spiel 60 Schadenspunkte zu."
		},

		damage: "60×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Stage2",

	description: {
		'en-us': "Sharply attuned to others' wishes for help, this Pokémon seeks out those in need and aids them in battle."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567189,
				tcgplayer: 241748
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567189,
				tcgplayer: 241748
			}
		},
	],
}

export default card
