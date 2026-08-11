import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Tentacruel",
		'fr-fr': "Tentacruel",
		'es-es': "Tentacruel",
		'it-it': "Tentacruel",
		'pt-br': "Tentacruel",
		'de-de': "Tentoxa"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		73,
	],

	hp: 110,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Tentacool",
		'fr-fr': "Tentacool",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Poison Sting",
				'fr-fr': "Dard-Venin",
				'es-es': "Picotazo Veneno",
				'it-it': "Velenospina",
				'pt-br': "Ferrão Venenoso",
				'de-de': "Giftstachel"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Seething Tentacles",
				'fr-fr': "Tentacules Grouillants",
				'es-es': "Tentáculos Furiosos",
				'it-it': "Tentacoli Sfrenati",
				'pt-br': "Tentáculos Furiosos",
				'de-de': "Wallende Tentakel"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 40 more damage. If tails, your opponent’s Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c’est face, cette attaque inflige 40 dégâts supplémentaires. Si c’est pile, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más. Si sale cruz, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 40 danni in più. Se esce croce, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 40 pontos de dano a mais. Se sair coroa, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 40 Schadenspunkte mehr zu. Bei Zahl ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Normally, it has 80 poisonous tentacles. The longer one has been alive, the fewer tentacles it will have.",
	},

	thirdParty: {
		cardmarket: 297487,
		tcgplayer: 130924
	}
}

export default card
