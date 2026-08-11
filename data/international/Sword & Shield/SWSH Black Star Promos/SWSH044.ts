import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Eternatus V",
		'fr-fr': "Éthernatos V",
		'es-es': "Eternatus V",
		'it-it': "Eternatus V",
		'pt-br': "Eternatus V",
		'de-de': "Endynalos V"
	},

	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],

	attacks: [{
		name: {
			'en-us': "Power Accelerator",
			'fr-fr': "Accélérateur de Puissance",
			'es-es': "Acelerador de Potencia",
			'it-it': "Accelerapotenza",
			'pt-br': "Aceleração Poderosa",
			'de-de': "Kraftbeschleuniger"
		},

		effect: {
			'en-us': "You may attach a {D} Energy card from your hand to 1 of your Benched Pokémon.",
			'fr-fr': "Vous pouvez attacher une carte Énergie {D} de votre main à l'un de vos Pokémon de Banc.",
			'es-es': "Puedes unir 1 carta de Energía {D} de tu mano a 1 de tus Pokémon en Banca.",
			'it-it': "Puoi assegnare a uno dei tuoi Pokémon in panchina una carta Energia {D} dalla tua mano.",
			'pt-br': "Você pode ligar 1 carta de Energia {D} da sua mão a 1 dos seus Pokémon no Banco.",
			'de-de': "Du kannst 1 {D}-Energiekarte aus deiner Hand an 1 Pokémon auf deiner Bank anlegen."
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Dynamax Cannon",
			'fr-fr': "Canon Dynamax",
			'it-it': "Cannone Dynamax",
			'pt-br': "Canhão Dinamax",
			'de-de': "Dynamax-Kanone",
			'es-es': "Cañón Dinamax"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is a Pokémon VMAX, this attack does 120 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-VMAX, cette attaque inflige 120 dégâts supplémentaires.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-VMAX, questo attacco infligge 120 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon VMAX, este ataque causará 120 pontos de dano a mais.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-VMAX ist, fügt diese Attacke 120 Schadenspunkte mehr zu.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon VMAX, este ataque hace 120 puntos de daño más."
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
	dexId: [890],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",
	suffix: "V",

	thirdParty: {
		cardmarket: 496315
	}
}

export default card
