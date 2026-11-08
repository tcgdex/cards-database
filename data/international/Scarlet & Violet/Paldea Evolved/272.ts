import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [911],
	set: Set,

	name: {
		'fr-fr': "Flâmigator-ex",
		'en-us': "Skeledirge ex",
		'es-es': "Skeledirge ex",
		'it-it': "Skeledirge-ex",
		'pt-br': "Skeledirge ex",
		'de-de': "Skelokrok-ex"
	},

	rarity: "Hyper rare",
	category: "Pokemon",
	hp: 340,
	types: ["Fire"],
	evolveFrom: {
		'fr-fr': "Crocogril",
		'en-us': "Crocalor",
		'es-es': "Crocalor",
		'it-it': "Crocalor",
		'pt-br': "Crocalor",
		'de-de': "Lokroko"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Fire"],

		name: {
			'fr-fr': "Chant Vitalité",
			'en-us': "Vitality Song",
			'es-es': "Canto Vitalidad",
			'it-it': "Canto del Vigore",
			'pt-br': "Canção de Vitalidade",
			'de-de': "Vitalitätsgesang"
		},

		effect: {
			'fr-fr': "Soignez 30 dégâts de chacun de vos Pokémon.",
			'en-us': "Heal 30 damage from each of your Pokémon.",
			'es-es': "Cura 30 puntos de daño a cada uno de tus Pokémon.",
			'it-it': "Cura ciascuno dei tuoi Pokémon da 30 danni.",
			'pt-br': "Cure 30 pontos de dano de cada um dos seus Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei jedem deiner Pokémon."
		},

		damage: 50
	}, {
		cost: ["Fire", "Fire"],

		name: {
			'fr-fr': "Voix Brûlante",
			'en-us': "Burning Voice",
			'es-es': "Voz Abrasadora",
			'it-it': "Bruciavoce",
			'pt-br': "Voz Abrasadora",
			'de-de': "Brennende Stimme"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 10 dégâts de moins pour chaque marqueur de dégâts sur ce Pokémon.",
			'en-us': "This attack does 10 less damage for each damage counter on this Pokémon.",
			'es-es': "Este ataque hace 10 puntos de daño menos por cada contador de daño en este Pokémon.",
			'it-it': "Questo attacco infligge 10 danni in meno per ogni segnalino danno presente su questo Pokémon.",
			'pt-br': "Este ataque causa 10 pontos de dano a menos para cada contador de dano neste Pokémon.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte weniger zu."
		},

		damage: "270-"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715747,
				tcgplayer: 497693,
				cardtrader: 248926
			}
		},
	],

	suffix: "ex",
	illustrator: "5ban Graphics",

	
}

export default card
