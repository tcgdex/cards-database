import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886423,
				tcgplayer: 693474
			}
		},
	],

	name: {
		en: "Deoxys",
		fr: "Deoxys",
		es: "Deoxys",
		'es-mx': "Deoxys",
		de: "Deoxys",
		it: "Deoxys",
		pt: "Deoxys"
	},

	illustrator: "Shiburingaru",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [386],
	hp: 110,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Genome Charge",
			fr: "Charge Génome",
			es: "Carga Genoma",
			'es-mx': "Carga Genoma",
			de: "Genom-Aufladung",
			it: "Carica del Genoma",
			pt: "Carga Genética"
		},

		cost: ["Colorless"],

		effect: {
			en: "Search your deck for up to 2 Basic {P} Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu'à 2 cartes Énergie {P} de base, puis attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
			es: "Busca en tu baraja hasta 2 cartas de Energía {P} Básica y únelas a este Pokémon. Después, baraja las cartas de tu baraja.",
			'es-mx': "Busca en tu mazo hasta 2 cartas de Energía {P} Básica y únelas a este Pokémon. Después, baraja tu mazo.",
			de: "Durchsuche dein Deck nach bis zu 2 Basis-{P}-Energiekarten und lege sie an dieses Pokémon an. Mische anschließend dein Deck.",
			it: "Cerca nel tuo mazzo fino a due carte Energia base {P} e assegnale a questo Pokémon. Poi rimischia il tuo mazzo.",
			pt: "Procure por até 2 cartas de Energia {P} Básica no seu baralho e ligue-as a este Pokémon. Em seguida, embaralhe o seu baralho."
		}
	}, {
		name: {
			en: "Psychic",
			fr: "Psyko",
			es: "Psíquico",
			'es-mx': "Fuerza Psíquica",
			de: "Psychokinese",
			it: "Psichico",
			pt: "Psíquico"
		},

		cost: ["Psychic", "Psychic", "Colorless"],
		damage: "80+",

		effect: {
			en: "This attack does 20 more damage for each Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			es: "Este ataque hace 20 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			'es-mx': "Este ataque hace 20 puntos de daño más por cada Energía unida al Pokémon Activo de tu rival.",
			de: "Diese Attacke fügt für jede an das Aktive Pokémon deines Gegners angelegte Energie 20 Schadenspunkte mehr zu.",
			it: "Questo attacco infligge 20 danni in più per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 20 pontos de dano a mais para cada Energia ligada ao Pokémon Ativo do seu oponente."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",
}

export default card