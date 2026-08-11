import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [39],
	set: Set,

	name: {
		'en-us': "Jigglypuff",
		'fr-fr': "Rondoudou",
		'es-es': "Jigglypuff",
		'it-it': "Jigglypuff",
		'pt-br': "Jigglypuff",
		'de-de': "Pummeluff"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Saya Tsuruta",

	description: {
		'en-us': "The songs they sing are totally different depending on the region they live in. Some even sound like they're shouting!"
	},

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Pound",
			'fr-fr': "Écras'Face",
			'de-de': "Klaps",
			'es-es': "Destructor",
			'pt-br': "Pancada",
			'it-it': "Botta"
		},

		damage: 20
	}, {
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
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582601,
				tcgplayer: 253268
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582601,
				tcgplayer: 253268
			}
		},
	],
}

export default card
