import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Jumpluff",
		fr: "Cotovol",
		es: "Jumpluff",
		it: "Jumpluff",
		pt: "Jumpluff",
		de: "Papungha"
	},
	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		189,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Skiploom",
		fr: "Floravol",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fluffy Transport",
				fr: "Transport Coton",
				es: "Transporte Sedoso",
				it: "Trasporto Bambagia",
				pt: "Transporte Macio",
				de: "Flauschiger Transport"
			},
			effect: {
				en: "Switch 1 of your opponent’s Benched Pokémon with his or her Active Pokémon.",
				fr: "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
				es: "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
				it: "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
				pt: "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo desse oponente.",
				de: "Tausche 1 Pokémon auf der Bank deines Gegners gegen das Aktive Pokémon deines Gegners aus."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Solar Step",
				fr: "Démarche Solaire",
				es: "Paso Solar",
				it: "Solarpasso",
				pt: "Passo Solar",
				de: "Solarschritt"
			},
			effect: {
				en: "This attack does 20 damage times the number of your remaining Prize cards.",
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre de vos cartes Récompense.",
				es: "Este ataque hace 20 puntos de daño por cada carta de Premio que te quede.",
				it: "Questo attacco infligge 20 danni per ogni carta Premio che ti resta.",
				pt: "Este ataque causa 20 de danos vezes o número de seus cards de Prêmio restantes.",
				de: "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl deiner noch übrigen Preiskarten zu."
			},
			damage: "20×",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
