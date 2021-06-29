import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Salarsen",
		en: "Toxtricity",
		es: "Toxtricity",
		it: "Toxtricity",
		pt: "Toxtricity",
		de: "Riffex"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	evolveFrom: {
		fr: "Toxizap",
		en: "Toxel"
	},

	attacks: [{
		name: {
			fr: "Tête Brûlée",
			en: "Risk Taker",
			es: "Temerario",
			it: "Arrischiarsi",
			pt: "Sem Noção",
			de: "Zocker"
		},

		effect: {
			fr: "Lancez une pièce. Si c’est face, défaussez les 5 cartes du dessus du deck de votre adversaire. Si c’est pile, défaussez les 5 cartes du dessus de votre deck.",
			en: "Flip a coin. If heads, discard the top 5 cards of your opponent’s deck. If tails, discard the top 5 cards of your deck.",
			es: "Lanza 1 moneda. Si sale cara, descarta las 5 primeras cartas de la baraja de tu rival. Si sale cruz, descarta las 5 primeras cartas de tu baraja.",
			it: "Lancia una moneta. Se esce testa, scarta le prime cinque carte del mazzo del tuo avversario. Se esce croce, scarta le prime cinque carte del tuo mazzo.",
			pt: "Jogue 1 moeda. Se sair cara, descarte as 5 cartas de cima do baralho do seu oponente. Se sair coroa, descarte as 5 cartas de cima do seu baralho.",
			de: "Wirf 1 Münze. Lege bei Kopf die obersten 5 Karten des Decks deines Gegners auf seinen Ablagestapel. Lege bei Zahl die obersten 5 Karten deines Decks auf deinen Ablagestapel."
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			fr: "Secousse Tonnerre",
			en: "Thunder Jolt",
			es: "Sacudida Atronadora",
			it: "Scoppiotuono",
			pt: "Choque do Trovão",
			de: "Donnerrüttler"
		},

		effect: {
			fr: "Ce Pokémon s’inflige aussi 30 dégâts.",
			en: "This Pokémon also does 30 damage to itself.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 160,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card