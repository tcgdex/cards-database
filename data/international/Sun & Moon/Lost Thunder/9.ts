import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Spinarak",
		'fr-fr': "Mimigal",
		'es-es': "Spinarak",
		'it-it': "Spinarak",
		'pt-br': "Spinarak",
		'de-de': "Webarak"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		167,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Spider Scram",
				'fr-fr': "Détalage Arachnéen",
				'es-es': "Escapada Araña",
				'it-it': "Filavia",
				'pt-br': "Aracno-fuga",
				'de-de': "Spinnenreißaus"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Paralyzed and Poisoned. Put this Pokémon and all cards attached to it in the Lost Zone.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné et Paralysé. Placez ce Pokémon et toutes les cartes qui lui sont attachées dans la Zone Perdue.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado y Paralizado. Pon este Pokémon y todas las cartas unidas a él en la Zona Perdida.",
				'it-it': "Il Pokémon attivo del tuo avversario viene paralizzato e avvelenato. Prendi questo Pokémon e tutte le carte a esso assegnate e mettili nell’area perduta.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado e Paralisado. Coloque este Pokémon e todas as cartas ligadas a ele na Zona Perdida.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt paralysiert und vergiftet. Lege dieses Pokémon und alle an es angelegten Karten ins Nirgendwo."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Sting",
				'fr-fr': "Dard",
				'es-es': "Aguijonazo",
				'it-it': "Puntura",
				'pt-br': "Ferroada",
				'de-de': "Einstich"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Some fishermen weave its sturdy thread into nets to catch fish Pokémon.",
	},

	thirdParty: {
		cardmarket: 365577,
		tcgplayer: 178806
	}
}

export default card
