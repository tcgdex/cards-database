import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Pupitar",
		fr: "Ymphect",
		es: "Pupitar",
		it: "Pupitar",
		pt: "Pupitar",
		de: "Pupitar"
	},

	illustrator: "match",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		247,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Larvitar",
		fr: "Embrylex",
		es: "Larvitar",
		it: "Larvitar",
		pt: "Larvitar",
		de: "Larvitar"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Thrash",
				fr: "Mania",
				es: "Golpe",
				it: "Colpo",
				pt: "Castigar",
				de: "Fuchtler"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage. If tails, this Pokémon does 20 damage to itself.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires. Si c'est pile, ce Pokémon s'inflige 20 dégâts.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más. Si sale cruz, este Pokémon se hace 20 puntos de daño a sí mismo.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più. Se esce croce, questo Pokémon infligge 20 danni a se stesso.",
				pt: "Jogue uma moeda. Se sair cara, este ataque causará 20 de danos adicionais. Se sair coroa, este Pokémon causará 20 de danos a si mesmo.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 20 weitere Schadenspunkte zu. Bei \"Zahl\" fügt sich dieses Pokémon selbst 20 Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 289866
	}
}

export default card
