import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [706],
	set: Set,

	name: {
		en: "Hisuian Goodra V",
		fr: "Muplodocus de Hisui V",
		es: "Goodra de Hisui V",
		it: "Goodra di Hisui V",
		pt: "Goodra de Hisui V",
		de: "Hisui Viscogon-V"
	},

	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 220,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Water", "Metal"],

		name: {
			en: "Slip-'n'-Trip",
			fr: "Glissade Maladroite",
			es: "Resbalar y Tropezar",
			it: "Inciamposcivolo",
			pt: "Deslize Viscoso",
			de: "Rutschpartie"
		},

		effect: {
			en: "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
			fr: "Votre adversaire échange son Pokémon Actif contre l'un de ses Pokémon de Banc.",
			es: "Tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
			it: "Il tuo avversario scambia il suo Pokémon attivo con uno della sua panchina.",
			pt: "Seu oponente troca o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
			de: "Dein Gegner tauscht sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
		},

		damage: 60
	}, {
		cost: ["Water", "Metal", "Colorless"],

		name: {
			en: "Rolling Shell",
			fr: "Coquille Roulante",
			es: "Caparazón Rodante",
			it: "Guscio Rotolante",
			pt: "Concha Rolante",
			de: "Rollende Schale"
		},

		effect: {
			en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			es: "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Durante o próximo turno do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 140
	}],

	retreat: 3,
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": false,
		"holo": true
	}
}

export default card
