import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [557],
	set: Set,

	name: {
		'en-us': "Dwebble",
		'fr-fr': "Crabicoque",
		'de-de': "Lithomith",
		'it-it': "Dwebble",
		'pt-br': "Dwebble",
		'es-es': "Dwebble",
		'es-mx': "Dwebble"
	},

	illustrator: "Shimaris Yukichi",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Flail",
			'fr-fr': "Gigotage",
			'de-de': "Dreschflegel",
			'it-it': "Flagello",
			'pt-br': "Mangual",
			'es-es': "Azote",
			'es-mx': "Azote"
		},

		effect: {
			'en-us': "This attack does 10 damage for each damage counter on this Pokémon.",
			'fr-fr': "Cette attaque inflige 10 dégâts pour chaque marqueur de dégâts sur ce Pokémon.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte zu.",
			'it-it': "Questo attacco infligge 10 danni per ogni segnalino danno presente su questo Pokémon.",
			'pt-br': "Este ataque causa 10 pontos de dano para cada contador de dano neste Pokémon.",
			'es-es': "Este ataque hace 10 puntos de daño por cada contador de daño en este Pokémon.",
			'es-mx': "Este ataque hace 10 puntos de daño por cada contador de daño en este Pokémon."
		},

		damage: "10×"
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Dig Claws",
			'fr-fr': "Creusogriffes",
			'de-de': "Schaufelkrallen",
			'it-it': "Scavazanne",
			'pt-br': "Fincar Garras",
			'es-es': "Hundir Garras",
			'es-mx': "Clavar Garras"
		},

		damage: 20
	}],

	retreat: 2,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836174,
				tcgplayer: 642584
			}
		},
	]
}

export default card
