import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "M Pidgeot EX",
		fr: "M-Roucarnage EX",
		es: "M-Pidgeot EX",
		it: "M Pidgeot EX",
		pt: "M-Pidgeot EX",
		de: "M-Tauboss EX"
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
		en: "Pidgeot-EX",
		fr: "Roucarnage-EX",
		es: "Pidgeot-EX",
		it: "Pidgeot-EX",
		pt: "Pidgeot-EX",
		de: "Tauboss-EX"
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
				en: "Mach Cyclone",
				fr: "Mach Cyclone",
				es: "Ciclón Mach",
				it: "Ciclone Mach",
				pt: "Ciclone Mach",
				de: "Schallsturm"
			},
			effect: {
				en: "You may have your opponent switch his or her Active Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Vous pouvez demander à votre adversaire d'échanger son Pokémon Actif avec l'un de ses Pokémon de Banc.",
				es: "Puedes hacer que tu rival cambie su Pokémon Activo por 1 de sus Pokémon en Banca.",
				it: "Puoi far scambiare al tuo avversario il suo Pokémon attivo con uno dei suoi Pokémon in panchina.",
				pt: "Você pode fazer seu oponente trocar o próprio Pokémon Ativo por um dos Pokémon no Banco dele(a).",
				de: "Du kannst deinen Gegner dazu veranlassen, sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank auszutauschen."
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
	suffix: "EX"
}

export default card
