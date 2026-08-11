import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Dratini",
		'fr-fr': "Minidraco",
		'es-es': "Dratini",
		'it-it': "Dratini",
		'pt-br': "Dratini",
		'de-de': "Dratini"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		147,
	],

	hp: 60,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Signs of Evolution",
				'fr-fr': "Signes d’Évolution",
				'es-es': "Indicios de Evolución",
				'it-it': "Evolvisegni",
				'pt-br': "Sinais de Evolução",
				'de-de': "Spuren der Evolution"
			},
			effect: {
				'en-us': "Search your deck for a Dratini, a Dragonair, and a Dragonite, reveal them, and put them into your hand. Then, shuffle your deck.",
				'fr-fr': "Cherchez un Minidraco, un Draco et un Dracolosse dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 1 Dratini, 1 Dragonair y 1 Dragonite, enséñalos y ponlos en tu mano. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo un Dratini, un Dragonair e un Dragonite, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por 1 Dratini, por 1 Dragonair e por 1 Dragonite no seu baralho, revele-os e coloque-os na sua mão. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach 1 Dratini, 1 Dragonir und 1 Dragoran, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Tail Smack",
				'fr-fr': "Coup de Queue",
				'es-es': "Bofetón Cola",
				'it-it': "Codasberla",
				'pt-br': "Ataque de Cauda",
				'de-de': "Schweifstreich"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "After a 10-hour struggle, a fisherman was able to pull one up and confirm its existence.",
	},

	thirdParty: {
		cardmarket: 295405,
		tcgplayer: 126966
	}
}

export default card
