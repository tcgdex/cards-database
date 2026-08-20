import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Seviper",
		fr: "Séviper",
		de: "Vipitis"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [336],

	hp: 80,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Shed Skin",
				fr: "Mue",
				de: "Expidermis"
			},
			effect: {
				en: "Remove 4 damage counters from Seviper.",
				fr: "Retirez à Seviper 4 marqueurs de dégât.",
				de: "Entferne 4 Schadensmarken von Vipitis."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Bite and Escape",
				fr: "Mordre avant de s'échapper",
				de: "Beißen und Abhauen"
			},
			effect: {
				en: "You may switch Seviper with 1 of your Benched Pokémon.",
				fr: "Vous pouvez échanger Seviper avec 1 des Pokémon de votre Banc.",
				de: "Du kannst Vipitis gegen 1 Pokémon auf deiner Bank austauschen."
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Paralyze Poison",
				fr: "Poison paralysant",
				de: "Lähmendes Gift"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. Flip a coin. If heads, the Defending Pokémon is now Paralyzed and Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné. Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé et Empoisonné.",
				de: "Das Verteidigende Pokémon ist jetzt vergiftet. Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt gelähmt und vergiftet."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 1,

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 89087,
				cardmarket: 278482
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278482,
				tcgplayer: 89087
			}
		}
	],

}

export default card
