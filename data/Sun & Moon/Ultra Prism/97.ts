import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Gible",
		fr: "Griknot",
		es: "Gible",
		it: "Gible",
		pt: "Gible",
		de: "Kaumalat"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		443,
	],

	hp: 60,

	types: [
		"Dragon",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Rock Hiding",
				fr: "Cachette Roche",
				es: "Escondido entre Rocas",
				it: "Nascondiglio Roccioso",
				pt: "Esconder nas Pedras",
				de: "Steinversteck"
			},
			effect: {
				en: "If this Pokémon has any Fighting Energy attached to it, it has no Retreat Cost.",
				fr: "Si de l’Énergie Fighting est attachée à ce Pokémon, il n’a pas de coût de Retraite.",
				es: "Si este Pokémon tiene alguna Energía Fighting unida a él, no tiene ningún Coste de Retirada.",
				it: "Se questo Pokémon ha delle Energie Fighting assegnate, non ha costo di ritirata.",
				pt: "Se este Pokémon tiver alguma Energia Fighting ligada a ele, não terá custo de Recuo.",
				de: "Wenn an dieses Pokémon mindestens 1 Fighting-Energie angelegt ist, hat es keine Rückzugskosten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gnaw",
				fr: "Ronge",
				es: "Roer",
				it: "Rosicchiamento",
				pt: "Roída",
				de: "Nagen"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 316022
	}
}

export default card
