import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [911],
	set: Set,

	name: {
		'en-us': "Skeledirge ex",
		'fr-fr': "Flâmigator-ex",
		'es-es': "Skeledirge ex",
		'it-it': "Skeledirge-ex",
		'pt-br': "Skeledirge ex",
		'de-de': "Skelokrok-ex"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 340,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Crocalor",
		'fr-fr': "Crocogril",
		'es-es': "Crocalor",
		'it-it': "Crocalor",
		'pt-br': "Crocalor",
		'de-de': "Lokroko"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Vitality Song",
			'fr-fr': "Chant Vitalité",
			'es-es': "Canto Vitalidad",
			'it-it': "Canto del Vigore",
			'pt-br': "Canção de Vitalidade",
			'de-de': "Vitalitätsgesang"
		},

		effect: {
			'en-us': "Heal 30 damage from each of your Pokémon.",
			'fr-fr': "Soignez 30 dégâts de chacun de vos Pokémon.",
			'es-es': "Cura 30 puntos de daño a cada uno de tus Pokémon.",
			'it-it': "Cura ciascuno dei tuoi Pokémon da 30 danni.",
			'pt-br': "Cure 30 pontos de dano de cada um dos seus Pokémon.",
			'de-de': "Heile 30 Schadenspunkte bei jedem deiner Pokémon."
		},

		damage: 50
	}, {
		cost: ["Fire", "Fire"],

		name: {
			'en-us': "Burning Voice",
			'fr-fr': "Voix Brûlante",
			'es-es': "Voz Abrasadora",
			'it-it': "Bruciavoce",
			'pt-br': "Voz Abrasadora",
			'de-de': "Brennende Stimme"
		},

		effect: {
			'en-us': "This attack does 10 less damage for each damage counter on this Pokémon.",
			'fr-fr': "Cette attaque inflige 10 dégâts de moins pour chaque marqueur de dégâts sur ce Pokémon.",
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
	suffix: "ex",
	illustrator: "5ban Graphics",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 751806,
				tcgplayer: 537975
			},
		},
		{
			type: "holo",
			size: "jumbo",
			thirdParty: {
				cardmarket: 751806,
				tcgplayer: 537976
			}
		}
	],
}

export default card
