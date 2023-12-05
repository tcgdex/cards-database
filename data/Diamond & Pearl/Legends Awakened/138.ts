import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Claw Fossil",
		fr: "Fossile griffe",
		de: "Klauenfossil"
	},

	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Trainer",
	set: Set,
	hp: 40,

	effect: {
		fr: "Jouez Fossile griffe comme si c'était un Pokémon de base Colorless. (Fossile griffe compte aussi comme une carte Dresseur mais si Fossile griffe est mise K.O, elle compte comme un Pokémon K.O.) Fossile griffe ne peut pas être affectée par des États Spéciaux et ne peut pas battre en retraite. N'importe quand lors de votre tour, avant votre attaque, vous pouvez défausser Fossile griffe. (Cela ne compte pas comme un Pokémon K.O.)",
		de: "Spiele Klauenfossil wie ein -Basis-Pokémon. (Klauenfossil zählt gleichzeitig als Trainerkarte, aber wenn Klauenfossil kampfunfähig wird, zählt es als kampfunfähiges Pokémon.) Klauenfossil kann nicht von Speziellen Zuständen betroffen werden und sich nicht zurückziehen. In deinem Zug (vor deinem Angriff) kannst du Klauenfossil auf deinen Ablagestapel legen. (Dies zählt nicht als kampfunfähig gemachtes Pokémon.)"
	},

	trainerType: "Item",

	abilities: [{
		name: {
			de: "Gezackter Stein"
		},

		effect: {
			de: "Wenn Klauenfossil dein Aktives Pokémon ist und durch einen gegnerischen Angriff Schaden erhält (auch wenn Klauenfossil dadurch kampfunfähig wird), lege 1 Schadensmarke auf das Angreifende Pokémon."
		}
	}]
}

export default card
