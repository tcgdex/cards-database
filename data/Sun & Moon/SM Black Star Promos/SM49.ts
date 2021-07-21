import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Bewear",
		fr: "Chelours",
		es: "Bewear",
		it: "Bewear",
		pt: "Bewear",
		de: "Kosturso"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		760,
	],
	hp: 120,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Stufful",
		fr: "Nounourson",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mix-Up",
				fr: "Mélange",
				es: "Mezclar",
				it: "Frullatore",
				pt: "Atrapalhar",
				de: "Durcheinander"
			},
			effect: {
				en: "Flip a coin. If heads, discard the top 3 cards of your opponent’s deck.",
				fr: "Lancez une pièce. Si c’est face, défaussez les 3 cartes du dessus du deck de votre adversaire.",
				es: "Lanza 1 moneda. Si sale cara, descarta las 3 primeras cartas de la baraja de tu rival.",
				it: "Lancia una moneta. Se esce testa, scarta le prime tre carte del mazzo del tuo avversario.",
				pt: "Jogue 1 moeda. Se sair cara, descarte as 3 primeiras cartas do baralho do seu oponente.",
				de: "Wirf 1 Münze. Lege bei Kopf die obersten 3 Karten vom Deck deines Gegners auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tantrum",
				fr: "Mauvaise Humeur",
				es: "Rabieta",
				it: "Collera",
				pt: "Petulância",
				de: "Rappel"
			},
			effect: {
				en: "This Pokémon is now Confused.",
				fr: "Ce Pokémon est maintenant Confus.",
				es: "Este Pokémon pasa a estar Confundido.",
				it: "Questo Pokémon viene confuso.",
				pt: "Este Pokémon agora está Confuso.",
				de: "Dieses Pokémon ist jetzt verwirrt."
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
