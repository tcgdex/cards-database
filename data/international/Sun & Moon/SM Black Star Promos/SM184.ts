import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	dexId: [133],
	set: Set,

	name: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'es-es': "Eevee",
		'it-it': "Eevee",
		'pt-br': "Eevee",
		'de-de': "Evoli"
	},

	illustrator: "Mizue",
	rarity: "Promo",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	attacks: [{
		name: {
			'en-us': "Find a Friend",
			'fr-fr': "Trouver un Ami",
			'es-es': "Encontrar un Amigo",
			'it-it': "Trovamico",
			'pt-br': "Encontre um Amigo",
			'de-de': "Freunde finden"
		},

		effect: {
			'en-us': "Flip a coin. If heads, search your deck for a Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Lancez une pièce. Si c’est face, cherchez un Pokémon dans votre deck, montrez-le, puis ajoutez-le à votre main. Mélangez ensuite votre deck.",
			'es-es': "Lanza 1 moneda. Si sale cara, busca en tu baraja 1 Pokémon, enséñalo y ponlo en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Lancia una moneta. Se esce testa, cerca nel tuo mazzo un Pokémon, mostralo e aggiungilo alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Jogue 1 moeda. Se sair cara, procure por 1 Pokémon no seu baralho, revele-o e coloque-o na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Wirf 1 Münze. Durchsuche bei Kopf dein Deck nach 1 Pokémon, zeige es deinem Gegner und nimm es auf deine Hand. Mische anschließend dein Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Smash Kick",
			'fr-fr': "Coud’Pattes",
			'es-es': "Patada Destrucción",
			'it-it': "Calcio Esplosivo",
			'pt-br': "Chute Poderoso",
			'de-de': "Schmetterkick"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,

	description: {
		'en-us': "Current studies show it can evolve into an incredible eight different species of Pokémon.",
	},
}

export default card
