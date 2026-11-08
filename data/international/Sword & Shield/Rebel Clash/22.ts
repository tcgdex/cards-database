import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [841],

	name: {
		'en-us': "Flapple",
		'fr-fr': "Pomdrapi",
		'es-es': "Flapple",
		'it-it': "Flapple",
		'pt-br': "Flapple",
		'de-de': "Drapfel"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		'en-us': "Applin",
		'fr-fr': "Verpom",
		'es-es': "Applin",
		'it-it': "Applin",
		'pt-br': "Applin",
		'de-de': "Knapfel"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Apple Drop",
				'fr-fr': "Chute de Pommes",
				'es-es': "Caída de Manzanas",
				'it-it': "Caduta Mele",
				'pt-br': "Maçã Caída",
				'de-de': "Apfelfall"
			},
			effect: {
				'en-us': "Once during your turn, you may put 2 damage counters on 1 of your opponent's Pokémon. If you placed any damage counters in this way, shuffle this Pokémon and all attached cards into your deck.",
				'fr-fr': "Une fois pendant votre tour, vous pouvez placer 2 marqueurs de dégâts sur l'un des Pokémon de votre adversaire. Si vous avez placé des marqueurs de dégâts de cette façon, mélangez dans votre deck ce Pokémon et toutes les cartes attachées.",
				'es-es': "Una vez durante tu turno, puedes poner 2 contadores de daño en 1 de los Pokémon de tu rival. Si has puesto algún contador de daño de esta manera, pon este Pokémon y todas las cartas unidas a él en tu baraja, y baraja todas las cartas.",
				'it-it': "Una sola volta durante il tuo turno, puoi mettere due segnalini danno su uno dei Pokémon del tuo avversario. Se hai messo dei segnalini danno in questo modo, rimischia questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo.",
				'pt-br': "Uma vez durante o seu turno, você poderá colocar 2 contadores de dano em 1 dos Pokémon do seu oponente. Se você colocou algum contador de dano desta forma, embaralhe este Pokémon e todas as cartas ligadas a ele no seu baralho.",
				'de-de': "Einmal während deines Zuges kannst du 2 Schadensmarken auf 1 Pokémon deines Gegners legen. Wenn du auf diese Weise Schadensmarken platziert hast, mische dieses Pokémon und alle angelegten Karten in dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Acid Spray",
				'fr-fr': "Bombe Acide",
				'es-es': "Bomba Ácida",
				'it-it': "Acidobomba",
				'pt-br': "Spray Ácido",
				'de-de': "Säurespeier"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
				'es-es': "Lanza 1 moneda. Si sale cara, descarta 1 Energía del Pokémon Activo de tu rival.",
				'it-it': "Lancia una moneta. Se esce testa, scarta un'Energia dal Pokémon attivo del tuo avversario.",
				'pt-br': "Jogue 1 moeda. Se sair cara, descarte 1 Energia do Pokémon Ativo do seu oponente.",
				'de-de': "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 80,
	types: ["Grass"],
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "It ate a sour apple, and that induced its evolution. In its cheeks, it stores an acid capable of causing chemical burns."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 456413,
				tcgplayer: 213095
			}
		},
		{
			type: 'holo',
			stamp: ['gamestop'],
			thirdParty: {
				cardmarket: 550346
			}
		},
		{
			type: 'holo',
			stamp: ['eb-games'],
			thirdParty: {
				cardmarket: 569896
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 456413,
				tcgplayer: 213095
			}
		},
	],
}

export default card
