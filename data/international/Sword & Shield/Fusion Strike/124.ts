import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [648],
	set: Set,

	name: {
		'en-us': "Meloetta",
		'fr-fr': "Meloetta",
		'es-es': "Meloetta",
		'it-it': "Meloetta",
		'pt-br': "Meloetta",
		'de-de': "Meloetta"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",
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
	regulationMark: "E",
	illustrator: "kirisAki",

	description: {
		'en-us': "Its melodies are sung with a special vocalization method that can control the feelings of those who hear it."
	},

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Melodious Echo",
			'fr-fr': "Écho Mélodieux",
			'de-de': "Melodisches Echo",
			'es-es': "Eco Melodioso",
			'pt-br': "Eco Melodioso",
			'it-it': "Eco Melodiosa"
		},

		damage: "70×",

		effect: {
			'en-us': "This attack does 70 damage for each Fusion Strike Energy attached to all of your Pokémon.",
			'fr-fr': "Cette attaque inflige 70 dégâts pour chaque Énergie Poing de Fusion attachée à tous vos Pokémon.",
			'de-de': "Diese Attacke fügt für jede an alle deine Pokémon angelegte Fusionsangriff-Energie 70 Schadenspunkte zu.",
			'es-es': "Este ataque hace 70 puntos de daño por cada Energía Golpe Fusión unida a todos tus Pokémon.",
			'pt-br': "Este ataque causa 70 pontos de dano para cada Energia Golpe Fusão ligada a todos os seus Pokémon.",
			'it-it': "Questo attacco infligge 70 danni per ogni Energia Colpo Fusione assegnata ai tuoi Pokémon."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582652,
				tcgplayer: 253308
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582652,
				tcgplayer: 253308
			}
		},
	],
}

export default card
