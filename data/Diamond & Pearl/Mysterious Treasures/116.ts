import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Armor Fossil",
		fr: "Fossile armure"
	},

	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Trainer",
	set: Set,
	hp: 50,
	trainerType: "Item",

	effect: {
		fr: "Jouez Fossile armure comme si c'était un Pokémon de base . (Fossile armure compte aussi comme une carte Dresseur mais si Fossile armure est mise K.O. elle compte comme un Pokémon K.O.) Fossile armure ne peut pas être affectée par des États Spéciaux et ne peut pas battre en retraite. N'importe quand lors de votre tour, avant votre attaque, vous pouvez défausser Fossile armure. (Cela ne compte pas comme un Pokémon K.O.)"
	}
}

export default card
