import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Cacturne",
		fr: "Cacturne",
		es: "Cacturne",
		it: "Cacturne",
		pt: "Cacturne",
		de: "Noktuska"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		en: "Cacnea",
		fr: "Cacnea",
		es: "Cacnea",
		it: "Cacnea",
		pt: "Cacnea",
		de: "Tuska"
	},

	attacks: [{
		name: {
			en: "Pull",
			fr: "Tirer",
			es: "Tirar",
			it: "Tira",
			pt: "Puxar",
			de: "Ziehen"
		},

		effect: {
			en: "Switch 1 of your opponent’s Benched Pokémon with their Active Pokémon.",
			fr: "Échangez l’un des Pokémon de Banc de votre adversaire contre son Pokémon Actif.",
			es: "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
			it: "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
			pt: "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a).",
			de: "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Spiny Punch",
			fr: "Frappe Épineuse",
			es: "Puño de Pinchos",
			it: "Aculeopugno",
			pt: "Soco Espinhoso",
			de: "Stachelschlag"
		},

		effect: {
			en: "If this Pokémon has any Darkness Energy attached, this attack does 70 more damage.",
			fr: "Si de l’Énergie Darkness est attachée à ce Pokémon, cette attaque inflige 70 dégâts supplémentaires.",
			es: "Si este Pokémon tiene alguna Energía Darkness unida a él, este ataque hace 70 puntos de daño más.",
			it: "Se questo Pokémon ha delle Energie Darkness assegnate, questo attacco infligge 70 danni in più.",
			pt: "Se este Pokémon tiver alguma Energia Darkness ligada a ele, este ataque causará 70 pontos de dano a mais.",
			de: "Wenn an dieses Pokémon mindestens 1 Darkness-Energie angelegt ist, fügt diese Attacke 70 Schadenspunkte mehr zu."
		},

		damage: "60+",
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "Packs of them follow travelers through the desert until the travelers can no longer move."
	}
}

export default card