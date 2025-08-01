import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Lucario",
		fr: "Lucario",
		es: "Lucario",
		it: "Lucario",
		pt: "Lucario",
		de: "Lucario"
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
		en: "Riolu",
		fr: "Riolu",
		es: "Riolu",
		it: "Riolu",
		pt: "Riolu",
		de: "Riolu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Vacuum Wave",
				fr: "Onde Vide",
				es: "Onda Vacío",
				it: "Vuotonda",
				pt: "Onda de Vácuo",
				de: "Vakuumwelle"
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness or Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				es: "El daño de este ataque no se ve afectado por Debilidad o Resistencia.",
				it: "I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza.",
				pt: "Os danos deste ataque não são afetados por Fraqueza ou Resistência.",
				de: "Der Schaden dieses Angriffs wird durch Schwäche und Resistenz nicht verändert."
			},
			damage: 50,

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Fight Alone",
				fr: "Combat Solitaire",
				es: "Lucho Solo",
				it: "Minoranza",
				pt: "Luta Solo",
				de: "Einzelkämpfer"
			},
			effect: {
				en: "If you have fewer Pokémon in play than your opponent, this attack does 60 more damage for each Pokémon fewer you have in play.",
				fr: "Si vous avez moins de Pokémon en jeu que votre adversaire, cette attaque inflige 60 dégâts supplémentaires pour chaque Pokémon de moins que vous avez en jeu.",
				es: "Si tienes menos Pokémon en juego que tu rival, este ataque hace 60 puntos de daño más por cada Pokémon de menos que tengas en juego.",
				it: "Se hai meno Pokémon in gioco del tuo avversario, questo attacco infligge 60 danni in più per ogni Pokémon che hai in meno in gioco.",
				pt: "Se você tem menos Pokémon em jogo do que seu oponente, este ataque causa 60 de danos adicionais para cada Pokémon a menos que tenha em jogo.",
				de: "Wenn du weniger Pokémon im Spiel hast als dein Gegner, fügt dieser Angriff 60 weitere Schadenspunkte mal der Anzahl der Pokémon, die du weniger im Spiel hast, zu."
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

	thirdParty: {
		cardmarket: 289869
	}
}

export default card
