import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Old Amber",
		de: "Altbernstein"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Play Old Amber as if it were a Colorless Basic Pokémon. (Old Amber counts as a Trainer card as well, but if Old Amber is Knocked Out, this counts as a Knocked Out Pokémon.) Old Amber can't be affected by any Special Conditions and can't retreat. At any time during your turn before your attack, you may discard Old Amber from play. (This doesn't count as a Knocked Out Pokémon.)",
		de: "Spiele Altbernstein wie ein -Basis-Pokémon. (Altbernstein zählt gleichzeitig als Trainerkarte, aber wenn Altbernstein kampfunfähig wird, zählt es als kampfunfähiges Pokémon.) Altbernstein kann nicht von Speziellen Zuständen betroffen werden und sich nicht zurückziehen. In deinem Zug (vor deinem Angriff) kannst du Altbernstein auf deinen Ablagestapel legen. (Dies zählt nicht als kampfunfähig gemachtes Pokémon.)"
	},

	trainerType: "Item",

	abilities: [{
		type: 'Poke-BODY',
		name: {
			de: "Gehärteter Bernstein"
		},

		effect: {
			de: "Solange sich Altbernstein auf deiner Bank befindet, verhindere allen Schaden, der Altbernstein durch Angriffe von Pokémon (deinen oder denen deines Gegners) zugefügt würde."
		}
	}],

	thirdParty: {
		cardmarket: 278961,
		tcgplayer: 87849
	}
}

export default card
