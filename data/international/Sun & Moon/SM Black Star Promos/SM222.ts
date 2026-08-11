import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	dexId: [429],
	set: Set,

	name: {
		'en-us': "Mismagius",
		'fr-fr': "Magirêve",
		'es-es': "Mismagius",
		'it-it': "Mismagius",
		'pt-br': "Mismagius",
		'de-de': "Traunmagil"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Promo",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	attacks: [{
		name: {
			'en-us': "Psywave",
			'fr-fr': "Vague Psy",
			'es-es': "Psicoonda",
			'it-it': "Psiconda",
			'pt-br': "Onda Psíquica",
			'de-de': "Psywelle"
		},

		damage: "20×",

		effect: {
			'en-us': "This attack does 20 damage times the amount of Energy attached to your opponent’s Active Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 20 puntos de daño por cada Energía unida al Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 20 danni per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 20 pontos de dano vezes a quantidade de Energia ligada ao Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt 20 Schadenspunkte mal der Anzahl der an das Aktive Pokémon deines Gegners angelegten Energien zu."
		},

		cost: ["Psychic"]
	}, {
		name: {
			'en-us': "Astonish",
			'fr-fr': "Étonnement",
			'es-es': "Impresionar",
			'it-it': "Sgomento",
			'pt-br': "Abismar",
			'de-de': "Erstauner"
		},

		damage: 40,

		effect: {
			'en-us': "Choose a random card from your opponent’s hand. Your opponent reveals that card and shuffles it into their deck.",
			'fr-fr': "Choisissez une carte au hasard dans la main de votre adversaire. Votre adversaire montre la carte choisie et la mélange avec son deck.",
			'es-es': "Elige 1 carta aleatoria de la mano de tu rival. Tu rival enseña esa carta, la pone en su baraja y las baraja todas.",
			'it-it': "Scegli una carta a caso dalla mano del tuo avversario. Il tuo avversario mostra quella carta e la rimischia nel suo mazzo.",
			'pt-br': "Escolha 1 carta aleatória da mão do seu oponente. Seu oponente revela aquela carta e a embaralha no próprio baralho.",
			'de-de': "Wähle 1 zufällige Karte aus der Hand deines Gegners. Dein Gegner zeigt dir jene Karte und mischt sie in sein Deck."
		},

		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-20"
	}],

	retreat: 1,

	description: {
		'en-us': "Feared for its wrath and the curses it spreads, this Pokémon will also, on a whim, cast spells that help people.",
	},
}

export default card
