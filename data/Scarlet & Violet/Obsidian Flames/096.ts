import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	set: Set,

	name: {
		fr: "Apireine-ex",
		en: "Vespiquen ex",
		es: "Vespiquen ex",
		it: "Vespiquen-ex",
		pt: "Vespiquen ex",
		de: "Honweisel-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 270,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			fr: "Phéromone Soigneuse",
			en: "Healing Pheromone",
			es: "Feromona Curativa",
			it: "Feromone Curativo",
			pt: "Feromônio de Cura",
			de: "Heilende Pheromone"
		},

		effect: {
			fr: "Soignez 60 dégâts de l'un de vos Pokémon.",
			en: "Heal 60 damage from 1 of your Pokémon.",
			es: "Cura 60 puntos de daño a uno de tus Pokémon.",
			it: "Cura uno dei tuoi Pokémon da 60 danni.",
			pt: "Cure 60 pontos de dano de 1 dos seus Pokémon.",
			de: "Heile 60 Schadenspunkte bei 1 deiner Pokémon."
		}
	}, {
		cost: ["Grass", "Grass", "Grass"],

		name: {
			fr: "Reine Fantôme",
			en: "Phantom Queen",
			es: "Reina Fantasma",
			it: "Regina Spettrale",
			pt: "Rainha Fantasma",
			de: "Phantomkönigin"
		},

		effect: {
			fr: "Placez 3 marqueurs de dégâts sur chacun des Pokémon de Banc de votre adversaire ayant au moins un marqueur de dégâts.",
			en: "Put 3 damage counters on each of your opponent's Benched Pokémon that has any damage counters on it.",
			es: "Pon 3 contadores de daño en cada uno de los Pokémon en Banca de tu rival que tenga algún contador de daño sobre él.",
			it: "Metti tre segnalini danno su ciascuno dei Pokémon nella panchina del tuo avversario che ha dei segnalini danno.",
			pt: "Coloque 3 contadores de dano em cada um dos Pokémon no Banco do seu oponente que tem algum contador de dano nele.",
			de: "Lege 3 Schadensmarken auf jedes Pokémon auf der Bank deines Gegners, auf dem mindestens 1 Schadensmarke liegt."
		},

		damage: 200
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	}
}

export default card