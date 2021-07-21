import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Spinarak",
		fr: "Mimigal",
		es: "Spinarak",
		it: "Spinarak",
		pt: "Spinarak",
		de: "Webarak"
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
				en: "Spider Scram",
				fr: "Détalage Arachnéen",
				es: "Escapada Araña",
				it: "Filavia",
				pt: "Aracno-fuga",
				de: "Spinnenreißaus"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Paralyzed and Poisoned. Put this Pokémon and all cards attached to it in the Lost Zone.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné et Paralysé. Placez ce Pokémon et toutes les cartes qui lui sont attachées dans la Zone Perdue.",
				es: "El Pokémon Activo de tu rival pasa a estar Envenenado y Paralizado. Pon este Pokémon y todas las cartas unidas a él en la Zona Perdida.",
				it: "Il Pokémon attivo del tuo avversario viene paralizzato e avvelenato. Prendi questo Pokémon e tutte le carte a esso assegnate e mettili nell’area perduta.",
				pt: "O Pokémon Ativo do seu oponente agora está Envenenado e Paralisado. Coloque este Pokémon e todas as cartas ligadas a ele na Zona Perdida.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt paralysiert und vergiftet. Lege dieses Pokémon und alle an es angelegten Karten ins Nirgendwo."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sting",
				fr: "Dard",
				es: "Aguijonazo",
				it: "Puntura",
				pt: "Ferroada",
				de: "Einstich"
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



}

export default card
