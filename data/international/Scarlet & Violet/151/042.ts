import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [42],
	set: Set,

	name: {
		'fr-fr': "Nosferalto",
		'en-us': "Golbat",
		'es-es': "Golbat",
		'it-it': "Golbat",
		'pt-br': "Golbat",
		'de-de': "Golbat"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	evolveFrom: {
		'fr-fr': "Nosferapti",
		'en-us': "Zubat",
		'es-es': "Zubat",
		'it-it': "Zubat",
		'pt-br': "Zubat",
		'de-de': "Zubat"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Plongeon Contrôlé",
			'en-us': "Skill Dive",
			'es-es': "Técnica de Buceo",
			'it-it': "Agiltuffo",
			'pt-br': "Mergulho Habilidoso",
			'de-de': "Geübter Sturzflug"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 40 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'en-us': "This attack does 40 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'es-es': "Este ataque hace 40 puntos de daño a uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 40 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 40 pontos de dano a 1 dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		}
	}],

	weaknesses: [
		{
			type: "Lightning",
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

	description: {
		'en-us': "Its feet are tiny, but this Pokémon walks skillfully. It sneaks up on sleeping prey before sinking in its fangs and slurping up blood.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733637,
				tcgplayer: 516152,
				cardtrader: 261179
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733637,
				tcgplayer: 516152,
				cardtrader: 261179
			}
		},
	],

	illustrator: "Scav",

	
}

export default card
