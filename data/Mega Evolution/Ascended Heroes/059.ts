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

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869670,
			tcgplayer: 675871
		}
	},
	{
		type: "reverse",
		foil: "quickball",
		thirdParty: {
			cardmarket: 870229,
			tcgplayer: 676899
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870230,
			tcgplayer: 677039
		}
	},
],
}

export default card
