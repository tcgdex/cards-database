import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Pokémon Personality Test",
		fr: "Test de personnalité des Pokémon"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Placez une carte Évolution de votre main devant vous, face cachée. Votre adversaire doit deviner s'il s'agit d'une carte Pokémon lumineux, Pokémon obscur ou ni l'une ni l'autre. Retournez la carte. Si votre adversaire a vu juste, il pioche 3 cartes. S'il s'est trompé, vous piochez 3 cartes. Dans tous les cas, replacez la carte dans votre main."
	}
}

export default card
