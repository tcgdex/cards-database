import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Mantine",
		fr: "Démanta",
		de: "Mantax",
		es: "Mantine",
		it: "Mantine",
		pt: "Mantine",
		'es-mx': "Mantine"
	},

	illustrator: "kodama",
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Make Waves",
			fr: "Créateur de Vagues",
			de: "Wellen schlagen",
			es: "Hacer Olas",
			it: "Onde su Onde",
			pt: "Criar Ondas",
			'es-mx': "Agitar las Aguas"
		},

		effect: {
			en: "Each player shuffles their hand into their deck and draws 4 cards.",
			fr: "Chaque personne mélange sa main avec son deck et pioche 4 cartes.",
			de: "Jeder Spieler mischt seine Handkarten in sein Deck und zieht 4 Karten.",
			es: "Cada jugador pone las cartas de su mano en su baraja, las baraja todas y roba 4 cartas.",
			it: "Ciascun giocatore rimischia le carte che ha in mano nel proprio mazzo e pesca quattro carte.",
			pt: "Cada jogador embaralha a própria mão no próprio baralho e compra 4 cartas.",
			'es-mx': "Cada jugador baraja su mano en su mazo y roba 4 cartas."
		},

		cost: ["Colorless"]
	}, {
		name: {
			en: "Bubble Drain",
			fr: "Vide Bulle",
			de: "Blasengully",
			es: "Drenaje Burbujas",
			it: "Assorbibolla",
			pt: "Dreno de Bolha",
			'es-mx': "Drenado Burbujeante"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano deste Pokémon.",
			'es-mx': "Cura 30 puntos de daño a este Pokémon."
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 727578,
				cardmarket: 918840
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 727578,
				cardmarket: 918840
			}
		}
	],
}

export default card