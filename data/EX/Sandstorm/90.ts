import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

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
	trainerType: "Item",

	effect: {
		fr: "Jouez Fossile griffe comme si c'était un Pokémon de base. Lorsqu'elle est en jeu, Fossile griffe est un Pokémon  (et non une carte Dresseur). Elle ne possède pas d'attaque, ne peut pas battre en retraite et ne peut pas être affectée par un État Spécial. Si Fossile griffe est mise K.O, elle n'est pas considérée comme un Pokémon K.O (mais défaussez-la quand même). N'importe quand lors de votre tour, avant votre attaque, vous pouvez défausser Fossile Griffe.",
		de: "Spiele Klauenfossil wie ein Basis-Pokémon. Während Klauenfossil im Spiel ist, zählt es als -Pokémon (anstatt einer Trainerkarte). Klauenfossil hat keine Angriffe, kann sich nicht zurückziehen und wird nicht von Speziellen Zuständen betroffen. Falls Klauenfossil kampfunfähig gemacht wird, zählt es nicht als kampfunfähig gemachtes Pokémon (lege es trotzdem ab). Jederzeit während deines Zuges vor deinem Angriff kannst du Klauenfossil aus dem Spiel ablegen."
	},

	abilities: [{
		name: {
			de: "Gezackter Stein"
		},

		effect: {
			de: "Wenn Klauenfossil dein Aktives Pokémon ist und durch einen gegnerischen Angriff Schaden erhält (auch wenn Klauenfossil dadurch kampfunfähig wird), legst du 1 Schadensmarke auf das Angreifende Pokémon."
		}
	}]
}

export default card
