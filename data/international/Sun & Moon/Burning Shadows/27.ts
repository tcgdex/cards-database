import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Alolan Vulpix",
		'fr-fr': "Goupix d’Alola",
		'es-es': "Vulpix de Alola",
		'it-it': "Vulpix di Alola",
		'pt-br': "Vulpix de Alola",
		'de-de': "Alola Vulpix"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		37,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Powder Snow",
				'fr-fr': "Poudreuse",
				'es-es': "Nieve Polvo",
				'it-it': "Polneve",
				'pt-br': "Neve em Pó",
				'de-de': "Pulverschnee"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent’s Active Pokémon is now Asleep.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Adormecido.",
				'de-de': "Wirf 1 Münze. Bei Kopf schläft das Aktive Pokémon deines Gegners jetzt."
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Icy Snow",
				'fr-fr': "Verglas",
				'es-es': "Nieve Helada",
				'it-it': "Geloneve",
				'pt-br': "Neve Congelada",
				'de-de': "Eisiger Schnee"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It exhales air colder than -58 degrees Fahrenheit. Elderly people in Alola call this Pokémon by an older name—Keokeo.",
	},

	thirdParty: {
		cardmarket: 299433,
		tcgplayer: 138507
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
