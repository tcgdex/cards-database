import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [27],
	set: Set,

	name: {
		'en-us': "Sandshrew",
		'fr-fr': "Sabelette",
		'es-es': "Sandshrew",
		'it-it': "Sandshrew",
		'pt-br': "Sandshrew",
		'de-de': "Sandan"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Rollout",
			'fr-fr': "Roulade",
			'es-es': "Rodar",
			'it-it': "Rotolamento",
			'pt-br': "Rolagem",
			'de-de': "Walzer"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Double Scratch",
			'fr-fr': "Double Écorchure",
			'es-es': "Arañazo Doble",
			'it-it': "Doppio Graffio",
			'pt-br': "Arranhão Duplo",
			'de-de': "Doppelkratzer"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 20 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
			'es-es': "Lanza 2 monedas. Este ataque hace 20 puntos de daño por cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 20 pontos de dano para cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu."
		},

		damage: "20×"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "No matter how high a place it falls from, this Pokémon can save itself by rolling into a ball and bouncing.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769271,
				tcgplayer: 550141
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769271,
				tcgplayer: 550141
			}
		},
	],

	illustrator: "Tetsu Kayama",

}

export default card