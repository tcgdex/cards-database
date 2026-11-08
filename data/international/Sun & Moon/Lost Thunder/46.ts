import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Houndoom",
		'fr-fr': "Démolosse",
		'es-es': "Houndoom",
		'it-it': "Houndoom",
		'pt-br': "Houndoom",
		'de-de': "Hundemon"
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
		'en-us': "Houndour",
		'fr-fr': "Malosse",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Nasty Plot",
				'fr-fr': "Machination",
				'es-es': "Maquinación",
				'it-it': "Congiura",
				'pt-br': "Trama Maldosa",
				'de-de': "Ränkeschmied"
			},
			effect: {
				'en-us': "Search your deck for a card and put it into your hand. Then, shuffle your deck.",
				'fr-fr': "Cherchez une carte dans votre deck, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 1 carta y ponla en tu mano. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo una carta qualsiasi e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por 1 carta no seu baralho e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach 1 Karte und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Attack Operation",
				'fr-fr': "Opération d’Attaque",
				'es-es': "Operación Ataque",
				'it-it': "Piano di Attacco",
				'pt-br': "Operação Ataque",
				'de-de': "Angriffseinsatz"
			},
			effect: {
				'en-us': "If you have more cards in your hand than your opponent, this attack does 80 more damage.",
				'fr-fr': "Si vous avez plus de cartes dans votre main que votre adversaire, cette attaque inflige 80 dégâts supplémentaires.",
				'es-es': "Si tienes más cartas en tu mano que tu rival, este ataque hace 80 puntos de daño más.",
				'it-it': "Se hai più carte in mano del tuo avversario, questo attacco infligge 80 danni in più.",
				'pt-br': "Se você tiver mais cartas na sua mão do que seu oponente, este ataque causará 80 pontos de dano a mais.",
				'de-de': "Wenn du mehr Karten auf der Hand hast als dein Gegner, fügt diese Attacke 80 Schadenspunkte mehr zu."
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

	description: {
		'en-us': "The flames it breathes when angry contain toxins. If they cause a burn, it will hurt forever.",
	},

	thirdParty: {
		cardmarket: 365686,
		tcgplayer: 178851
	}
}

export default card
