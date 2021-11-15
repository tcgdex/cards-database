import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Clefairy Doll",
		fr: "Peluche Mélofée"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Rare",
	category: "Trainer",
	set: Set,
	hp: 10,

	effect: {
		fr: "Jouez Peluche Mélofée comme un Pokémon de base. Lorsqu'il est en jeu, Peluche Mélofée compte comme un Pokémon (au lieu d'une carte Dresseur). Peluche Mélofée n'a pas d'attaque, ne peut pas battre en retraite, et ne peut pas être Endormi, Confus, Paralysé ou Empoisonné. Si Peluche Mélofée est mis K.O., il ne compte pas comme un Pokémon mis K.O. À tout moment pendant votre tour et avant votre attaque, vous pouvez défausser Peluche Mélofée."
	}
}

export default card
