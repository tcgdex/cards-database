import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Heatmor",
		fr: "Aflamanoir",
		es: "Heatmor",
		it: "Heatmor",
		pt: "Heatmor",
		de: "Furnifraß"
	},

	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	attacks: [{
		name: {
			en: "Flare",
			fr: "Flamboiement",
			es: "Llama",
			it: "Fiammata",
			pt: "Chama",
			de: "Flackern"
		},

		damage: 20,
		cost: ["Fire"]
	}, {
		name: {
			en: "Burning Licks",
			fr: "Léchures Brûlantes",
			es: "Lengüetazos Abrasadores",
			it: "Brucialeccate",
			pt: "Lambidas Abrasadoras",
			de: "Feuerzunge"
		},

		effect: {
			en: "Flip 2 coins. For each heads, discard an Energy from your opponent’s Active Pokémon.",
			fr: "Lancez 2 pièces. Pour chaque côté face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			es: "Lanza 2 monedas. Por cada cara, descarta 1 Energía del Pokémon Activo de tu rival.",
			it: "Lancia due volte una moneta. Ogni volta che esce testa, scarta un’Energia dal Pokémon attivo del tuo avversario.",
			pt: "Jogue 2 moedas. Para cada cara, descarte 1 Energia do Pokémon Ativo do seu oponente.",
			de: "Wirf 2 Münzen. Lege pro Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 70,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card