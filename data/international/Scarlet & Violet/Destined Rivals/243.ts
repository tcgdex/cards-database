import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Jamming Tower",
		'fr-fr': "Tour de Brouillage",
		'de-de': "Störturm",
		'it-it': "Torre di Interferenza",
		'es-es': "Torre de Interferencia",
		'pt-br': "Torre de Interferência",
		'es-mx': "Torre de Interferencia"
	},


	illustrator: "AYUMI ODASHIMA",

	rarity: "Hyper rare",
	category: "Trainer",

	effect: {
		'en-us': "Pokémon Tools attached to each Pokémon (both yours and your opponent's) have no effect.",
		'fr-fr': "Les Outils Pokémon attachés à chacun des Pokémon (les vôtres et ceux de votre adversaire) n'ont aucun effet.",
		'de-de': "Die an jedes Pokémon (deine und die deines Gegners) angelegten Pokémon-Ausrüstungen haben keinen Effekt.",
		'it-it': "Le carte Oggetto Pokémon assegnate a ciascun Pokémon, sia tuo che del tuo avversario, non hanno effetto.",
		'es-es': "Las Herramientas Pokémon unidas a cada Pokémon (tanto tuyos como de tu rival) no tienen ningún efecto.",
		'pt-br': "Ferramentas Pokémon ligadas a cada Pokémon (seus e do seu oponente) não têm efeito.",
		'es-mx': "Las Herramientas Pokémon unidas a cada Pokémon (tanto tuyos como de tu rival) no tienen ningún efecto."
	},

	trainerType: "Stadium",
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			foil: "gold",
			thirdParty: {
				cardmarket: 826117,
				tcgplayer: 633043
			}
		},
	],
}

export default card
