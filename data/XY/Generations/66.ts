import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Olympia",
		fr: "Astera",
		de: "Astrid"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Échangez votre Pokémon Actif avec l'un de vos Pokémon de Banc. Dans ce cas, soignez 30 dégâts au Pokémon que vous avez placé sur votre Banc.",
		en: "Switch your Active Pokémon with 1 of your Benched Pokémon. If you do, heal 30 damage from the Pokémon you moved to your Bench.",
		de: "Tausche dein Aktives Pokémon gegen 1 Pokémon auf deiner Bank aus. Wenn du das machst, heile 30 Schadenspunkte bei dem Pokémon, das du auf deine Bank verschoben hast. Du kannst während deines Zuges (vor deinem Angriff) nur 1 Unterstützerkarte spielen."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 288502,
		tcgplayer: 113724
	}
}

export default card
