import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [416],
	set: Set,

	name: {
		'fr-fr': "Apireine-ex",
		'en-us': "Vespiquen ex",
		'es-es': "Vespiquen ex",
		'it-it': "Vespiquen-ex",
		'pt-br': "Vespiquen ex",
		'de-de': "Honweisel-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 270,
	types: ["Psychic"],
	evolveFrom: {
		'fr-fr': "Apitrini",
		'en-us': "Combee",
		'es-es': "Combee",
		'it-it': "Combee",
		'pt-br': "Combee",
		'de-de': "Wadribie"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'fr-fr': "Phéromone Soigneuse",
			'en-us': "Healing Pheromone",
			'es-es': "Feromona Curativa",
			'it-it': "Feromone Curativo",
			'pt-br': "Feromônio de Cura",
			'de-de': "Heilende Pheromone"
		},

		effect: {
			'fr-fr': "Soignez 60 dégâts de l'un de vos Pokémon.",
			'en-us': "Heal 60 damage from 1 of your Pokémon.",
			'es-es': "Cura 60 puntos de daño a uno de tus Pokémon.",
			'it-it': "Cura uno dei tuoi Pokémon da 60 danni.",
			'pt-br': "Cure 60 pontos de dano de 1 dos seus Pokémon.",
			'de-de': "Heile 60 Schadenspunkte bei 1 deiner Pokémon."
		}
	}, {
		cost: ["Grass", "Grass", "Grass"],

		name: {
			'fr-fr': "Reine Fantôme",
			'en-us': "Phantom Queen",
			'es-es': "Reina Fantasma",
			'it-it': "Regina Spettrale",
			'pt-br': "Rainha Fantasma",
			'de-de': "Phantomkönigin"
		},

		effect: {
			'fr-fr': "Placez 3 marqueurs de dégâts sur chacun des Pokémon de Banc de votre adversaire ayant au moins un marqueur de dégâts.",
			'en-us': "Put 3 damage counters on each of your opponent's Benched Pokémon that has any damage counters on it.",
			'es-es': "Pon 3 contadores de daño en cada uno de los Pokémon en Banca de tu rival que tenga algún contador de daño sobre él.",
			'it-it': "Metti tre segnalini danno su ciascuno dei Pokémon nella panchina del tuo avversario che ha dei segnalini danno.",
			'pt-br': "Coloque 3 contadores de dano em cada um dos Pokémon no Banco do seu oponente que tem algum contador de dano nele.",
			'de-de': "Lege 3 Schadensmarken auf jedes Pokémon auf der Bank deines Gegners, auf dem mindestens 1 Schadensmarke liegt."
		},

		damage: 200
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 725292,
				tcgplayer: 509961,
				cardtrader: 255654
			}
		},
	],

	suffix: "ex",
	illustrator: "5ban Graphics",

	
}

export default card
