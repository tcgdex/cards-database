import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Druddigon",
		fr: "Drakkarmin",
		de: "Shardrago",
		es: "Druddigon",
		it: "Druddigon",
		pt: "Druddigon",
		'es-mx': "Druddigon"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Drag Off",
			fr: "Traîne",
			de: "Wegzerren",
			es: "Jalón",
			it: "Trascinato Via",
			pt: "Arrastar para Fora",
			'es-mx': "Jaloneo"
		},

		effect: {
			en: "Switch in 1 of your opponent's Benched Pokémon to the Active Spot. This attack does 40 damage to the new Active Pokémon.",
			fr: "Envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif. Cette attaque inflige 40 dégâts au nouveau Pokémon Actif.",
			de: "Wechsle 1 Pokémon von der Bank deines Gegners in die Aktive Position ein. Diese Attacke fügt dem neuen Aktiven Pokémon 40 Schadenspunkte zu.",
			es: "Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo. Este ataque hace 40 puntos de daño al nuevo Pokémon Activo.",
			it: "Sostituisci uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva. Questo attacco infligge 40 danni al nuovo Pokémon attivo.",
			pt: "Mande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo. Este ataque causa 40 pontos de dano ao novo Pokémon Ativo.",
			'es-mx': "Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo. Este ataque hace 40 puntos de daño al nuevo Pokémon Activo."
		},

		cost: ["Fire", "Water"]
	}, {
		name: {
			en: "Claw Slash",
			fr: "Tranch'Griffe",
			de: "Klauenschlitzer",
			es: "Cuchillada Garra",
			it: "Lacerartiglio",
			pt: "Golpe de Garra",
			'es-mx': "Cuchillada con Garra"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	retreat: 2,

	thirdParty: {
		tcgplayer: 726537,
		cardmarket: 918900
	}
}

export default card