import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Togetic",
		fr: "Togetic",
		es: "Togetic",
		'es-mx': "Togetic",
		de: "Togetic",
		it: "Togetic",
		pt: "Togetic"
	},

	illustrator: "Teeziro",
	rarity: "Common",
	category: "Pokemon",
	dexId: [176],
	hp: 90,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Draining Kiss",
			fr: "Vampibaiser",
			es: "Beso Drenaje",
			'es-mx': "Beso Drenador",
			de: "Diebeskuss",
			it: "Assorbibacio",
			pt: "Beijo Drenante"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			'es-mx': "Cura 30 puntos de daño a este Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano deste Pokémon."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		en: "They say that it will appear before kindhearted, caring people and shower them with happiness.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869692,
			tcgplayer: 675893
		}
	},
	{
		type: "reverse",
		foil: "loveball",
		thirdParty: {
			cardmarket: 870262,
			tcgplayer: 676915
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870261,
			tcgplayer: 677055
		}
	},
],
}

export default card
