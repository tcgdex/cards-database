import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Mimikyu ex",
		fr: "Mimiqui-ex",
		es: "Mimikyu ex",
		it: "Mimikyu-ex",
		pt: "Mimikyu ex",
		de: "Mimigma-ex"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 190,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Void Return",
			fr: "Retour du Néant",
			es: "Retorno Nulo",
			it: "Vuotoritorno",
			pt: "Retorno para o Vácuo",
			de: "Rückkehr in die Leere"
		},

		effect: {
			en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
			es: "Puedes cambiar este Pokémon por uno de tus Pokémon en Banca.",
			it: "Puoi scambiare questo Pokémon con uno della tua panchina.",
			pt: "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
			de: "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
		},

		damage: 30
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Energy Burst",
			fr: "Explosion d'Énergie",
			es: "Explosión de Energía",
			it: "Energiscoppio",
			pt: "Explosão de Energia",
			de: "Energieausbruch"
		},

		effect: {
			en: "This attack does 30 damage for each Energy attached to both Active Pokémon.",
			fr: "Cette attaque inflige 30 dégâts pour chaque Énergie attachée aux deux Pokémon Actifs.",
			es: "Este ataque hace 30 puntos de daño por cada Energía unida a ambos Pokémon Activos.",
			it: "Questo attacco infligge 30 danni per ogni Energia assegnata a ciascuno dei Pokémon attivi.",
			pt: "Este ataque causa 30 pontos de dano para cada Energia ligada a ambos os Pokémon Ativos.",
			de: "Diese Attacke fügt für jede an beide Aktiven Pokémon angelegte Energie 30 Schadenspunkte zu."
		},

		damage: "30×"
	}],

	retreat: 1,
	regulationMark: "G",
	illustrator: "PLANETA Yamashita"
}

export default card