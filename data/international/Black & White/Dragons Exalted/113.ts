import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Devolution Spray",
		'fr-fr': "Spray Dés-évoluant",
		'es-es': "Chorro de Devolución",
		'it-it': "Getto di Involuzione",
		'pt-br': "Spray da Involução",
		'de-de': "Rückentwicklungsspray"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Faites dés-évoluer 1 de vos Pokémon évolués et mettez sa carte Évolution de plus haut Niveau dans votre main. (Le Pokémon choisi ne peut pas évoluer pendant ce tour.)",
		'en-us': "Devolve 1 of your evolved Pokémon and put the highest stage Evolution card on it into your hand. (That Pokémon can’t evolve this turn.)",
		'es-es': "Involuciona a 1 de tus Pokémon evolucionados y pon la carta de Evolución de fase más alta que tenga sobre él en tu mano. (Ese Pokémon no puede evolucionar en este turno.)",
		'it-it': "Annulla l’evoluzione di uno dei tuoi Pokémon evoluti e riprendi in mano la carta Evoluzione di Fase più alta. Quel Pokémon non può evolversi in questo turno.",
		'pt-br': "Involui 1 dos seus Pokémon evoluídos e coloca o card de Evolução de Estágio mais alto em sua mão. (Esse Pokémon não pode evoluir desta vez.)",
		'de-de': "Rückentwickle 1 deiner entwickelten Pokémon und nimm die höchste daraufliegende Evolutionskarte auf deine Hand. (Das Pokémon kann sich während dieses Zuges nicht entwickeln.)"
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 280552,
		tcgplayer: 84783
	}
}

export default card
