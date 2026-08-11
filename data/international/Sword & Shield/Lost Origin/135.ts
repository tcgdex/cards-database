import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [706],
	set: Set,

	name: {
		'en-us': "Hisuian Goodra V",
		'fr-fr': "Muplodocus de Hisui V",
		'es-es': "Goodra de Hisui V",
		'it-it': "Goodra di Hisui V",
		'pt-br': "Goodra de Hisui V",
		'de-de': "Hisui Viscogon-V"
	},

	illustrator: "5ban Graphics",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 220,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Water", "Metal"],

		name: {
			'en-us': "Slip-'n'-Trip",
			'fr-fr': "Glissade Maladroite",
			'es-es': "Resbalar y Tropezar",
			'it-it': "Inciamposcivolo",
			'pt-br': "Deslize Viscoso",
			'de-de': "Rutschpartie"
		},

		effect: {
			'en-us': "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
			'fr-fr': "Votre adversaire échange son Pokémon Actif contre l'un de ses Pokémon de Banc.",
			'es-es': "Tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
			'it-it': "Il tuo avversario scambia il suo Pokémon attivo con uno della sua panchina.",
			'pt-br': "Seu oponente troca o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
			'de-de': "Dein Gegner tauscht sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
		},

		damage: 60
	}, {
		cost: ["Water", "Metal", "Colorless"],

		name: {
			'en-us': "Rolling Shell",
			'fr-fr': "Coquille Roulante",
			'es-es': "Caparazón Rodante",
			'it-it': "Guscio Rotolante",
			'pt-br': "Concha Rolante",
			'de-de': "Rollende Schale"
		},

		effect: {
			'en-us': "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 140
	}],

	retreat: 3,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 674146,
				tcgplayer: 284058
			}
		},
	],
}

export default card
