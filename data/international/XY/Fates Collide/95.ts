import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Devolution Spray",
		'fr-fr': "Spray Dés-Évoluant",
		'es-es': "Chorro de Devolución",
		'it-it': "Getto di Involuzione",
		'pt-br': "Spray da Involução",
		'de-de': "Rückentwicklungsspray"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Faites dés-évoluer l'un de vos Pokémon évolués et mettez sa carte Évolution de plus haut Niveau dans votre main. (Le Pokémon choisi ne peut pas évoluer pendant ce tour.)",
		'en-us': "Devolve 1 of your evolved Pokémon and put the highest Stage Evolution card on it into your hand. (That Pokémon can't evolve this turn.)",
		'es-es': "Involuciona a 1 de tus Pokémon evolucionados y pon la carta de Evolución de fase más alta que tenga sobre él en tu mano. (Ese Pokémon no puede evolucionar en este turno).",
		'it-it': "Annulla l'evoluzione di uno dei tuoi Pokémon evoluti e riprendi in mano la carta Evoluzione di fase più alta. Quel Pokémon non può evolversi in questo turno.",
		'pt-br': "Reverte cada um dos seus Pokémon evoluídos e coloca o card de Evolução de Estágio mais alto na sua mão. (Aquele Pokémon não pode evoluir nesta vez de jogar.)",
		'de-de': "Rückentwickle 1 deiner entwickelten Pokémon und nimm die höchste daraufliegende Evolutionskarte auf deine Hand. (Das Pokémon kann sich während dieses Zuges nicht entwickeln.)"
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 289915,
		tcgplayer: 117867
	}
}

export default card
