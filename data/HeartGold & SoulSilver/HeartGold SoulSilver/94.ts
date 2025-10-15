import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Moomoo Milk",
		fr: "Lait Meumeu",
		de: "Kuhmuh-Milch"
	},

	illustrator: "Noriko Hotta",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Choisissez l’un de vos Pokémon. Lancez 2 pièces. Pour chaque face, retirez 3 marqueurs de dégâts de ce Pokémon.",
		en: "Choose 1 of your Pokémon. Flip 2 coins. For each heads, remove 3 damage counters from that Pokémon.",
		de: "Wähle 1 deiner Pokémon. Wirf 2 Münzen. Entferne pro \"Kopf\" 3 Schadensmarken vom gewählten Pokémon."
	},

	trainerType: "Item",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	hp: 0,

	thirdParty: {
		cardmarket: 279066,
		tcgplayer: 87576
	}
}

export default card
