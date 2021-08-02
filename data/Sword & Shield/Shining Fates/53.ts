import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Rongrigou V",
		en: "Greedent V",
		es: "Greedent V",
		it: "Greedent V",
		pt: "Greedent V",
		de: "Schlaraffel V"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Rare",
	category: "Pokemon",
	hp: 200,
	types: ["Colorless"],

	attacks: [{
		name: {
			fr: "Mâchouille",
			en: "Crunch",
			es: "Triturar",
			it: "Sgranocchio",
			pt: "Mastigada",
			de: "Knirscher"
		},

		effect: {
			fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
			en: "Discard an Energy from your opponent’s Active Pokémon.",
			es: "Descarta 1 Energía del Pokémon Activo de tu rival.",
			it: "Scarta un’Energia dal Pokémon attivo del tuo avversario.",
			pt: "Descarte 1 Energia do Pokémon Ativo do seu oponente.",
			de: "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			fr: "Écrasement Chancelant",
			en: "Stumbling Press",
			es: "Presión Tambaleante",
			it: "Instabilpressa",
			pt: "Aperto Estabanado",
			de: "Stolpernder Ansturm"
		},

		effect: {
			fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
			en: "Flip a coin. If tails, this attack does nothing.",
			es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			pt: "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
			de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
		},

		damage: 180,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card