import { Card } from 'models/database/card'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		'en-us': "Arbok",
		'fr-fr': "Arbok",
		'es-es': "Arbok",
		'it-it': "Arbok",
		'pt-br': "Arbok",
		'de-de': "Arbok"
	},

	illustrator: "kodama",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		24,
	],

	hp: 120,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Ekans",
		'fr-fr': "Abo",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Intimidating Pattern",
				'fr-fr': "Style Intimidant",
				'es-es': "Textura Intimidadora",
				'it-it': "Disegno Spaventoso",
				'pt-br': "Padrão Intimidador",
				'de-de': "Einschüchterndes Muster"
			},
			effect: {
				'en-us': "As long as this Pokémon is your Active Pokémon, your opponent’s Active Pokémon’s attacks do 30 less damage (before applying Weakness and Resistance).",
				'fr-fr': "Tant que ce Pokémon est votre Pokémon Actif, les attaques du Pokémon Actif de votre adversaire infligent 30 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Mientras este Pokémon sea tu Pokémon Activo, los ataques del Pokémon Activo de tu rival hacen 30 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Fintanto che questo Pokémon è il tuo Pokémon attivo, gli attacchi del Pokémon attivo del tuo avversario infliggono 30 in meno, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Enquanto este Pokémon for o seu Pokémon Ativo, os ataques do Pokémon Ativo do seu oponente causarão 30 pontos de dano a menos (antes de aplicar Fraqueza e Resistência).",
				'de-de': "Solang dieses Pokémon dein Aktives Pokémon ist, fügen die Attacken des Aktiven Pokémon deines Gegners 30 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Venomous Fang",
				'fr-fr': "Croc-Poison",
				'es-es': "Colmillo Nocivo",
				'it-it': "Dentevelenoso",
				'pt-br': "Dente Venenoso",
				'de-de': "Gifthauer"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "The pattern on its belly appears to be a frightening face. Weak foes will flee just at the sight of the pattern.",
	},

	thirdParty: {
		cardmarket: 302175,
		tcgplayer: 146705
	}
}

export default card
