import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [819],
	set: Set,

	name: {
		'en-us': "Skwovet",
		'fr-fr': "Rongourmand",
		'es-es': "Skwovet",
		'it-it': "Skwovet",
		'pt-br': "Skwovet",
		'de-de': "Raffel"
	},

	illustrator: "OKACHEKE",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	attacks: [{
		name: {
			'en-us': "Scrounge",
			'fr-fr': "Fouissage",
			'es-es': "Rebuscar",
			'it-it': "Sbafo",
			'pt-br': "Vasculhada",
			'de-de': "Abstauben"
		},

		effect: {
			'en-us': "Put a Pokémon Tool card from your discard pile into your hand.",
			'fr-fr': "Ajoutez une carte Outil Pokémon de votre pile de défausse à votre main.",
			'es-es': "Pon 1 carta de Herramienta Pokémon de tu pila de descartes en tu mano.",
			'it-it': "Prendi una carta Oggetto Pokémon dalla tua pila degli scarti e aggiungila alle carte che hai in mano.",
			'pt-br': "Coloque uma carta de Ferramenta Pokémon da sua pilha de descarte na sua mão.",
			'de-de': "Nimm 1 Pokémon-Ausrüstung aus deinem Ablagestapel auf deine Hand."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Gnaw",
			'fr-fr': "Ronge",
			'es-es': "Roer",
			'it-it': "Rosicchiamento",
			'pt-br': "Roída",
			'de-de': "Nagen"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "It eats berries nonstop—a habit that has made it more resilient than it looks. It'll show up on farms, searching for yet more berries."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567235,
				tcgplayer: 241809
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567235,
				tcgplayer: 241809
			}
		},
	],
}

export default card
