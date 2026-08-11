import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

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

	rarity: "Promo",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Slap",
			'fr-fr': "Gifle",
			'es-es': "Bofetón",
			'it-it': "Sberla",
			'pt-br': "Tapa",
			'de-de': "Hieb"
		},

		damage: 30
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Roaring Scream",
			'fr-fr': "Hurlement Bestial",
			'es-es': "Grito Rugiente",
			'it-it': "Urlo Ruggente",
			'pt-br': "Brado Estrondo",
			'de-de': "Tosendes Gebrüll"
		},

		effect: {
			'en-us': "This attack does 20 damage to 1 of your opponent's Pokémon for each damage counter on this Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 20 dégâts à l'un des Pokémon de votre adversaire pour chaque marqueur de dégâts sur ce Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque hace 20 puntos de daño a uno de los Pokémon de tu rival por cada contador de daño en este Pokémon. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 20 danni a uno dei Pokémon del tuo avversario per ogni segnalino danno presente su questo Pokémon. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 20 pontos de dano a 1 dos Pokémon do seu oponente para cada contador de dano neste Pokémon. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners für jede Schadensmarke auf diesem Pokémon 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
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
	regulationMark: "G",
	illustrator: "GIDORA",
	description: {
		'en-us': "There has been only one reported sighting of this Pokémon. It resembles a mysterious creature depicted in an old expedition journal.",
	},
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 740403,
				tcgplayer: 526649
			},
		},
		{
			type: "holo",
			stamp: ["pokemon-center"],
			thirdParty: {
				cardmarket: 740404,
				tcgplayer: 526655
			},
		}
	],
}

export default card
