import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Primeape",
		fr: "Colossinge",
		de: "Rasaff",
		it: "Primeape",
		es: "Primeape",
		pt: "Primeape",
		'es-mx': "Primeape"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Drag Off",
			fr: "Traîne",
			de: "Wegzerren",
			it: "Trascinato Via",
			es: "Jalón",
			pt: "Arrastar para Fora",
			'es-mx': "Jaloneo"
		},

		effect: {
			en: "Switch in 1 of your opponent's Benched Pokémon to the Active Spot. This attack does 30 damage to the new Active Pokémon.",
			fr: "Envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif. Cette attaque inflige 30 dégâts au nouveau Pokémon Actif.",
			de: "Wechsle 1 Pokémon von der Bank deines Gegners in die Aktive Position ein. Diese Attacke fügt dem neuen Aktiven Pokémon 30 Schadenspunkte zu.",
			it: "Sostituisci uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva. Questo attacco infligge 30 danni al nuovo Pokémon attivo.",
			es: "Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo. Este ataque hace 30 puntos de daño al nuevo Pokémon Activo.",
			pt: "Mande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo. Este ataque causa 30 pontos de dano ao novo Pokémon Ativo.",
			'es-mx': "Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo. Este ataque hace 30 puntos de daño al nuevo Pokémon Activo."
		}
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
