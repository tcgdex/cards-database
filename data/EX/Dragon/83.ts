import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Buffer Piece",
		fr: "Pare-chocs",
		de: "Dämpfender Talisman"
	},

	illustrator: "Katsura Tabata",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		fr: "Attachez Pare-chocs à un de vos Pokémon qui ne possède pas déjà d'Outil Pokémon. Si ce Pokémon est mis K.O, défaussez-la.\n\nLes dégâts infligés par une attaque de votre adversaire au Pokémon auquel Pare-chocs est attachée sont réduits de 20 (après application de la Faiblesse et de la Résistance). À la fin du tour de votre adversaire, défaussez-la.",
		de: "Damage done to the Pokémon Buffer Piece is attached to by an opponent's attack is reduced by 20 (after applying Weakness and Resistance). At the end of your opponent's turn after you played Buffer Piece, discard Buffer Piece."
	},

	thirdParty: {
		tcgplayer: 84012,
		cardmarket: 275960
	}
}

export default card
