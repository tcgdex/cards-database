import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [215],
	set: Set,

	name: {
		'en-us': "Sneasel",
		'fr-fr': "Farfuret",
		'es-es': "Sneasel",
		'it-it': "Sneasel",
		'pt-br': "Sneasel",
		'de-de': "Sniebel"
	},

	illustrator: "NC Empire",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	attacks: [{
		name: {
			'en-us': "Cut Down",
			'fr-fr': "Retranchement",
			'es-es': "Recorte",
			'it-it': "Falciare",
			'pt-br': "Corte",
			'de-de': "Umsägen"
		},

		effect: {
			'en-us': "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'es-es': "Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			'it-it': "Lancia una moneta. Se esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'pt-br': "Jogue 1 moeda. Se sair cara, descarte 1 Energia do Pokémon Ativo do seu oponente.",
			'de-de': "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "It has a cunning yet savage disposition. It waits for parents to leave their nests, and then it sneaks in to steal their eggs."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567110,
				tcgplayer: 241683
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567110,
				tcgplayer: 241683
			}
		},
	],
}

export default card
