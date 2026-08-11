import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Stantler",
		'fr-fr': "Cerfrousse",
		'es-es': "Stantler",
		'it-it': "Stantler",
		'pt-br': "Stantler",
		'de-de': "Damhirplex"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		234,
	],

	hp: 110,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Mystifying Horns",
				'fr-fr': "Mysti-Cornes",
				'es-es': "Cuernos Desconcertantes",
				'it-it': "Falsecorna",
				'pt-br': "Chifres da Mistificação",
				'de-de': "Mystik-Hörner"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Enhanced Horns",
				'fr-fr': "Cornes Améliorées",
				'es-es': "Cuernos Mejorados",
				'it-it': "Supercorna",
				'pt-br': "Chifres Acentuados",
				'de-de': "Spezial-Hörner"
			},
			effect: {
				'en-us': "If this Pokémon has a Pokémon Tool card attached to it, this attack does 60 more damage.",
				'fr-fr': "Si une carte Outil Pokémon est attachée à ce Pokémon, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Si este Pokémon tiene 1 carta de Herramienta Pokémon unida a él, este ataque hace 60 puntos de daño más.",
				'it-it': "Se questo Pokémon ha una carta Oggetto Pokémon assegnata, questo attacco infligge 60 danni in più.",
				'pt-br': "Se este Pokémon tiver uma carta de Ferramenta Pokémon ligada a ele, este ataque causará 60 pontos de dano a mais.",
				'de-de': "Wenn an dieses Pokémon eine Pokémon-Ausrüstung angelegt ist, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The curved antlers change the flow of air to create a strange space where reality is distorted.",
	},

	thirdParty: {
		cardmarket: 365793,
		tcgplayer: 178977
	}
}

export default card
