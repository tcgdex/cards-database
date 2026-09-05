import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Miltank",
		fr: "Écrémeuh",
		es: "Miltank",
		it: "Miltank",
		pt: "Miltank",
		de: "Miltank"
	},

	illustrator: "MAHOU",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		241,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Max Milk",
				fr: "Lait Max",
				de: "Megamilch"
			},
			effect: {
				en: "Heal all damage from 1 of your Pokémon. Then, discard all Energy attached to this Pokémon.",
				fr: "Soignez tous les dégâts de l'un de vos Pokémon. Ensuite, défaussez toutes les Énergies attachées à ce Pokémon.",
				de: "Heile allen Schaden bei 1 deiner Pokémon. Lege anschließend alle an dieses Pokémon angelegten Energien auf deinen Ablagestapel."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				de: "Tackle"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "It is said that kids who drink Miltank's milk grow up to become hearty, healthy adults.",
		de: "Man sagt, dass Kinder, die Miltanks Milch trinken, zu gesunden Erwachsenen heranwachsen."
	},

	thirdParty: {
		cardmarket: 280971,
		tcgplayer: 87467
	}
}

export default card
