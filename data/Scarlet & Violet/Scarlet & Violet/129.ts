import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [442],
	set: Set,

	name: {
		en: "Spiritomb",
		fr: "Spiritomb",
		es: "Spiritomb",
		it: "Spiritomb",
		pt: "Spiritomb",
		de: "Kryppuk"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Taunt",
			fr: "Provoc",
			es: "Mofa",
			it: "Provocazione",
			pt: "Insulto",
			de: "Verhöhner"
		},

		effect: {
			en: "Switch in 1 of your opponent's Benched Pokémon to the Active Spot.",
			fr: "Envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif.",
			es: "Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo.",
			it: "Sostituisci uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva.",
			pt: "Mande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo.",
			de: "Wechsle 1 Pokémon von der Bank deines Gegners in die Aktive Position ein."
		}
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Doom Decree",
			fr: "Verdict Fatal",
			es: "Trágico Veredicto",
			it: "Sentenza",
			pt: "Sentença do Destino",
			de: "Urteil"
		},

		effect: {
			en: "Flip 2 coins. If both of them are heads, your opponent's Active Pokémon is Knocked Out.",
			fr: "Lancez 2 pièces. Si vous obtenez 2 côtés face, le Pokémon Actif de votre adversaire est mis K.O.",
			es: "Lanza 2 monedas. Si sale cara en ambas, el Pokémon Activo de tu rival queda Fuera de Combate.",
			it: "Lancia due volte una moneta. Se esce entrambe le volte testa, il Pokémon attivo del tuo avversario viene messo KO.",
			pt: "Jogue 2 moedas. Se as duas saírem cara, o Pokémon Ativo do seu oponente será Nocauteado.",
			de: "Wirf 2 Münzen. Zeigen beide Münzen Kopf, ist das Aktive Pokémon deines Gegners kampfunfähig."
		}
	}],

	retreat: 1,
	regulationMark: "G",
	illustrator: "Naoyo Kimura",

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: {
		holo: false
	},

	thirdParty: {
		cardmarket: 702424
	}
}

export default card