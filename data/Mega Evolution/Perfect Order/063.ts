import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Snorlax",
		fr: "Ronflex",
		es: "Snorlax",
		de: "Relaxo",
		it: "Snorlax",
		pt: "Snorlax"
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		143
	],
	hp: 160,
	types: [
		"Colorless"
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Colorless"
			],
			name: {
				en: "Gormandizer",
				fr: "Vorace",
				es: "Glotón",
				de: "Schlemmermaul",
				it: "Ghiottone",
				pt: "Glutão"
			},
			effect: {
				en: "Flip a coin until you get tails. Search your deck for an amount of Basic Energy up to the number of heads and attach it to this Pokémon. Then, shuffle your deck.",
				fr: "Lancez une pièce jusqu'à obtenir un côté pile. Cherchez dans votre deck une quantité d'Énergies de base inférieure ou égale au nombre de côtés face obtenus, puis attachez celles-ci à ce Pokémon. Mélangez ensuite votre deck.",
				es: "Lanza 1 moneda hasta que salga cruz. Busca en tu baraja una cantidad de Energías Básicas igual o inferior al número de caras que hayan salido y únelas a este Pokémon. Después, baraja las cartas de tu baraja.",
				de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Durchsuche dein Deck nach bis zu so vielen Basis-Energien, wie du Kopf geworfen hast, und lege sie an dieses Pokémon an. Mische anschließend dein Deck.",
				it: "Lancia una moneta finché non esce croce. Cerca nel tuo mazzo un numero di Energie base uguale o inferiore al numero di volte in cui è uscito testa e assegnale a questo Pokémon. Poi rimischia il tuo mazzo.",
				pt: "Jogue uma moeda até sair coroa. Procure por uma quantidade de Energia Básica no seu baralho até o número de caras e ligue-as a este Pokémon. Em seguida, embaralhe o seu baralho."
			}
		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			name: {
				en: "Collapse",
				fr: "Effondrement",
				es: "Colapso",
				de: "Kollaps",
				it: "Collassare",
				pt: "Colapso"
			},
			damage: "160",
			effect: {
				en: "This Pokémon is now Asleep.",
				fr: "Ce Pokémon est maintenant Endormi.",
				es: "Este Pokémon pasa a estar Dormido.",
				de: "Dieses Pokémon schläft jetzt.",
				it: "Questo Pokémon viene addormentato.",
				pt: "Este Pokémon agora está Adormecido."
			}
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 4,
	regulationMark: "J",
	illustrator: "Toshinao Aoki",
	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],
	thirdParty: {
		tcgplayer: 684440,
		cardmarket: 877479
	}
}

export default card
