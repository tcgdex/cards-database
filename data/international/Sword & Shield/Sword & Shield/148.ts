import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Oranguru",
		'fr-fr': "Gouroutan",
		'es-es': "Oranguru",
		'it-it': "Oranguru",
		'pt-br': "Oranguru",
		'de-de': "Kommandutan"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Primate Wisdom",
				'fr-fr': "Sagesse du Primate",
				'es-es': "Sabiduría Primate",
				'it-it': "Saggezza del Primate",
				'pt-br': "Sabedoria de Primata",
				'de-de': "Primaten-Weisheit"
			},
			effect: {
				'en-us': "Once during your turn, you may switch a card from your hand with the top card of your deck.",
				'fr-fr': "Une fois pendant votre tour, vous pouvez échanger une carte de votre main contre la carte du dessus de votre deck.",
				'es-es': "Una vez durante tu turno, puedes cambiar 1 carta de tu mano por la primera carta de tu baraja.",
				'it-it': "Una sola volta durante il tuo turno, puoi scambiare una carta che hai in mano con la prima carta del tuo mazzo.",
				'pt-br': "Uma vez durante o seu turno, você poderá trocar 1 carta da sua mão pela carta de cima do seu baralho.",
				'de-de': "Einmal während deines Zuges kannst du 1 Karte aus deiner Hand gegen die oberste Karte deines Decks austauschen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Whap Down",
				'fr-fr': "Assommer",
				'es-es': "Zurrar",
				'it-it': "Bastonata",
				'pt-br': "Golpe Ligeiro",
				'de-de': "Verdreschen"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	description: {
		'en-us': "It knows the forest inside and out. If it comes across a wounded Pokémon, Oranguru will gather medicinal herbs to treat it."
	},

	dexId: [765],

	thirdParty: {
		cardmarket: 436834,
		tcgplayer: 208468
	}
}

export default card
