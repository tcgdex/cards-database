import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Wishiwashi",
		fr: "Froussardine",
		es: "Wishiwashi",
		it: "Wishiwashi",
		pt: "Wishiwashi",
		de: "Lusardin"
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
			en: "Group Power",
			fr: "Force de Groupe",
			es: "Poder de Grupo",
			it: "Potere di Gruppo",
			pt: "Group Power",
			de: "Gruppenstärke"
		},

		effect: {
			en: "If this Pokémon has 3 or more Water Energy attached, it gets +150 HP.",
			fr: "Si au moins 3 Énergies Water sont attachées à ce Pokémon, il reçoit +150 PV.",
			es: "Si este Pokémon tiene 3 Energías Water o más unidas a él, obtiene 150 PS más.",
			it: "Se questo Pokémon ha tre o più Energie Water assegnate, ha 150 PS in più.",
			pt: "If this Pokémon has 3 or more Water Energy attached, it gets +150 HP.",
			de: "Wenn an dieses Pokémon 3 oder mehr Water-Energien angelegt sind, erhält es +150 KP."
		}
	}],

	attacks: [{
		name: {
			en: "Schooling Shot",
			fr: "Tir Groupé",
			es: "Disparo Banco",
			it: "Colpobanco",
			pt: "Schooling Shot",
			de: "Fischschwarmschuss"
		},

		effect: {
			en: "This attack does 30 more damage for each basic Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie de base attachée à ce Pokémon.",
			es: "Este ataque hace 30 puntos de daño más por cada Energía Básica unida a este Pokémon.",
			it: "Questo attacco infligge 30 danni in più per ogni Energia base assegnata a questo Pokémon.",
			pt: "This attack does 30 more damage for each basic Energy attached to this Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Basis-Energie 30 Schadenspunkte mehr zu."
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
		en: "When it senses danger, its eyes tear up. The sparkle of its tears signals other Wishiwashi to gather."
	},

	dexId: [746],
	regulationMark: "E",

	thirdParty: {
		cardmarket: 574070
	}
}

export default card