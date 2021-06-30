import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Pikipek",
		fr: "Picassaut",
		es: "Pikipek",
		it: "Pikipek",
		pt: "Pikipek",
		de: "Peppeck"
	},
	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		731,
	],
	hp: 50,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Peck Off",
				fr: "Picpic Piqueur",
				es: "Picotear",
				it: "Sbeccata",
				pt: "Arrancar com Bico",
				de: "Lospicken"
			},
			effect: {
				en: "Before doing damage, discard all Pokémon Tool cards from your opponent’s Active Pokémon.",
				fr: "Avant d’infliger des dégâts, défaussez toutes les cartes Outil Pokémon du Pokémon Actif de votre adversaire.",
				es: "Antes de infligir daño, descarta todas las cartas de Herramienta Pokémon del Pokémon Activo de tu rival.",
				it: "Prima di infliggere danni, scarta tutte le carte Oggetto Pokémon assegnate al Pokémon attivo del tuo avversario.",
				pt: "Antes de causar dano, descarte todas as cartas de Ferramenta Pokémon do Pokémon Ativo do seu oponente.",
				de: "Bevor du Schaden zufügst, lege alle Pokémon-Ausrüstungen vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 10,

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
