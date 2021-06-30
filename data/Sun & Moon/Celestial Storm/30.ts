import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Oricorio",
		fr: "Plumeline",
		es: "Oricorio",
		it: "Oricorio",
		pt: "Oricorio",
		de: "Choreogel"
	},
	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		741,
	],
	hp: 90,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Captivating Salsa",
				fr: "Salsa Envoûtante",
				es: "Salsa Cautivadora",
				it: "Flamenco Incantato",
				pt: "Salsa Cativante",
				de: "Hinreißende Salsa"
			},
			effect: {
				en: "Switch 1 of your opponent’s Benched Pokémon with their Active Pokémon. The new Active Pokémon is now Burned and Confused.",
				fr: "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Le nouveau Pokémon Actif est maintenant Brûlé et Confus.",
				es: "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo. El nuevo Pokémon Activo pasa a estar Confundido y Quemado.",
				it: "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo. Il nuovo Pokémon attivo viene bruciato e confuso.",
				pt: "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a). O novo Pokémon Ativo agora está Confuso e Queimado.",
				de: "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus. Das neue Aktive Pokémon ist jetzt verbrannt und verwirrt."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heat Blast",
				fr: "Explosion de Chaleur",
				es: "Explosión de Calor",
				it: "Caldobomba",
				pt: "Raio de Calor",
				de: "Hitzestoß"
			},

			damage: 70,

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



}

export default card
