import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Lampent",
		'fr-fr': "Mélancolux",
		'es-es': "Lampent",
		'it-it': "Lampent",
		'pt-br': "Lampent",
		'de-de': "Laternecto"
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
		'en-us': "Litwick",
		'fr-fr': "Funécire",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Freefloating",
				'fr-fr': "Apesanteur",
				'es-es': "Ingravidez",
				'it-it': "Fluttuare",
				'pt-br': "Flutuação Livre",
				'de-de': "Freifahrtschein"
			},
			effect: {
				'en-us': "If this Pokémon has no Energy attached to it, this Pokémon has no Retreat Cost.",
				'fr-fr': "Si aucune Énergie n’est attachée à ce Pokémon, ce Pokémon n’a pas de coût de Retraite.",
				'es-es': "Si este Pokémon no tiene ninguna Energía unida a él, este Pokémon no tiene Coste de Retirada.",
				'it-it': "Se questo Pokémon non ha delle Energie assegnate, non ha costo di ritirata.",
				'pt-br': "Se este Pokémon não possuir Energia ligada a ele, ele não terá Custo para Recuar.",
				'de-de': "Wenn an dieses Pokémon keine Energie angelegt ist, hat dieses Pokémon keine Rückzugskosten."
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
				'en-us': "Will-O-Wisp",
				'fr-fr': "Feu Follet",
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

	description: {
		'en-us': "The spirits it absorbs fuel its baleful fire. It hangs around hospitals waiting for people to pass on.",
	},

	thirdParty: {
		cardmarket: 280762,
		tcgplayer: 86589
	}
}

export default card
