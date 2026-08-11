import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [286],
	set: Set,

	name: {
		'en-us': "Breloom",
		'fr-fr': "Chapignon",
		'de-de': "Kapilz",
		'it-it': "Breloom",
		'es-es': "Breloom",
		'pt-br': "Breloom",
		'es-mx': "Breloom"
	},

	illustrator: "nisimono",
	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Shroomish",
		'fr-fr': "Balignon",
		'de-de': "Knilz",
		'it-it': "Shroomish",
		'es-es': "Shroomish",
		'pt-br': "Shroomish",
		'es-mx': "Shroomish"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Damage Rush",
			'fr-fr': "Charge Destructrice",
			'de-de': "Schadensrausch",
			'it-it': "Sfuriadanni",
			'es-es': "Embestida Dañina",
			'pt-br': "Fúria Destruidora",
			'es-mx': "Embestida Dañina"
		},

		effect: {
			'en-us': "Flip a coin until you get tails. This attack does 50 more damage for each heads.",
			'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 50 dégâts supplémentaires pour chaque côté face.",
			'de-de': "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 50 Schadenspunkte mehr pro Kopf zu.",
			'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 50 danni in più ogni volta che esce testa.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 50 puntos de daño más por cada cara.",
			'pt-br': "Jogue uma moeda até sair coroa. Este ataque causa 50 pontos de dano a mais para cada cara.",
			'es-mx': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 50 puntos de daño más por cada cara."
		},

		damage: "30+"
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Mega Drain",
			'fr-fr': "Méga-Sangsue",
			'de-de': "Megasauger",
			'it-it': "Megassorbimento",
			'es-es': "Megaagotar",
			'pt-br': "Megadreno",
			'es-mx': "Megadrenado"
		},

		effect: {
			'en-us': "Heal 30 damage from this Pokémon.",
			'fr-fr': "Soignez 30 dégâts de ce Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon.",
			'it-it': "Cura questo Pokémon da 30 danni.",
			'es-es': "Cura 30 puntos de daño a este Pokémon.",
			'pt-br': "Cure 30 pontos de dano deste Pokémon.",
			'es-mx': "Cura 30 puntos de daño a este Pokémon."
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825880,
				tcgplayer: 632834
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825880,
				tcgplayer: 632834
			}
		},
	],
}

export default card
