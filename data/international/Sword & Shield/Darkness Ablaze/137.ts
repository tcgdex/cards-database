import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [206],

	name: {
		'en-us': "Dunsparce",
		'fr-fr': "Insolourdo",
		'es-es': "Dunsparce",
		'it-it': "Dunsparce",
		'pt-br': "Dunsparce",
		'de-de': "Dummisel"
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
				'en-us': "Final Dig",
				'fr-fr': "Dernier Coup",
				'es-es': "Excavación Final",
				'it-it': "Scavata Finale",
				'pt-br': "Cavada Final",
				'de-de': "Letzter Schaufler"
			},
			effect: {
				'en-us': "If this Pokémon is Knocked Out by damage from an attack from your opponent's Pokémon, discard the top 2 cards of your opponent's deck.",
				'fr-fr': "Si ce Pokémon est mis K.O. par les dégâts d'une attaques d'un Pokémon de votre adversaire, défaussez les 2 cartes du dessus du deck de votre adversaire.",
				'es-es': "Si este Pokémon queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, descarta las 2 primeras cartas de la baraja de tu rival.",
				'it-it': "Se questo Pokémon viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, scarta le prime due carte del mazzo del tuo avversario.",
				'pt-br': "Se este Pokémon for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, descarte as 2 cartas de cima do baralho do seu oponente.",
				'de-de': "Wenn dieses Pokémon durch Schaden einer Attacke der Pokémon deines Gegners kampfunfähig wird, lege die 2 obersten Karten des Decks deines Gegners auf seinen Ablagestapel."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
				'es-es': "Apisonar",
				'it-it': "Carica",
				'pt-br': "Aríete",
				'de-de': "Ramme"
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


	stage: "Basic",

	description: {
		'en-us': "When it sees a person, it digs a hole with its tail to make its escape. If you happen to find one, consider yourself lucky."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483564,
				tcgplayer: 219334
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483564,
				tcgplayer: 219334
			}
		},
	],
}

export default card
