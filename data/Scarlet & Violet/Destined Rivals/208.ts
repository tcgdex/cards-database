import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Pachirisu",
		fr: "Pachirisu",
		de: "Pachirisu",
		it: "Pachirisu",
		es: "Pachirisu",
		pt: "Pachirisu"
	},

	illustrator: "zig",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Electricity Pouches",
			fr: "Joues Électrifiées",
			de: "Elektrische Backentaschen",
			it: "Sacche Elettriche",
			es: "Mejillas Electrizantes",
			pt: "Bolsas de Eletricidade"
		},

		effect: {
			en: "This Pokémon can't be Paralyzed.",
			fr: "Ce Pokémon ne peut pas être Paralysé.",
			de: "Dieses Pokémon kann nicht paralysiert werden.",
			it: "Questo Pokémon non può venire paralizzato.",
			es: "Este Pokémon no puede pasar a estar Paralizado.",
			pt: "Este Pokémon não pode ser Paralisado."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Everyone Discharge",
			fr: "Coup d'Jus Groupé",
			de: "Vereinter Ladungsstoß",
			it: "Scarica Generale",
			es: "Chispazo para Todos",
			pt: "Descarga em Equipe"
		},

		effect: {
			en: "This attack does 20 more damage for each of your Benched {L} Pokémon. This attack's damage isn't affected by Weakness.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chacun de vos Pokémon {L} de Banc. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse.",
			de: "Diese Attacke fügt für jedes {L}-Pokémon auf deiner Bank 20 Schadenspunkte mehr zu. Der Schaden dieser Attacke wird durch Schwäche nicht verändert.",
			it: "Questo attacco infligge 20 danni in più per ogni Pokémon {L} nella tua panchina. I danni di questo attacco non sono influenzati dalla debolezza.",
			es: "Este ataque hace 20 puntos de daño más por cada uno de tus Pokémon {L} en Banca. El daño de este ataque no se ve afectado por Debilidad.",
			pt: "Este ataque causa 20 pontos de dano a mais para cada Pokémon {L} no seu Banco. O dano deste ataque não é afetado por Fraqueza."
		},

		damage: "10+"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card