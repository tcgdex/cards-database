import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Zorua",
		fr: "Zorua",
		es: "Zorua",
		it: "Zorua",
		pt: "Zorua",
		de: "Zorua"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		570,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Moonless Madness",
				fr: "Folie Obscure",
				es: "Demencia Nocturna",
				it: "Follia Notturna",
				pt: "Loucura sem Lua",
				de: "Mondloser Wahn"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Dark Edge",
				fr: "Lame Obscurité",
				es: "Filo Siniestro",
				it: "Lama Oscura",
				pt: "Gume Sombrio",
				de: "Dunkelklinge"
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie attachée à ce Pokémon.",
				es: "Descarta 1 Energía unida a este Pokémon.",
				it: "Scarta un'Energia assegnata a questo Pokémon.",
				pt: "Descarte uma Energia ligada a este Pokémon.",
				de: "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 286335
	}
}

export default card
