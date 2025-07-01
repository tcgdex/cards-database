import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Rabsca ex",
		fr: "Bérasca-ex",
		de: "Skarabaks-ex",
		it: "Rabsca-ex",
		es: "Rabsca ex",
		pt: "Rabsca ex",
		'es-mx': "Rabsca ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 250,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Upside-Down Draw",
			fr: "Pioche Inversée",
			de: "Kopfüber-Zug",
			it: "Pesca Sottosopra",
			es: "Robo al Revés",
			pt: "Compra às Avessas",
			'es-mx': "Robo al Revés"
		},

		effect: {
			en: "Draw 3 cards from the bottom of your deck.",
			fr: "Piochez 3 cartes du dessous de votre deck.",
			de: "Ziehe die 3 untersten Karten deines Decks.",
			it: "Pesca tre carte dal fondo del tuo mazzo.",
			es: "Roba las 3 cartas de la parte inferior de tu baraja.",
			pt: "Compre as 3 cartas de baixo do seu baralho.",
			'es-mx': "Roba las 3 cartas de la parte inferior de tu mazo."
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Psychic",
			fr: "Psyko",
			de: "Psychokinese",
			it: "Psichico",
			es: "Psíquico",
			pt: "Psíquico",
			'es-mx': "Fuerza Psíquica"
		},

		effect: {
			en: "This attack does 90 more damage for each Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 90 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 90 Schadenspunkte mehr zu.",
			it: "Questo attacco infligge 90 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			es: "Este ataque hace 90 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			pt: "Este ataque causa 90 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente.",
			'es-mx': "Este ataque hace 90 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival."
		},

		damage: "20+"
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: true,
	},

	variants_detailed: [
		{
			type: 'holo'
		},
	]
}

export default card
