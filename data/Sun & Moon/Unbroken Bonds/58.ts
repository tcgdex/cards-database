import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Charjabug",
		fr: "Chrysapile",
		es: "Charjabug",
		it: "Charjabug",
		pt: "Charjabug",
		de: "Akkup"
	},
	illustrator: "Sekio",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		737,
	],
	hp: 80,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Grubbin",
		fr: "Larvibule",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Battery",
				fr: "Batterie",
				es: "Batería",
				it: "Batteria",
				pt: "Bateria",
				de: "Batterie"
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach this card from your hand to 1 of your Vikavolt or Vikavolt-GX as a Special Energy card. This card provides 2 Lightning Energy only while it’s attached to a Pokémon.",
				fr: "L’attacher à Lucanon ou Lucanon-GX comme carte Énergie spéciale.",
				es: "Une a Vikavolt o Vikavolt-GX como una carta de Energía Especial.",
				it: "Assegna a Vikavolt o Vikavolt-GX come carta Energia speciale.",
				pt: "Ligar a Vikavolt ou Vikavolt-GX como uma carta de Energia Especial.",
				de: "Lege sie als Spezial-Energiekarte an Donarion oder Donarion-GX an."
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
				en: "Pierce",
				fr: "Transpercement",
				es: "Perforar",
				it: "Perforare",
				pt: "Perfurar",
				de: "Durchbohren"
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
