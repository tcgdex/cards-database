import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Nighttime Mine",
		'fr-fr': "Mine de Nuit",
		'es-es': "Mina Nocturna",
		'es-mx': "Mina Nocturna",
		'de-de': "Nachtmine",
		'it-it': "Miniera di Notte",
		'pt-br': "Mina Noturna"
	},

	illustrator: "Takashi Yamaguchi",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Attacks used by each Tera Pokémon in play (both yours and your opponent's) cost {C} more.",
		'fr-fr': "Les attaques utilisées par chacun des Pokémon Téracristal en jeu (les vôtres et ceux de votre adversaire) coûtent {C} de plus.",
		'es-es': "Los ataques usados por cada Pokémon Teracristal en juego (tanto tuyos como de tu rival) cuestan {C} más.",
		'es-mx': "Los ataques usados por cada Pokémon Teracristal en juego (tanto tuyos como de tu rival) cuestan {C} más.",
		'de-de': "Die Kosten der von allen Terakristall-Pokémon im Spiel (deinen und denen deines Gegners) eingesetzten Attacken erhöhen sich um {C}.",
		'it-it': "Il costo degli attacchi usati da ogni Pokémon Teracristal in gioco, sia tuo che del tuo avversario, aumenta di {C}.",
		'pt-br': "Os ataques usados por cada Pokémon Tera em jogo (seus e do seu oponente) custam {C} a mais."
	},

	trainerType: "Stadium",
	regulationMark: "I",

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869808,
			tcgplayer: 676009
		}
	},
	{
		type: "reverse",
		thirdParty: {
			cardmarket: 869808,
			tcgplayer: 676009
		}
	},
],
}

export default card
