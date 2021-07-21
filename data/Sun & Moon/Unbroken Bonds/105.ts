import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Crabominable",
		fr: "Crabominable",
		es: "Crabominable",
		it: "Crabominable",
		pt: "Crabominable",
		de: "Krawell"
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		740,
	],
	hp: 140,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Crabrawler",
		fr: "Crabagarre",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
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
				en: "If you have fewer Pokémon in play than your opponent, this attack does 50 more damage for each Pokémon fewer you have in play.",
				fr: "Si vous avez moins de Pokémon en jeu que votre adversaire, cette attaque inflige 50 dégâts supplémentaires pour chaque Pokémon de moins que vous avez en jeu.",
				es: "Si tienes menos Pokémon en juego que tu rival, este ataque hace 50 puntos de daño más por cada Pokémon de menos que tengas en juego.",
				it: "Se hai meno Pokémon in gioco del tuo avversario, questo attacco infligge 50 danni in più per ogni Pokémon che hai in meno in gioco.",
				pt: "Se você tiver menos Pokémon em jogo do que seu oponente, este ataque causará 50 pontos de dano a mais para cada Pokémon a menos que você tiver em jogo.",
				de: "Wenn du weniger Pokémon im Spiel hast als dein Gegner, fügt diese Attacke 50 Schadenspunkte mehr mal der Anzahl der Pokémon zu, die du weniger im Spiel hast."
			},
			damage: "30+",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Magnum Punch",
				fr: "Poing Magnum",
				es: "Puño Magnum",
				it: "Superpugno",
				pt: "Soco Magnum",
				de: "Magnum-Schlag"
			},

			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
