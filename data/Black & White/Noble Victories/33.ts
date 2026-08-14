import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Cryogonal",
		fr: "Hexagel",
		es: "Cryogonal",
		it: "Cryogonal",
		pt: "Cryogonal",
		de: "Frigometri"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		615,
	],

	hp: 80,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Ice Chain",
				fr: "Chaîne de Glace",
				de: "Eiskette"
			},
			effect: {
				en: "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon.",
				fr: "Échangez le Pokémon Défenseur avec 1 des Pokémon de Banc de votre adversaire.",
				de: "Tausche das Verteidigende Pokémon gegen 1 Pokémon auf der Bank deines Gegners aus."
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Frost Vanish",
				fr: "Poudreuse d'Escampette",
				de: "Frostauflöser"
			},
			effect: {
				en: "You may return this Pokémon and all cards attached to it to your hand.",
				fr: "Vous pouvez reprendre ce Pokémon et toutes les cartes qui lui sont attachées dans votre main.",
				de: "Du kannst dieses Pokémon und alle daran angelegten Karten zurück auf deine Hand nehmen."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "They are born in snow clouds. They use chains made of ice crystals to capture prey.",
		de: "Es fängt seine Beute mit Ketten, die sich aus Eiskristallen zusammensetzen. Entstanden ist es aus einer Schneewolke."
	},

	thirdParty: {
		cardmarket: 280155,
		tcgplayer: 84513
	}
}

export default card
