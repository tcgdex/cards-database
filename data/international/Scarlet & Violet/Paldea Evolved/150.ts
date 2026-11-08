import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [879],
	set: Set,

	name: {
		'fr-fr': "Pachyradjah-ex",
		'en-us': "Copperajah ex",
		'es-es': "Copperajah ex",
		'it-it': "Copperajah-ex",
		'pt-br': "Copperajah ex",
		'de-de': "Patinaraja-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 300,
	types: ["Metal"],
	evolveFrom: {
		'fr-fr': "Charibari",
		'en-us': "Cufant",
		'es-es': "Cufant",
		'it-it': "Cufant",
		'pt-br': "Cufant",
		'de-de': "Kupfanti"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Corps de Bronze",
			'en-us': "Bronze Body",
			'es-es': "Cuerpo Bronce",
			'it-it': "Corpo di Bronzo",
			'pt-br': "Corpo de Bronze",
			'de-de': "Bronzekörper"
		},

		effect: {
			'fr-fr': "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			'en-us': "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			'es-es': "Los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			'it-it': "Questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Este Pokémon recebe 30 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Diesem Pokémon werden durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			'fr-fr': "Tremblement Nasal",
			'en-us': "Nosequake",
			'es-es': "Trompatemblor",
			'it-it': "Sismanaso",
			'pt-br': "Tromba Sísmica",
			'de-de': "Nasenbeben"
		},

		effect: {
			'fr-fr': "Cette attaque inflige aussi 30 dégâts à chacun de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'en-us': "This attack also does 30 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'es-es': "Este ataque también hace 30 puntos de daño a cada uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 30 danni a ciascuno dei Pokémon nella tua panchina. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 30 pontos de dano a cada um dos seus Pokémon no Banco. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt auch jedem Pokémon auf deiner Bank 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 260
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 4,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715625,
				tcgplayer: 497568,
				cardtrader: 248808
			}
		},
	],

	suffix: "ex",
	illustrator: "Uta",

	
}

export default card
