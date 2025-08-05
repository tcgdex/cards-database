import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "sowsow",
	category: "Pokemon",

	description: {
		en: "Because Galarian Slowpoke eat the seeds of a plant that grows only in Galar, their tails have developed a spicy flavor."
	},

	stage: "Basic",

	name: {
		en: "Galarian Slowpoke",
		fr: "Ramoloss de Galar",
		de: "Galar-Flegmon",
		es: "Slowpoke de Galar",
		pt: "Slowpoke de Galar",
		it: "Slowpoke di Galar"
	},

	rarity: "None",
	dexId: [79],
	hp: 70,
	types: ["Psychic"],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Everyone Laze Around",
			fr: "Flânerie Générale",
			de: "Faules Rumhängen",
			es: "Todos a Vaguear",
			pt: "Preguiça Coletiva",
			it: "Dolce Far Nulla"
		},

		effect: {
			en: "Heal 10 damage from each of your Pokémon.",
			fr: "Soignez 10 dégâts de chacun de vos Pokémon.",
			de: "Heile 10 Schadenspunkte bei jedem deiner Pokémon.",
			es: "Cura 10 puntos de daño a cada uno de tus Pokémon.",
			pt: "Cure 10 pontos de dano de cada um dos seus Pokémon.",
			it: "Cura ciascuno dei tuoi Pokémon da 10 danni."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Tail Whap",
			fr: "Queue Battoir",
			de: "Schweifvertrimmer",
			es: "Coletón",
			pt: "Surra de Cauda",
			it: "Codabotta"
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