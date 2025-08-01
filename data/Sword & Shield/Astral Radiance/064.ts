import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [426],
	set: Set,

	name: {
		en: "Drifblim",
		fr: "Grodrive",
		es: "Drifblim",
		it: "Drifblim",
		pt: "Drifblim",
		de: "Drifzepeli"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		en: "Drifloon",
		fr: "Baudrive",
		es: "Drifloon",
		it: "Drifloon",
		pt: "Drifloon",
		de: "Driftlon"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Spooky Balloon",
			fr: "Ballon Effrayant",
			es: "Globo Aterrador",
			it: "Pallone Inquietante",
			pt: "Balão Assustador",
			de: "Spukballon"
		},

		effect: {
			en: "Put 2 damage counters on 1 of your opponent's Benched Pokémon.",
			fr: "Placez 2 marqueurs de dégâts sur l'un des Pokémon de Banc de votre adversaire.",
			es: "Pon 2 contadores de daño en 1 de los Pokémon en Banca de tu rival.",
			it: "Metti due segnalini danno su uno dei Pokémon nella panchina del tuo avversario.",
			pt: "Coloque 2 contadores de dano em 1 dos Pokémon no Banco do seu oponente.",
			de: "Lege 2 Schadensmarken auf 1 Pokémon auf der Bank deines Gegners."
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 658639
	}
}

export default card