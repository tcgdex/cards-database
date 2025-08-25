import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Snubbull",
		fr: "Snubbull",
		es: "Snubbull",
		it: "Snubbull",
		pt: "Snubbull",
		de: "Snubbull"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		209,
	],

	hp: 70,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fairy",
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
				en: "Flip a coin. If tails, this Pokémon does 10 damage to itself.",
				fr: "Lancez une pièce. Si c’est pile, ce Pokémon s’inflige 10 dégâts.",
				es: "Lanza 1 moneda. Si sale cruz, este Pokémon se hace 10 puntos de daño a sí mismo.",
				it: "Lancia una moneta. Se esce croce, questo Pokémon infligge 10 danni a se stesso.",
				pt: "Jogue 1 moeda. Se sair coroa, este Pokémon causará 10 pontos de dano a si mesmo.",
				de: "Wirf 1 Münze. Bei Zahl fügt sich dieses Pokémon selbst 10 Schadenspunkte zu."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 295401,
		tcgplayer: 126962
	}
}

export default card
