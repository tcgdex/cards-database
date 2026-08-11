import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [765],
	set: Set,

	name: {
		'fr-fr': "Gouroutan",
		'en-us': "Oranguru",
		'es-es': "Oranguru",
		'it-it': "Oranguru",
		'pt-br': "Oranguru",
		'de-de': "Kommandutan"
	},

	illustrator: "nagimiso",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Sagesse du Primate",
			'en-us': "Primate Wisdom",
			'es-es': "Sabiduría Primate",
			'it-it': "Saggezza del Primate",
			'pt-br': "Sabedoria de Primata",
			'de-de': "Primaten-Weisheit"
		},

		effect: {
			'fr-fr': "Une fois pendant votre tour, vous pouvez échanger une carte de votre main contre la carte du dessus de votre deck.",
			'en-us': "Once during your turn, you may switch a card from your hand with the top card of your deck.",
			'es-es': "Una vez durante tu turno, puedes cambiar 1 carta de tu mano por la primera carta de tu baraja.",
			'it-it': "Una sola volta durante il tuo turno, puoi scambiare una carta che hai in mano con la prima carta del tuo mazzo.",
			'pt-br': "Uma vez durante o seu turno, você poderá trocar 1 carta da sua mão pela carta de cima do seu baralho.",
			'de-de': "Einmal während deines Zuges kannst du 1 Karte aus deiner Hand gegen die oberste Karte deines Decks austauschen."
		}
	}],

	attacks: [{
		name: {
			'fr-fr': "Assommer",
			'en-us': "Whap Down",
			'es-es': "Zurrar",
			'it-it': "Bastonata",
			'pt-br': "Golpe Ligeiro",
			'de-de': "Verdreschen"
		},

		damage: 70,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",
	stage: "Basic",

	description: {
		'en-us': "It knows the forest inside and out. If it comes across a wounded Pokémon, Oranguru will gather medicinal herbs to treat it."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539878,
				tcgplayer: 232486
			}
		},
	],
}

export default card
