import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Muk",
		fr: "Grotadmorv",
		de: "Sleimok"
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
		en: "Grimer",
		fr: "Tadmorv",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Toxic Sludge",
				fr: "Boue toxik",
				de: "Giftiger Matsch"
			},
			effect: {
				en: "At the end of each player's turn, each of your opponent's Active Pokémon that has any Grass Energy attached to it is now Poisoned. If that Pokémon is already Poisoned, Toxic Sludge Poké-Body does nothing to that Pokémon.",
				fr: "À la fin du tour de chaque joueur, chacun des Pokémon Actifs de votre adversaire possédant une Énergie Grass est maintenant Empoisonné. Si ce Pokémon est déjà Empoisonné, le Poké-Body Boue toxik n'a pas d'effet sur lui.",
				de: "Am Ende jedes Zuges sind alle Aktiven Pokémon deines Gegners, an denen mindestens 1 -Energie angelegt ist, jetzt vergiftet. Wenn das jeweilige Pokémon bereits vergiftet ist, hat Giftiger Matsch Poké-Body keine Auswirkungen auf dieses Pokémon."
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
				en: "Panic Liquid",
				fr: "Panik-liquide",
				de: "Paniksabber"
			},
			effect: {
				en: "The Defending Pokémon is now Confused and can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur est maintenant Confus et ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
				de: "Das Verteidigende Pokémon ist jetzt verwirrt und kann sich im nächsten Zug deines Gegners nicht zurückziehen."
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

	thirdParty: {
		cardmarket: 277809
	}
}

export default card
