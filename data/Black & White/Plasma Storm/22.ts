import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Lampent",
		fr: "Mélancolux",
		es: "Lampent",
		it: "Lampent",
		pt: "Lampent",
		de: "Laternecto"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		608,
	],

	hp: 70,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Litwick",
		fr: "Funécire",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Freefloating",
				fr: "Apesanteur",
				es: "Ingravidez",
				it: "Fluttuare",
				pt: "Flutuação Livre",
				de: "Freifahrtschein"
			},
			effect: {
				en: "If this Pokémon has no Energy attached to it, this Pokémon has no Retreat Cost.",
				fr: "Si aucune Énergie n’est attachée à ce Pokémon, ce Pokémon n’a pas de coût de Retraite.",
				es: "Si este Pokémon no tiene ninguna Energía unida a él, este Pokémon no tiene Coste de Retirada.",
				it: "Se questo Pokémon non ha delle Energie assegnate, non ha costo di ritirata.",
				pt: "Se este Pokémon não possuir Energia ligada a ele, ele não terá Custo para Recuar.",
				de: "Wenn an dieses Pokémon keine Energie angelegt ist, hat dieses Pokémon keine Rückzugskosten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Will-O-Wisp",
				fr: "Feu Follet",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 280762,
		tcgplayer: 86589
	}
}

export default card
