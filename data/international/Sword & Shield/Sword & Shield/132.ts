import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Galarian Stunfisk",
		fr: "Limonde de Galar",
		es: "Stunfisk de Galar",
		it: "Stunfisk di Galar",
		pt: "Stunfisk de Galar",
		de: "Galar-Flunschlik"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Snap Trap",
				fr: "Troquenard",
				es: "Cepo",
				it: "Tagliola",
				pt: "Armadilha Surpresa",
				de: "Fangeisen"
			},
			effect: {
				en: "If this Pokémon is in the Active Spot and is damaged by an opponent's attack (even if it is Knocked Out), discard an Energy from the Attacking Pokémon.",
				fr: "Si ce Pokémon est sur le Poste Actif et qu'il subit les dégâts d'une attaque de votre adversaire (même s'il est mis K.O.), défaussez une Énergie du Pokémon Attaquant.",
				es: "Si este Pokémon está en el Puesto Activo y resulta dañado por un ataque de tu rival (incluso si queda Fuera de Combate), descarta 1 Energía del Pokémon Atacante.",
				it: "Se questo Pokémon è in posizione attiva e viene danneggiato da un attacco dell'avversario, anche se viene messo KO, scarta un'Energia dal Pokémon attaccante.",
				pt: "Se este Pokémon estiver no Campo Ativo e for danificado por um ataque do seu oponente (mesmo que ele seja Nocauteado), descarte 1 Energia do Pokémon Atacante.",
				de: "Wenn dieses Pokémon in der Aktiven Position ist und durch eine Attacke deines Gegners Schaden erhält (auch wenn es dadurch kampfunfähig wird), lege 1 Energie vom Angreifenden Pokémon auf den Ablagestapel."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Damage Rush",
				fr: "Charge Destructrice",
				es: "Embestida Dañina",
				it: "Sfuriadanni",
				pt: "Fúria Destruidora",
				de: "Schadensrausch"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 30 more damage for each heads.",
				fr: "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
				es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 30 puntos de daño más por cada cara.",
				it: "Lancia una moneta finché non esce croce. Questo attacco infligge 30 danni in più ogni volta che esce testa.",
				pt: "Jogue 1 moeda até sair coroa. Este ataque causa 30 pontos de dano a mais para cada cara.",
				de: "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Diese Attacke fügt 30 Schadenspunkte mehr pro Kopf zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		en: "Living in mud with a high iron content has given it a strong steel body."
	},

	dexId: [618],

	thirdParty: {
		cardmarket: 436769,
		tcgplayer: 208443
	}
}

export default card
