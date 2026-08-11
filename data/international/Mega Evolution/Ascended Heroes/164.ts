import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Larry's Dudunsparce ex",
		'fr-fr': "Deusolourdo-ex d'Okuba",
		'es-es': "Dudunsparce ex de Laureano",
		'es-mx': "Dudunsparce ex de Laureano",
		'de-de': "Aokis Dummimisel-ex",
		'it-it': "Dudunsparce-ex di Ubaldo",
		'pt-br': "Dudunsparce ex do Lauro"
	},

	evolveFrom: {
		'en-us': "Larry's Dunsparce",
		'fr-fr': "Insolourdo d'Okuba",
		'es-es': "Dunsparce de Laureano",
		'es-mx': "Dunsparce de Laureano",
		'de-de': "Aokis Dummisel",
		'it-it': "Dunsparce di Ubaldo",
		'pt-br': "Dunsparce do Lauro",
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 270,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Work Rush",
			'fr-fr': "Ruée Travailleuse",
			'es-es': "Trabajo Apresurado",
			'es-mx': "Mucha Chamba",
			'de-de': "Arbeitsrausch",
			'it-it': "Frenesia Lavorativa",
			'pt-br': "Carga de Trabalho"
		},

		effect: {
			'en-us': "Flip a coin for each Energy attached to this Pokémon. This attack does 80 damage for each heads.",
			'fr-fr': "Lancez une pièce pour chaque Énergie attachée à ce Pokémon. Cette attaque inflige 80 dégâts pour chaque côté face.",
			'es-es': "Lanza 1 moneda por cada Energía unida a este Pokémon. Este ataque hace 80 puntos de daño por cada cara.",
			'es-mx': "Lanza 1 moneda por cada Energía unida a este Pokémon. Este ataque hace 80 puntos de daño por cada cara.",
			'de-de': "Wirf 1 Münze für jede an dieses Pokémon angelegte Energie. Diese Attacke fügt 80 Schadenspunkte pro Kopf zu.",
			'it-it': "Lancia una moneta per ogni Energia assegnata a questo Pokémon. Questo attacco infligge 80 danni ogni volta che esce testa.",
			'pt-br': "Jogue uma moeda para cada Energia ligada a este Pokémon. Este ataque causa 80 pontos de dano para cada cara."
		},

		damage: "80×"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869775,
				tcgplayer: 675976
			}
		}
	],
}

export default card