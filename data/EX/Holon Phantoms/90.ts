import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Rare Candy",
		fr: "Super bonbon",
		de: "Sonderbonbon"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Choisissez 1 des Pokémon de base que vous avez en jeu. Si vous possédez dans votre main une carte de Niveau 1 ou de Niveau 2 qui évolue de ce Pokémon, placez cette carte sur le Pokémon de base (vous le faites ainsi évoluer).",
		de: "Wähle 1 deiner Basis-Pokémon im Spiel. Falls du eine Phase 1 oder Phase 2 Karte auf der Hand hast, die sich aus diesem Pokémon entwickelt, lege sie auf das Basis-Pokémon. (Das zählt als Entwickeln des gewählten Pokémon.)"
	},

	thirdParty: {
		cardmarket: 277060,
		tcgplayer: 88591
	}
}

export default card
