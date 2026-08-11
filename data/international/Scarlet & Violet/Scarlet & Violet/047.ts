import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [419],
	set: Set,

	name: {
		'en-us': "Floatzel",
		'fr-fr': "Mustéflott",
		'es-es': "Floatzel",
		'it-it': "Floatzel",
		'pt-br': "Floatzel",
		'de-de': "Bojelin"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Buizel",
		'fr-fr': "Mustébouée"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Hydro Pump",
			'fr-fr': "Hydrocanon",
			'es-es': "Hidrobomba",
			'it-it': "Idropompa",
			'pt-br': "Jato d'Água",
			'de-de': "Hydropumpe"
		},

		effect: {
			'en-us': "This attack does 20 more damage for each {W} Energy attached to this Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie {W} attachée à ce Pokémon.",
			'es-es': "Este ataque hace 20 puntos de daño más por cada Energía {W} unida a este Pokémon.",
			'it-it': "Questo attacco infligge 20 danni in più per ogni Energia {W} assegnata a questo Pokémon.",
			'pt-br': "Este ataque causa 20 pontos de dano a mais para cada Energia {W} ligada a este Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte {W}-Energie 20 Schadenspunkte mehr zu."
		},

		damage: "50+"
	}],

	weaknesses: [
		{
			type: "Lightning",
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

	illustrator: "Gemi",

	description: {
		'en-us': "With its flotation sac inflated, it can carry people on its back. It deflates the sac before it dives.",
	},

	thirdParty: {
        cardmarket: 702342,
        tcgplayer: 487893
    }
}

export default card