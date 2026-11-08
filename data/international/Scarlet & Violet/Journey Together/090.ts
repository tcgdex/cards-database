import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [950],
	set: Set,

	name: {
		'en-us': "Klawf",
		'fr-fr': "Craparoi",
		'es-es': "Klawf",
		'de-de': "Klibbe",
		'it-it': "Klawf",
		'pt-br': "Klawf",
		'es-mx': "Klawf"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Snipping Pincers",
			'fr-fr': "Pinces Coupantes",
			'es-es': "Pinzas Recortadoras",
			'de-de': "Schnippelnde Kneifer",
			'it-it': "Chele Taglienti",
			'pt-br': "Pinças Esfrangalhadoras",
			'es-mx': "Pinzas Recortadoras"
		},

		effect: {
			'en-us': "Flip 2 coins. For each heads, discard an Energy from your opponent's Active Pokémon.",
			'fr-fr': "Lancez 2 pièces. Pour chaque côté face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'es-es': "Lanza 2 monedas. Por cada cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			'de-de': "Wirf 2 Münzen. Lege pro Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			'it-it': "Lancia due volte una moneta. Ogni volta che esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'pt-br': "Jogue 2 moedas. Para cada cara, descarte uma Energia do Pokémon Ativo do seu oponente.",
			'es-mx': "Lanza 2 monedas. Por cada cara, descarta 1 Energía del Pokémon Activo de tu rival."
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Hammer In",
			'fr-fr': "Enfoncement",
			'es-es': "Martillear",
			'de-de': "Einhämmern",
			'it-it': "Martello",
			'pt-br': "Martelada",
			'es-mx': "Martillar"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",
	illustrator: "Shinya Komatsu",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817242,
				tcgplayer: 623517
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817242,
				tcgplayer: 623517
			}
		},
	],
}

export default card
