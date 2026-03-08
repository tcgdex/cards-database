import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Ursaring",
		fr: "Ursaring",
		de: "Ursaring"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		217,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Teddiursa",
		fr: "Teddiursa"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Intimidating Ring",
				fr: "Cercle intimidant",
				de: "Intimidating Ring"
			},
			effect: {
				en: "As long as Ursaring is your Active Pokémon, your opponent's Basic Pokémon can't attack or use any Poké-Powers.",
				fr: "Tant qu'Ursaring est votre Pokémon Actif, les Pokémon de base de votre adversaire ne peuvent pas attaquer ou utiliser des Poké-Powers.",
				de: "As long as Ursaring is your Active Pokémon, your opponent's Basic Pokémon can't attack or use any Poké-Powers."
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
				en: "Drag Off",
				fr: "Traîne",
				de: "Drag Off"
			},
			effect: {
				en: "Before doing damage, you may switch 1 of your opponent's Benched Pokémon with the Defending Pokémon. If you do, this attack does 20 damage to the new Defending Pokémon. Your opponent chooses the Defending Pokémon to switch.",
				fr: "Avant d'infliger des dégâts, vous pouvez échanger 1 des Pokémon de Banc de votre adversaire avec le Pokémon Défenseur. Cette attaque inflige alors 20 dégâts au nouveau Pokémon Défenseur. Votre adversaire choisit le Pokémon Défenseur à échanger.",
				de: "Before doing damage, you may switch 1 of your opponent's Benched Pokémon with the Defending Pokémon. If you do, this attack does 20 damage to the new Defending Pokémon. Your opponent chooses the Defending Pokémon to switch."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rock Smash",
				fr: "Éclate-roc",
				de: "Rock Smash"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 damage plus 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires.",
				de: "Flip a coin. If heads, this attack does 40 damage plus 20 more damage."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276664,
		tcgplayer: 90252
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
