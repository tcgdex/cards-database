import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Shiftry",
		'fr-fr': "Tengalice",
		'es-es': "Shiftry",
		'it-it': "Shiftry",
		'pt-br': "Shiftry",
		'de-de': "Tengulist"
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
		'en-us': "Nuzleaf",
		'fr-fr': "Pifeuil",
		'es-es': "Nuzleaf",
		'it-it': "Nuzleaf",
		'pt-br': "Nuzleaf",
		'de-de': "Blanas"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Roll Up",
				'fr-fr': "Enrouleur",
				'es-es': "Enrollar",
				'it-it': "Accartocciare",
				'pt-br': "Enrolar para Cima",
				'de-de': "Zusammenrollen"
			},
			effect: {
				'en-us': "Flip 3 coins. If any of them are heads, your opponent reveals his or her hand. Then, for each heads, discard a card from your opponent's hand.",
				'fr-fr': "Lancez 3 pièces. Si vous obtenez au moins 1 côté face, votre adversaire montre sa main. Ensuite, pour chaque côté face, défaussez une carte de la main de votre adversaire.",
				'es-es': "Lanza 3 monedas. Si sale cara en alguna de ellas, tu rival enseña las cartas de su mano. Después, por cada cara, descarta 1 carta de la mano de tu rival.",
				'it-it': "Lancia tre volte una moneta. Se esce almeno una volta testa, il tuo avversario mostra le carte che ha in mano. Poi, per ogni volta che è uscita testa, scarta una carta dalla mano del tuo avversario.",
				'pt-br': "Jogue 3 moedas. Se alguma delas sair cara, o seu oponente revelará sua própria mão. Em seguida, para cada cara, descarte um card da mão do seu oponente.",
				'de-de': "Wirf 3 Münzen. Zeigt mindestens 1 dieser Münzen \"Kopf\", deckt dein Gegner seine Handkarten auf. Lege anschließend pro \"Kopf\" 1 Handkarte deines Gegners auf dessen Ablagestapel."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Otherworldly Return",
				'fr-fr': "Retour Surnaturel",
				'es-es': "Vuelta Sobrenatural",
				'it-it': "Ritorno Soprannaturale",
				'pt-br': "Retorno Transcendental",
				'de-de': "Übernatürliche Rückkehr"
			},
			effect: {
				'en-us': "Put a Trainer card from your discard pile into your hand.",
				'fr-fr': "Ajoutez une carte Dresseur de votre pile de défausse à votre main.",
				'es-es': "Pon 1 carta de Entrenador de tu pila de descartes en tu mano.",
				'it-it': "Prendi una carta Allenatore dalla tua pila degli scarti e aggiungila a quelle che hai in mano.",
				'pt-br': "Coloque um card de Treinador da sua pilha de descarte em sua mão.",
				'de-de': "Nimm 1 Trainerkarte von deinem Ablagestapel auf deine Hand."
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

	description: {
		'en-us': "By flapping its leafy fan, it can whip up gusts of 100 feet per second that can level houses.",
	},

	thirdParty: {
		cardmarket: 288248,
		tcgplayer: 111611
	}
}

export default card
