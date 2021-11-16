import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

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
		fr: "Jouez Fossile griffe comme si c'était un Pokémon de base. Lorsqu'elle est en jeu, Fossile griffe compte comme un Pokémon  (et comme une carte Dresseur.) Fossile griffe ne possède pas d'attaques, ne peut pas battre en retraite, et ne peut pas être affectée par des États Spéciaux. Si Fossile griffe est mise K.O., elle ne compte pas comme un Pokémon K.O. (défaussez-la de toutes façons). N'importe quand lors de votre tour, avant votre attaque, vous pouvez défausser Fossile griffe."
	}
}

export default card
