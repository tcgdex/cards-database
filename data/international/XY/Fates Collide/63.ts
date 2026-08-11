import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Lucario",
		'fr-fr': "Lucario",
		'es-es': "Lucario",
		'it-it': "Lucario",
		'pt-br': "Lucario",
		'de-de': "Lucario"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		448,
	],

	hp: 110,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Riolu",
		'fr-fr': "Riolu",
		'es-es': "Riolu",
		'it-it': "Riolu",
		'pt-br': "Riolu",
		'de-de': "Riolu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Vacuum Wave",
				'fr-fr': "Onde Vide",
				'es-es': "Onda Vacío",
				'it-it': "Vuotonda",
				'pt-br': "Onda de Vácuo",
				'de-de': "Vakuumwelle"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Weakness or Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				'es-es': "El daño de este ataque no se ve afectado por Debilidad o Resistencia.",
				'it-it': "I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza.",
				'pt-br': "Os danos deste ataque não são afetados por Fraqueza ou Resistência.",
				'de-de': "Der Schaden dieses Angriffs wird durch Schwäche und Resistenz nicht verändert."
			},
			damage: 50,

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Fight Alone",
				'fr-fr': "Combat Solitaire",
				'es-es': "Lucho Solo",
				'it-it': "Minoranza",
				'pt-br': "Luta Solo",
				'de-de': "Einzelkämpfer"
			},
			effect: {
				'en-us': "If you have fewer Pokémon in play than your opponent, this attack does 60 more damage for each Pokémon fewer you have in play.",
				'fr-fr': "Si vous avez moins de Pokémon en jeu que votre adversaire, cette attaque inflige 60 dégâts supplémentaires pour chaque Pokémon de moins que vous avez en jeu.",
				'es-es': "Si tienes menos Pokémon en juego que tu rival, este ataque hace 60 puntos de daño más por cada Pokémon de menos que tengas en juego.",
				'it-it': "Se hai meno Pokémon in gioco del tuo avversario, questo attacco infligge 60 danni in più per ogni Pokémon che hai in meno in gioco.",
				'pt-br': "Se você tem menos Pokémon em jogo do que seu oponente, este ataque causa 60 de danos adicionais para cada Pokémon a menos que tenha em jogo.",
				'de-de': "Wenn du weniger Pokémon im Spiel hast als dein Gegner, fügt dieser Angriff 60 weitere Schadenspunkte mal der Anzahl der Pokémon, die du weniger im Spiel hast, zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "By reading the auras of all things, it can tell how others are feeling from over half a mile away.",
	},

	thirdParty: {
		cardmarket: 289869,
		tcgplayer: 117838
	}
}

export default card
