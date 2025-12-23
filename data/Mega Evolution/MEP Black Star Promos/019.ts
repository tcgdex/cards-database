import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Whimsicott",
		fr: "Farfaduvet",
		de: "Elfun",
		it: "Whimsicott",
		es: "Whimsicott",
		pt: "Whimsicott"
	},

	illustrator: "Yuka Tanaka",
	rarity: "None",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Stage1",
	dexId: [547],

	evolveFrom: {
		en: "Cottonee",
		fr: "Doudouvet",
		de: "Waumboll",
		it: "Cottonee",
		es: "Cottonee",
		pt: "Cottonee"
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Healing Fluff",
			fr: "Soin Douillet",
			de: "Heilender Flausch",
			it: "Batuffocura",
			es: "Pelusa Sanadora",
			pt: "Lanugem Curativa"
		},

		effect: {
			en: "Heal all damage from 1 of your Benched Pokémon.",
			fr: "Soignez tous les dégâts de l'un de vos Pokémon de Banc.",
			de: "Heile allen Schaden bei 1 Pokémon auf deiner Bank.",
			it: "Cura uno dei Pokémon nella tua panchina da tutti i danni.",
			es: "Cura todos los puntos de daño a uno de tus Pokémon en Banca.",
			pt: "Cure todo o dano de 1 dos seus Pokémon no Banco."
		}
	}, {
		cost: ["Psychic"],

		name: {
			en: "U-turn",
			fr: "Demi-Tour",
			de: "Kehrtwende",
			it: "Retromarcia",
			es: "Ida y Vuelta",
			pt: "Fazer Retorno"
		},

		damage: 50,

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc.",
			de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus.",
			it: "Scambia questo Pokémon con uno nella tua panchina.",
			es: "Cambia este Pokémon por uno de tus Pokémon en Banca.",
			pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco."
		}
	}],

	retreat: 1,
	regulationMark: "I",
}

export default card
