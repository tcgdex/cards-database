import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Solid Rage",
		fr: "Fureur Compacte"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		fr: "Attachez Fureur Compacte à 1 de vos Pokémon Évolués (Pokémon-ex exclus) qui ne possède pas déjà d'Outil Pokémon. Si le Pokémon auquel Fureur Compacte est attachée est un Pokémon de base ou un Pokémon-ex, défaussez Fureur Compacte.\n\nS'il vous reste plus de cartes Récompense que votre adversaire, le Pokémon auquel Fureur Compacte est attachée inflige 20 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance)."
	}
}

export default card
