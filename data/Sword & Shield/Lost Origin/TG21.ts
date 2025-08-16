import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [890],
	set: Set,

	name: {
		en: "Eternatus V",
		fr: "Éthernatos V",
		es: "Eternatus V",
		it: "Eternatus V",
		pt: "Eternatus V",
		de: "Endynalos V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Power Accelerator",
			fr: "Accélérateur de Puissance",
			es: "Acelerador de Potencia",
			it: "Accelerapotenza",
			pt: "Aceleração Poderosa",
			de: "Kraftbeschleuniger"
		},

		effect: {
			en: "You may attach a Darkness Energy card from your hand to 1 of your Benched Pokémon.",
			fr: "Vous pouvez attacher une carte Énergie Darkness de votre main à l'un de vos Pokémon de Banc.",
			es: "Puedes unir 1 carta de Energía Darkness de tu mano a 1 de tus Pokémon en Banca.",
			it: "Puoi assegnare a uno dei tuoi Pokémon in panchina una carta Energia Darkness dalla tua mano.",
			pt: "Você pode ligar 1 carta de Energia Darkness da sua mão a 1 dos seus Pokémon no Banco.",
			de: "Du kannst 1 Darkness-Energiekarte aus deiner Hand an 1 Pokémon auf deiner Bank anlegen."
		},

		damage: 30
	}, {
		cost: ["Darkness", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Dynamax Cannon",
			fr: "Canon Dynamax",
			es: "Cañón Dinamax",
			it: "Cannone Dynamax",
			pt: "Canhão Dinamax",
			de: "Dynamax-Kanone"
		},

		effect: {
			en: "If your opponent's Active Pokémon is a Pokémon VMAX, this attack does 120 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-VMAX, cette attaque inflige 120 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon VMAX, este ataque hace 120 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon-VMAX, questo attacco infligge 120 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon VMAX, este ataque causará 120 pontos de dano a mais.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-VMAX ist, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "120+"
	}],

	retreat: 2,
	regulationMark: "D",

	variants: {
		"normal": false,
		"reverse": false,
		"holo": true
	},

	thirdParty: {
		cardmarket: 674238
	}
}

export default card