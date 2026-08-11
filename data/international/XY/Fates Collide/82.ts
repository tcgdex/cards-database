import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Exploud",
		'fr-fr': "Brouhabam",
		'es-es': "Exploud",
		'it-it': "Exploud",
		'pt-br': "Exploud",
		'de-de': "Krawumms"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		295,
	],

	hp: 140,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Loudred",
		'fr-fr': "Ramboum",
		'es-es': "Loudred",
		'it-it': "Loudred",
		'pt-br': "Loudred",
		'de-de': "Krakeelo"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ambush",
				'fr-fr': "Embuscade",
				'es-es': "Emboscada",
				'it-it': "Imboscata",
				'pt-br': "Emboscada",
				'de-de': "Hinterhalt"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 40 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 40 danni in più.",
				'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 40 de danos adicionais.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 40 weitere Schadenspunkte zu."
			},
			damage: "80+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Cacophony",
				'fr-fr': "Cacophonie",
				'es-es': "Cacofonía",
				'it-it': "Dissonanza",
				'pt-br': "Cacofonia",
				'de-de': "Kakofonie"
			},
			effect: {
				'en-us': "At the end of your opponent's next turn, discard the Defending Pokémon and all cards attached to it.",
				'fr-fr': "À la fin du prochain tour de votre adversaire, défaussez le Pokémon Défenseur et toutes les cartes qui lui sont attachées.",
				'es-es': "Al final del próximo turno de tu rival, descarta el Pokémon Defensor y todas las cartas unidas a él.",
				'it-it': "Alla fine del turno del tuo avversario, scarta il Pokémon difensore e tutte le carte assegnategli.",
				'pt-br': "Ao final da vez de jogar do seu oponente, descarte o Pokémon Defensor e todos os cards ligados a ele.",
				'de-de': "Lege am Ende des nächsten Zuges deines Gegners das Verteidigende Pokémon und alle daran angelegten Karten auf dessen Ablagestapel."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Its roar in battle shakes the ground like a tremor–or like an earthquake has struck.",
	},

	thirdParty: {
		cardmarket: 289903,
		tcgplayer: 117857
	}
}

export default card
