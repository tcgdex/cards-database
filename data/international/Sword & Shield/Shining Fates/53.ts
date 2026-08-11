import { Card } from 'models/database/card'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [820],
	set: Set,

	name: {
		'fr-fr': "Rongrigou V",
		'en-us': "Greedent V",
		'es-es': "Greedent V",
		'it-it': "Greedent V",
		'pt-br': "Greedent V",
		'de-de': "Schlaraffel V"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 200,
	types: ["Colorless"],

	attacks: [{
		name: {
			'fr-fr': "Mâchouille",
			'en-us': "Crunch",
			'es-es': "Triturar",
			'it-it': "Sgranocchio",
			'pt-br': "Mastigada",
			'de-de': "Knirscher"
		},

		effect: {
			'fr-fr': "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
			'en-us': "Discard an Energy from your opponent's Active Pokémon.",
			'es-es': "Descarta 1 Energía del Pokémon Activo de tu rival.",
			'it-it': "Scarta un'Energia dal Pokémon attivo del tuo avversario.",
			'pt-br': "Descarte 1 Energia do Pokémon Ativo do seu oponente.",
			'de-de': "Lege 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'fr-fr': "Écrasement Chancelant",
			'en-us': "Stumbling Press",
			'es-es': "Presión Tambaleante",
			'it-it': "Instabilpressa",
			'pt-br': "Aperto Estabanado",
			'de-de': "Stolpernder Ansturm"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			'pt-br': "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
			'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
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


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539288,
				tcgplayer: 232530
			}
		},
	],
}

export default card
