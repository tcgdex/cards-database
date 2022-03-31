import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Shiftry",
		fr: "Tengalice",
		es: "Shiftry",
		it: "Shiftry",
		pt: "Shiftry",
		de: "Tengulist"
	},
	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		275,
	],
	hp: 140,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Nuzleaf",
		fr: "Pifeuil",
		es: "Nuzleaf",
		it: "Nuzleaf",
		pt: "Nuzleaf",
		de: "Blanas"
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Roll Up",
				fr: "Enrouleur",
				es: "Enrollar",
				it: "Accartocciare",
				pt: "Enrolar para Cima",
				de: "Zusammenrollen"
			},
			effect: {
				en: "Flip 3 coins. If any of them are heads, your opponent reveals his or her hand. Then, for each heads, discard a card from your opponent's hand.",
				fr: "Lancez 3 pièces. Si vous obtenez au moins 1 côté face, votre adversaire montre sa main. Ensuite, pour chaque côté face, défaussez une carte de la main de votre adversaire.",
				es: "Lanza 3 monedas. Si sale cara en alguna de ellas, tu rival enseña las cartas de su mano. Después, por cada cara, descarta 1 carta de la mano de tu rival.",
				it: "Lancia tre volte una moneta. Se esce almeno una volta testa, il tuo avversario mostra le carte che ha in mano. Poi, per ogni volta che è uscita testa, scarta una carta dalla mano del tuo avversario.",
				pt: "Jogue 3 moedas. Se alguma delas sair cara, o seu oponente revelará sua própria mão. Em seguida, para cada cara, descarte um card da mão do seu oponente.",
				de: "Wirf 3 Münzen. Zeigt mindestens 1 dieser Münzen \"Kopf\", deckt dein Gegner seine Handkarten auf. Lege anschließend pro \"Kopf\" 1 Handkarte deines Gegners auf dessen Ablagestapel."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Otherworldly Return",
				fr: "Retour Surnaturel",
				es: "Vuelta Sobrenatural",
				it: "Ritorno Soprannaturale",
				pt: "Retorno Transcendental",
				de: "Übernatürliche Rückkehr"
			},
			effect: {
				en: "Put a Trainer card from your discard pile into your hand.",
				fr: "Ajoutez une carte Dresseur de votre pile de défausse à votre main.",
				es: "Pon 1 carta de Entrenador de tu pila de descartes en tu mano.",
				it: "Prendi una carta Allenatore dalla tua pila degli scarti e aggiungila a quelle che hai in mano.",
				pt: "Coloque um card de Treinador da sua pilha de descarte em sua mão.",
				de: "Nimm 1 Trainerkarte von deinem Ablagestapel auf deine Hand."
			},
			damage: 60,

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
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
