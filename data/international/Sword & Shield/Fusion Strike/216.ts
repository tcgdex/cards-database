import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [701],
	set: Set,

	name: {
		'en-us': "Hawlucha",
		'fr-fr': "Brutalibré",
		'es-es': "Hawlucha",
		'it-it': "Hawlucha",
		'pt-br': "Hawlucha",
		'de-de': "Resladero"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Taira Akitsu",

	description: {
		'en-us': "It always strikes a pose before going for its finishing move. Sometimes opponents take advantage of that time to counterattack."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Flying Stomp",
			'fr-fr': "Écrasement Aérien",
			'de-de': "Flying Stomp",
			'es-es': "Pisotón Volador",
			'pt-br': "Pisoteada Voadora",
			'it-it': "Pestone Volante"
		},

		damage: 20,

		effect: {
			'en-us': "Discard a Special Energy from your opponent's Active Pokémon.",
			'fr-fr': "Défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
			'de-de': "Lege 1 Spezial-Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			'es-es': "Descarta 1 Energía Especial del Pokémon Activo de tu rival.",
			'pt-br': "Descarte 1 Energia Especial do Pokémon Ativo do seu oponente.",
			'it-it': "Scarta un'Energia speciale dal Pokémon attivo del tuo avversario."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582952,
				tcgplayer: 253315
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582952,
				tcgplayer: 253315
			}
		},
	],
}

export default card
