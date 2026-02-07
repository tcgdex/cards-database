import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [615],
	set: Set,

	name: {
		en: "Cryogonal",
		fr: "Hexagel",
		de: "Frigometri",
		it: "Cryogonal",
		pt: "Cryogonal",
		es: "Cryogonal",
		'es-mx': "Cryogonal"
	},

	illustrator: "rika",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Drag Off",
			fr: "Traîne",
			de: "Wegzerren",
			it: "Trascinato Via",
			pt: "Arrastar para Fora",
			es: "Jalón",
			'es-mx': "Jaloneo"
		},

		effect: {
			en: "Switch in 1 of your opponent's Benched Pokémon to the Active Spot. This attack does 20 damage to the new Active Pokémon.",
			fr: "Envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif. Cette attaque inflige 20 dégâts au nouveau Pokémon Actif.",
			de: "Wechsle 1 Pokémon von der Bank deines Gegners in die Aktive Position ein. Diese Attacke fügt dem neuen Aktiven Pokémon 20 Schadenspunkte zu.",
			it: "Sostituisci uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva. Questo attacco infligge 20 danni al nuovo Pokémon attivo.",
			pt: "Mande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo. Este ataque causa 20 pontos de dano ao novo Pokémon Ativo.",
			es: "Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo. Este ataque hace 20 puntos de daño al nuevo Pokémon Activo.",
			'es-mx': "Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo. Este ataque hace 20 puntos de daño al nuevo Pokémon Activo."
		}
	}, {
		cost: ["Water"],

		name: {
			en: "Icicle",
			fr: "Concrétion Glacée",
			de: "Eiszapfen",
			it: "Stalattite",
			pt: "Pingente de Gelo",
			es: "Témpano",
			'es-mx': "Témpano de Hielo"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836129
			}
		},
	]
}

export default card
