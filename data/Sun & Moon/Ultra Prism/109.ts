import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Purugly",
		fr: "Chaffreux",
		es: "Purugly",
		it: "Purugly",
		pt: "Purugly",
		de: "Shnurgarst"
	},

	illustrator: "Shibuzoh.",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		432,
	],

	hp: 110,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Glameow",
		fr: "Chaglam",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Own the Place",
				fr: "Propriétaire des Lieux",
				es: "Amo de la Casa",
				it: "Casa Mia",
				pt: "Dominar a Casa",
				de: "Herr im Haus"
			},
			effect: {
				en: "If your opponent has a Stadium card in play, discard it. If you do, prevent all effects of attacks, including damage, done to this Pokémon during your opponent’s next turn.",
				fr: "Si votre adversaire a une carte Stade en jeu, défaussez-la. Dans ce cas, évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
				es: "Si tu rival tiene alguna carta de Estadio en juego, descártala. Si lo haces, evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon durante el próximo turno de tu rival.",
				it: "Se il tuo avversario ha una carta Stadio in gioco, scartala. Se lo fai, previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon durante il prossimo turno del tuo avversario.",
				pt: "Se o seu oponente tiver uma carta de Estádio em jogo, descarte-a. Se fizer isto, prevenirá todos os efeitos de ataques, incluindo dano, causados a este Pokémon durante a próxima vez de jogar do seu oponente.",
				de: "Wenn dein Gegner eine Stadionkarte im Spiel hat, lege sie auf seinen Ablagestapel. Wenn du das machst, verhindere während des nächsten Zuges deines Gegners alle Effekte von Attacken, einschließlich Schaden, die diesem Pokémon zugefügt werden."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Toss Aside",
				fr: "Rejeter",
				es: "Tirar a un Lado",
				it: "Metti Via",
				pt: "Colocar de Lado",
				de: "Wegschmeißen"
			},
			effect: {
				en: "Discard random cards from your opponent’s hand until they have 3 cards in their hand.",
				fr: "Défaussez au hasard des cartes de la main de votre adversaire jusqu’à ce qu’il ait 3 cartes dans sa main.",
				es: "Descarta cartas aleatorias de la mano de tu rival hasta que este tenga 3 cartas en su mano.",
				it: "Scarta delle carte a caso dalla mano del tuo avversario fino a lasciarlo con tre carte in mano.",
				pt: "Descarte cartas aleatórias da mão do seu oponente até que ele(a) tenha 3 cartas na própria mão.",
				de: "Lege so lang zufällige Karten aus der Hand deines Gegners auf seinen Ablagestapel, bis er 3 Karten auf seiner Hand hat."
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

	retreat: 2,

	thirdParty: {
		cardmarket: 316035
	}
}

export default card
