import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [417],
	set: Set,

	name: {
		'en-us': "Pachirisu",
		'fr-fr': "Pachirisu",
		'es-es': "Pachirisu",
		'it-it': "Pachirisu",
		'pt-br': "Pachirisu",
		'de-de': "Pachirisu"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Electricity Pouches",
			'fr-fr': "Joues Électrifiées",
			'es-es': "Mejillas Electrizantes",
			'it-it': "Sacche Elettriche",
			'pt-br': "Bolsas de Eletricidade",
			'de-de': "Elektrische Backentaschen"
		},

		effect: {
			'en-us': "This Pokémon can't be Paralyzed.",
			'fr-fr': "Ce Pokémon ne peut pas être Paralysé.",
			'es-es': "Este Pokémon no puede pasar a estar Paralizado.",
			'it-it': "Questo Pokémon non può venire paralizzato.",
			'pt-br': "Este Pokémon não pode ser Paralisado.",
			'de-de': "Dieses Pokémon kann nicht paralysiert werden."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Everyone Discharge",
			'fr-fr': "Coup d'Jus Groupé",
			'es-es': "Chispazo para Todos",
			'it-it': "Scarica Generale",
			'pt-br': "Descarga em Equipe",
			'de-de': "Vereinter Ladungsstoß"
		},

		effect: {
			'en-us': "This attack does 20 more damage for each of your Benched {L} Pokémon. This attack's damage isn't affected by Weakness.",
			'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chacun de vos Pokémon {L} de Banc. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse.",
			'es-es': "Este ataque hace 20 puntos de daño más por cada uno de tus Pokémon {L} en Banca. El daño de este ataque no se ve afectado por Debilidad.",
			'it-it': "Questo attacco infligge 20 danni in più per ogni Pokémon {L} nella tua panchina. I danni di questo attacco non sono influenzati dalla debolezza.",
			'pt-br': "Este ataque causa 20 pontos de dano a mais para cada Pokémon {L} no seu Banco. O dano deste ataque não é afetado por Fraqueza.",
			'de-de': "Diese Attacke fügt für jedes {L}-Pokémon auf deiner Bank 20 Schadenspunkte mehr zu. Der Schaden dieser Attacke wird durch Schwäche nicht verändert."
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751677,
				tcgplayer: 534538,
				cardtrader: 274321
			}
		},
	],

	illustrator: "saino misaki",

	description: {
		'en-us': "A pair may be seen rubbing their cheek pouches together in an effort to share stored electricity.",
	},

}

export default card
