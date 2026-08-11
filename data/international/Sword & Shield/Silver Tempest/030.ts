import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [725],
	set: Set,

	name: {
		'en-us': "Litten",
		'fr-fr': "Flamiaou",
		'es-es': "Litten",
		'it-it': "Litten",
		'pt-br': "Litten",
		'de-de': "Flamiau"
	},

	illustrator: "Narumi Sato",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Gnaw",
			'fr-fr': "Ronge",
			'es-es': "Roer",
			'it-it': "Rosicchiamento",
			'pt-br': "Roída",
			'de-de': "Nagen"
		},

		damage: 10
	}, {
		cost: ["Fire", "Fire"],

		name: {
			'en-us': "Reprisal",
			'fr-fr': "Revanche",
			'es-es': "Tomar Represalias",
			'it-it': "Rappresaglia",
			'pt-br': "Retaliar",
			'de-de': "Repressalie"
		},

		effect: {
			'en-us': "This attack does 20 damage for each damage counter on this Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts sur ce Pokémon.",
			'es-es': "Este ataque hace 20 puntos de daño por cada contador de daño en este Pokémon.",
			'it-it': "Questo attacco infligge 20 danni per ogni segnalino danno presente su questo Pokémon.",
			'pt-br': "Este ataque causa 20 pontos de dano para cada contador de dano neste Pokémon.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 20 Schadenspunkte zu."
		},

		damage: "20×"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "Its coat regrows twice a year. When the time comes, Litten sets its own body on fire and burns away the old fur.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682072,
				tcgplayer: 451661
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682072,
				tcgplayer: 451661
			}
		},
	],
}

export default card
