import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Hypno",
		fr: "Hypnomade",
		es: "Hypno",
		it: "Hypno",
		pt: "Hypno",
		de: "Hypno"
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
		en: "Drowzee",
		fr: "Soporifik",
		es: "Drowzee",
		it: "Drowzee",
		pt: "Drowzee",
		de: "Traumato"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hand Control",
				fr: "Main Contrôlée",
				es: "Control de Mano",
				it: "Controllamano",
				pt: "Controle Manual",
				de: "Handkontrolle"
			},
			effect: {
				en: "Your opponent reveals his or her hand. You may choose a Supporter card you find there. If you do, your opponent plays that Supporter card. However, you make all decisions for that card. (That Supporter card is discarded.)",
				fr: "Votre adversaire montre sa main. Vous pouvez choisir une carte Supporter que vous y trouvez. Dans ce cas, votre adversaire joue la carte Supporter. Cependant, vous prenez toutes les décisions relatives à la carte. (La carte Supporter est défaussée.)",
				es: "Tu rival enseña las cartas de su mano. Puedes elegir 1 carta de Partidario que encuentres entre ellas. Si lo haces, tu rival juega esa carta de Partidario. Sin embargo, tú tomas todas las decisiones sobre esa carta. (Esa carta de Partidario queda descartada).",
				it: "Il tuo avversario mostra le carte che ha in mano. Puoi scegliere una carta Aiuto presente tra quelle carte. Se lo fai, il tuo avversario gioca quella carta Aiuto. Tuttavia, prendi tu le decisioni per quella carta (la carta Aiuto viene poi scartata).",
				pt: "Seu oponente revela sua própria mão. Você poderá escolher um card de Apoiador que encontrar. Se você fizer isso, seu oponente jogará esse card de Apoiador. No entanto, é você que toma todas as decisões para esse card. (O card de Apoiador é descartado.)",
				de: "Dein Gegner deckt seine Handkarten auf. Wenn du darunter 1 Unterstützerkarte findest, kannst du deinen Gegner veranlassen, diese zu spielen. Wenn du das tust, triffst du alle Entscheidungen für diese Karte. (Diese Unterstützerkarte wird auf den Ablagestapel deines Gegners gelegt.)"
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Hypnoblast",
				fr: "Hypnoblast",
				es: "Hipnorrayo",
				it: "Ipnobomba",
				pt: "Borrifada Hipnótica",
				de: "Hypnoschuss"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt."
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



}

export default card
