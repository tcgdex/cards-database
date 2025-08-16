import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [242],
	set: Set,

	name: {
		en: "Blissey",
		fr: "Leuphorie",
		es: "Blissey",
		it: "Blissey",
		pt: "Blissey",
		de: "Heiteira"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	evolveFrom: {
		en: "Chansey",
		fr: "Leveinard",
		es: "Chansey",
		it: "Chansey",
		pt: "Chansey",
		de: "Chaneira"
	},

	stage: "Stage1",
	retreat: 2,
	regulationMark: "E",
	illustrator: "Mizue",

	description: {
		en: "This Pokémon is overflowing with love. Only Chansey that share a strong bond with their Trainer can evolve, so people say."
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Expert in Roundness",
			fr: "Expert en Rondeur",
			de: "Rundheitsexperte",
			es: "As del Rodamiento",
			pt: "Mestre em Redondice",
			it: "Specialista di Rotondità"
		},

		effect: {
			en: "Prevent all damage done to each of your Pokémon that has the Let's All Rollout attack by attacks from your opponent's Pokémon VMAX.",
			fr: "Évitez tous les dégâts infligés à chacun de vos Pokémon ayant l'attaque Roulade Collégiale par les attaques des Pokémon-VMAX de votre adversaire.",
			de: "Verhindere allen Schaden durch Attacken von Pokémon-VMAX deines Gegners, der jedem deiner Pokémon zugefügt wird, das die Attacke Gemeinsamer Walzer hat.",
			es: "Evita todo el daño infligido a cada uno de tus Pokémon que tenga el ataque Todos a Rodar por ataques de los Pokémon VMAX de tu rival.",
			pt: "Previna todo o dano causado a cada um dos seus Pokémon que tiver o ataque Vamos Botar pra Rolar por ataques dos Pokémon VMAX do seu oponente.",
			it: "Previeni tutti i danni inflitti ai tuoi Pokémon che hanno l'attacco Rotolamento Collettivo dagli attacchi dei Pokémon-VMAX del tuo avversario."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

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
	},

	thirdParty: {
		cardmarket: 582878,
		tcgplayer: 253297
	}
}

export default card