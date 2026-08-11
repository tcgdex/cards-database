import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Swinub",
		'fr-fr': "Marcacrin",
		'es-es': "Swinub",
		'it-it': "Swinub",
		'pt-br': "Swinub",
		'de-de': "Quiekel"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		220,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Powder Snow",
				'fr-fr': "Poudreuse",
				'es-es': "Nieve Polvo",
				'it-it': "Polneve",
				'pt-br': "Neve em Pó",
				'de-de': "Pulverschnee"
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
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Mud-Slap",
				'fr-fr': "Coud'Boue",
				'es-es': "Bofetón Lodo",
				'it-it': "Fangosberla",
				'pt-br': "Tapa de Lama",
				'de-de': "Lehmschelle"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "If it smells something enticing, it dashes off headlong to find the source of the aroma.",
	},

	thirdParty: {
		cardmarket: 286326,
		tcgplayer: 107199
	}
}

export default card
