import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [602],
	set: Set,

	name: {
		en: "Tynamo",
		fr: "Anchwatt",
		de: "Zapplardin",
		it: "Tynamo",
		pt: "Tynamo",
		es: "Tynamo",
		'es-mx': "Tynamo"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 40,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Hold Still",
			fr: "Ne Bougez Pas",
			de: "Stillhalten",
			it: "Immobile",
			pt: "Ficar Parado",
			es: "Permanecer Inmóvil",
			'es-mx': "Sin Moverse"
		},

		effect: {
			en: "Heal 10 damage from this Pokémon.",
			fr: "Soignez 10 dégâts de ce Pokémon.",
			de: "Heile 10 Schadenspunkte bei diesem Pokémon.",
			it: "Cura questo Pokémon da 10 danni.",
			pt: "Cure 10 pontos de dano deste Pokémon.",
			es: "Cura 10 puntos de daño a este Pokémon.",
			'es-mx': "Cura 10 puntos de daño a este Pokémon."
		}
	}],

	retreat: 0,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836135
			}
		},
	]
}

export default card
