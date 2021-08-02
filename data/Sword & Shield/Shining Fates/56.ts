import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Wimessir",
		en: "Indeedee",
		es: "Indeedee",
		it: "Indeedee",
		pt: "Indeedee",
		de: "Servol"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	attacks: [{
		name: {
			fr: "Coup d’Main",
			en: "Helping Hand",
			es: "Refuerzo",
			it: "Altruismo",
			pt: "Mãozinha",
			de: "Rechte Hand"
		},

		effect: {
			fr: "Cherchez dans votre deck une carte Énergie de base, puis attachez-la à l’un de vos Pokémon de Banc. Mélangez ensuite votre deck.",
			en: "Search your deck for a basic Energy card and attach it to 1 of your Benched Pokémon. Then, shuffle your deck.",
			es: "Busca en tu baraja 1 carta de Energía Básica y únela a 1 de tus Pokémon en Banca. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo una carta Energia base e assegnala a uno dei tuoi Pokémon in panchina. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por 1 carta de Energia básica no seu baralho e ligue-a a 1 dos seus Pokémon no Banco. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach 1 Basis-Energiekarte und lege sie an 1 Pokémon auf deiner Bank an. Mische anschließend dein Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Psyko",
			en: "Psychic",
			es: "Psíquico",
			it: "Psichico",
			pt: "Psíquico",
			de: "Psychokinese"
		},

		effect: {
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			en: "This attack does 20 more damage for each Energy attached to your opponent’s Active Pokémon.",
			es: "Este ataque hace 20 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 20 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 20 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 20 Schadenspunkte mehr zu."
		},

		damage: "20+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card