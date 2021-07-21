import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Regigigas",
		fr: "Regigigas",
		es: "Regigigas",
		it: "Regigigas",
		pt: "Regigigas",
		de: "Regigigas"
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		486,
	],
	hp: 180,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Seal of Antiquity",
				fr: "Sceau d’Antiquité",
				es: "Sello de Antigüedad",
				it: "Sigillo dell’Antichità",
				pt: "Selo de Antiguidade",
				de: "Siegel des Altertums"
			},
			effect: {
				en: "This Pokémon can’t attack unless Regirock, Regice, and Registeel are on your Bench.",
				fr: "Ce Pokémon ne peut pas attaquer, à moins que Regirock, Regice et Registeel ne soient sur votre Banc.",
				es: "Este Pokémon no puede atacar a menos que Regirock, Regice y Registeel estén en tu Banca.",
				it: "Questo Pokémon non può attaccare a meno che Regirock, Regice e Registeel non siano nella tua panchina.",
				pt: "Este Pokémon não pode atacar a não ser que Regirock, Regice e Registeel estejam no seu Banco.",
				de: "Dieses Pokémon kann nicht angreifen, es sei denn, Regirock, Regice und Registeel befinden sich auf deiner Bank."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Giant Stomp",
				fr: "Piétinement Gigantesque",
				es: "Pisotón Gigante",
				it: "Pestata Gigante",
				pt: "Pisada Gigante",
				de: "Gigantischer Stampfer"
			},
			effect: {
				en: "Discard any Stadium card in play.",
				fr: "Défaussez toute carte Stade en jeu.",
				es: "Descarta cualquier carta de Estadio en juego.",
				it: "Scarta una carta Stadio in gioco.",
				pt: "Descarte qualquer carta de Estádio em jogo.",
				de: "Lege 1 beliebige Stadionkarte im Spiel auf den Ablagestapel."
			},
			damage: 160,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
