import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Skull Fossil",
		fr: "Fossile crâne",
		de: "Kopffossil"
	},

	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Trainer",
	set: Set,
	hp: 50,
	trainerType: "Item",

	effect: {
		fr: "Jouez Fossile crâne comme si c'était un Pokémon de base . (Fossile crâne compte aussi comme une carte Dresseur mais si Fossile crâne est mise K.O. elle compte comme un Pokémon K.O.) Fossile crâne ne peut pas être affectée par des États Spéciaux et ne peut pas battre en retraite. N'importe quand lors de votre tour, avant votre attaque, vous pouvez défausser Fossile crâne. (Cela ne compte pas comme un Pokémon K.O.)",
		de: "Spiele Kopffossil wie ein -Basis-Pokémon. (Kopffossil zählt gleichzeitig als Trainerkarte, aber wenn Kopffossil kampfunfähig wird, zählt es als kampfunfähiges Pokémon.) Kopffossil kann nicht von Speziellen Zuständen betroffen werden und sich nicht zurückziehen. In deinem Zug (vor deinem Angriff) kannst du Kopffossil auf deinen Ablagestapel legen. (Dies zählt nicht als kampfunfähig gemachtes Pokémon.)"
	},

	abilities: [{
		type: 'Poke-BODY',
		name: {
			de: "Schädelstein"
		},

		effect: {
			de: "Wenn Kopffossil im Zug deines Gegners durch Schaden eines Angriffs deines Gegners kampfunfähig würde, wirf 1 Münze, bis zum ersten Mal das Ergebnis 'Zahl' kommt. Lege für jedes Mal, wenn die Münze 'Kopf' gezeigt hat, 1 Schadensmarke auf das Angreifende Pokémon."
		}
	}],

	thirdParty: {
		cardmarket: 277746,
		tcgplayer: 89277
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
