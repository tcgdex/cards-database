import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Eelektrik",
		fr: "Lampéroie",
		es: "Eelektrik",
		it: "Eelektrik",
		pt: "Eelektrik",
		de: "Zapplalek"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		603,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Tynamo",
		fr: "Anchwatt",
		es: "Tynamo",
		it: "Tynamo",
		pt: "Tynamo",
		de: "Zapplardin"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ancient Trait",
			name: {
				fr: "Régénération α",
				en: "α Recovery",
				es: "{title}:",
				it: "{title}:",
				pt: "{title}:",
				de: "{title}:"
			},
			effect: {
				fr: "Lorsque ce Pokémon est soigné, doublez la quantité de soins.",
				en: "When this Pokémon is healed, double the amount healed.",
				es: "{title}: Cuando este Pokémon sea curado, dobla la cantidad curada.",
				it: "{title}: Quando curi questo Pokémon, raddoppia la quantità di danni che stai curando.",
				pt: "{title}: Quando este Pokémon for curado, dobre a quantidade curada.",
				de: "{title}: Wenn dieses Pokémon geheilt wird, verdoppele die geheilten Schadenspunkte."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
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
				pt: "Jogue uma moeda. Se sair cara, esse ataque causará 20 de danos adicionais. Se sair coroa, o Pokémon causará 20 de danos a ele mesmo.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 20 weitere Schadenspunkte zu. Bei \"Zahl\" fügt sich dieses Pokémon selbst 20 Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 273594
	}
}

export default card
