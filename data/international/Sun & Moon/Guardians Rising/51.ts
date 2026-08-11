import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Garbodor",
		'fr-fr': "Miasmax",
		'es-es': "Garbodor",
		'it-it': "Garbodor",
		'pt-br': "Garbodor",
		'de-de': "Deponitox"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		569,
	],

	hp: 120,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Trubbish",
		'fr-fr': "Miamiasme",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Trashalanche",
				'fr-fr': "Avalanche de Déchets",
				'es-es': "Basuravalancha",
				'it-it': "Valanga Rifiuti",
				'pt-br': "Avalanche de Lixo",
				'de-de': "Mülllawine"
			},
			effect: {
				'en-us': "This attack does 20 damage for each Item card in your opponent’s discard pile.",
				'fr-fr': "Cette attaque inflige 20 dégâts pour chaque carte Objet dans la pile de défausse de votre adversaire.",
				'es-es': "Este ataque hace 20 puntos de daño por cada carta de Objeto en la pila de descartes de tu rival.",
				'it-it': "Questo attacco infligge 20 danni per ogni carta Strumento nella pila degli scarti del tuo avversario.",
				'pt-br': "Este ataque causa 20 pontos de dano para cada carta de Item na pilha de descarte do seu oponente.",
				'de-de': "Diese Attacke fügt 20 Schadenspunkte mal der Anzahl der Itemkarten im Ablagestapel deines Gegners zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Psychic",
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
				'en-us': "Flip a coin. If heads, discard an Energy from your opponent’s Active Pokémon.",
				'fr-fr': "Lancez une pièce. Si c’est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
				'es-es': "Lanza 1 moneda. Si sala cara, descarta 1 Energía del Pokémon Activo de tu rival.",
				'it-it': "Lancia una moneta. Se esce testa, scarta un’Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Jogue 1 moeda. Se sair cara, descarte 1 Energia do Pokémon Ativo do seu oponente.",
				'de-de': "Wirf 1 Münze. Lege bei Kopf 1 Energie vom Aktiven Pokémon deines Gegners auf seinen Ablagestapel."
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
		'en-us': "Beware the poisonous liquid it shoots from its right arm. If even a little of it gets on you, you'll experience the effects of the unidentified toxin.",
	},

	thirdParty: {
		cardmarket: 297513,
		tcgplayer: 130957
	}
}

export default card
