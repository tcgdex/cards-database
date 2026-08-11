import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [917],
	set: Set,

	name: {
		'en-us': "Tarountula",
		'fr-fr': "Tissenboule",
		'es-es': "Tarountula",
		'it-it': "Tarountula",
		'pt-br': "Tarountula",
		'de-de': "Tarundel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "String Haul",
			'fr-fr': "Tire-Fil",
			'es-es': "Hilo de Arrastre",
			'it-it': "Tira la Tela",
			'pt-br': "Reboque a Fio",
			'de-de': "Fadenzug"
		},

		effect: {
			'en-us': "Flip a coin. If heads, switch in 1 of your opponent's Benched Pokémon to the Active Spot.",
			'fr-fr': "Lancez une pièce. Si c'est face, envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif.",
			'es-es': "Lanza 1 moneda. Si sale cara, cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo.",
			'it-it': "Lancia una moneta. Se esce testa, sostituisci uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva.",
			'pt-br': "Jogue uma moeda. Se sair cara, mande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo.",
			'de-de': "Wirf 1 Münze. Wechsle bei Kopf 1 Pokémon von der Bank deines Gegners in die Aktive Position ein."
		},
	}, {
		cost: ["Grass"],

		name: {
			'en-us': "Bug Bite",
			'fr-fr': "Piqûre",
			'es-es': "Picadura",
			'it-it': "Coleomorso",
			'pt-br': "Picada",
			'de-de': "Käferbiss"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],

	illustrator: "Tika Matsuno",

	description: {
		'en-us': "The ball of threads wrapped around its body is elastic enough to deflect the scythes of Scyther, this Pokémon's natural enemy.",
	},

	thirdParty: {
        cardmarket: 702312,
        tcgplayer: 487851
    }
}

export default card
