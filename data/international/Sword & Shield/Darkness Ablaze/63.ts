import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		'en-us': "Toxtricity",
		'fr-fr': "Salarsen",
		'es-es': "Toxtricity",
		'it-it': "Toxtricity",
		'pt-br': "Toxtricity",
		'de-de': "Riffex"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [849],
	set: Set,
	hp: 120,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Toxel",
		'fr-fr': "Toxizap",
		'es-es': "Toxel",
		'it-it': "Toxel",
		'pt-br': "Toxel",
		'de-de': "Toxel"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Risk Taker",
				'fr-fr': "Tête Brûlée",
				'es-es': "Temerario",
				'it-it': "Arrischiarsi",
				'pt-br': "Sem Noção",
				'de-de': "Zocker"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard the top 5 cards of your opponent's deck. If tails, discard the top 5 cards of your deck.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez les 5 cartes du dessus du deck de votre adversaire. Si c'est pile, défaussez les 5 cartes du dessus de votre deck.",
				'es-es': "Lanza 1 moneda. Si sale cara, descarta las 5 primeras cartas de la baraja de tu rival. Si sale cruz, descarta las 5 primeras cartas de tu baraja.",
				'it-it': "Lancia una moneta. Se esce testa, scarta le prime cinque carte del mazzo del tuo avversario. Se esce croce, scarta le prime cinque carte del tuo mazzo.",
				'pt-br': "Jogue 1 moeda. Se sair cara, descarte as 5 cartas de cima do baralho do seu oponente. Se sair coroa, descarte as 5 cartas de cima do seu baralho.",
				'de-de': "Wirf 1 Münze. Lege bei Kopf die obersten 5 Karten des Decks deines Gegners auf seinen Ablagestapel. Lege bei Zahl die obersten 5 Karten deines Decks auf deinen Ablagestapel."
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Thunder Jolt",
				'fr-fr': "Secousse Tonnerre",
				'es-es': "Sacudida Atronadora",
				'it-it': "Scoppiotuono",
				'pt-br': "Choque do Trovão",
				'de-de': "Donnerrüttler"
			},
			effect: {
				'en-us': "This Pokémon also does 30 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
				'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
				'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
				'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
			},
			damage: 160,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "Capable of generating 15,000 volts of electricity, this Pokémon looks down on all that would challenge it."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 483194,
				tcgplayer: 219419
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483194,
				tcgplayer: 219419
			}
		},
	],
}

export default card
