import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Houndoom",
		fr: "Démolosse",
		es: "Houndoom",
		it: "Houndoom",
		pt: "Houndoom",
		de: "Hundemon"
	},

	illustrator: "Sekio",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		229,
	],

	hp: 110,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Houndour",
		fr: "Malosse",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Nasty Plot",
				fr: "Machination",
				es: "Maquinación",
				it: "Congiura",
				pt: "Trama Maldosa",
				de: "Ränkeschmied"
			},
			effect: {
				en: "Search your deck for a card and put it into your hand. Then, shuffle your deck.",
				fr: "Cherchez une carte dans votre deck, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja 1 carta y ponla en tu mano. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo una carta qualsiasi e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por 1 carta no seu baralho e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach 1 Karte und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Attack Operation",
				fr: "Opération d’Attaque",
				es: "Operación Ataque",
				it: "Piano di Attacco",
				pt: "Operação Ataque",
				de: "Angriffseinsatz"
			},
			effect: {
				en: "If you have more cards in your hand than your opponent, this attack does 80 more damage.",
				fr: "Si vous avez plus de cartes dans votre main que votre adversaire, cette attaque inflige 80 dégâts supplémentaires.",
				es: "Si tienes más cartas en tu mano que tu rival, este ataque hace 80 puntos de daño más.",
				it: "Se hai più carte in mano del tuo avversario, questo attacco infligge 80 danni in più.",
				pt: "Se você tiver mais cartas na sua mão do que seu oponente, este ataque causará 80 pontos de dano a mais.",
				de: "Wenn du mehr Karten auf der Hand hast als dein Gegner, fügt diese Attacke 80 Schadenspunkte mehr zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 365686
	}
}

export default card
