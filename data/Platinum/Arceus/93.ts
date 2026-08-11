import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Helix Fossil",
		de: "Helixfossil"
	},

	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Play Helix Fossil as if it were a Colorless Basic Pokémon. (Helix Fossil counts as a Trainer card as well, but if Helix Fossil is Knocked Out, this counts as a Knocked Out Pokémon.) Helix Fossil can't be affected by any Special Conditions and can't retreat. At any time during your turn before your attack, you may discard Helix Fossil from play. (This doesn't count as a Knocked Out Pokémon.)",
		de: "Spiele Helixfossil wie ein -Basis-Pokémon. (Helixfossil zählt gleichzeitig als Trainerkarte, aber wenn Helixfossil kampfunfähig wird, zählt es als kampfunfähiges Pokémon.) Helixfossil kann nicht von Speziellen Zuständen betroffen werden und sich nicht zurückziehen. In deinem Zug (vor deinem Angriff) kannst du Helixfossil auf deinen Ablagestapel legen. (Dies zählt nicht als kampfunfähig gemachtes Pokémon.)"
	},

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Aqua Reaction",
				de: "Aqua-Reaktion"
			},
			effect: {
				en: "When you attach a Water Energy card from your hand to Helix Fossil (excluding effects of attacks or Poké-Powers), search your deck for a card that evolves from Helix Fossil and put it onto Helix Fossil (this counts as evolving Helix Fossil). Shuffle your deck afterward.",
				de: "Wenn du 1 -Energiekarte von deiner Hand an Helixfossil anlegst (ausgenommen durch Effekte von Angriffen oder Poké-Powern), durchsuche dein Deck nach einer Karte, die sich aus Helixfossil entwickelt, und lege diese auf Helixfossil (dies zählt als Entwickeln von Helixfossil). Mische dein Deck danach."
			}
		},
	],
	trainerType: "Item",

	hp: 50,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86058,
				cardmarket: 278965
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278965,
				tcgplayer: 86058
			}
		},
	],

	retreat: 0
}

export default card
