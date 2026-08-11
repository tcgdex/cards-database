import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Dimension Valley",
		'fr-fr': "Vallée Dimensionnelle",
		'es-es': "Valle Dimensional",
		'it-it': "Valle Dimensionale",
		'pt-br': "Vale Dimensional",
		'de-de': "Dimensionstal"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Les attaques de chaque Pokémon Psychic (les vôtres et ceux de votre adversaire) coûtent Colorless de moins.",
		'en-us': "Each Psychic Pokémon's attacks (both yours and your opponent's) cost Colorless less.",
		'es-es': "Los ataques de los Pokémon Psychic (tanto tuyos como de tu rival) cuestan Colorless menos.",
		'it-it': "Tutti gli attacchi dei Pokémon Psychic, sia tuoi che del tuo avversario, costano Colorless in meno.",
		'pt-br': "Os ataques de cada Pokémon Psychic (seus e do seu oponente) custam Colorless a menos.",
		'de-de': "Die Kosten jedes Angriffs von Psychic-Pokémon (deine und die deines Gegners) reduzieren sich um Colorless."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 281899,
		tcgplayer: 94662
	}
}

export default card
