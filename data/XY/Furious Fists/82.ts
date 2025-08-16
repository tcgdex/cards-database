import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Vigoroth",
		fr: "Vigoroth",
		es: "Vigoroth",
		it: "Vigoroth",
		pt: "Vigoroth",
		de: "Muntier"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		288,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Slakoth",
		fr: "Parecool",
		es: "Slakoth",
		it: "Slakoth",
		pt: "Slakoth",
		de: "Bummelz"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
				es: "Arañazo",
				it: "Graffio",
				pt: "Arranhão",
				de: "Kratzer"
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
				en: "Reckless Charge",
				fr: "Attaque Imprudente",
				es: "Carga Descuidada",
				it: "Carica Avventata",
				pt: "Carga Indomável",
				de: "Waghalsiger Sturmangriff"
			},
			effect: {
				en: "Flip a coin. If tails, this Pokémon does 20 damage to itself.",
				fr: "Lancez une pièce. Si c'est pile, ce Pokémon s'inflige 20 dégâts.",
				es: "Lanza 1 moneda. Si sale cruz, este Pokémon se hace 20 puntos de daño a sí mismo.",
				it: "Lancia una moneta. Se esce croce, questo Pokémon infligge 20 danni a se stesso.",
				pt: "Jogue uma moeda. Se sair coroa, o Pokémon causará 20 de danos a ele mesmo.",
				de: "Wirf 1 Münze. Bei \"Zahl\" fügt sich dieses Pokémon selbst 20 Schadenspunkte zu."
			},
			damage: 70,

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
		cardmarket: 281746,
		tcgplayer: 92262
	}
}

export default card
