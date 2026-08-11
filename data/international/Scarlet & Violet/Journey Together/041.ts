import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [321],
	set: Set,

	name: {
		'en-us': "Wailord",
		'fr-fr': "Wailord",
		'es-es': "Wailord",
		'de-de': "Wailord",
		'it-it': "Wailord",
		'pt-br': "Wailord",
		'es-mx': "Wailord"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 240,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Wailmer",
		'fr-fr': "Wailmer",
		'es-es': "Wailmer",
		'de-de': "Wailmer",
		'it-it': "Wailmer",
		'pt-br': "Wailmer",
		'es-mx': "Wailmer"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Hydro Pump",
			'fr-fr': "Hydrocanon",
			'es-es': "Hidrobomba",
			'de-de': "Hydropumpe",
			'it-it': "Idropompa",
			'pt-br': "Jato d'Água",
			'es-mx': "Hidrobomba"
		},

		effect: {
			'en-us': "This attack does 50 more damage for each {W} Energy attached to this Pokémon.",
			'fr-fr': "Cette attaque inflige 50 dégâts supplémentaires pour chaque Énergie {W} attachée à ce Pokémon.",
			'es-es': "Este ataque hace 50 puntos de daño más por cada Energía {W} unida a este Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte {W}-Energie 50 Schadenspunkte mehr zu.",
			'it-it': "Questo attacco infligge 50 danni in più per ogni Energia {W} assegnata a questo Pokémon.",
			'pt-br': "Este ataque causa 50 pontos de dano a mais para cada Energia {W} ligada a este Pokémon.",
			'es-mx': "Este ataque hace 50 puntos de daño más por cada Energía Water unida a este Pokémon."
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "I",
	illustrator: "Takeshi Nakamura",

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817193,
				tcgplayer: 623468
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 817193,
				tcgplayer: 623468
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 851017,
			}
		},
	],
}

export default card
