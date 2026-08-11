import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [778],
	set: Set,

	name: {
		'en-us': "Mimikyu ex",
		'fr-fr': "Mimiqui-ex",
		'es-es': "Mimikyu ex",
		'it-it': "Mimikyu-ex",
		'pt-br': "Mimikyu ex",
		'de-de': "Mimigma-ex"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 190,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Void Return",
			'fr-fr': "Retour du Néant",
			'es-es': "Retorno Nulo",
			'it-it': "Vuotoritorno",
			'pt-br': "Retorno para o Vácuo",
			'de-de': "Rückkehr in die Leere"
		},

		effect: {
			'en-us': "You may switch this Pokémon with 1 of your Benched Pokémon.",
			'fr-fr': "Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
			'es-es': "Puedes cambiar este Pokémon por uno de tus Pokémon en Banca.",
			'it-it': "Puoi scambiare questo Pokémon con uno della tua panchina.",
			'pt-br': "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
			'de-de': "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
		},

		damage: 30
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Energy Burst",
			'fr-fr': "Explosion d'Énergie",
			'es-es': "Explosión de Energía",
			'it-it': "Energiscoppio",
			'pt-br': "Explosão de Energia",
			'de-de': "Energieausbruch"
		},

		effect: {
			'en-us': "This attack does 30 damage for each Energy attached to both Active Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts pour chaque Énergie attachée aux deux Pokémon Actifs.",
			'es-es': "Este ataque hace 30 puntos de daño por cada Energía unida a ambos Pokémon Activos.",
			'it-it': "Questo attacco infligge 30 danni per ogni Energia assegnata a ciascuno dei Pokémon attivi.",
			'pt-br': "Este ataque causa 30 pontos de dano para cada Energia ligada a ambos os Pokémon Ativos.",
			'de-de': "Diese Attacke fügt für jede an beide Aktiven Pokémon angelegte Energie 30 Schadenspunkte zu."
		},

		damage: "30×"
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
	suffix: "ex",
	illustrator: "PLANETA Yamashita",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 701130,
				tcgplayer: 487435
			},
		},
		{
			type: "holo",
			size: "jumbo",
			thirdParty: {
				cardmarket: 701131,
				tcgplayer: 487439
			}
		},
		{
			type: "holo",
			stamp: ["player-rewards-program"],
			thirdParty: {
				cardmarket: 730153,
				tcgplayer: 513798
			}
		}
	],
}

export default card
