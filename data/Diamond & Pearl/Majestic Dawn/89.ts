import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Dome Fossil",
		fr: "Fossile Dôme",
		de: "Domfossil"
	},

	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Trainer",
	set: Set,
	hp: 50,

	effect: {
		fr: "Jouez Fossile Dôme comme si c'était un Pokémon de base Colorless. (Fossile Dôme compte aussi comme une carte Dresseur mais si Fossile Dôme est mise K.O, elle compte comme un Pokémon K.O.) Fossile Dôme ne peut pas être affectée par des États Spéciaux et ne peut pas battre en retraite. N'importe quand lors de votre tour, avant votre attaque, vous pouvez défausser Fossile Dôme. (Cela ne compte pas comme un Pokémon K.O).",
		de: "Spiele Domfossil wie ein -Basis-Pokémon. (Domfossil zählt gleichzeitig als Trainerkarte, aber wenn Domfossil kampfunfähig wird, zählt es als kampfunfähiges Pokémon.) Domfossil kann nicht von Speziellen Zuständen betroffen werden und sich nicht zurückziehen. In deinem Zug (vor deinem Angriff) kannst du Domfossil auf deinen Ablagestapel legen. (Dies zählt nicht als kampfunfähig gemachtes Pokémon.)"
	},

	trainerType: "Item",

	abilities: [{
		type: 'Poke-BODY',
		name: {
			de: "Fels-Reaktion"
		},

		effect: {
			de: "Wenn du 1 -Energiekarte von deiner Hand an Domfossil anlegst (ausgenommen durch Effekte von Angriffen oder Poké-Powern), durchsuche dein Deck nach einer Karte, die sich aus Domfossil entwickelt, und lege diese auf Domfossil (dies zählt als Entwickeln von Domfossil). Mische dein Deck danach"
		}
	}],

	thirdParty: {
		cardmarket: 278138,
		tcgplayer: 84868
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
