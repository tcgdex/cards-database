import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Buffer Piece",
		fr: "Pare-chocs"
	},

	illustrator: "Katsura Tabata",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		fr: "Attachez Pare-chocs à 1 de vos Pokémon ne possédant pas déjà d'Outil Pokémon. Si ce Pokémon est mis K.O., défaussez cette carte.\n\nLes dégâts infligés par une attaque de votre adversaire au Pokémon auquel Pare-chocs est attachée sont réduits de 20 (après application de la Faiblesse et de la Résistance). À la fin du tour de votre adversaire au cours duquel vous avez joué Pare-chocs, défaussez-la."
	}
}

export default card
