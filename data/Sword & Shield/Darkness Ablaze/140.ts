import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Lugia",
		fr: "Lugia",
		es: "Lugia",
		it: "Lugia",
		pt: "Lugia",
		de: "Lugia"
	},

	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Colorless",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Gust",
				fr: "Tornade",
				es: "Tornado",
				it: "Raffica",
				pt: "Lufada de Vento",
				de: "Windstoß"
			},

			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
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
				fr: "Ajoutez à votre main une Énergie attachée à ce Pokémon.",
				es: "Pon 1 Energía unida a este Pokémon en tu mano.",
				it: "Prendi un’Energia assegnata a questo Pokémon e aggiungila alle carte che hai in mano.",
				pt: "Coloque 1 Energia ligada a este Pokémon na sua mão.",
				de: "Nimm 1 an dieses Pokémon angelegte Energie auf deine Hand."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 2,
	regulationMark: "D"
}

export default card
