import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Dunsparce",
		fr: "Insolourdo",
		es: "Dunsparce",
		it: "Dunsparce",
		pt: "Dunsparce",
		de: "Dummisel"
	},

	illustrator: "Kazuma Koda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Colorless",
	],

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Final Dig",
				fr: "Dernier Coup",
				es: "Excavación Final",
				it: "Scavata Finale",
				pt: "Cavada Final",
				de: "Letzter Schaufler"
			},
			effect: {
				en: "If this Pokémon is Knocked Out by damage from an attack from your opponent’s Pokémon, discard the top 2 cards of your opponent’s deck.",
				fr: "Si ce Pokémon est mis K.O. par les dégâts d’une attaques d’un Pokémon de votre adversaire, défaussez les 2 cartes du dessus du deck de votre adversaire.",
				es: "Si este Pokémon queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, descarta las 2 primeras cartas de la baraja de tu rival.",
				it: "Se questo Pokémon viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, scarta le prime due carte del mazzo del tuo avversario.",
				pt: "Se este Pokémon for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, descarte as 2 cartas de cima do baralho do seu oponente.",
				de: "Wenn dieses Pokémon durch Schaden einer Attacke der Pokémon deines Gegners kampfunfähig wird, lege die 2 obersten Karten des Decks deines Gegners auf seinen Ablagestapel."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Ram",
				fr: "Collision",
				es: "Apisonar",
				it: "Carica",
				pt: "Aríete",
				de: "Ramme"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
