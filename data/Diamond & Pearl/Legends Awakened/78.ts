import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Unown U",
		fr: "Zarbi U",
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		201,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "UNSEEN",
				fr: "UNSEEN",
			},
			effect: {
				en: "As long as Unown U is on your Bench, prevent all effects of attacks, including damage, done by your opponent's Pokémon to any Unown on your Bench.",
				fr: "Tant que Zarbi U est sur votre Banc, prévenez tous les effets d'attaques, dégâts inclus, infligés à n'importe quel Zarbi se trouvant sur votre Banc par les Pokémon de votre adversaire.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hidden Power",
				fr: "Puissance cachée",
			},
			effect: {
				en: "Search your deck for any 1 card and discard it. Shuffle your deck afterward.",
				fr: "Choisissez 1 carte dans votre deck et défaussez-la. Ensuite, mélangez votre deck.",
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		fr: "Il rappelle une écriture ancienne. Reste à savoir qui du langage ou de Zarbi est apparu en premier."
	}
}

export default card
