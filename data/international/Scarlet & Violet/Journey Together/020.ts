import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [126],
	set: Set,

	name: {
		'en-us': "Magmar",
		'fr-fr': "Magmar",
		'es-es': "Magmar",
		'de-de': "Magmar",
		'it-it': "Magmar",
		'pt-br': "Magmar",
		'es-mx': "Magmar"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Searing Flame",
			'fr-fr': "Flammes Calcinantes",
			'es-es': "Llama Abrasadora",
			'de-de': "Sengende Flammen",
			'it-it': "Fiamme Ustionanti",
			'pt-br': "Chama Cauterizante",
			'es-mx': "Llama Abrasadora"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Burned.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Quemado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt verbrannt.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene bruciato.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Queimado.",
			'es-mx': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival ahora está Quemado."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",
	illustrator: "Naoyo Kimura",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817172,
				tcgplayer: 623447
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817172,
				tcgplayer: 623447
			}
		},
	],
}

export default card
