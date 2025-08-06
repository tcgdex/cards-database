import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Golduck",
		fr: "Akwakwak",
		es: "Golduck",
		it: "Golduck",
		pt: "Golduck",
		de: "Entoron"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		55,
	],

	hp: 110,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Psyduck",
		fr: "Psykokwak",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
				es: "Arañazo",
				it: "Graffio",
				pt: "Arranhão",
				de: "Kratzer"
			},

			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Energy Loop",
				fr: "Boucle d’Énergie",
				es: "Bucle de Energía",
				it: "Circuito Energetico",
				pt: "Loop de Energia",
				de: "Energieschleife"
			},
			effect: {
				en: "Put an Energy attached to this Pokémon into your hand.",
				fr: "Placez une Énergie attachée à ce Pokémon dans votre main.",
				es: "Pon 1 Energía unida a este Pokémon en tu mano.",
				it: "Prendi un’Energia assegnata a questo Pokémon e aggiungila alle carte che hai in mano.",
				pt: "Coloque 1 Energia ligada a este Pokémon na sua mão.",
				de: "Nimm 1 an dieses Pokémon angelegte Energie auf deine Hand."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 407854,
		tcgplayer: 201217
	}
}

export default card
