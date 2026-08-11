import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [44],
	set: Set,

	name: {
		'fr-fr': "Ortide",
		'en-us': "Gloom",
		'es-es': "Gloom",
		'it-it': "Gloom",
		'pt-br': "Gloom",
		'de-de': "Duflor"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	evolveFrom: {
		'fr-fr': "Mystherbe",
		'en-us': "Oddish",
		'es-es': "Oddish",
		'it-it': "Oddish",
		'pt-br': "Oddish",
		'de-de': "Myrapla"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Senteur Ensorcelante",
			'en-us': "Inviting Scent",
			'es-es': "Aroma Cautivador",
			'it-it': "Aroma Invitante",
			'pt-br': "Aroma Convidativo",
			'de-de': "Einladender Duft"
		},

		effect: {
			'fr-fr': "Envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif.",
			'en-us': "Switch in 1 of your opponent's Benched Pokémon to the Active Spot.",
			'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo.",
			'it-it': "Sostituisci uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva.",
			'pt-br': "Mande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo.",
			'de-de': "Wechsle 1 Pokémon von der Bank deines Gegners in die Aktive Position ein."
		}
	}, {
		cost: ["Grass"],

		name: {
			'fr-fr': "Enjambée de Feuillage",
			'en-us': "Leaf Step",
			'es-es': "Paso Hoja",
			'it-it': "Passofoglia",
			'pt-br': "Passo de Folha",
			'de-de': "Blattschritt"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "What appears to be drool is actually sweet honey. It is very sticky and clings stubbornly if touched.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 725278,
				tcgplayer: 509944,
				cardtrader: 255640
			}
		},
	],

	illustrator: "Masako Tomii",

	
}

export default card
