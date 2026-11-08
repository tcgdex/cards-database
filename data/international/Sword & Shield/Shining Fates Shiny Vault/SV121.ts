import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [890],
	set: Set,

	name: {
		'fr-fr': "Éthernatos V",
		'en-us': "Eternatus V",
		'es-es': "Eternatus V",
		'it-it': "Eternatus V",
		'pt-br': "Eternatus V",
		'de-de': "Endynalos V"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],

	attacks: [{
		name: {
			'fr-fr': "Accélérateur de Puissance",
			'en-us': "Power Accelerator",
			'es-es': "Acelerador de Potencia",
			'it-it': "Accelerapotenza",
			'pt-br': "Aceleração Poderosa",
			'de-de': "Kraftbeschleuniger"
		},

		effect: {
			'fr-fr': "Vous pouvez attacher une carte Énergie Darkness de votre main à l'un de vos Pokémon de Banc.",
			'en-us': "You may attach a Darkness Energy card from your hand to 1 of your Benched Pokémon.",
			'es-es': "Puedes unir 1 carta de Energía Darkness de tu mano a 1 de tus Pokémon en Banca.",
			'it-it': "Puoi assegnare a uno dei tuoi Pokémon in panchina una carta Energia Darkness dalla tua mano.",
			'pt-br': "Você pode ligar 1 carta de Energia Darkness da sua mão a 1 dos seus Pokémon no Banco.",
			'de-de': "Du kannst 1 Darkness-Energiekarte aus deiner Hand an 1 Pokémon auf deiner Bank anlegen."
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'fr-fr': "Canon Dynamax",
			'en-us': "Dynamax Cannon",
			'es-es': "Cañón Dinamax",
			'it-it': "Cannone Dynamax",
			'pt-br': "Canhão Dinamax",
			'de-de': "Dynamax-Kanone"
		},

		effect: {
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-VMAX, cette attaque inflige 120 dégâts supplémentaires.",
			'en-us': "If your opponent's Active Pokémon is a Pokémon VMAX, this attack does 120 more damage.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon VMAX, este ataque hace 120 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-VMAX, questo attacco infligge 120 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon VMAX, este ataque causará 120 pontos de dano a mais.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-VMAX ist, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "120+",
		cost: ["Darkness", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",
	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539993,
				tcgplayer: 232517
			}
		},
	],
}

export default card
