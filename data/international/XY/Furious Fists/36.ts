import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Hypno",
		'fr-fr': "Hypnomade",
		'es-es': "Hypno",
		'it-it': "Hypno",
		'pt-br': "Hypno",
		'de-de': "Hypno"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		97,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Drowzee",
		'fr-fr': "Soporifik",
		'es-es': "Drowzee",
		'it-it': "Drowzee",
		'pt-br': "Drowzee",
		'de-de': "Traumato"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Hand Control",
				'fr-fr': "Main Contrôlée",
				'es-es': "Control de Mano",
				'it-it': "Controllamano",
				'pt-br': "Controle Manual",
				'de-de': "Handkontrolle"
			},
			effect: {
				'en-us': "Your opponent reveals his or her hand. You may choose a Supporter card you find there. If you do, your opponent plays that Supporter card. However, you make all decisions for that card. (That Supporter card is discarded.)",
				'fr-fr': "Votre adversaire montre sa main. Vous pouvez choisir une carte Supporter que vous y trouvez. Dans ce cas, votre adversaire joue la carte Supporter. Cependant, vous prenez toutes les décisions relatives à la carte. (La carte Supporter est défaussée.)",
				'es-es': "Tu rival enseña las cartas de su mano. Puedes elegir 1 carta de Partidario que encuentres entre ellas. Si lo haces, tu rival juega esa carta de Partidario. Sin embargo, tú tomas todas las decisiones sobre esa carta. (Esa carta de Partidario queda descartada).",
				'it-it': "Il tuo avversario mostra le carte che ha in mano. Puoi scegliere una carta Aiuto presente tra quelle carte. Se lo fai, il tuo avversario gioca quella carta Aiuto. Tuttavia, prendi tu le decisioni per quella carta (la carta Aiuto viene poi scartata).",
				'pt-br': "Seu oponente revela sua própria mão. Você poderá escolher um card de Apoiador que encontrar. Se você fizer isso, seu oponente jogará esse card de Apoiador. No entanto, é você que toma todas as decisões para esse card. (O card de Apoiador é descartado.)",
				'de-de': "Dein Gegner deckt seine Handkarten auf. Wenn du darunter 1 Unterstützerkarte findest, kannst du deinen Gegner veranlassen, diese zu spielen. Wenn du das tust, triffst du alle Entscheidungen für diese Karte. (Diese Unterstützerkarte wird auf den Ablagestapel deines Gegners gelegt.)"
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Hypnoblast",
				'fr-fr': "Hypnoblast",
				'es-es': "Hipnorrayo",
				'it-it': "Ipnobomba",
				'pt-br': "Borrifada Hipnótica",
				'de-de': "Hypnoschuss"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It carries a pendulum-like device. There once was an incident in which it took away a child it hypnotized.",
	},

	thirdParty: {
		cardmarket: 281700,
		tcgplayer: 92211
	}
}

export default card
