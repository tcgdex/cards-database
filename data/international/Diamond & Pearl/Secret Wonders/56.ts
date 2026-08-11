import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Muk",
		'fr-fr': "Grotadmorv",
		'de-de': "Sleimok"
	},

	illustrator: "Daisuke Ito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		89,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Grimer",
		'fr-fr': "Tadmorv",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Toxic Sludge",
				'fr-fr': "Boue toxik",
				'de-de': "Giftiger Matsch"
			},
			effect: {
				'en-us': "At the end of each player's turn, each of your opponent's Active Pokémon that has any Grass Energy attached to it is now Poisoned. If that Pokémon is already Poisoned, Toxic Sludge Poké-Body does nothing to that Pokémon.",
				'fr-fr': "À la fin du tour de chaque joueur, chacun des Pokémon Actifs de votre adversaire possédant une Énergie Grass est maintenant Empoisonné. Si ce Pokémon est déjà Empoisonné, le Poké-Body Boue toxik n'a pas d'effet sur lui.",
				'de-de': "Am Ende jedes Zuges sind alle Aktiven Pokémon deines Gegners, an denen mindestens 1 -Energie angelegt ist, jetzt vergiftet. Wenn das jeweilige Pokémon bereits vergiftet ist, hat Giftiger Matsch Poké-Body keine Auswirkungen auf dieses Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Panic Liquid",
				'fr-fr': "Panik-liquide",
				'de-de': "Paniksabber"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Confused and can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Confus et ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
				'de-de': "Das Verteidigende Pokémon ist jetzt verwirrt und kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "A toxic fluids seeps from its body. The fluid instantly kills plants and trees on contact.",
	},

	thirdParty: {
		cardmarket: 277809,
		tcgplayer: 87623
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
