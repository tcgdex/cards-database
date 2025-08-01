import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [44],
	set: Set,

	name: {
		fr: "Ortide",
		en: "Gloom",
		es: "Gloom",
		it: "Gloom",
		pt: "Gloom",
		de: "Duflor"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Senteur Ensorcelante",
			en: "Inviting Scent",
			es: "Aroma Cautivador",
			it: "Aroma Invitante",
			pt: "Aroma Convidativo",
			de: "Einladender Duft"
		},

		effect: {
			fr: "Envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif.",
			en: "Switch in 1 of your opponent's Benched Pokémon to the Active Spot.",
			es: "Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo.",
			it: "Sostituisci uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva.",
			pt: "Mande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo.",
			de: "Wechsle 1 Pokémon von der Bank deines Gegners in die Aktive Position ein."
		}
	}, {
		cost: ["Grass"],

		name: {
			fr: "Enjambée de Feuillage",
			en: "Leaf Step",
			es: "Paso Hoja",
			it: "Passofoglia",
			pt: "Passo de Folha",
			de: "Blattschritt"
		},

		damage: 20
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "Masako Tomii",

	thirdParty: {
		cardmarket: 725082
	}
}

export default card