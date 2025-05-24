import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [359],
	set: Set,

	name: {
		en: "Absol",
		fr: "Absol",
		es: "Absol",
		it: "Absol",
		pt: "Absol",
		de: "Absol"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Eri Yamaki",

	description: {
		en: "The elderly call it the disaster Pokémon and detest it, but interest in its power to predict disasters is on the rise."
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Drag Off",
			fr: "Traîne",
			de: "Wegzerren",
			es: "Jalón",
			pt: "Arrastar para Fora",
			it: "Trascinato Via"
		},

		effect: {
			en: "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon. This attack does 30 damage to the new Active Pokémon.",
			fr: "Échangez l'un des Pokémon de Banc de votre adversaire contre son Pokémon Actif. Cette attaque inflige 30 dégâts au nouveau Pokémon Actif.",
			de: "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus. Diese Attacke fügt dem neuen Aktiven Pokémon 30 Schadenspunkte zu.",
			es: "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo. Este ataque hace 30 puntos de daño al nuevo Pokémon Activo.",
			pt: "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a). Este ataque causa 30 pontos de dano ao novo Pokémon Ativo.",
			it: "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo. Questo attacco infligge 30 danni al nuovo Pokémon attivo."
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Slash",
			fr: "Tranche",
			de: "Schlitzer",
			es: "Cuchillada",
			pt: "Talho",
			it: "Lacerazione"
		},

		damage: 80
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card