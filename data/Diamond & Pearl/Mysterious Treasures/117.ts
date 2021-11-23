import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Skull Fossil",
		fr: "Fossile crâne"
	},

	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Trainer",
	set: Set,
	hp: 50,
	trainerType: "Item",

	effect: {
		fr: "Jouez Fossile crâne comme si c'était un Pokémon de base . (Fossile crâne compte aussi comme une carte Dresseur mais si Fossile crâne est mise K.O. elle compte comme un Pokémon K.O.) Fossile crâne ne peut pas être affectée par des États Spéciaux et ne peut pas battre en retraite. N'importe quand lors de votre tour, avant votre attaque, vous pouvez défausser Fossile crâne. (Cela ne compte pas comme un Pokémon K.O.)"
	}
}

export default card
