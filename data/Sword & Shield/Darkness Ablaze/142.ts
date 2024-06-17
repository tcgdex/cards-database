import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [301],
	name: {
		en: "Delcatty",
		fr: "Delcatty",
		es: "Delcatty",
		it: "Delcatty",
		pt: "Delcatty",
		de: "Enekoro"
	},

	illustrator: "Tika Matsuno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 100,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Skitty",
		fr: "Skitty",
		es: "Skitty",
		it: "Skitty",
		pt: "Skitty",
		de: "Eneco"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Captivating Tail",
				fr: "Queue Envoûtante",
				es: "Cola Cautivadora",
				it: "Coda Ammaliante",
				pt: "Cauda Cativante",
				de: "Hinreißender Schweif"
			},
			effect: {
				en: "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon. The new Active Pokémon is now Confused.",
				fr: "Échangez l'un des Pokémon de Banc de votre adversaire contre son Pokémon Actif. Le nouveau Pokémon Actif est maintenant Confus.",
				es: "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo. El nuevo Pokémon Activo pasa a estar Confundido.",
				it: "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo. Il nuovo Pokémon attivo viene confuso.",
				pt: "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a). O novo Pokémon Ativo agora está Confuso.",
				de: "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus. Das neue Aktive Pokémon ist jetzt verwirrt."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Moon Impact",
				fr: "Impact Lunaire",
				es: "Impacto Lunar",
				it: "Impatto Lunare",
				pt: "Impacto Lunar",
				de: "Mondeinschlag"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "It is highly popular among female Trainers for its sublime fur. It does not keep a nest."
	}
}

export default card
