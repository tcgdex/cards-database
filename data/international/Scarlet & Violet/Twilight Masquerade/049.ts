import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [349],
	set: Set,

	name: {
		'en-us': "Feebas",
		'fr-fr': "Barpau",
		'es-es': "Feebas",
		'it-it': "Feebas",
		'pt-br': "Feebas",
		'de-de': "Barschwa"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Flail",
			'fr-fr': "Gigotage",
			'es-es': "Azote",
			'it-it': "Flagello",
			'pt-br': "Mangual",
			'de-de': "Dreschflegel"
		},

		effect: {
			'en-us': "This attack does 10 damage for each damage counter on this Pokémon.",
			'fr-fr': "Cette attaque inflige 10 dégâts pour chaque marqueur de dégâts sur ce Pokémon.",
			'es-es': "Este ataque hace 10 puntos de daño por cada contador de daño en este Pokémon.",
			'it-it': "Questo attacco infligge 10 danni per ogni segnalino danno presente su questo Pokémon.",
			'pt-br': "Este ataque causa 10 pontos de dano para cada contador de dano neste Pokémon.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte zu."
		},

		damage: "10×"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "It is the shabbiest Pokémon of all. It forms schools and lives at the bottom of rivers that teem with plant life.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769223,
				tcgplayer: 550093
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769223,
				tcgplayer: 550093
			}
		},
	],

	illustrator: "Scav",

}

export default card