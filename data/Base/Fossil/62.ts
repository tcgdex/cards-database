import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Mysterious Fossil",
		fr: "Mystérieux Fossile"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",
	set: Set,
	hp: 10,

	effect: {
		fr: "Jouez Mystérieux Fossile comme si c'était un Pokémon de Base. Lorsqu'il est en jeu, Mystérieux Fossile compte comme un Pokémon (au lieu d'une carte Dresseur.) Mystérieux Fossile n'a pas d'attaque, ne peut pas battre en retraite, et ne peut pas être Endormi, Confus, Paralysé, ou Empoisonné. Si Mystérieux Fossile est mis K.O., il ne compte pas comme un Pokémon K.O. (Défaussez-le de toute façon.) À tout moment durant votre tour avant votre attaque, vous pouvez défausser Mystérieux Fossile du jeu."
	}
}

export default card
