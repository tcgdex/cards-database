import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Vivillon",
		'fr-fr': "Prismillon",
		'es-es': "Vivillon",
		'it-it': "Vivillon",
		'pt-br': "Vivillon",
		'de-de': "Vivillon"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		666,
	],

	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Spewpa",
		'fr-fr': "Pérégrain",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Vivid Powder",
				'fr-fr': "Poudre Vive",
				'es-es': "Polvo Vívido",
				'it-it': "Polvere Vivida",
				'pt-br': "Pó de Escamas Vívidas",
				'de-de': "Farbenprächtiger Puder"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Asleep and Poisoned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné et Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido y Envenenado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato e avvelenato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido e Envenenado.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt und ist vergiftet."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
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
		'en-us': "The patterns on this Pokémon's wings depend on the climate and topography of its habitat. It scatters colorful scales.",
	},

	thirdParty: {
		cardmarket: 355529,
		tcgplayer: 165655
	}
}

export default card
