import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Haunter",
		'fr-fr': "Spectrum",
		'es-es': "Haunter",
		'it-it': "Haunter",
		'pt-br': "Haunter",
		'de-de': "Alpollo"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		93,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Gastly",
		'fr-fr': "Fantominus",
		'es-es': "Gastly",
		'it-it': "Gastly",
		'pt-br': "Gastly",
		'de-de': "Nebulak"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Hypnosis",
				'fr-fr': "Hypnose",
				'es-es': "Hipnosis",
				'it-it': "Ipnosi",
				'pt-br': "Hipnose",
				'de-de': "Hypnose"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Dream Eater",
				'fr-fr': "Dévorêve",
				'es-es': "Come Sueños",
				'it-it': "Mangiasogni",
				'pt-br': "Devorador de Sonhos",
				'de-de': "Traumfresser"
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon is not Asleep, this attack does nothing.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire n'est pas Endormi, cette attaque ne fait rien.",
				'es-es': "Si el Pokémon Activo de tu rival no está Dormido, este ataque no hace nada.",
				'it-it': "Se il Pokémon attivo del tuo avversario non è addormentato, questo attacco non ha effetto.",
				'pt-br': "Se o Pokémon Ativo do seu oponente não estiver Adormecido, este ataque não fará nada.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners nicht schläft, hat dieser Angriff keine Auswirkungen."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "If you get the feeling of being watched in darkness when nobody is around, Haunter is there.",
	},

	thirdParty: {
		cardmarket: 293403,
		tcgplayer: 124060
	}
}

export default card
