import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Centiskorch",
		'fr-fr': "Scolocendre",
		'de-de': "Infernopod",
		'it-it': "Centiskorch",
		'es-es': "Centiskorch",
		'pt-br': "Centiskorch",
		'es-mx': "Centiskorch"
	},

	illustrator: "Shiburingaru",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Sizzlipede",
		'fr-fr': "Grillepattes",
		'de-de': "Thermopod",
		'it-it': "Sizzlipede",
		'es-es': "Sizzlipede",
		'pt-br': "Sizzlipede",
		'es-mx': "Sizzlipede"
	},
	stage: "Stage1",
	dexId: [851],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Coiling Crush",
			'fr-fr': "Enroulement Écrasant",
			'de-de': "Quetscherschlinge",
			'it-it': "Distruzione Avvolgente",
			'es-es': "Aplastamiento en Espiral",
			'pt-br': "Torção Triturante",
			'es-mx': "Enrosque Aniquilador"
		},

		effect: {
			'en-us': "Flip 2 coins. For each heads, discard an Energy from your opponent's Active Pokémon.",
			'fr-fr': "Lancez 2 pièces. Pour chaque côté face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'de-de': "Wirf 2 Münzen. Lege pro Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			'it-it': "Lancia due volte una moneta. Ogni volta che esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'es-es': "Lanza 2 monedas. Por cada cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			'pt-br': "Jogue 2 moedas. Para cada cara, descarte uma Energia do Pokémon Ativo do seu oponente.",
			'es-mx': "Lanza 2 monedas. Por cada cara, descarta 1 Energía del Pokémon Activo de tu rival."
		},

		damage: 50
	}, {
		cost: ["Fire", "Fire", "Colorless", "Colorless"],

		name: {
			'en-us': "Heat Crawler",
			'fr-fr': "Mille-Pattes Brûlant",
			'de-de': "Hitzekrabbler",
			'it-it': "Arrampicalore",
			'es-es': "Serpenteo Candente",
			'pt-br': "Calor Rastejante",
			'es-mx': "Arrastre Ígneo"
		},

		damage: 140
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851101,
				tcgplayer: 654369
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851101,
				tcgplayer: 654369
			}
		},
	],
}

export default card
