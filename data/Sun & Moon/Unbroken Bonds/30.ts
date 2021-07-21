import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Salandit",
		fr: "Tritox",
		es: "Salandit",
		it: "Salandit",
		pt: "Salandit",
		de: "Molunk"
	},
	illustrator: "Yusuke Ohmura",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		757,
	],
	hp: 70,
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
				en: "Grass Fire",
				fr: "Feu de Brousse",
				es: "Quemaplantas",
				it: "Fuoco d’Erba",
				pt: "Fogo de Grama",
				de: "Pflanzenbrand"
			},
			effect: {
				en: "Discard a Grass Energy from your opponent’s Active Pokémon.",
				fr: "Défaussez une Énergie Grass du Pokémon Actif de votre adversaire.",
				es: "Descarta 1 Energía Grass del Pokémon Activo de tu rival.",
				it: "Scarta un’Energia Grass assegnata al Pokémon attivo del tuo avversario.",
				pt: "Descarte 1 Energia Grass do Pokémon Ativo do seu oponente.",
				de: "Lege 1 Grass-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 10,

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
