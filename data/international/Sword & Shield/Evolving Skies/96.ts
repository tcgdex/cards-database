import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Nuzleaf",
		'fr-fr': "Pifeuil",
		'es-es': "Nuzleaf",
		'it-it': "Nuzleaf",
		'pt-br': "Nuzleaf",
		'de-de': "Blanas"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	stage: "Stage1",
	illustrator: "Atsuko Nishida",

	attacks: [{
		name: {
			'en-us': "Fake Out",
			'fr-fr': "Bluff",
			'es-es': "Sorpresa",
			'it-it': "Bruciapelo",
			'pt-br': "Fake Out",
			'de-de': "Mogelhieb"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 20,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,

	evolveFrom: {
		'en-us': "Seedot",
		'fr-fr': "Grainipiot",
		'es-es': "Seedot",
		'it-it': "Seedot",
		'pt-br': "Seedot",
		'de-de': "Samurzel"
	},

	description: {
		'en-us': "They live in holes bored in large trees. The sound of Nuzleaf's grass flute fills listeners with dread."
	},

	dexId: [274],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574144,
				tcgplayer: 246891
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574144,
				tcgplayer: 246891
			}
		},
	],
}

export default card
