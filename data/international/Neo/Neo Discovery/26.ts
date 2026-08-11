import { Card } from 'models/database/card'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		'en-us': "Magnemite",
		'fr-fr': "Magneti",
		'de-de': "Magnetilo"
	},

	illustrator: undefined,
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		81,
	],

	hp: 40,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Lock-on",
				'fr-fr': "Verrouillage",
				'de-de': "Lock-on"
			},
			effect: {
				'en-us': "During your next turn, treat any tails flipped when using Magnemite's Electric Bolt attack on the Defending Pokémon as if they were heads. (Benching or evolving either Pokémon ends this effect.)",
				'fr-fr': "Pendant votre prochain tour, considérez que les pièces tombées sur pile lors de l'attaque Élécanon de Magneti sur le Pokémon Défenseur sont en fait tombées sur face. (Faire évoluer ou renvoyer l'un ou l'autre Pokémon sur son Banc annule cet effet.)",
				'de-de': "During your next turn, treat any tails flipped when using Magnemite's Electric Bolt attack on the Defending Pokémon as if they were heads. (Benching or evolving either Pokémon ends this effect.)"
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],

			name: {
				'en-us': "Electric Bolt",
				'fr-fr': "Élécanon",
				'de-de': "Electric Bolt"
			},

			effect: {
				'en-us': "Flip 2 coins. If both are heads, the Defending Pokémon is now Paralyzed. If either of them is tails, this attack does nothing (not even damage).",
				'fr-fr': "Lancez 2 pièces. Si c'est face dans les deux cas, le Pokémon Défenseur est Paralysé. Si c'est pile (même pour une pièce seulement), cette attaque ne fait rien (pas même de dégâts).",
				'de-de': "Flip 2 coins. If both are heads, the Defending Pokémon is now Paralyzed. If either of them is tails, this attack does nothing (not even damage)."
			},

			damage: 50
		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		'en-us': "These Pokémon are attracted to electrical emissions and will often follow people using PokéGear.",
		'fr-fr': "Ces Pokémon sont attirés par les émissions électriques et ils suivent souvent les gens qui se servent de Pokéquipement."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274518
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274518
			}
		}
	]
}

export default card

