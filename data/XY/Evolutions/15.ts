import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Ninetales",
		fr: "Feunard",
		es: "Ninetales",
		it: "Ninetales",
		pt: "Ninetales",
		de: "Vulnona"
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		38,
	],
	hp: 100,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Vulpix",
		fr: "Goupix",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Lure",
				fr: "Leurre",
				es: "Cebo",
				it: "Esca",
				pt: "Atrair",
				de: "Lockvogel"
			},
			effect: {
				en: "Switch 1 of your opponent's Benched Pokémon with his or her Active Pokémon. The new Active Pokémon can't retreat during your opponent's next turn.",
				fr: "Échangez l'un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Le nouveau Pokémon Actif ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
				es: "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo. El nuevo Pokémon Activo no puede retirarse durante el próximo turno de tu rival.",
				it: "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo. Durante il prossimo turno del tuo avversario, il nuovo Pokémon attivo non può ritirarsi.",
				pt: "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo desse oponente. O novo Pokémon Ativo não poderá recuar durante a próxima vez de jogar do seu oponente.",
				de: "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus. Das neue Aktive Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Blast",
				fr: "Déflagration",
				es: "Llamarada",
				it: "Fuocobomba",
				pt: "Rajada de Fogo",
				de: "Feuersturm"
			},
			effect: {
				en: "Discard a Fire Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie Fire attachée à ce Pokémon.",
				es: "Descarta 1 Energía Fire unida a este Pokémon.",
				it: "Scarta un'Energia Fire assegnata a questo Pokémon.",
				pt: "Descarte uma Energia Fire ligada a este Pokémon.",
				de: "Lege 1 an dieses Pokémon angelegte Fire-Energie auf deinen Ablagestapel."
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
