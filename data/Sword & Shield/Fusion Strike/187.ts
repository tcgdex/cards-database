import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [777],
	set: Set,

	name: {
		en: "Togedemaru",
		fr: "Togedemaru",
		es: "Togedemaru",
		it: "Togedemaru",
		pt: "Togedemaru",
		de: "Togedemaru"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Metal"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Oswaldo KATO",

	description: {
		en: "When it's in trouble, it curls up into a ball, makes its fur spikes stand on end, and then discharges electricity indiscriminately."
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Let's All Rollout",
			fr: "Roulade Collégiale",
			de: "Gemeinsamer Walzer",
			es: "Todos a Rodar",
			pt: "Vamos Botar pra Rolar",
			it: "Rotolamento Collettivo"
		},

		damage: "20×",

		effect: {
			en: "This attack does 20 damage for each of your Benched Pokémon that has the Let's All Rollout attack.",
			fr: "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon de Banc ayant l'attaque Roulade Collégiale.",
			de: "Diese Attacke fügt für jedes Pokémon auf deiner Bank, das die Attacke Gemeinsamer Walzer hat, 20 Schadenspunkte zu.",
			es: "Este ataque hace 20 puntos de daño por cada uno de tus Pokémon en Banca que tenga el ataque Todos a Rodar.",
			pt: "Este ataque causa 20 pontos de dano para cada um dos seus Pokémon no Banco que tiver o ataque Vamos Botar pra Rolar.",
			it: "Questo attacco infligge 20 danni per ogni Pokémon nella tua panchina che ha l'attacco Rotolamento Collettivo."
		}
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			en: "Rolling Attack",
			fr: "Attaque Qui Roule",
			de: "Rollender Angriff",
			es: "Ataque Giro",
			pt: "Golpe Rolador",
			it: "Attacco Rotolante"
		},

		damage: 50
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582815
	}
}

export default card