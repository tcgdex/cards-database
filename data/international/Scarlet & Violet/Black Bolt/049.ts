import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [534],
	set: Set,

	name: {
		'en-us': "Conkeldurr",
		'fr-fr': "Bétochef",
		'de-de': "Meistagrif",
		'it-it': "Conkeldurr",
		'pt-br': "Conkeldurr",
		'es-es': "Conkeldurr",
		'es-mx': "Conkeldurr"
	},

	illustrator: "Shinya Mizuno",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Gurdurr",
		'fr-fr': "Ouvrifier",
		'de-de': "Strepoli",
		'it-it': "Gurdurr",
		'pt-br': "Gurdurr",
		'es-es': "Gurdurr",
		'es-mx': "Gurdurr"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Craftsmanship",
			'fr-fr': "Maître d'Œuvre",
			'de-de': "Handwerkskunst",
			'it-it': "Maestria",
			'pt-br': "Manufatura",
			'es-es': "Maestro de Obras",
			'es-mx': "Destreza Constructiva"
		},

		effect: {
			'en-us': "This Pokémon gets +40 HP for each {F} Energy attached to it.",
			'fr-fr': "Ce Pokémon reçoit +40 PV pour chaque Énergie {F} qui lui est attachée.",
			'de-de': "Dieses Pokémon erhält für jede an es angelegte {F}-Energie +40 KP.",
			'it-it': "Questo Pokémon ha 40 PS in più per ogni Energia {F} a esso assegnata.",
			'pt-br': "Este Pokémon recebe 40 PS a mais para cada Energia {F} ligada a ele.",
			'es-es': "Este Pokémon obtiene 40 PS más por cada Energía {F} unida a él.",
			'es-mx': "Este Pokémon obtiene 40 PS más por cada Energía {F} unida a él."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Swing Around",
			'fr-fr': "Balançoire",
			'de-de': "Gegenschwung",
			'it-it': "Giravolta",
			'pt-br': "Balanço",
			'es-es': "Dar Vueltas",
			'es-mx': "Zarandeo"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 50 more damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 50 dégâts supplémentaires pour chaque côté face.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 50 Schadenspunkte mehr pro Kopf zu.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 50 danni in più ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 50 pontos de dano a mais para cada cara.",
			'es-es': "Lanza 2 monedas. Este ataque hace 50 puntos de daño más por cada cara.",
			'es-mx': "Lanza 2 monedas. Este ataque hace 50 puntos de daño más por cada cara."
		},

		damage: "100+"
	}],

	retreat: 3,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836007,
				tcgplayer: 642501
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 836007,
				tcgplayer: 642501
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836375,
				tcgplayer: 642743
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836376,
				tcgplayer: 642670
			}
		}
	]
}

export default card
