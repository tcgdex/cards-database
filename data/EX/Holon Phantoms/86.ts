import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Holon Fossil",
		fr: "Fossile Holon",
		de: "Holon-Fossil"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Lancez une pièce. Si c'est face, cherchez dans votre deck un Amonita, Kabuto, Ptera, Ptera ex, Lilia ou Anorith et placez-le sur votre Banc. Ensuite, mélangez votre deck. Si c'est pile, placez un Amonita, Kabuto, Ptera, Ptera ex, Lilia ou Anorith de votre main sur votre Banc. Traitez le nouveau Pokémon comme un Pokémon de base.",
		de: "Wirf 1 Münze. Bei \"Kopf\" durchsuche dein Deck nach einem Amonitas, Kabuto, Aerodactyl, Aerodactyl ex, Liliep oder Anorith und lege es auf deine Bank. Mische dein Deck danach. Bei \"Zahl\" lege ein Amonitas, Kabuto, Aerodactyl, Aerodactyl ex, Liliep oder Anorith von deiner Hand auf deine Bank. Behandle das neue Pokémon auf der Bank als Basis-Pokémon."
	},

	thirdParty: {
		cardmarket: 277056,
		tcgplayer: 86143
	}
}

export default card
