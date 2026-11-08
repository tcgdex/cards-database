import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Hatterene V",
		'fr-fr': "Sorcilence V",
		'es-es': "Hatterene V",
		'it-it': "Hatterene V",
		'pt-br': "Hatterene V",
		'de-de': "Silembrim V"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Promo",
	category: "Pokemon",
	hp: 200,
	types: ["Psychic"],

	attacks: [{
		name: {
			'en-us': "Confounding Pulse",
			'fr-fr': "Onde Troublante",
			'es-es': "Pulso Desconcertante",
			'it-it': "Confondimpulso",
			'pt-br': "Pulso Caótico",
			'de-de': "Verwirrender Impuls"
		},

		effect: {
			'en-us': "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon. The new Active Pokémon is now Confused.",
			'fr-fr': "Échangez l'un des Pokémon de Banc de votre adversaire contre son Pokémon Actif. Le nouveau Pokémon Actif est maintenant Confus.",
			'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo. El nuevo Pokémon Activo pasa a estar Confundido.",
			'it-it': "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo. Il nuovo Pokémon attivo viene confuso.",
			'pt-br': "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a). O novo Pokémon Ativo agora está Confuso.",
			'de-de': "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus. Das neue Aktive Pokémon ist jetzt verwirrt."
		},

		cost: ["Psychic", "Colorless"]
	}, {
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

		damage: "90+",
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	stage: "Basic",
	dexId: [858],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",
	suffix: "V",

	thirdParty: {
		cardmarket: 510175
	}
}

export default card
