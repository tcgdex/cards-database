import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "M Pidgeot EX",
		'fr-fr': "M-Roucarnage EX",
		'es-es': "M-Pidgeot EX",
		'it-it': "M Pidgeot EX",
		'pt-br': "M-Pidgeot EX",
		'de-de': "M-Tauboss EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		18,
	],

	hp: 220,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Pidgeot-EX",
		'fr-fr': "Roucarnage-EX",
		'es-es': "Pidgeot-EX",
		'it-it': "Pidgeot-EX",
		'pt-br': "Pidgeot-EX",
		'de-de': "Tauboss-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mach Cyclone",
				'fr-fr': "Mach Cyclone",
				'es-es': "Ciclón Mach",
				'it-it': "Ciclone Mach",
				'pt-br': "Ciclone Mach",
				'de-de': "Schallsturm"
			},
			effect: {
				'en-us': "You may have your opponent switch his or her Active Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Vous pouvez demander à votre adversaire d'échanger son Pokémon Actif avec l'un de ses Pokémon de Banc.",
				'es-es': "Puedes hacer que tu rival cambie su Pokémon Activo por 1 de sus Pokémon en Banca.",
				'it-it': "Puoi far scambiare al tuo avversario il suo Pokémon attivo con uno dei suoi Pokémon in panchina.",
				'pt-br': "Você pode fazer seu oponente trocar o próprio Pokémon Ativo por um dos Pokémon no Banco dele(a).",
				'de-de': "Du kannst deinen Gegner dazu veranlassen, sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank auszutauschen."
			},
			damage: 130,

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

	retreat: 0,
	suffix: "EX",

	thirdParty: {
		tcgplayer: 124118
	}
}

export default card
