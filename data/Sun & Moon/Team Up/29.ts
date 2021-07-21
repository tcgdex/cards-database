import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Magikarp",
		fr: "Magicarpe",
		es: "Magikarp",
		it: "Magikarp",
		pt: "Magikarp",
		de: "Karpador"
	},
	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		129,
	],
	hp: 30,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Enter the Dragon",
				fr: "Porte du Dragon",
				es: "Operación Dragón",
				it: "Operazione Drago",
				pt: "Operação Dragão",
				de: "Drachenauftritt"
			},
			effect: {
				en: "Flip a coin. If heads, put a card that evolves from this Pokémon from your discard pile onto this Pokémon to evolve it.",
				fr: "Lancez une pièce. Si c’est face, placez une carte Évolution de ce Pokémon de votre pile de défausse sur ce Pokémon pour le faire évoluer.",
				es: "Lanza 1 moneda. Si sale cara, pon 1 carta que evolucione de este Pokémon de tu pila de descartes sobre este Pokémon para hacerlo evolucionar.",
				it: "Lancia una moneta. Se esce testa, prendi una carta che si evolve da questo Pokémon dalla tua pila degli scarti e mettila su questo Pokémon per farlo evolvere.",
				pt: "Jogue 1 moeda. Se sair cara, coloque 1 carta que evolua deste Pokémon da sua pilha de descarte sobre este Pokémon para evoluí-lo.",
				de: "Wirf 1 Münze. Lege bei Kopf 1 Karte, die sich aus diesem Pokémon entwickelt, aus deinem Ablagestapel auf dieses Pokémon, um es zu entwickeln."
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
