import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "sowsow",
	category: "Pokemon",

	description: {
		'en-us': "Because Galarian Slowpoke eat the seeds of a plant that grows only in Galar, their tails have developed a spicy flavor."
	},

	stage: "Basic",

	name: {
		'en-us': "Galarian Slowpoke",
		'fr-fr': "Ramoloss de Galar",
		'de-de': "Galar-Flegmon",
		'es-es': "Slowpoke de Galar",
		'pt-br': "Slowpoke de Galar",
		'it-it': "Slowpoke di Galar"
	},

	rarity: "Promo",
	dexId: [79],
	hp: 70,
	types: ["Psychic"],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Everyone Laze Around",
			'fr-fr': "Flânerie Générale",
			'de-de': "Faules Rumhängen",
			'es-es': "Todos a Vaguear",
			'pt-br': "Preguiça Coletiva",
			'it-it': "Dolce Far Nulla"
		},

		effect: {
			'en-us': "Heal 10 damage from each of your Pokémon.",
			'fr-fr': "Soignez 10 dégâts de chacun de vos Pokémon.",
			'de-de': "Heile 10 Schadenspunkte bei jedem deiner Pokémon.",
			'es-es': "Cura 10 puntos de daño a cada uno de tus Pokémon.",
			'pt-br': "Cure 10 pontos de dano de cada um dos seus Pokémon.",
			'it-it': "Cura ciascuno dei tuoi Pokémon da 10 danni."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Tail Whap",
			'fr-fr': "Queue Battoir",
			'de-de': "Schweifvertrimmer",
			'es-es': "Coletón",
			'pt-br': "Surra de Cauda",
			'it-it': "Codabotta"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "E",

	thirdParty: {
		cardmarket: 568798
	}
}

export default card
