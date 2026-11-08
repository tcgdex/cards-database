import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [786],
	set: Set,

	name: {
		'en-us': "Tapu Lele",
		'fr-fr': "Tokopiyon",
		'es-es': "Tapu Lele",
		'it-it': "Tapu Lele",
		'pt-br': "Tapu Lele",
		'de-de': "Kapu-Fala"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Perplex",
			'fr-fr': "Affolement",
			'es-es': "Desconcierto",
			'it-it': "Sconcerto",
			'pt-br': "Perplexo",
			'de-de': "Perplex"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 20
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Mental Crush",
			'fr-fr': "Écrasement Mental",
			'es-es': "Aplastamiento Mental",
			'it-it': "Sbriciolamente",
			'pt-br': "Esmagamento Mental",
			'de-de': "Mentaler Zermalmer"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is Confused, this attack does 90 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est Confus, cette attaque inflige 90 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival está Confundido, este ataque hace 90 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è confuso, questo attacco infligge 90 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente estiver Confuso, este ataque causará 90 pontos de dano a mais.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners verwirrt ist, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "90+"
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 841986,
				tcgplayer: 590072,
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 841986,
				tcgplayer: 590072,
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 794401,
			}
		},
	],

	illustrator: "Natsumi Yoshida",
}

export default card
