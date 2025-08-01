import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	set: Set,

	name: {
		en: "Pangoro",
		fr: "Pandarbare",
		es: "Pangoro",
		it: "Pangoro",
		pt: "Pangoro",
		de: "Pandagro"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Pull",
			fr: "Tirer",
			es: "Tirar",
			it: "Tira",
			pt: "Puxar",
			de: "Ziehen"
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
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Tantrum",
			fr: "Mauvaise Humeur",
			es: "Rabieta",
			it: "Collera",
			pt: "Petulância",
			de: "Rappel"
		},

		effect: {
			en: "This Pokémon is now Confused.",
			fr: "Ce Pokémon est maintenant Confus.",
			es: "Este Pokémon pasa a estar Confundido.",
			it: "Questo Pokémon viene confuso.",
			pt: "Este Pokémon agora está Confuso.",
			de: "Dieses Pokémon ist jetzt verwirrt."
		},

		damage: 160
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "KEIICHIRO ITO",

	thirdParty: {
		cardmarket: 785947
	}
}

export default card
