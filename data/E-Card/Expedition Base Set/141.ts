import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Energy Restore",
		fr: "Restauration d'énergie",
		de: "Energiewiederherstellung"
	},

	illustrator: "Hideyuki Nakajima",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Lancez 3 pièces. Pour chaque face, ajoutez une carte Énergie de votre pile de défausse à votre main. Si vous n'avez pas suffisamment de cartes Énergie de base dans votre pile de défausse, ajoutez-les toutes à votre main.",
		de: "Wirf 3 Münzen. Nimm für jeden 'Kopf' eine Basis-Energiekarte von deinem Ablagestapel auf deine Hand. Falls du nicht genug Basis-Energiekarten in deinem Ablagestapel hast, nimm so viele wie möglich auf deine Hand."
	},

	thirdParty: {
		cardmarket: 275016,
		tcgplayer: 85226
	}
}

export default card
