import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Tarountula",
		fr: "Tissenboule",
		de: "Tarundel",
		it: "Tarountula",
		es: "Tarountula",
		pt: "Tarountula"
	},

	illustrator: "Tika Matsuno",
	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "String Haul",
			fr: "Tire-Fil",
			de: "Fadenzug",
			it: "Tira la Tela",
			es: "Hilo de Arrastre",
			pt: "Reboque a Fio"
		},

		effect: {
			en: "Flip a coin. If heads, switch in 1 of your opponent's Benched Pokémon to the Active Spot.",
			fr: "Lancez une pièce. Si c'est face, envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif.",
			de: "Wirf 1 Münze. Wechsle bei Kopf 1 Pokémon von der Bank deines Gegners in die Aktive Position ein.",
			it: "Lancia una moneta. Se esce testa, sostituisci uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva.",
			es: "Lanza 1 moneda. Si sale cara, cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo.",
			pt: "Jogue uma moeda. Se sair cara, mande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo."
		}
	}, {
		cost: ["Grass"],

		name: {
			en: "Bug Bite",
			fr: "Piqûre",
			de: "Käferbiss",
			it: "Coleomorso",
			es: "Picadura",
			pt: "Picada"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card