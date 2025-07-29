import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Squirtle",
		fr: "Carapuce",
		es: "Squirtle",
		it: "Squirtle",
		pt: "Squirtle",
		de: "Schiggy"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		7,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Floating Shell",
				fr: "Carapace Flottante",
				es: "Caparazón Flotante",
				it: "Guscio Galleggiante",
				pt: "Carapaça Flutuante",
				de: "Gleitpanzer"
			},
			effect: {
				en: "If you have a Stadium card in play, this Pokémon has no Retreat Cost.",
				fr: "Si vous avez une carte Stade en jeu, ce Pokémon n’a pas de Coût de Retraite.",
				es: "Si tienes 1 carta de Estadio en juego, este Pokémon no tiene ningún Coste de Retirada.",
				it: "Se hai in gioco una carta Stadio, questo Pokémon non ha costo di ritirata.",
				pt: "Se você tiver uma carta de Estádio em jogo, este Pokémon não terá custo de Recuo.",
				de: "Wenn du eine Stadionkarte im Spiel hast, hat dieses Pokémon keine Rückzugskosten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O",
				es: "Pistola Agua",
				it: "Pistolacqua",
				pt: "Revólver d’Água",
				de: "Aquaknarre"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 368954
	}
}

export default card
