import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Fennel",
		'fr-fr': "Oryse",
		'de-de': "Vivian",
		'it-it': "Zania",
		'pt-br': "Fennel",
		'es-es': "Oryza",
		'es-mx': "Fennel"
	},

	illustrator: "Yuu Nishida",
	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'en-us': "Heal 40 damage from each of your Pokémon.",
		'fr-fr': "Soignez 40 dégâts de chacun de vos Pokémon.",
		'de-de': "Heile 40 Schadenspunkte bei jedem deiner Pokémon.",
		'it-it': "Cura ciascuno dei tuoi Pokémon da 40 danni.",
		'pt-br': "Cure 40 pontos de dano de cada um dos seus Pokémon.",
		'es-es': "Cura 40 puntos de daño a cada uno de tus Pokémon.",
		'es-mx': "Cura 40 puntos de daño a cada uno de tus Pokémon."
	},

	trainerType: "Supporter",
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836236,
				tcgplayer: 642615
			}
		},
	]
}

export default card
