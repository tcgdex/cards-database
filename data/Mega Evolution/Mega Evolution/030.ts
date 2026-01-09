import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Centiskorch",
		fr: "Scolocendre",
		de: "Infernopod",
		it: "Centiskorch",
		es: "Centiskorch",
		pt: "Centiskorch",
		'es-mx': "Centiskorch"
	},

	illustrator: "Shiburingaru",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	evolveFrom: {
		en: "Sizzlipede",
		fr: "Grillepattes",
		de: "Thermopod",
		it: "Sizzlipede",
		es: "Sizzlipede",
		pt: "Sizzlipede",
		'es-mx': "Sizzlipede"
	},
	stage: "Stage1",
	dexId: [851],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Coiling Crush",
			fr: "Enroulement Écrasant",
			de: "Quetscherschlinge",
			it: "Distruzione Avvolgente",
			es: "Aplastamiento en Espiral",
			pt: "Torção Triturante",
			'es-mx': "Enrosque Aniquilador"
		},

		effect: {
			en: "Flip 2 coins. For each heads, discard an Energy from your opponent's Active Pokémon.",
			fr: "Lancez 2 pièces. Pour chaque côté face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			de: "Wirf 2 Münzen. Lege pro Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel.",
			it: "Lancia due volte una moneta. Ogni volta che esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario.",
			es: "Lanza 2 monedas. Por cada cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			pt: "Jogue 2 moedas. Para cada cara, descarte uma Energia do Pokémon Ativo do seu oponente.",
			'es-mx': "Lanza 2 monedas. Por cada cara, descarta 1 Energía del Pokémon Activo de tu rival."
		},

		damage: 50
	}, {
		cost: ["Fire", "Fire", "Colorless", "Colorless"],

		name: {
			en: "Heat Crawler",
			fr: "Mille-Pattes Brûlant",
			de: "Hitzekrabbler",
			it: "Arrampicalore",
			es: "Serpenteo Candente",
			pt: "Calor Rastejante",
			'es-mx': "Arrastre Ígneo"
		},

		damage: 140
	}],

	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		tcgplayer: 654369,
		cardmarket: 851101
	}
}

export default card