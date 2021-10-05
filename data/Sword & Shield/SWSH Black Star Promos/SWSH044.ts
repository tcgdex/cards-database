import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Eternatus V",
		fr: "Éthernatos V",
		es: "Eternatus V",
		it: "Eternatus V",
		pt: "Eternatus V",
		de: "Endynalos V"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],

	attacks: [{
		name: {
			en: "Power Accelerator",
			fr: "Accélérateur de Puissance",
			es: "Cañón Dinamax",
			it: "Accelerapotenza",
			pt: "Power Accelerator",
			de: "Kraftbeschleuniger"
		},

		effect: {
			en: "You may attach a Darkness Energy card from your hand to 1 of your Benched Pokémon.",
			fr: "Vous pouvez attacher une carte Énergie Darkness de votre main à l’un de vos Pokémon de Banc.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon VMAX, este ataque hace 120 puntos de daño más.",
			it: "Puoi assegnare a uno dei tuoi Pokémon in panchina una carta Energia Darkness dalla tua mano.",
			pt: "You may attach a Darkness Energy card from your hand to 1 of your Benched Pokémon.",
			de: "Du kannst 1 Darkness-Energiekarte aus deiner Hand an 1 Pokémon auf deiner Bank anlegen."
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Dynamax Cannon",
			fr: "Canon Dynamax",
			it: "Cannone Dynamax",
			pt: "Dynamax Cannon",
			de: "Dynamax-Kanone"
		},

		effect: {
			en: "If your opponent’s Active Pokémon is a Pokémon VMAX, this attack does 120 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-VMAX, cette attaque inflige 120 dégâts supplémentaires.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon-VMAX, questo attacco infligge 120 danni in più.",
			pt: "If your opponent’s Active Pokémon is a Pokémon VMAX, this attack does 120 more damage.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-VMAX ist, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "120+",
		cost: ["Darkness", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	stage: "Basic",
	suffix: "V",
	dexId: [890],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
