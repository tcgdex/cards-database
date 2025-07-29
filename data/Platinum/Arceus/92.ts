import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Dome Fossil",
		de: "Domfossil"
	},

	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Play Dome Fossil as if it were a Colorless Basic Pokémon. (Dome Fossil counts as a Trainer card as well, but if Dome Fossil is Knocked Out, this counts as a Knocked Out Pokémon.) Dome Fossil can't be affected by any Special Conditions and can't retreat. At any time during your turn before your attack, you may discard Dome Fossil from play. (This doesn't count as a Knocked Out Pokémon.)",
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
		cardmarket: 278964
	}
}

export default card
