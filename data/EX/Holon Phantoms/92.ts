import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Mysterious Fossil",
		fr: "Mystérieux fossile"
	},

	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Trainer",
	set: Set,
	hp: 50,
	trainerType: "Item",

	effect: {
		fr: "Jouez Mystérieux fossile comme si c'était un Pokémon de base. Lorsqu'elle est en jeu, Mystérieux fossile compte comme un Pokémon  (et comme une carte Dresseur). Mystérieux fossile ne possède pas d'attaques, ne peut pas battre en retraite et ne peut pas être affectée par des États Spéciaux. Si Mystérieux fossile est mise K.O, elle ne compte pas comme un Pokémon K.O (défaussez-la de toutes façons). N'importe quand lors de votre tour, avant votre attaque, vous pouvez défausser Mystérieux fossile."
	}
}

export default card
