import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Toxtricity",
		fr: "Salarsen",
		es: "Toxtricity",
		it: "Toxtricity",
		pt: "Toxtricity",
		de: "Riffex"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Toxel",
		fr: "Toxizap",
		es: "Toxel",
		it: "Toxel",
		pt: "Toxel",
		de: "Toxel"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Risk Taker",
				fr: "Tête Brûlée",
				es: "Temerario",
				it: "Arrischiarsi",
				pt: "Sem Noção",
				de: "Zocker"
			},
			effect: {
				en: "Flip a coin. If heads, discard the top 5 cards of your opponent's deck. If tails, discard the top 5 cards of your deck.",
				fr: "Lancez une pièce. Si c'est face, défaussez les 5 cartes du dessus du deck de votre adversaire. Si c'est pile, défaussez les 5 cartes du dessus de votre deck.",
				es: "Lanza 1 moneda. Si sale cara, descarta las 5 primeras cartas de la baraja de tu rival. Si sale cruz, descarta las 5 primeras cartas de tu baraja.",
				it: "Lancia una moneta. Se esce testa, scarta le prime cinque carte del mazzo del tuo avversario. Se esce croce, scarta le prime cinque carte del tuo mazzo.",
				pt: "Jogue 1 moeda. Se sair cara, descarte as 5 cartas de cima do baralho do seu oponente. Se sair coroa, descarte as 5 cartas de cima do seu baralho.",
				de: "Wirf 1 Münze. Lege bei Kopf die obersten 5 Karten des Decks deines Gegners auf seinen Ablagestapel. Lege bei Zahl die obersten 5 Karten deines Decks auf deinen Ablagestapel."
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunder Jolt",
				fr: "Secousse Tonnerre",
				es: "Sacudida Atronadora",
				it: "Scoppiotuono",
				pt: "Choque do Trovão",
				de: "Donnerrüttler"
			},
			effect: {
				en: "This Pokémon also does 30 damage to itself.",
				fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
				es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge anche 30 danni a se stesso.",
				pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
				de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
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

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "Capable of generating 15,000 volts of electricity, this Pokémon looks down on all that would challenge it."
	},

	thirdParty: {
		cardmarket: 483194
	}
}

export default card
