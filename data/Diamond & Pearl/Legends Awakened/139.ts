import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Root Fossil",
		fr: "Fossile racine",
		de: "Wurzelfossil"
	},

	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Trainer",
	set: Set,
	hp: 40,

	effect: {
		fr: "Jouez Fossile racine comme si c'était un Pokémon de base Colorless. (Fossile racine compte aussi comme une carte Dresseur mais si Fossile racine est mise K.O, elle compte comme un Pokémon K.O.) Fossile racine ne peut pas être affectée par des États Spéciaux et ne peut pas battre en retraite. N'importe quand lors de votre tour, avant votre attaque, vous pouvez défausser Fossile racine. (Cela ne compte pas comme un Pokémon K.O.)",
		de: "Spiele Wurzelfossil wie ein -Basis-Pokémon. (Wurzelfossil zählt gleichzeitig als Trainerkarte, aber wenn Klauenfossil kampfunfähig wird, zählt es als kampfunfähiges Pokémon.) Wurzelfossil kann nicht von Speziellen Zuständen betroffen werden und sich nicht zurückziehen. In deinem Zug (vor deinem Angriff) kannst du Wurzelfossil auf deinen Ablagestapel legen. (Dies zählt nicht als kampfunfähig gemachtes Pokémon.)"
	},

	trainerType: "Item",

	abilities: [{
		type: 'Poke-BODY',
		name: {
			de: "Schwammiger Stein"
		},

		effect: {
			de: "Entferne zu einem beliebigen Zeitpunkt zwischen zwei Zügen 1 Schadensmarke von Wurzelfossil."
		}
	}],

	thirdParty: {
		cardmarket: 278288
	}
}

export default card
