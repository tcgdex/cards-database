import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Nuzleaf",
		fr: "Pifeuil",
		es: "Nuzleaf",
		it: "Nuzleaf",
		pt: "Nuzleaf",
		de: "Blanas"
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		274,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Seedot",
		fr: "Grainipiot",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Pound",
				fr: "Écras’Face",
				es: "Destructor",
				it: "Botta",
				pt: "Pancada",
				de: "Pfund"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Clear the Room",
				fr: "Vider les Lieux",
				es: "Hacer Sitio",
				it: "Sgombero",
				pt: "Expulsar da Sala",
				de: "Rausschmeißen"
			},
			effect: {
				en: "Your opponent reveals their hand. Choose a Supporter card you find there. Your opponent shuffles that card into their deck.",
				fr: "Votre adversaire dévoile sa main. Choisissez une carte Supporter que vous y trouvez. Votre adversaire mélange cette carte avec son deck.",
				es: "Tu rival enseña las cartas de su mano. Elige 1 carta de Partidario que encuentres entre ellas. Tu rival pone esa carta en su baraja y las baraja todas.",
				it: "Il tuo avversario mostra le carte che ha in mano. Scegli una carta Aiuto presente tra quelle carte. Il tuo avversario rimischia quella carta nel suo mazzo.",
				pt: "Seu oponente revela a própria mão. Escolha 1 carta de Apoiador que encontrar lá. Seu oponente embaralha aquela carta no próprio baralho.",
				de: "Dein Gegner zeigt dir seine Handkarten. Wähle 1 Unterstützerkarte, die du dort findest. Dein Gegner mischt jene Karte in sein Deck."
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
