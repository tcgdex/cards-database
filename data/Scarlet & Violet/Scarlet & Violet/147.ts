import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [335],
	set: Set,

	name: {
		en: "Zangoose",
		fr: "Mangriff",
		es: "Zangoose",
		it: "Zangoose",
		pt: "Zangoose",
		de: "Sengo"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Drag Off",
			fr: "Traîne",
			es: "Jalón",
			it: "Trascinato Via",
			pt: "Arrastar para Fora",
			de: "Wegzerren"
		},

		effect: {
			en: "Switch in 1 of your opponent's Benched Pokémon to the Active Spot. This attack does 30 damage to the new Active Pokémon.",
			fr: "Envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif. Cette attaque inflige 30 dégâts au nouveau Pokémon Actif.",
			es: "Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo. Este ataque hace 30 puntos de daño al nuevo Pokémon Activo.",
			it: "Sostituisci uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva. Questo attacco infligge 30 danni al nuovo Pokémon attivo.",
			pt: "Mande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo. Este ataque causa 30 pontos de dano ao novo Pokémon Ativo.",
			de: "Wechsle 1 Pokémon von der Bank deines Gegners in die Aktive Position ein. Diese Attacke fügt dem neuen Aktiven Pokémon 30 Schadenspunkte zu."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Slashing Claw",
			fr: "Griffe Taillante",
			es: "Garra Cuchillazo",
			it: "Artigli Laceranti",
			pt: "Garra Cortadora",
			de: "Schlitzende Klaue"
		},

		damage: 80
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card