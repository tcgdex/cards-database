import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Nuzleaf",
		'fr-fr': "Pifeuil",
		'es-es': "Nuzleaf",
		'it-it': "Nuzleaf",
		'pt-br': "Nuzleaf",
		'de-de': "Blanas"
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
		'en-us': "Seedot",
		'fr-fr': "Grainipiot",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Pound",
				'fr-fr': "Écras’Face",
				'es-es': "Destructor",
				'it-it': "Botta",
				'pt-br': "Pancada",
				'de-de': "Pfund"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Clear the Room",
				'fr-fr': "Vider les Lieux",
				'es-es': "Hacer Sitio",
				'it-it': "Sgombero",
				'pt-br': "Expulsar da Sala",
				'de-de': "Rausschmeißen"
			},
			effect: {
				'en-us': "Your opponent reveals their hand. Choose a Supporter card you find there. Your opponent shuffles that card into their deck.",
				'fr-fr': "Votre adversaire dévoile sa main. Choisissez une carte Supporter que vous y trouvez. Votre adversaire mélange cette carte avec son deck.",
				'es-es': "Tu rival enseña las cartas de su mano. Elige 1 carta de Partidario que encuentres entre ellas. Tu rival pone esa carta en su baraja y las baraja todas.",
				'it-it': "Il tuo avversario mostra le carte che ha in mano. Scegli una carta Aiuto presente tra quelle carte. Il tuo avversario rimischia quella carta nel suo mazzo.",
				'pt-br': "Seu oponente revela a própria mão. Escolha 1 carta de Apoiador que encontrar lá. Seu oponente embaralha aquela carta no próprio baralho.",
				'de-de': "Dein Gegner zeigt dir seine Handkarten. Wähle 1 Unterstützerkarte, die du dort findest. Dein Gegner mischt jene Karte in sein Deck."
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

	description: {
		'en-us': "It lives deep in forests. With the leaf on its head, it makes a flute whose song makes listeners uneasy.",
	},

	thirdParty: {
		cardmarket: 361260,
		tcgplayer: 170821
	}
}

export default card
