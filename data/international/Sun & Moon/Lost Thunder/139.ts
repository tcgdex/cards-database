import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Ralts",
		'fr-fr': "Tarsal",
		'es-es': "Ralts",
		'it-it': "Ralts",
		'pt-br': "Ralts",
		'de-de': "Trasla"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		280,
	],

	hp: 50,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Beckon",
				'fr-fr': "Invite",
				'es-es': "Hacer Señas",
				'it-it': "Appello",
				'pt-br': "Aceno",
				'de-de': "Herbeiwinken"
			},
			effect: {
				'en-us': "Put a Supporter card from your discard pile into your hand.",
				'fr-fr': "Ajoutez une carte Supporter de votre pile de défausse à votre main.",
				'es-es': "Pon 1 carta de Partidario de tu pila de descartes en tu mano.",
				'it-it': "Prendi una carta Aiuto dalla tua pila degli scarti e aggiungila alle carte che hai in mano.",
				'pt-br': "Coloque 1 carta de Apoiador da sua pilha de descarte na sua mão.",
				'de-de': "Nimm 1 Unterstützerkarte aus deinem Ablagestapel auf deine Hand."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Beat",
				'fr-fr': "Bataille",
				'es-es': "Toque",
				'it-it': "Battuta",
				'pt-br': "Pulso",
				'de-de': "Verprügler"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It is highly attuned to the emotions of people and Pokémon. It hides if it senses hostility.",
	},

	thirdParty: {
		cardmarket: 365776,
		tcgplayer: 178958
	}
}

export default card
