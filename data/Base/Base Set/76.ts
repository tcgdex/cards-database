import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Pokémon Breeder",
		fr: "Éleveur de Pokémon"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Placez une carte Évolution de Niveau 2 de votre main sur le Pokémon de base correspondant. Vous ne pouvez jouer cette carte que quand il vous serait possible de faire évoluer ce Pokémon de toute façon."
	}
}

export default card
