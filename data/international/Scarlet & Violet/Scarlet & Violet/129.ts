import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [442],
	set: Set,

	name: {
		'en-us': "Spiritomb",
		'fr-fr': "Spiritomb",
		'es-es': "Spiritomb",
		'it-it': "Spiritomb",
		'pt-br': "Spiritomb",
		'de-de': "Kryppuk"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Taunt",
			'fr-fr': "Provoc",
			'es-es': "Mofa",
			'it-it': "Provocazione",
			'pt-br': "Insulto",
			'de-de': "Verhöhner"
		},

		effect: {
			'en-us': "Switch in 1 of your opponent's Benched Pokémon to the Active Spot.",
			'fr-fr': "Envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif.",
			'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo.",
			'it-it': "Sostituisci uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva.",
			'pt-br': "Mande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo.",
			'de-de': "Wechsle 1 Pokémon von der Bank deines Gegners in die Aktive Position ein."
		}
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			'en-us': "Doom Decree",
			'fr-fr': "Verdict Fatal",
			'es-es': "Trágico Veredicto",
			'it-it': "Sentenza",
			'pt-br': "Sentença do Destino",
			'de-de': "Urteil"
		},

		effect: {
			'en-us': "Flip 2 coins. If both of them are heads, your opponent's Active Pokémon is Knocked Out.",
			'fr-fr': "Lancez 2 pièces. Si vous obtenez 2 côtés face, le Pokémon Actif de votre adversaire est mis K.O.",
			'es-es': "Lanza 2 monedas. Si sale cara en ambas, el Pokémon Activo de tu rival queda Fuera de Combate.",
			'it-it': "Lancia due volte una moneta. Se esce entrambe le volte testa, il Pokémon attivo del tuo avversario viene messo KO.",
			'pt-br': "Jogue 2 moedas. Se as duas saírem cara, o Pokémon Ativo do seu oponente será Nocauteado.",
			'de-de': "Wirf 2 Münzen. Zeigen beide Münzen Kopf, ist das Aktive Pokémon deines Gegners kampfunfähig."
		}
	}],

	retreat: 1,
	regulationMark: "G",
	illustrator: "Naoyo Kimura",

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	description: {
		'en-us': "It was formed by uniting 108 spirits. It has been bound to the Odd Keystone to keep it from doing any mischief.",
	},

	thirdParty: {
        cardmarket: 702424,
        tcgplayer: 488017
    }
}

export default card