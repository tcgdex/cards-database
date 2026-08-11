import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Raichu",
		'fr-fr': "Raichu",
		'es-es': "Raichu",
		'it-it': "Raichu",
		'pt-br': "Raichu",
		'de-de': "Raichu"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		26,
	],

	hp: 120,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Nuzzle",
				'fr-fr': "Frotte-Frimousse",
				'es-es': "Moflete Estático",
				'it-it': "Elettrococcola",
				'pt-br': "Chamego",
				'de-de': "Wangenrubbler"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Powerful Spark",
				'fr-fr': "Étincelle Puissante",
				'es-es': "Chispa Poderosa",
				'it-it': "Superscintilla",
				'pt-br': "Fagulha Poderosa",
				'de-de': "Mächtiger Funke"
			},
			effect: {
				'en-us': "This attack does 20 damage times the amount of Lightning Energy attached to all of your Pokémon.",
				'fr-fr': "Cette attaque inflige 20 dégâts multipliés par le nombre d’Énergies Lightning attachées à tous vos Pokémon.",
				'es-es': "Este ataque hace 20 puntos de daño por cada Energía Lightning unida a todos tus Pokémon.",
				'it-it': "Questo attacco infligge 20 danni per ogni Energia Lightning assegnata ai tuoi Pokémon.",
				'pt-br': "Este ataque causa 20 pontos de dano vezes a quantidade de Energia Lightning ligada a todos os seus Pokémon.",
				'de-de': "Diese Attacke fügt 20 Schadenspunkte mal der Anzahl der an alle deine Pokémon angelegten Lightning-Energien zu."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "As electricity builds up inside its body, it becomes more aggressive. One theory is that the electricity buildup is actually causing stress.",
	},

	thirdParty: {
		cardmarket: 407984,
		tcgplayer: 201983
	}
}

export default card
