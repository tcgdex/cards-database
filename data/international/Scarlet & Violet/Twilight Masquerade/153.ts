import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Jamming Tower",
		'fr-fr': "Tour de Brouillage",
		'es-es': "Torre de Interferencia",
		'it-it': "Torre di Interferenza",
		'pt-br': "Torre de Interferência",
		'de-de': "Störturm"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Pokémon Tools attached to each Pokémon (both yours and your opponent's) have no effect.",
		'fr-fr': "Les Outils Pokémon attachés à chacun des Pokémon (les vôtres et ceux de votre adversaire) n'ont aucun effet.",
		'es-es': "Las Herramientas Pokémon unidas a cada Pokémon (tanto tuyos como de tu rival) no tienen ningún efecto.",
		'it-it': "Le carte Oggetto Pokémon assegnate a ciascun Pokémon, sia tuo che del tuo avversario, non hanno effetto.",
		'pt-br': "Ferramentas Pokémon ligadas a cada Pokémon (seus e do seu oponente) não têm efeito.",
		'de-de': "Die an jedes Pokémon (deine und die deines Gegners) angelegten Pokémon-Ausrüstungen haben keinen Effekt."
	},

	trainerType: "Stadium",
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769327,
				tcgplayer: 550197
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769327,
				tcgplayer: 550197
			}
		},
	],

	illustrator: "AYUMI ODASHIMA",

}

export default card