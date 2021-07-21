import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Ralts",
		fr: "Tarsal",
		es: "Ralts",
		it: "Ralts",
		pt: "Ralts",
		de: "Trasla"
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
				en: "Beckon",
				fr: "Invite",
				es: "Hacer Señas",
				it: "Appello",
				pt: "Aceno",
				de: "Herbeiwinken"
			},
			effect: {
				en: "Put a Supporter card from your discard pile into your hand.",
				fr: "Ajoutez une carte Supporter de votre pile de défausse à votre main.",
				es: "Pon 1 carta de Partidario de tu pila de descartes en tu mano.",
				it: "Prendi una carta Aiuto dalla tua pila degli scarti e aggiungila alle carte che hai in mano.",
				pt: "Coloque 1 carta de Apoiador da sua pilha de descarte na sua mão.",
				de: "Nimm 1 Unterstützerkarte aus deinem Ablagestapel auf deine Hand."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Beat",
				fr: "Bataille",
				es: "Toque",
				it: "Battuta",
				pt: "Pulso",
				de: "Verprügler"
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



}

export default card
