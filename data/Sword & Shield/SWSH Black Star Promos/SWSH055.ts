import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Hatterene V",
		fr: "Sorcilence V",
		es: "Hatterene V",
		it: "Hatterene V",
		pt: "Hatterene V",
		de: "Silembrim V"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "None",
	category: "Pokemon",
	hp: 200,
	types: ["Psychic"],

	attacks: [{
		name: {
			en: "Confounding Pulse",
			fr: "Onde Troublante",
			es: "Pulso Desconcertante",
			it: "Confondimpulso",
			pt: "Confounding Pulse",
			de: "Verwirrender Impuls"
		},

		effect: {
			en: "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon. The new Active Pokémon is now Confused.",
			fr: "Échangez l'un des Pokémon de Banc de votre adversaire contre son Pokémon Actif. Le nouveau Pokémon Actif est maintenant Confus.",
			es: "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo. El nuevo Pokémon Activo pasa a estar Confundido.",
			it: "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo. Il nuovo Pokémon attivo viene confuso.",
			pt: "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon. The new Active Pokémon is now Confused.",
			de: "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus. Das neue Aktive Pokémon ist jetzt verwirrt."
		},

		cost: ["Psychic", "Colorless"]
	}, {
		name: {
			en: "Mental Crush",
			fr: "Écrasement Mental",
			es: "Aplastamiento Mental",
			it: "Sbriciolamente",
			pt: "Mental Crush",
			de: "Mentaler Zermalmer"
		},

		effect: {
			en: "If your opponent's Active Pokémon is Confused, this attack does 90 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est Confus, cette attaque inflige 90 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival está Confundido, este ataque hace 90 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è confuso, questo attacco infligge 90 danni in più.",
			pt: "If your opponent's Active Pokémon is Confused, this attack does 90 more damage.",
			de: "Wenn das Aktive Pokémon deines Gegners verwirrt ist, fügt diese Attacke 90 Schadenspunkte mehr zu."
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
	suffix: "V"
}

export default card
