import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Armor Fossil",
		fr: "Fossile armure",
		de: "Panzerfossil"
	},

	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Trainer",
	set: Set,
	hp: 50,
	trainerType: "Item",

	effect: {
		fr: "Jouez Fossile armure comme si c'était un Pokémon de base . (Fossile armure compte aussi comme une carte Dresseur mais si Fossile armure est mise K.O. elle compte comme un Pokémon K.O.) Fossile armure ne peut pas être affectée par des États Spéciaux et ne peut pas battre en retraite. N'importe quand lors de votre tour, avant votre attaque, vous pouvez défausser Fossile armure. (Cela ne compte pas comme un Pokémon K.O.)",
		de: "Spiele Panzerfossil wie ein -Basis-Pokémon. (Panzerfossil zählt gleichzeitig als Trainerkarte, aber wenn Panzerfossil kampfunfähig wird, zählt es als kampfunfähiges Pokémon.) Panzerfossil kann nicht von Speziellen Zuständen betroffen werden und sich nicht zurückziehen. In deinem Zug (vor deinem Angriff) kannst du Panzerfossil auf deinen Ablagestapel legen. (Dies zählt nicht als kampfunfähig gemachtes Pokémon.)"
	},

	abilities: [{
		type: 'Poke-BODY',
		name: {
			de: "Panzerungsstein"
		},

		effect: {
			de: "Wenn Panzerfossil durch einen gegnerischen Angriff Schaden zugefügt würde, wirf 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Reduziere den Schaden dieses Angriffs um 10 Schadenspunkte mal der Anzahl \"Kopf\"."
		}
	}],

	thirdParty: {
		cardmarket: 277745,
		tcgplayer: 83625
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
