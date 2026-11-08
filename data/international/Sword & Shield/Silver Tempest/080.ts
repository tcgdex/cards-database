import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [606],
	set: Set,

	name: {
		'en-us': "Beheeyem",
		'fr-fr': "Neitram",
		'es-es': "Beheeyem",
		'it-it': "Beheeyem",
		'pt-br': "Beheeyem",
		'de-de': "Megalon"
	},

	illustrator: "Shinji Kanda",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Elgyem",
		'fr-fr': "Lewsor",
		'es-es': "Elgyem",
		'it-it': "Elgyem",
		'pt-br': "Elgyem",
		'de-de': "Pygraulon"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Psychic Sphere",
			'fr-fr': "Sphère Psy",
			'es-es': "Esfera Psíquica",
			'it-it': "Psicosfera",
			'pt-br': "Esfera Psíquica",
			'de-de': "Psychosphäre"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Psychic Arrow",
			'fr-fr': "Flèche Psy",
			'es-es': "Flecha Psíquica",
			'it-it': "Psicofreccia",
			'pt-br': "Flecha Psíquica",
			'de-de': "Psychopfeil"
		},

		effect: {
			'en-us': "This attack does 60 damage to 1 of your opponent's Pokémon. Also apply Weakness and Resistance for Benched Pokémon.",
			'fr-fr': "Cette attaque inflige 60 dégâts à l'un des Pokémon de votre adversaire. Appliquez aussi la Faiblesse et la Résistance aux Pokémon de Banc.",
			'es-es': "Este ataque hace 60 puntos de daño a 1 de los Pokémon de tu rival. Aplica también Debilidad y Resistencia a los Pokémon en Banca.",
			'it-it': "Questo attacco infligge 60 danni a uno dei Pokémon del tuo avversario. Applica debolezza e resistenza anche ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 60 pontos de dano a 1 dos Pokémon do seu oponente. Também aplique Fraqueza e Resistência aos Pokémon no Banco.",
			'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 60 Schadenspunkte zu. Wende Schwäche und Resistenz auch bei Pokémon auf der Bank an."
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
	regulationMark: "F",


	description: {
		'en-us': "Whenever a Beheeyem visits a farm, a Dubwool mysteriously disappears.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682127,
				tcgplayer: 451734
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682127,
				tcgplayer: 451734
			}
		},
	],
}

export default card
