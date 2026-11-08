import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [615],
	set: Set,

	name: {
		'en-us': "Cryogonal",
		'fr-fr': "Hexagel",
		'de-de': "Frigometri",
		'it-it': "Cryogonal",
		'pt-br': "Cryogonal",
		'es-es': "Cryogonal",
		'es-mx': "Cryogonal"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Drag Off",
			'fr-fr': "Traîne",
			'de-de': "Wegzerren",
			'it-it': "Trascinato Via",
			'pt-br': "Arrastar para Fora",
			'es-es': "Jalón",
			'es-mx': "Jaloneo"
		},

		effect: {
			'en-us': "Switch in 1 of your opponent's Benched Pokémon to the Active Spot. This attack does 20 damage to the new Active Pokémon.",
			'fr-fr': "Envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif. Cette attaque inflige 20 dégâts au nouveau Pokémon Actif.",
			'de-de': "Wechsle 1 Pokémon von der Bank deines Gegners in die Aktive Position ein. Diese Attacke fügt dem neuen Aktiven Pokémon 20 Schadenspunkte zu.",
			'it-it': "Sostituisci uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva. Questo attacco infligge 20 danni al nuovo Pokémon attivo.",
			'pt-br': "Mande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo. Este ataque causa 20 pontos de dano ao novo Pokémon Ativo.",
			'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo. Este ataque hace 20 puntos de daño al nuevo Pokémon Activo.",
			'es-mx': "Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo. Este ataque hace 20 puntos de daño al nuevo Pokémon Activo."
		}
	}, {
		cost: ["Water"],

		name: {
			'en-us': "Icicle",
			'fr-fr': "Concrétion Glacée",
			'de-de': "Eiszapfen",
			'it-it': "Stalattite",
			'pt-br': "Pingente de Gelo",
			'es-es': "Témpano",
			'es-mx': "Témpano de Hielo"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 835994,
				tcgplayer: 642479
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 835994,
				tcgplayer: 642479
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836326,
				tcgplayer: 642724
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836324,
				tcgplayer: 642652
			}
		}
	],
}

export default card
