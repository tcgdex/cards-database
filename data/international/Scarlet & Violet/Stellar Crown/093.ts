import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [675],
	set: Set,

	name: {
		'en-us': "Pangoro",
		'fr-fr': "Pandarbare",
		'es-es': "Pangoro",
		'it-it': "Pangoro",
		'pt-br': "Pangoro",
		'de-de': "Pandagro"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Pancham",
		'fr-fr': "Pandespiègle",
		'es-es': "Pancham",
		'it-it': "Pancham",
		'pt-br': "Pancham",
		'de-de': "Pam-Pam"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Pull",
			'fr-fr': "Tirer",
			'es-es': "Tirar",
			'it-it': "Tira",
			'pt-br': "Puxar",
			'de-de': "Ziehen"
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
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Tantrum",
			'fr-fr': "Mauvaise Humeur",
			'es-es': "Rabieta",
			'it-it': "Collera",
			'pt-br': "Petulância",
			'de-de': "Rappel"
		},

		effect: {
			'en-us': "This Pokémon is now Confused.",
			'fr-fr': "Ce Pokémon est maintenant Confus.",
			'es-es': "Este Pokémon pasa a estar Confundido.",
			'it-it': "Questo Pokémon viene confuso.",
			'pt-br': "Este Pokémon agora está Confuso.",
			'de-de': "Dieses Pokémon ist jetzt verwirrt."
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785947,
				tcgplayer: 567319
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785947,
				tcgplayer: 567319
			}
		},
	],

	illustrator: "KEIICHIRO ITO",

}

export default card
