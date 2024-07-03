import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [417],
	set: Set,

	name: {
		en: "Pachirisu",
		fr: "Pachirisu",
		es: "Pachirisu",
		it: "Pachirisu",
		pt: "Pachirisu",
		de: "Pachirisu"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Electricity Pouches",
			fr: "Joues Électrifiées",
			es: "Mejillas Electrizantes",
			it: "Sacche Elettriche",
			pt: "Bolsas de Eletricidade",
			de: "Elektrische Backentaschen"
		},

		effect: {
			en: "This Pokémon can't be Paralyzed.",
			fr: "Ce Pokémon ne peut pas être Paralysé.",
			es: "Este Pokémon no puede pasar a estar Paralizado.",
			it: "Questo Pokémon non può venire paralizzato.",
			pt: "Este Pokémon não pode ser Paralisado.",
			de: "Dieses Pokémon kann nicht paralysiert werden."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Everyone Discharge",
			fr: "Coup d'Jus Groupé",
			es: "Chispazo para Todos",
			it: "Scarica Generale",
			pt: "Descarga em Equipe",
			de: "Vereinter Ladungsstoß"
		},

		effect: {
			en: "This attack does 20 more damage for each of your Benched Lightning Pokémon. This attack's damage isn't affected by Weakness.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chacun de vos Pokémon Lightning de Banc. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse.",
			es: "Este ataque hace 20 puntos de daño más por cada uno de tus Pokémon Lightning en Banca. El daño de este ataque no se ve afectado por Debilidad.",
			it: "Questo attacco infligge 20 danni in più per ogni Pokémon Lightning nella tua panchina. I danni di questo attacco non sono influenzati dalla debolezza.",
			pt: "Este ataque causa 20 pontos de dano a mais para cada Pokémon Lightning no seu Banco. O dano deste ataque não é afetado por Fraqueza.",
			de: "Diese Attacke fügt für jedes Lightning-Pokémon auf deiner Bank 20 Schadenspunkte mehr zu. Der Schaden dieser Attacke wird durch Schwäche nicht verändert."
		},

		damage: "10+"
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card