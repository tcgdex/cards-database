import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Solosis",
		fr: "Nucléos",
		es: "Solosis",
		it: "Solosis",
		pt: "Solosis",
		de: "Monozyto"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		577,
	],

	hp: 30,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hide",
				fr: "Cachette",
			},
			effect: {
				en: "Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, évitez tous les effets d'attaques (y compris les dégâts) infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 281063
	}
}

export default card
