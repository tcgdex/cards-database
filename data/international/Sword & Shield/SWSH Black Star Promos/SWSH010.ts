import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	name: {
		'fr-fr': "Tournicoton",
		'en-us': "Gossifleur",
		'es-es': "Gossifleur",
		'it-it': "Gossifleur",
		'pt-br': "Gossifleur",
		'de-de': "Cottini"
	},

	illustrator: "Naoki Saito",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,
	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'fr-fr': "Berceuse",
				'en-us': "Sing",
				'es-es': "Canto",
				'it-it': "Canto",
				'pt-br': "Canção",
				'de-de': "Gesang"
			},
			effect: {
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'en-us': "Your opponent's Active Pokémon is now Asleep.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It anchors itself in the ground with its single leg, then basks in the sun. After absorbing enough sunlight, its petals spread as it blooms brilliantly."
	},

	dexId: [829],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 439958
	}
}

export default card
