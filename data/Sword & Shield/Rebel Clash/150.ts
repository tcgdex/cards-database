import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Bewear",
		fr: "Chelours",
		es: "Bewear",
		it: "Bewear",
		pt: "Bewear",
		de: "Kosturso"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Stufful",
		fr: "Nounourson"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hammer Arm",
				fr: "Marto-Poing",
				es: "Machada",
				it: "Martelpugno",
				pt: "Braço de Martelo",
				de: "Hammerarm"
			},
			effect: {
				en: "Discard the top card of your opponent’s deck.",
				fr: "Défaussez la carte du dessus du deck de votre adversaire.",
				es: "Descarta la primera carta de la baraja de tu rival.",
				it: "Scarta la prima carta del mazzo del tuo avversario.",
				pt: "Descarte a carta de cima do baralho do seu oponente.",
				de: "Lege die oberste Karte des Decks deines Gegners auf seinen Ablagestapel."
			},
			damage: 90,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Big Throw",
				fr: "Grand Lancer",
				es: "Gran Lanzamiento",
				it: "Gran Lancio",
				pt: "Arremessão",
				de: "Großer Wurf"
			},
			effect: {
				en: "Flip a coin. If heads, discard your opponent’s Active Pokémon and all attached cards.",
				fr: "Lancez une pièce. Si c’est face, défaussez le Pokémon Actif de votre adversaire et toutes les cartes attachées.",
				es: "Lanza 1 moneda. Si sale cara, descarta el Pokémon Activo de tu rival y todas las cartas unidas a él.",
				it: "Lancia una moneta. Se esce testa, scarta il Pokémon attivo del tuo avversario e tutte le carte a esso assegnate.",
				pt: "Jogue 1 moeda. Se sair cara, descarte o Pokémon Ativo do seu oponente e todas as cartas ligadas a ele.",
				de: "Wirf 1 Münze. Lege bei Kopf das Aktive Pokémon deines Gegners und alle angelegten Karten auf seinen Ablagestapel."
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
	hp: 140,
	types: ["Colorless"],
	regulationMark: "D"
}

export default card
