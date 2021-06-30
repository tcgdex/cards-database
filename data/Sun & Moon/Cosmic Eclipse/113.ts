import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Groudon",
		fr: "Groudon",
		es: "Groudon",
		it: "Groudon",
		pt: "Groudon",
		de: "Groudon"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		383,
	],
	hp: 130,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Drought",
				fr: "Sécheresse",
				es: "Sequía",
				it: "Siccità",
				pt: "Seca",
				de: "Dürre"
			},
			effect: {
				en: "Attach up to 2 Fighting Energy cards from your hand to 1 of your Pokémon.",
				fr: "Attachez jusqu’à 2 cartes Énergie Fighting de votre main à l’un de vos Pokémon.",
				es: "Une hasta 2 cartas de Energía Fighting de tu mano a 1 de tus Pokémon.",
				it: "Assegna fino a due carte Energia Fighting dalla tua mano a uno dei tuoi Pokémon.",
				pt: "Ligue até 2 cartas de Energia Fighting da sua mão a 1 dos seus Pokémon.",
				de: "Lege bis zu 2 Fighting-Energiekarten aus deiner Hand an 1 deiner Pokémon an."
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Trembling Ground",
				fr: "Terrain Tremblant",
				es: "Suelo Temblor",
				it: "Terra Tremante",
				pt: "Abalo Sísmico",
				de: "Erschütterung"
			},
			effect: {
				en: "This Pokémon can’t use Trembling Ground during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Terrain Tremblant pendant votre prochain tour.",
				es: "Este Pokémon no puede usar Suelo Temblor durante tu próximo turno.",
				it: "Durante il tuo prossimo turno, questo Pokémon non può usare Terra Tremante.",
				pt: "Este Pokémon não poderá usar Abalo Sísmico durante a sua próxima vez de jogar.",
				de: "Dieses Pokémon kann Erschütterung während deines nächsten Zuges nicht einsetzen."
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
