import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Bibarel",
		fr: "Castorno",
		es: "Bibarel",
		it: "Bibarel",
		pt: "Bibarel",
		de: "Bidifas"
	},
	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		400,
	],
	hp: 120,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Bidoof",
		fr: "Keunotor",
		es: "Bidoof",
		it: "Bidoof",
		pt: "Bidoof",
		de: "Bidiza"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Yawn",
				fr: "Bâillement",
				es: "Bostezo",
				it: "Sbadiglio",
				pt: "Bocejo",
				de: "Gähner"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Continuous Headbutt",
				fr: "Coup d'Boule Sans Fin",
				es: "Golpe Cabeza Continuo",
				it: "Bottintesta Continue",
				pt: "Cabeçada Contínua",
				de: "Anhaltender Kopfstoß"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 80 damage times the number of heads.",
				fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 80 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 80 puntos de daño por cada cara.",
				it: "Lancia una moneta finché non esce croce. Questo attacco infligge 80 danni ogni volta che esce testa.",
				pt: "Jogue uma moeda até sair coroa. Esse ataque causa 80 de danos vezes o número de caras.",
				de: "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Dieser Angriff fügt 80 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "80×",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
