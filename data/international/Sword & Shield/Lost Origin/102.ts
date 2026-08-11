import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [423],
	set: Set,

	name: {
		'en-us': "Gastrodon",
		'fr-fr': "Tritosor",
		'es-es': "Gastrodon",
		'it-it': "Gastrodon",
		'pt-br': "Gastrodon",
		'de-de': "Gastrodon"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Shellos",
		'fr-fr': "Sancoki",
		'es-es': "Shellos",
		'it-it': "Shellos",
		'pt-br': "Shellos",
		'de-de': "Schalellos"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Recover",
			'fr-fr': "Soin",
			'es-es': "Recuperación",
			'it-it': "Ripresa",
			'pt-br': "Recuperação",
			'de-de': "Genesung"
		},

		effect: {
			'en-us': "Discard an Energy from this Pokémon and heal all damage from it.",
			'fr-fr': "Défaussez une Énergie de ce Pokémon, puis soignez tous les dégâts de ce Pokémon.",
			'es-es': "Descarta 1 Energía de este Pokémon y cura todos sus puntos de daño.",
			'it-it': "Scarta un'Energia da questo Pokémon e curalo da tutti i danni.",
			'pt-br': "Descarte 1 Energia deste Pokémon e cure todo o dano dele.",
			'de-de': "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel und heile bei ihm allen Schaden."
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Earthquake",
			'fr-fr': "Séisme",
			'es-es': "Terremoto",
			'it-it': "Terremoto",
			'pt-br': "Terremoto",
			'de-de': "Erdbeben"
		},

		effect: {
			'en-us': "This attack also does 20 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 20 dégâts à chacun de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 20 puntos de daño a cada uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 20 danni a ciascuno dei Pokémon nella tua panchina. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 20 pontos de dano a cada um dos seus Pokémon no Banco (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'de-de': "Diese Attacke fügt auch jedem Pokémon auf deiner Bank 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 170
	}],

	retreat: 3,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674115,
				tcgplayer: 283995
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674115,
				tcgplayer: 283995
			}
		},
	],
}

export default card
