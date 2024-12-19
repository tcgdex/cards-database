import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Braviary",
		fr: "Gueriaigle",
		es: "Braviary",
		it: "Braviary",
		pt: "Braviary",
		de: "Washakwil"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	stage: "Stage1",

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
			en: "Switch in 1 of your opponent's Benched Pokémon to the Active Spot. This attack does 40 damage to the new Active Pokémon.",
			fr: "Envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif. Cette attaque inflige 40 dégâts au nouveau Pokémon Actif.",
			es: "Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo. Este ataque hace 40 puntos de daño al nuevo Pokémon Activo.",
			it: "Sostituisci uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva. Questo attacco infligge 40 danni al nuovo Pokémon attivo.",
			pt: "Mande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo. Este ataque causa 40 pontos de dano ao novo Pokémon Ativo.",
			de: "Wechsle 1 Pokémon von der Bank deines Gegners in die Aktive Position ein. Diese Attacke fügt dem neuen Aktiven Pokémon 40 Schadenspunkte zu."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Blasting Wind",
			fr: "Vent Impitoyable",
			es: "Vientos Explosivos",
			it: "Vento Distruttivo",
			pt: "Vendaval Avassalador",
			de: "Peitschender Wind"
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	},

	evolveFrom: {
		en: "Rufflet",
		fr: "Furaiglon",
		es: "Rufflet",
		it: "Rufflet",
		pt: "Rufflet",
		de: "Geronimatz"
	}
}

export default card
