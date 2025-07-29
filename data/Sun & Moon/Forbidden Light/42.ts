import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Mesprit",
		fr: "Créfollet",
		es: "Mesprit",
		it: "Mesprit",
		pt: "Mesprit",
		de: "Vesprit"
	},

	illustrator: "kodama",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		481,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Silent Waves",
				fr: "Vagues Silencieuses",
				es: "Olas Silenciosas",
				it: "Onde Silenti",
				pt: "Ondas Silenciosas",
				de: "Lautlose Wellen"
			},
			effect: {
				en: "If you have Azelf in play, your opponent’s Pokémon in play have no Resistance.",
				fr: "Si vous avez Créfadet en jeu, les Pokémon en jeu de votre adversaire n’ont pas de Résistance.",
				es: "Si tienes a Azelf en juego, los Pokémon en juego de tu rival no tienen Resistencia.",
				it: "Se hai Azelf in gioco, i Pokémon in gioco del tuo avversario non hanno resistenza.",
				pt: "Se você tiver Azelf em jogo, os Pokémon em jogo do seu oponente não têm Resistência.",
				de: "Wenn du Tobutz im Spiel hast, haben die Pokémon deines Gegners im Spiel keine Resistenz."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mind Splash",
				fr: "Splash Cérébral",
				es: "Chapoteo Mental",
				it: "Flusso Mentale",
				pt: "Respingo Mental",
				de: "Gedankenplatscher"
			},
			effect: {
				en: "If Uxie is on your Bench, this attack does 50 more damage.",
				fr: "Si Créhelf est sur votre Banc, cette attaque inflige 50 dégâts supplémentaires.",
				es: "Si Uxie está en tu Banca, este ataque hace 50 puntos de daño más.",
				it: "Se Uxie è nella tua panchina, questo attacco infligge 50 danni in più.",
				pt: "Se Uxie estiver no seu Banco, este ataque causará 50 pontos de dano a mais.",
				de: "Wenn sich Selfe auf deiner Bank befindet, fügt diese Attacke 50 Schadenspunkte mehr zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 355561
	}
}

export default card
