import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Challenge!",
		fr: "Défi !"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Demandez à votre adversaire s'il relève le défi. S'il décline votre défi (ou si les 2 Bancs sont pleins), piochez 2 cartes. S'il relève votre défi, chacun d'entre vous cherche dans son deck autant de cartes Pokémon de base que bon lui semble et les place face cachée sur son Banc. (Un joueur ne peut pas faire cela si son Banc est plein). Lorsque vous avez tous deux fini, mélangez vos decks respectifs et dévoilez ces cartes."
	}
}

export default card
