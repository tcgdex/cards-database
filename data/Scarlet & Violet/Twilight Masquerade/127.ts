import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	set: Set,

	name: {
		en: "Dipplin",
		fr: "Pomdramour",
		es: "Dipplin",
		it: "Dipplin",
		pt: "Dipplin",
		de: "Sirapfel"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Dragon"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Fire"],

		name: {
			en: "Syrup Catcher",
			fr: "Attrape-Nectar",
			es: "Capturador Meloso",
			it: "Acchiappasciroppo",
			pt: "Xarope Pegajoso",
			de: "Sirupfänger"
		},

		effect: {
			en: "Switch in 1 of your opponent's Benched Pokémon to the Active Spot. This attack does 70 damage to the new Active Pokémon.",
			fr: "Envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif. Cette attaque inflige 70 dégâts au nouveau Pokémon Actif.",
			es: "Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo. Este ataque hace 70 puntos de daño al nuevo Pokémon Activo.",
			it: "Sostituisci uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva. Questo attacco infligge 70 danni al nuovo Pokémon attivo.",
			pt: "Mande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo. Este ataque causa 70 pontos de dano ao novo Pokémon Ativo.",
			de: "Wechsle 1 Pokémon von der Bank deines Gegners in die Aktive Position ein. Diese Attacke fügt dem neuen Aktiven Pokémon 70 Schadenspunkte zu."
		}
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "OKACHEKE",

	thirdParty: {
		cardmarket: 769192
	}
}

export default card