import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [245],

	name: {
		en: "Suicune",
		fr: "Suicune",
		es: "Suicune",
		it: "Suicune",
		pt: "Suicune",
		de: "Suicune"
	},

	illustrator: "so-taro",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Water",
	],

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Wave Splash",
				fr: "Grosse Vague",
				es: "Chapoteo Ondulante",
				it: "Schizzi d'Onda",
				pt: "Onda Borrifante",
				de: "Wellenplatscher"
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Aurora Loop",
				fr: "Boucle Aurore",
				es: "Bucle Aurora",
				it: "Circuito Aurora",
				pt: "Loop da Aurora",
				de: "Auroraschleife"
			},
			effect: {
				en: "Put 2 Water Energy attached to this Pokémon into your hand.",
				fr: "Ajoutez à votre main 2 Énergies Water attachées à ce Pokémon.",
				es: "Pon 2 Energías Water unidas a este Pokémon en tu mano.",
				it: "Prendi due Energie Water assegnate a questo Pokémon e aggiungile alle carte che hai in mano.",
				pt: "Coloque 2 Energias Water ligadas a este Pokémon na sua mão.",
				de: "Nimm 2 an dieses Pokémon angelegte Water-Energien auf deine Hand."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "Said to be the embodiment of north winds, it can instantly purify filthy, murky water."
	},

	thirdParty: {
		cardmarket: 483059,
		tcgplayer: 219271
	}
}

export default card
