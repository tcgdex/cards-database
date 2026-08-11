import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Jamming Tower",
		'fr-fr': "Tour de Brouillage",
		'es-es': "Torre de Interferencia",
		'es-mx': "Torre de Interferencia",
		'de-de': "Störturm",
		'it-it': "Torre di Interferenza",
		'pt-br': "Torre de Interferência"
	},

	illustrator: "AYUMI ODASHIMA",
	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'en-us': "Pokémon Tools attached to each Pokémon (both yours and your opponent's) have no effect.",
		'fr-fr': "Les Outils Pokémon attachés à chacun des Pokémon (les vôtres et ceux de votre adversaire) n'ont aucun effet.",
		'es-es': "Las Herramientas Pokémon unidas a cada Pokémon (tanto tuyos como de tu rival) no tienen ningún efecto.",
		'es-mx': "Las Herramientas Pokémon unidas a cada Pokémon (tanto tuyos como de tu rival) no tienen ningún efecto.",
		'de-de': "Die an jedes Pokémon (deine und die deines Gegners) angelegten Pokémon-Ausrüstungen haben keinen Effekt.",
		'it-it': "Le carte Oggetto Pokémon assegnate a ciascun Pokémon, sia tuo che del tuo avversario, non hanno effetto.",
		'pt-br': "Ferramentas Pokémon ligadas a cada Pokémon (seus e do seu oponente) não têm efeito."
	},

	trainerType: "Stadium",
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869872,
				tcgplayer: 676073
			}
		}
	],
}

export default card