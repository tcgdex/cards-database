import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Electabuzz",
		fr: "Élektek",
		es: "Electabuzz",
		it: "Electabuzz",
		pt: "Electabuzz",
		de: "Elektek"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		125,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Thunder Shock",
				fr: "Éclair",
				es: "Impactrueno",
				it: "Tuonoshock",
				pt: "Trovoada de Choques",
				de: "Donnerschock"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunder Punch",
				fr: "Poing-Éclair",
				es: "Puño Trueno",
				it: "Tuonopugno",
				pt: "Soco Trovoada",
				de: "Donnerschlag"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 more damage. If tails, this Pokémon does 10 damage to itself.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires. Si c'est pile, ce Pokémon s'inflige 10 dégâts.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 10 puntos de daño más. Si sale cruz, este Pokémon se hace 10 puntos de daño a sí mismo.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 10 danni in più. Se esce croce, questo Pokémon infligge 10 danni a se stesso.",
				pt: "Jogue uma moeda. Se sair cara, este ataque causará 10 de danos adicionais. Se sair coroa, este Pokémon causará 10 de danos a ele mesmo.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 10 weitere Schadenspunkte zu. Bei \"Zahl\" fügt sich dieses Pokémon selbst 10 Schadenspunkte zu."
			},
			damage: "30+",

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
		cardmarket: 293397
	}
}

export default card
