import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [335],
	set: Set,

	name: {
		'en-us': "Zangoose",
		'fr-fr': "Mangriff",
		'es-es': "Zangoose",
		'it-it': "Zangoose",
		'pt-br': "Zangoose",
		'de-de': "Sengo"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Drag Off",
			'fr-fr': "Traîne",
			'es-es': "Jalón",
			'it-it': "Trascinato Via",
			'pt-br': "Arrastar para Fora",
			'de-de': "Wegzerren"
		},

		effect: {
			'en-us': "Switch in 1 of your opponent's Benched Pokémon to the Active Spot. This attack does 30 damage to the new Active Pokémon.",
			'fr-fr': "Envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif. Cette attaque inflige 30 dégâts au nouveau Pokémon Actif.",
			'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo. Este ataque hace 30 puntos de daño al nuevo Pokémon Activo.",
			'it-it': "Sostituisci uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva. Questo attacco infligge 30 danni al nuovo Pokémon attivo.",
			'pt-br': "Mande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo. Este ataque causa 30 pontos de dano ao novo Pokémon Ativo.",
			'de-de': "Wechsle 1 Pokémon von der Bank deines Gegners in die Aktive Position ein. Diese Attacke fügt dem neuen Aktiven Pokémon 30 Schadenspunkte zu."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Slashing Claw",
			'fr-fr': "Griffe Taillante",
			'es-es': "Garra Cuchillazo",
			'it-it': "Artigli Laceranti",
			'pt-br': "Garra Cortadora",
			'de-de': "Schlitzende Klaue"
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],

	illustrator: "aoki",

	description: {
		'en-us': "It's Seviper's archrival. To threaten those it encounters, it fans out the claws on its front paws.",
	},

	thirdParty: {
        cardmarket: 702443,
        tcgplayer: 488036
    }
}

export default card