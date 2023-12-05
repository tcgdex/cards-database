import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Unown [K]",
		fr: "Zarbi K",
		de: "Icognito K"
	},

	illustrator: "CR CG gangs",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		201,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "[Keep]",
				fr: "Keep",
				de: "Keep"
			},
			effect: {
				en: "Your opponent's attacks, Pokémon Powers, and Trainer cards can't discard Energy cards from your Pokémon with Unown in their names. (Any other effects of attacks still happen.)",
				fr: "Les attaques de votre adversaire, les Pouvoirs Pokémon, et les cartes Dresseur ne peuvent pas défausser les cartes Énergie attachées à vos différents Pokémon Zarbi. (Tout autre effet ou attaque est toujours valide.)",
				de: "Die Angriffe, Pokémon-Power und Trainerkarten deines Gegners können keine Energiekarten von deinen Pokémon, die Icognito in ihrem Namen haben, entfernen. (Alle anderen Auswirkungen von Angriffen finden immer noch statt.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hidden Power",
				fr: "Puissance cachée",
				de: "Kraftreserve"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Ils ressemblent à des hiéroglyphes inscrits sur d'antiques tablettes. On prétend qu'ils sont de la même origine."
	}
}

export default card
