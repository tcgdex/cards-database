import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [39],
	set: Set,

	name: {
		en: "Jigglypuff",
		fr: "Rondoudou",
		es: "Jigglypuff",
		it: "Jigglypuff",
		pt: "Jigglypuff",
		de: "Pummeluff"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Saya Tsuruta",

	description: {
		en: "The songs they sing are totally different depending on the region they live in. Some even sound like they're shouting!"
	},

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Pound",
			fr: "Écras'Face",
			de: "Klaps",
			es: "Destructor",
			pt: "Pancada",
			it: "Botta"
		},

		damage: 20
	}, {
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
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card