import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [341],
	set: Set,

	name: {
		'en-us': "Corphish",
		'fr-fr': "Écrapince",
		'es-es': "Corphish",
		'it-it': "Corphish",
		'pt-br': "Corphish",
		'de-de': "Krebscorps"
	},

	illustrator: "chibi",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	attacks: [{
		name: {
			'en-us': "Bubble Beam",
			'fr-fr': "Bulles d'O",
			'es-es': "Rayo Burbuja",
			'it-it': "Bollaraggio",
			'pt-br': "Jato de Bolhas",
			'de-de': "Blubbstrahl"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 30,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "It was originally a Pokémon from afar that escaped to the wild. It can adapt to the dirtiest river."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545306,
				tcgplayer: 234174
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545306,
				tcgplayer: 234174
			}
		},
	],
}

export default card
