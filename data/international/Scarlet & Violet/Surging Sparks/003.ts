import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [103],
	set: Set,

	name: {
		'en-us': "Exeggutor",
		'fr-fr': "Noadkoko",
		'es-es': "Exeggutor",
		'it-it': "Exeggutor",
		'pt-br': "Exeggutor",
		'de-de': "Kokowei"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Exeggcute",
		'fr-fr': "Noeunoeuf",
		'es-es': "Exeggcute",
		'it-it': "Exeggcute",
		'pt-br': "Exeggcute",
		'de-de': "Owei"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Barrage O'Clock",
			'fr-fr': "Heure de Pilonnage",
			'es-es': "Las Bombardeo en Punto",
			'it-it': "Ora dell'Offensiva",
			'pt-br': "Rajada Cronometrada",
			'de-de': "Stakkato-Zeit"
		},

		effect: {
			'en-us': "Flip a coin for each Energy attached to both Active Pokémon. This attack does 60 damage for each heads.",
			'fr-fr': "Lancez une pièce pour chaque Énergie attachée aux deux Pokémon Actifs. Cette attaque inflige 60 dégâts pour chaque côté face.",
			'es-es': "Lanza 1 moneda por cada Energía unida a ambos Pokémon Activos. Este ataque hace 60 puntos de daño por cada cara.",
			'it-it': "Lancia una moneta per ogni Energia assegnata a ciascuno dei Pokémon attivi. Questo attacco infligge 60 danni ogni volta che esce testa.",
			'pt-br': "Jogue uma moeda para cada Energia ligada a ambos os Pokémon Ativos. Este ataque causa 60 pontos de dano para cada cara.",
			'de-de': "Wirf 1 Münze für jede an beide Aktiven Pokémon angelegte Energie. Diese Attacke fügt 60 Schadenspunkte pro Kopf zu."
		},

		damage: "60×"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794258,
				tcgplayer: 589942
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794258,
				tcgplayer: 589942
			}
		},
	],
	
	illustrator: "Oswaldo KATO",
	
}

export default card
