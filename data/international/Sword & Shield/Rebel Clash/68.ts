import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		'en-us': "Toxel",
		'fr-fr': "Toxizap",
		'es-es': "Toxel",
		'it-it': "Toxel",
		'pt-br': "Toxel",
		'de-de': "Toxel"
	},

	illustrator: "nagimiso",
	rarity: "Common",
	category: "Pokemon",
	dexId: [848],
	set: Set,

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Tight Jaw",
				'fr-fr': "Mâchoire Serrée",
				'es-es': "Mandíbula Cerrada",
				'it-it': "Strettazanna",
				'pt-br': "Mandíbula Firme",
				'de-de': "Fester Biss"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
				'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 70,
	types: ["Lightning"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It stores poison in an internal poison sac and secretes that poison through its skin. If you touch this Pokémon, a tingling sensation follows."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457768,
				tcgplayer: 213152
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457768,
				tcgplayer: 213152
			}
		},
	],
}

export default card
