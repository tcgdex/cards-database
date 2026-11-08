import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [332],
	set: Set,

	name: {
		'en-us': "Cacturne",
		'fr-fr': "Cacturne",
		'es-es': "Cacturne",
		'it-it': "Cacturne",
		'pt-br': "Cacturne",
		'de-de': "Noktuska"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Cacnea",
		'fr-fr': "Cacnea",
		'es-es': "Cacnea",
		'it-it': "Cacnea",
		'pt-br': "Cacnea",
		'de-de': "Tuska"
	},

	attacks: [{
		name: {
			'en-us': "Pull",
			'fr-fr': "Tirer",
			'es-es': "Tirar",
			'it-it': "Tira",
			'pt-br': "Puxar",
			'de-de': "Ziehen"
		},

		effect: {
			'en-us': "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon.",
			'fr-fr': "Échangez l'un des Pokémon de Banc de votre adversaire contre son Pokémon Actif.",
			'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
			'it-it': "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
			'pt-br': "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a).",
			'de-de': "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Spiny Punch",
			'fr-fr': "Frappe Épineuse",
			'es-es': "Puño de Pinchos",
			'it-it': "Aculeopugno",
			'pt-br': "Soco Espinhoso",
			'de-de': "Stachelschlag"
		},

		effect: {
			'en-us': "If this Pokémon has any Darkness Energy attached, this attack does 70 more damage.",
			'fr-fr': "Si de l'Énergie Darkness est attachée à ce Pokémon, cette attaque inflige 70 dégâts supplémentaires.",
			'es-es': "Si este Pokémon tiene alguna Energía Darkness unida a él, este ataque hace 70 puntos de daño más.",
			'it-it': "Se questo Pokémon ha delle Energie Darkness assegnate, questo attacco infligge 70 danni in più.",
			'pt-br': "Se este Pokémon tiver alguma Energia Darkness ligada a ele, este ataque causará 70 pontos de dano a mais.",
			'de-de': "Wenn an dieses Pokémon mindestens 1 Darkness-Energie angelegt ist, fügt diese Attacke 70 Schadenspunkte mehr zu."
		},

		damage: "60+",
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "Packs of them follow travelers through the desert until the travelers can no longer move."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 544921,
				tcgplayer: 234041
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 544921,
				tcgplayer: 234041
			}
		},
	],
}

export default card
