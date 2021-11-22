import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Mysterious Fossil",
		fr: "Mystérieux fossile"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",
	set: Set,
	hp: 10,
	trainerType: "Item",

	effect: {
		fr: "Jouez Mystérieux Fossile comme si c'était un Pokémon de base. Lorsqu'elle est en jeu, Mystérieux Fossile est un Pokémon  (et non une carte Dresseur). Elle ne possède pas d'attaque, ne peut pas battre en retraite et ne peut pas être affectée par un État Spécial. Si Mystérieux Fossile est mise K.O, elle n'est pas considérée comme un Pokémon K.O (mais défaussez-la quand même). N'importe quand lors de votre tour, avant votre attaque, vous pouvez défausser Mystérieux Fossile."
	}
}

export default card
