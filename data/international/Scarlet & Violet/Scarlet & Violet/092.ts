import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [670],
	set: Set,

	name: {
		'en-us': "Floette",
		'fr-fr': "Floette",
		'es-es': "Floette",
		'it-it': "Floette",
		'pt-br': "Floette",
		'de-de': "Floette"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Flabébé",
		'fr-fr': "Flabébé"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Magical Leaf",
			'fr-fr': "Feuille Magik",
			'es-es': "Hoja Mágica",
			'it-it': "Fogliamagica",
			'pt-br': "Folha Mágica",
			'de-de': "Zauberblatt"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 30 more damage, and heal 30 damage from this Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires et vous soignez 30 dégâts de ce Pokémon.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más y cura 30 puntos de daño a este Pokémon.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più e curi questo Pokémon da 30 danni.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 30 pontos de dano a mais, e cure 30 pontos de dano deste Pokémon.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu, und du heilst 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: "30+"
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "saino misaki",

	description: {
		'en-us': "This Pokémon uses red wavelengths of light to pour its own energy into flowers and draw forth their latent potential.",
	},

	thirdParty: {
        cardmarket: 702388,
        tcgplayer: 487959
    }
}

export default card