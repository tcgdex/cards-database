import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [110],
	set: Set,

	name: {
		'en-us': "Weezing",
		'fr-fr': "Smogogo",
		'es-es': "Weezing",
		'de-de': "Smogmog",
		'it-it': "Weezing",
		'pt-br': "Weezing",
		'es-mx': "Weezing"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Koffing",
		'fr-fr': "Smogo",
		'es-es': "Koffing",
		'de-de': "Smogon",
		'it-it': "Koffing",
		'pt-br': "Koffing",
		'es-mx': "Koffing"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Pervasive Gas",
			'fr-fr': "Gaz Pénétrant",
			'es-es': "Gas Penetrante",
			'de-de': "Ausströmendes Gas",
			'it-it': "Gas Dilagante",
			'pt-br': "Gás Pervasivo",
			'es-mx': "Gas Penetrante"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Confundido."
		},

		damage: 30
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Crazy Blast",
			'fr-fr': "Explosion Folle",
			'es-es': "Explosión Salvaje",
			'de-de': "Verrückte Explosion",
			'it-it': "Esplosione Folle",
			'pt-br': "Explosão Insana",
			'es-mx': "Explosión Alocada"
		},

		effect: {
			'en-us': "If this Pokémon used Pervasive Gas during your last turn, this attack does 120 more damage.",
			'fr-fr': "Si ce Pokémon a utilisé Gaz Pénétrant pendant votre dernier tour, cette attaque inflige 120 dégâts supplémentaires.",
			'es-es': "Si este Pokémon usó Gas Penetrante durante tu último turno, este ataque hace 120 puntos de daño más.",
			'de-de': "Wenn dieses Pokémon während deines letzten Zuges Ausströmendes Gas eingesetzt hat, fügt diese Attacke 120 Schadenspunkte mehr zu.",
			'it-it': "Se questo Pokémon ha usato Gas Dilagante durante il tuo ultimo turno, questo attacco infligge 120 danni in più.",
			'pt-br': "Se este Pokémon usou Gás Pervasivo durante o seu último turno, este ataque causará 120 pontos de dano a mais.",
			'es-mx': "Si este Pokémon usó Gas Penetrante durante tu último turno, este ataque hace 120 puntos de daño más."
		},

		damage: "50+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",
	illustrator: "KEIICHIRO ITO",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817244,
				tcgplayer: 623519
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817244,
				tcgplayer: 623519
			}
		},
	],
}

export default card
