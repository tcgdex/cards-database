import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Picnic Basket",
		'fr-fr': "Panier de Pique-Nique",
		'es-es': "Cesta de Pícnic",
		'it-it': "Cestino da Picnic",
		'pt-br': "Cesta de Piquenique",
		'de-de': "Picknickkorb"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Heal 30 damage from each Pokémon (both yours and your opponent's).",
		'fr-fr': "Soignez 30 dégâts de chacun des Pokémon (les vôtres et ceux de votre adversaire).",
		'es-es': "Cura 30 puntos de daño a cada Pokémon (tanto tuyos como de tu rival).",
		'it-it': "Cura tutti i Pokémon, sia tuoi che del tuo avversario, da 30 danni.",
		'pt-br': "Cure 30 pontos de dano de cada Pokémon (seus e do seu oponente).",
		'de-de': "Heile 30 Schadenspunkte bei jedem Pokémon (deinen und denen deines Gegners)."
	},

	trainerType: "Item",
	regulationMark: "G",

	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],

	illustrator: "OKACHEKE",

	thirdParty: {
        cardmarket: 702480,
        tcgplayer: 488090
    }
}

export default card