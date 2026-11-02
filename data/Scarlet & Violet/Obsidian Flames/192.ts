import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	set: Set,

	name: {
		fr: "Siège de la Ligue Pokémon",
		en: "Pokémon League Headquarters",
		es: "Sede de la Liga Pokémon",
		it: "Sede della Lega Pokémon",
		pt: "Sede da Liga Pokémon",
		de: "Pokémon-Liga-Hauptquartier"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		fr: "Les attaques utilisées par chacun des Pokémon de base en jeu (les vôtres et ceux de votre adversaire) coûtent {C} de plus.",
		en: "Attacks used by each Basic Pokémon in play (both yours and your opponent's) cost {C} more.",
		es: "Los ataques usados por cada Pokémon Básico en juego (tanto tuyos como de tu rival) cuestan {C} más.",
		it: "Il costo degli attacchi usati da ciascun Pokémon Base in gioco, sia tuo che del tuo avversario, aumenta di {C}.",
		pt: "Os ataques usados por cada Pokémon Básico em jogo (seus e do seu oponente) custam {C} a mais.",
		de: "Die Kosten der von allen Basis-Pokémon im Spiel (deinen und denen deines Gegners) eingesetzten Attacken erhöhen sich um {C}. Du kannst während deines Zuges nur 1 Stadionkarte spielen. Lege sie neben die Aktive Position, und lege sie auf den Ablagestapel, wenn eine andere Stadionkarte ins Spiel gebracht wird. Eine Stadionkarte mit demselben Namen kann nicht gespielt werden."
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
