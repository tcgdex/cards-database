import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [863],

	name: {
		'en-us': "Galarian Perrserker",
		'fr-fr': "Berserkatt de Galar",
		'es-es': "Perrserker de Galar",
		'it-it': "Perrserker di Galar",
		'pt-br': "Perrserker de Galar",
		'de-de': "Galar-Mauzinger"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Galarian Meowth",
		'fr-fr': "Miaouss de Galar",
		'es-es': "Meowth de Galar",
		'it-it': "Meowth di Galar",
		'pt-br': "Meowth de Galar",
		'de-de': "Galar-Mauzi"
	},

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Stealy Claws",
				'fr-fr': "Griffes Chapardeuses",
				'es-es': "Garras Ladronzuelas",
				'it-it': "Sgraffignartigli",
				'pt-br': "Garras de Larápio",
				'de-de': "Stehlklauen"
			},
			effect: {
				'en-us': "Flip 3 coins. If any of them are heads, your opponent reveals their hand. Then, for each heads, discard a Trainer card from your opponent's hand.",
				'fr-fr': "Lancez 3 pièces. Si vous obtenez au moins un côté face, votre adversaire dévoile sa main. Puis, pour chaque côté face, défaussez une carte Dresseur de la main de votre adversaire.",
				'es-es': "Lanza 3 monedas. Si sale cara en alguna de ellas, tu rival enseña las cartas de su mano. Después, por cada cara, descarta 1 carta de Entrenador de la mano de tu rival.",
				'it-it': "Lancia tre volte una moneta. Se esce almeno una volta testa, il tuo avversario mostra le carte che ha in mano. Poi, ogni volta che esce testa, scarta una carta Allenatore dalla mano del tuo avversario.",
				'pt-br': "Jogue 3 moedas. Se qualquer uma delas sair cara, seu oponente revelará a própria mão. Em seguida, para cada cara, descarte 1 carta de Treinador da mão do seu oponente.",
				'de-de': "Wirf 3 Münzen. Zeigt mindestens 1 Kopf, zeigt dir dein Gegner seine Handkarten. Lege anschließend pro Kopf 1 Trainerkarte aus der Hand deines Gegners auf seinen Ablagestapel."
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Claw Slash",
				'fr-fr': "Tranch'Griffe",
				'es-es': "Cuchillada Garra",
				'it-it': "Lacerartiglio",
				'pt-br': "Golpe de Garra",
				'de-de': "Klauenschlitzer"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "What appears to be an iron helmet is actually hardened hair. This Pokémon lives for the thrill of battle."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 512275,
				tcgplayer: 226566
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 512275,
				tcgplayer: 226566
			}
		},
	],
}

export default card
