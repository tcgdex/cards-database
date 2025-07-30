import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [27],
	set: Set,

	name: {
		en: "Sandshrew",
		fr: "Sabelette",
		es: "Sandshrew",
		it: "Sandshrew",
		pt: "Sandshrew",
		de: "Sandan"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Yuka Morii",

	description: {
		en: "When its skin gets wrinkled from moisture, it heads for a volcano. It lies flat on a spot with a lot of geothermal heat and dries itself out."
	},

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Dig It Up",
			fr: "Dénicher",
			de: "Buddeln",
			es: "Socavar",
			pt: "Desaterrar",
			it: "Rinvenimento"
		},

		effect: {
			en: "Look at the top card of your deck. You may discard that card.",
			fr: "Regardez la carte du dessus de votre deck. Vous pouvez défausser cette carte-là.",
			de: "Schau dir die oberste Karte deines Decks an. Du kannst jene Karte auf deinen Ablagestapel legen.",
			es: "Mira la primera carta de tu baraja. Puedes descartar esa carta.",
			pt: "Olhe a carta de cima do seu baralho. Você pode descartar aquela carta.",
			it: "Guarda la prima carta del tuo mazzo. Puoi scartare quella carta."
		}
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
	},

	thirdParty: {
		cardmarket: 582709
	}
}

export default card