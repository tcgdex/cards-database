import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Chansey",
		fr: "Leveinard",
		es: "Chansey",
		it: "Chansey",
		pt: "Chansey",
		de: "Chaneira"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		113,
	],

	hp: 110,

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
				en: "Bind Wound",
				fr: "Blessure Pansée",
				es: "Vendar Herida",
				it: "Cura Ferite",
				pt: "Ligar Ferida",
				de: "Wunden verbinden"
			},
			effect: {
				en: "Flip a coin. If heads, heal 30 damage from 1 of your Pokémon.",
				fr: "Lancez une pièce. Si c’est face, soignez 30 dégâts à l’un de vos Pokémon.",
				es: "Lanza 1 moneda. Si sale cara, cura 30 puntos de daño a 1 de tus Pokémon.",
				it: "Lancia una moneta. Se esce testa, cura uno dei tuoi Pokémon da 30 danni.",
				pt: "Jogue 1 moeda. Se sair cara, cure 30 pontos de dano de 1 dos seus Pokémon.",
				de: "Wirf 1 Münze. Heile bei Kopf 30 Schadenspunkte bei 1 deiner Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hammer In",
				fr: "Enfoncer",
				es: "Martillear",
				it: "Martello",
				pt: "Martelada",
				de: "Einhämmern"
			},

			damage: 80,

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
		cardmarket: 297554
	}
}

export default card
