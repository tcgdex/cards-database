import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Slowbro",
		'fr-fr': "Flagadoss",
		'es-es': "Slowbro",
		'it-it': "Slowbro",
		'pt-br': "Slowbro",
		'de-de': "Lahmus"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		80,
	],

	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Slowpoke",
		'fr-fr': "Ramoloss",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Yawn",
				'fr-fr': "Bâillement",
				'es-es': "Bostezo",
				'it-it': "Sbadiglio",
				'pt-br': "Bocejo",
				'de-de': "Gähner"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Three Strikes",
				'fr-fr': "Triple Risque",
				'es-es': "Tres Intentos",
				'it-it': "Terzo Strike",
				'pt-br': "Aposta Tripla",
				'de-de': "Brillante Wette"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 100 damage for each heads. If all of them are tails, you lose this game.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 100 dégâts pour chaque côté face. S’il n’y a que des côtés pile, vous perdez cette partie.",
				'es-es': "Lanza 3 monedas. Este ataque hace 100 puntos de daño por cada cara. Si sale cruz en las 3, pierdes esta partida.",
				'it-it': "Lancia tre volte una moneta. Questo attacco infligge 100 danni ogni volta che esce testa. Se esce croce tutte e tre le volte, hai perso la partita.",
				'pt-br': "Jogue 3 moedas. Este ataque causa 100 pontos de dano para cada cara. Se todas saírem coroa, você perderá esta partida.",
				'de-de': "Wirf 3 Münzen. Diese Attacke fügt 100 Schadenspunkte pro Kopf zu. Wenn alle Zahl zeigen, verlierst du dieses Spiel."
			},
			damage: "100×",

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
		'en-us': "Spacing out is basically all it does. It turns back into Slowpoke if its tail, along with Shellder, breaks off.",
	},

	thirdParty: {
		cardmarket: 372334,
		tcgplayer: 189142
	}
}

export default card
