import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [985],
	set: Set,

	name: {
		'en-us': "Scream Tail",
		'fr-fr': "Hurle-Queue",
		'es-es': "Colagrito",
		'it-it': "Codaurlante",
		'pt-br': "Cauda Brado",
		'de-de': "Brüllschweif"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Supportive Singing",
			'fr-fr': "Chant Encourageant",
			'es-es': "Canto de Auxilio",
			'it-it': "Canto Solidale",
			'pt-br': "Canto Encorajador",
			'de-de': "Unterstützender Gesang"
		},

		effect: {
			'en-us': "Heal 100 damage from 1 of your Benched Ancient Pokémon.",
			'fr-fr': "Soignez 100 dégâts de l'un de vos Pokémon Temps passé de Banc.",
			'es-es': "Cura 100 puntos de daño a uno de tus Pokémon del pasado en Banca.",
			'it-it': "Cura uno dei tuoi Pokémon Tempo Passato in panchina da 100 danni.",
			'pt-br': "Cure 100 pontos de dano de 1 dos seus Pokémon Ancestrais no Banco.",
			'de-de': "Heile 100 Schadenspunkte bei 1 Pokémon aus der Vergangenheit auf deiner Bank."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Hyper Voice",
			'fr-fr': "Mégaphone",
			'es-es': "Vozarrón",
			'it-it': "Granvoce",
			'pt-br': "Hipervoz",
			'de-de': "Schallwelle"
		},

		damage: 40
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
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "There has been only one reported sighting of this Pokémon. It resembles a mysterious creature depicted in an old expedition journal.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760707,
				tcgplayer: 542821
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760707,
				tcgplayer: 542821
			}
		},
		{
			type: "holo",
			foil: "cosmos", 
			thirdParty: {
				cardmarket: 766664,
			}
		},
	],

	illustrator: "kawayoo",

}

export default card