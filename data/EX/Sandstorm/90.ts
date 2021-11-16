import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Claw Fossil",
		fr: "Fossile griffe"
	},

	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Trainer",
	set: Set,
	hp: 40,
	trainerType: "Item",

	effect: {
		fr: "Jouez Fossile griffe comme si c'était un Pokémon de base. Lorsqu'elle est en jeu, Fossile griffe est un Pokémon  (et non une carte Dresseur). Elle ne possède pas d'attaque, ne peut pas battre en retraite et ne peut pas être affectée par un État Spécial. Si Fossile griffe est mise K.O, elle n'est pas considérée comme un Pokémon K.O (mais défaussez-la quand même). N'importe quand lors de votre tour, avant votre attaque, vous pouvez défausser Fossile Griffe."
	}
}

export default card
