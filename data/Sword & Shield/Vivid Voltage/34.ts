import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Dewott",
		fr: "Mateloutre",
		es: "Dewott",
		it: "Dewott",
		pt: "Dewott",
		de: "Zwottronin"
	},

	illustrator: "Megumi Higuchi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Oshawott",
		fr: "Moustillon"
	},

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O",
				es: "Pistola Agua",
				it: "Pistolacqua",
				pt: "Revólver d’Água",
				de: "Aquaknarre"
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aqua Wash",
				fr: "Aqua-Lavage",
				es: "Limpieza Acuática",
				it: "Idrolavaggio",
				pt: "Limpeza Aquática",
				de: "Aquawäsche"
			},
			effect: {
				en: "You may put an Energy attached to your opponent’s Active Pokémon into their hand.",
				fr: "Vous pouvez ajouter à la main de votre adversaire une Énergie attachée à son Pokémon Actif.",
				es: "Puedes poner 1 Energía unida al Pokémon Activo de tu rival en su mano.",
				it: "Puoi prendere un’Energia assegnata al Pokémon attivo del tuo avversario e aggiungerla alle carte che ha in mano.",
				pt: "Você pode colocar 1 Energia ligada ao Pokémon Ativo do seu oponente na mão dele(a).",
				de: "Du kannst deinem Gegner 1 an sein Aktives Pokémon angelegte Energie auf seine Hand geben."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "As a result of strict training, each Dewott learns different forms for using the scalchops."
	}
}

export default card
