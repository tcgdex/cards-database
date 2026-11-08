import { Card } from "models/database/card"
import Set from "../Lost Origin Trainer Gallery"

const card: Card = {
	dexId: [890],
	set: Set,

	name: {
		'en-us': "Eternatus V",
		'fr-fr': "Éthernatos V",
		'es-es': "Eternatus V",
		'it-it': "Eternatus V",
		'pt-br': "Eternatus V",
		'de-de': "Endynalos V"
	},

	illustrator: "kodama",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Power Accelerator",
			'fr-fr': "Accélérateur de Puissance",
			'es-es': "Acelerador de Potencia",
			'it-it': "Accelerapotenza",
			'pt-br': "Aceleração Poderosa",
			'de-de': "Kraftbeschleuniger"
		},

		effect: {
			'en-us': "You may attach a Darkness Energy card from your hand to 1 of your Benched Pokémon.",
			'fr-fr': "Vous pouvez attacher une carte Énergie Darkness de votre main à l'un de vos Pokémon de Banc.",
			'es-es': "Puedes unir 1 carta de Energía Darkness de tu mano a 1 de tus Pokémon en Banca.",
			'it-it': "Puoi assegnare a uno dei tuoi Pokémon in panchina una carta Energia Darkness dalla tua mano.",
			'pt-br': "Você pode ligar 1 carta de Energia Darkness da sua mão a 1 dos seus Pokémon no Banco.",
			'de-de': "Du kannst 1 Darkness-Energiekarte aus deiner Hand an 1 Pokémon auf deiner Bank anlegen."
		},

		damage: 30
	}, {
		cost: ["Darkness", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Dynamax Cannon",
			'fr-fr': "Canon Dynamax",
			'es-es': "Cañón Dinamax",
			'it-it': "Cannone Dynamax",
			'pt-br': "Canhão Dinamax",
			'de-de': "Dynamax-Kanone"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is a Pokémon VMAX, this attack does 120 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-VMAX, cette attaque inflige 120 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon VMAX, este ataque hace 120 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-VMAX, questo attacco infligge 120 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon VMAX, este ataque causará 120 pontos de dano a mais.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-VMAX ist, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "120+"
	}],

	retreat: 2,
	regulationMark: "D",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 674238,
				tcgplayer: 284294
			}
		},
	],
}

export default card
