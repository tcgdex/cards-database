import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Wishiwashi",
		'fr-fr': "Froussardine",
		'es-es': "Wishiwashi",
		'it-it': "Wishiwashi",
		'pt-br': "Wishiwashi",
		'de-de': "Lusardin"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],
	stage: "Basic",
	illustrator: "Teeziro",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Group Power",
			'fr-fr': "Force de Groupe",
			'es-es': "Poder de Grupo",
			'it-it': "Potere di Gruppo",
			'pt-br': "Group Power",
			'de-de': "Gruppenstärke"
		},

		effect: {
			'en-us': "If this Pokémon has 3 or more Water Energy attached, it gets +150 HP.",
			'fr-fr': "Si au moins 3 Énergies Water sont attachées à ce Pokémon, il reçoit +150 PV.",
			'es-es': "Si este Pokémon tiene 3 Energías Water o más unidas a él, obtiene 150 PS más.",
			'it-it': "Se questo Pokémon ha tre o più Energie Water assegnate, ha 150 PS in più.",
			'pt-br': "If this Pokémon has 3 or more Water Energy attached, it gets +150 HP.",
			'de-de': "Wenn an dieses Pokémon 3 oder mehr Water-Energien angelegt sind, erhält es +150 KP."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Schooling Shot",
			'fr-fr': "Tir Groupé",
			'es-es': "Disparo Banco",
			'it-it': "Colpobanco",
			'pt-br': "Schooling Shot",
			'de-de': "Fischschwarmschuss"
		},

		effect: {
			'en-us': "This attack does 30 more damage for each basic Energy attached to this Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie de base attachée à ce Pokémon.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada Energía Básica unida a este Pokémon.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni Energia base assegnata a questo Pokémon.",
			'pt-br': "This attack does 30 more damage for each basic Energy attached to this Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte Basis-Energie 30 Schadenspunkte mehr zu."
		},

		damage: "30+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,

	description: {
		'en-us': "When it senses danger, its eyes tear up. The sparkle of its tears signals other Wishiwashi to gather."
	},

	dexId: [746],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574070,
				tcgplayer: 246873
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574070,
				tcgplayer: 246873
			}
		},
	],
}

export default card
