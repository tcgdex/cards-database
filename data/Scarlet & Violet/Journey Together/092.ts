import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Weezing",
		fr: "Smogogo",
		es: "Weezing",
		de: "Smogmog",
		it: "Weezing",
		pt: "Weezing",
		'es-mx': "Weezing"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Pervasive Gas",
			fr: "Gaz Pénétrant",
			es: "Gas Penetrante",
			de: "Ausströmendes Gas",
			it: "Gas Dilagante",
			pt: "Gás Pervasivo",
			'es-mx': "Gas Penetrante"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Confundido."
		},

		damage: 30
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Crazy Blast",
			fr: "Explosion Folle",
			es: "Explosión Salvaje",
			de: "Verrückte Explosion",
			it: "Esplosione Folle",
			pt: "Explosão Insana",
			'es-mx': "Explosión Alocada"
		},

		effect: {
			en: "If this Pokémon used Pervasive Gas during your last turn, this attack does 120 more damage.",
			fr: "Si ce Pokémon a utilisé Gaz Pénétrant pendant votre dernier tour, cette attaque inflige 120 dégâts supplémentaires.",
			es: "Si este Pokémon usó Gas Penetrante durante tu último turno, este ataque hace 120 puntos de daño más.",
			de: "Wenn dieses Pokémon während deines letzten Zuges Ausströmendes Gas eingesetzt hat, fügt diese Attacke 120 Schadenspunkte mehr zu.",
			it: "Se questo Pokémon ha usato Gas Dilagante durante il tuo ultimo turno, questo attacco infligge 120 danni in più.",
			pt: "Se este Pokémon usou Gás Pervasivo durante o seu último turno, este ataque causará 120 pontos de dano a mais.",
			'es-mx': "Si este Pokémon usó Gas Penetrante durante tu último turno, este ataque hace 120 puntos de daño más."
		},

		damage: "50+"
	}],

	retreat: 2,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
