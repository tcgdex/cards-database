import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		'en-us': "Turbo Patch",
		'fr-fr': "Fortifiant Turbo",
		'es-es': "Refuerzo Turbo",
		'it-it': "Distintivo Turbo",
		'pt-br': "Fragmento Turbo",
		'de-de': "Turbopflaster"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Flip a coin. If heads, attach a basic Energy card from your discard pile to 1 of your Basic Pokémon that isn't a Pokémon-GX.",
		'fr-fr': "Lancez une pièce. Si c'est face, attachez une carte Énergie de base de votre pile de défausse à l'un de vos Pokémon de base qui n'est pas un Pokémon-GX.",
		'es-es': "Lanza 1 moneda. Si sale cara, une 1 carta de Energía Básica de tu pila de descartes a 1 de tus Pokémon Básicos que no sea 1 Pokémon-GX.",
		'it-it': "Lancia una moneta. Se esce testa, assegna a uno dei tuoi Pokémon Base che non è un Pokémon-GX una carta Energia base dalla tua pila degli scarti.",
		'pt-br': "Jogue 1 moeda. Se sair cara, ligue 1 carta de Energia básica da sua pilha de descarte a 1 dos seus Pokémon Básicos que não seja um Pokémon-GX.",
		'de-de': "Wirf 1 Münze. Lege bei Kopf 1 Basis-Energiekarte aus deinem Ablagestapel an 1 deiner Basis-Pokémon an, das kein Pokémon-GX ist."
	},

	trainerType: "Item",
	regulationMark: "D",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483739,
				tcgplayer: 219289
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483739,
				tcgplayer: 219289
			}
		},
		{
			type: 'reverse',
			stamp: ['player-rewards-program', 'thank-you'],
			thirdParty: {
				cardmarket: 715463
			}
		},
	],
}

export default card
