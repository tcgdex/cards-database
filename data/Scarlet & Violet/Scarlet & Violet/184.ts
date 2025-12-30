import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		en: "Picnic Basket",
		fr: "Panier de Pique-Nique",
		es: "Cesta de Pícnic",
		it: "Cestino da Picnic",
		pt: "Cesta de Piquenique",
		de: "Picknickkorb"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Heal 30 damage from each Pokémon (both yours and your opponent's).",
		fr: "Soignez 30 dégâts de chacun des Pokémon (les vôtres et ceux de votre adversaire).",
		es: "Cura 30 puntos de daño a cada Pokémon (tanto tuyos como de tu rival).",
		it: "Cura tutti i Pokémon, sia tuoi che del tuo avversario, da 30 danni.",
		pt: "Cure 30 pontos de dano de cada Pokémon (seus e do seu oponente).",
		de: "Heile 30 Schadenspunkte bei jedem Pokémon (deinen und denen deines Gegners)."
	},

	trainerType: "Item",
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "OKACHEKE",

	thirdParty: {
        cardmarket: 702480,
        tcgplayer: 488090
    }
}

export default card