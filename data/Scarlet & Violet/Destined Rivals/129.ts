import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Spiritomb",
		fr: "Spiritomb",
		de: "Kryppuk",
		it: "Spiritomb",
		es: "Spiritomb",
		pt: "Spiritomb"
	},

	illustrator: "Naoyo Kimura",
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
			de: "Verhöhner",
			it: "Provocazione",
			es: "Mofa",
			pt: "Insulto"
		},

		effect: {
			en: "Switch in 1 of your opponent's Benched Pokémon to the Active Spot.",
			fr: "Envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif.",
			de: "Wechsle 1 Pokémon von der Bank deines Gegners in die Aktive Position ein.",
			it: "Sostituisci uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva.",
			es: "Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo.",
			pt: "Mande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo."
		}
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Doom Decree",
			fr: "Verdict Fatal",
			de: "Urteil",
			it: "Sentenza",
			es: "Trágico Veredicto",
			pt: "Sentença do Destino"
		},

		effect: {
			en: "Flip 2 coins. If both of them are heads, your opponent's Active Pokémon is Knocked Out.",
			fr: "Lancez 2 pièces. Si vous obtenez 2 côtés face, le Pokémon Actif de votre adversaire est mis K.O.",
			de: "Wirf 2 Münzen. Zeigen beide Münzen Kopf, ist das Aktive Pokémon deines Gegners kampfunfähig.",
			it: "Lancia due volte una moneta. Se esce entrambe le volte testa, il Pokémon attivo del tuo avversario viene messo KO.",
			es: "Lanza 2 monedas. Si sale cara en ambas, el Pokémon Activo de tu rival queda Fuera de Combate.",
			pt: "Jogue 2 moedas. Se as duas saírem cara, o Pokémon Ativo do seu oponente será Nocauteado."
		}
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card