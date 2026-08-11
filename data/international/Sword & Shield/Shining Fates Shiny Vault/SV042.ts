import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [849],
	set: Set,

	name: {
		'fr-fr': "Salarsen",
		'en-us': "Toxtricity",
		'es-es': "Toxtricity",
		'it-it': "Toxtricity",
		'pt-br': "Toxtricity",
		'de-de': "Riffex"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	evolveFrom: {
		'fr-fr': "Toxizap",
		'en-us': "Toxel"
	},

	attacks: [{
		name: {
			'fr-fr': "Tête Brûlée",
			'en-us': "Risk Taker",
			'es-es': "Temerario",
			'it-it': "Arrischiarsi",
			'pt-br': "Sem Noção",
			'de-de': "Zocker"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, défaussez les 5 cartes du dessus du deck de votre adversaire. Si c'est pile, défaussez les 5 cartes du dessus de votre deck.",
			'en-us': "Flip a coin. If heads, discard the top 5 cards of your opponent's deck. If tails, discard the top 5 cards of your deck.",
			'es-es': "Lanza 1 moneda. Si sale cara, descarta las 5 primeras cartas de la baraja de tu rival. Si sale cruz, descarta las 5 primeras cartas de tu baraja.",
			'it-it': "Lancia una moneta. Se esce testa, scarta le prime cinque carte del mazzo del tuo avversario. Se esce croce, scarta le prime cinque carte del tuo mazzo.",
			'pt-br': "Jogue 1 moeda. Se sair cara, descarte as 5 cartas de cima do baralho do seu oponente. Se sair coroa, descarte as 5 cartas de cima do seu baralho.",
			'de-de': "Wirf 1 Münze. Lege bei Kopf die obersten 5 Karten des Decks deines Gegners auf seinen Ablagestapel. Lege bei Zahl die obersten 5 Karten deines Decks auf deinen Ablagestapel."
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'fr-fr': "Secousse Tonnerre",
			'en-us': "Thunder Jolt",
			'es-es': "Sacudida Atronadora",
			'it-it': "Scoppiotuono",
			'pt-br': "Choque do Trovão",
			'de-de': "Donnerrüttler"
		},

		effect: {
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'en-us': "This Pokémon also does 30 damage to itself.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 160,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",
	stage: "Stage1",

	description: {
		'en-us': "When this Pokémon sounds as if it's strumming a guitar, it's actually clawing at the protrusions on its chest to generate electricity."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539598,
				tcgplayer: 232400
			}
		},
	],
}

export default card
