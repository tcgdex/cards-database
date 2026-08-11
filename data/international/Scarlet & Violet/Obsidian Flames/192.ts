import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Siège de la Ligue Pokémon",
		'en-us': "Pokémon League Headquarters",
		'es-es': "Sede de la Liga Pokémon",
		'it-it': "Sede della Lega Pokémon",
		'pt-br': "Sede da Liga Pokémon",
		'de-de': "Pokémon-Liga-Hauptquartier"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'fr-fr': "Les attaques utilisées par chacun des Pokémon de base en jeu (les vôtres et ceux de votre adversaire) coûtent {C} de plus.",
		'en-us': "Attacks used by each Basic Pokémon in play (both yours and your opponent's) cost {C} more.",
		'es-es': "Los ataques usados por cada Pokémon Básico en juego (tanto tuyos como de tu rival) cuestan {C} más.",
		'it-it': "Il costo degli attacchi usati da ciascun Pokémon Base in gioco, sia tuo che del tuo avversario, aumenta di {C}.",
		'pt-br': "Os ataques usados por cada Pokémon Básico em jogo (seus e do seu oponente) custam {C} a mais.",
		'de-de': "Die Kosten der von allen Basis-Pokémon im Spiel (deinen und denen deines Gegners) eingesetzten Attacken erhöhen sich um {C}."
	},

	trainerType: "Stadium",
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725272,
				tcgplayer: 509784,
				cardtrader: 256088
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725272,
				tcgplayer: 509784,
				cardtrader: 256088
			}
		},
	],

	illustrator: "Oswaldo KATO",

	
}

export default card
