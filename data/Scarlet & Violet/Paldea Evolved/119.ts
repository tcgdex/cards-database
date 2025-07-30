import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Hexadron",
		en: "Falinks",
		es: "Falinks",
		it: "Falinks",
		pt: "Falinks",
		de: "Legios"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Coup d'Boule",
			en: "Headbutt",
			es: "Golpe Cabeza",
			it: "Bottintesta",
			pt: "Cabeçada",
			de: "Kopfnuss"
		},

		damage: 20
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			fr: "Attaque Risquée Groupée",
			en: "Reckless Charge Together",
			es: "Carga Descuidada Conjunta",
			it: "Carica Avventata Collettiva",
			pt: "Carga Indomável Unida",
			de: "Waghalsiger Team-Sturmangriff"
		},

		effect: {
			fr: "Si Hexadron est sur votre Banc, cette attaque inflige 90 dégâts supplémentaires.",
			en: "If Falinks is on your Bench, this attack does 90 more damage.",
			es: "Si Falinks está en tu Banca, este ataque hace 90 puntos de daño más.",
			it: "Se Falinks è nella tua panchina, questo attacco infligge 90 danni in più.",
			pt: "Se Falinks estiver no seu Banco, este ataque causará 90 pontos de dano a mais.",
			de: "Wenn sich Legios auf deiner Bank befindet, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "70+"
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "kurumitsu",

	thirdParty: {
		cardmarket: 715594
	}
}

export default card