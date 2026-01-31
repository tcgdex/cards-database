import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Tynamo",
		fr: "Anchwatt",
		es: "Tynamo",
		'es-mx': "Tynamo",
		de: "Zapplardin",
		it: "Tynamo",
		pt: "Tynamo"
	},

	illustrator: "Jerky",
	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Lightning"],
	stage: "Basic",
	dexId: [602],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Hold Still",
			fr: "Ne Bougez Pas",
			es: "Permanecer Inmóvil",
			'es-mx': "Sin Moverse",
			de: "Stillhalten",
			it: "Immobile",
			pt: "Ficar Parado"
		},

		effect: {
			en: "Heal 10 damage from this Pokémon.",
			fr: "Soignez 10 dégâts de ce Pokémon.",
			es: "Cura 10 puntos de daño a este Pokémon.",
			'es-mx': "Cura 10 puntos de daño a este Pokémon.",
			de: "Heile 10 Schadenspunkte bei diesem Pokémon.",
			it: "Cura questo Pokémon da 10 danni.",
			pt: "Cure 10 pontos de dano deste Pokémon."
		}
	}],

	retreat: 0,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675871,
		cardmarket: 869670
	}
}

export default card