import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

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
	trainerType: "Item",

	effect: {
		fr: "Jouez Fossile racine comme si c'était un Pokémon de base. Lorsqu'elle est en jeu, Fossile racine compte comme un Pokémon  (et comme une carte Dresseur). Fossile racine ne possède pas d'attaques, ne peut pas battre en retraite et ne peut pas être affectée par des États Spéciaux. Si Fossile racine est mise K.O, elle ne compte pas comme un Pokémon K.O (défaussez-la de toutes façons). N'importe quand lors de votre tour, avant votre attaque, vous pouvez défausser Fossile racine.",
		de: "Spiele Wurzelfossil wie ein Basis-Pokémon. Während Wurzelfossil im Spiel ist, zählt es als -Pokémon (anstatt einer Trainerkarte). Wurzelfossil hat keine Angriffe, kann sich nicht zurückziehen und wird nicht von Speziellen Zuständen betroffen. Falls Wurzelfossil kampfunfähig gemacht wird, zählt es nicht als kampfunfähig gemachtes Pokémon (lege es trotzdem ab). Jederzeit während deines Zuges vor deinem Angriff kannst du Wurzelfossil aus dem Spiel ablegen."
	},

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
		cardmarket: 277392,
		tcgplayer: 88813
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

