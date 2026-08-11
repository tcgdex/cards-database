import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [777],
	set: Set,

	name: {
		'en-us': "Togedemaru",
		'fr-fr': "Togedemaru",
		'es-es': "Togedemaru",
		'it-it': "Togedemaru",
		'pt-br': "Togedemaru",
		'de-de': "Togedemaru"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Metal"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Oswaldo KATO",

	description: {
		'en-us': "When it's in trouble, it curls up into a ball, makes its fur spikes stand on end, and then discharges electricity indiscriminately."
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Let's All Rollout",
			'fr-fr': "Roulade Collégiale",
			'de-de': "Gemeinsamer Walzer",
			'es-es': "Todos a Rodar",
			'pt-br': "Vamos Botar pra Rolar",
			'it-it': "Rotolamento Collettivo"
		},

		damage: "20×",

		effect: {
			'en-us': "This attack does 20 damage for each of your Benched Pokémon that has the Let's All Rollout attack.",
			'fr-fr': "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon de Banc ayant l'attaque Roulade Collégiale.",
			'de-de': "Diese Attacke fügt für jedes Pokémon auf deiner Bank, das die Attacke Gemeinsamer Walzer hat, 20 Schadenspunkte zu.",
			'es-es': "Este ataque hace 20 puntos de daño por cada uno de tus Pokémon en Banca que tenga el ataque Todos a Rodar.",
			'pt-br': "Este ataque causa 20 pontos de dano para cada um dos seus Pokémon no Banco que tiver o ataque Vamos Botar pra Rolar.",
			'it-it': "Questo attacco infligge 20 danni per ogni Pokémon nella tua panchina che ha l'attacco Rotolamento Collettivo."
		}
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Rolling Attack",
			'fr-fr': "Attaque Qui Roule",
			'de-de': "Rollender Angriff",
			'es-es': "Ataque Giro",
			'pt-br': "Golpe Rolador",
			'it-it': "Attacco Rotolante"
		},

		damage: 50
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582815,
				tcgplayer: 253336
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582815,
				tcgplayer: 253336
			}
		},
	],
}

export default card
