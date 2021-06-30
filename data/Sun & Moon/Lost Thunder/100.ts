import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Cofagrigus",
		fr: "Tutankafer",
		es: "Cofagrigus",
		it: "Cofagrigus",
		pt: "Cofagrigus",
		de: "Echnatoll"
	},
	illustrator: "tetsuya koizumi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		563,
	],
	hp: 120,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Yamask",
		fr: "Tutafeh",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Spirit Juggling",
				fr: "Jeu d’Esprits",
				es: "Malabarismo de Espíritus",
				it: "Giocoliere delle Anime",
				pt: "Malabarismo de Almas",
				de: "Seelenbalance"
			},
			effect: {
				en: "Discard any number of your Benched Pokémon. This attack does 30 more damage for each Benched Pokémon you discarded in this way.",
				fr: "Défaussez autant de vos Pokémon de Banc que vous voulez. Cette attaque inflige 30 dégâts supplémentaires pour chaque Pokémon de Banc défaussé de cette façon.",
				es: "Descarta cualquier cantidad de tus Pokémon en Banca. Este ataque hace 30 puntos de daño más por cada Pokémon en Banca que hayas descartado de esta manera.",
				it: "Scarta un numero qualsiasi di Pokémon che hai in panchina. Questo attacco infligge 30 danni in più per ogni Pokémon in panchina scartato in questo modo.",
				pt: "Descarte qualquer número dos seus Pokémon no Banco. Este ataque causa 30 pontos de dano a mais para cada Pokémon no Banco descartado desta forma.",
				de: "Lege beliebig viele Pokémon von deiner Bank auf deinen Ablagestapel. Diese Attacke fügt 30 Schadenspunkte mehr mal der Anzahl der auf diese Weise von deiner Bank auf deinen Ablagestapel gelegten Pokémon zu."
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
