import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [861],
	name: {
		en: "Grimmsnarl V",
		fr: "Angoliath V",
		es: "Grimmsnarl V",
		it: "Grimmsnarl V",
		pt: "Grimmsnarl V",
		de: "Olangaar V"
	},

	illustrator: "5ban Graphics",
	rarity: "Holo Rare V",
	category: "Pokemon",
	set: Set,
	hp: 220,

	types: [
		"Darkness",
	],

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
				es: "Mordisco",
				it: "Morso",
				pt: "Mordida",
				de: "Biss"
			},

			damage: 40,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Spiky Knuckle",
				fr: "Poing Piquant",
				es: "Nudillo Puntiagudo",
				it: "Noccaspina",
				pt: "Punho Espinhoso",
				de: "Stachelfaust"
			},
			effect: {
				en: "Put 2 Darkness Energy attached to this Pokémon into your hand.",
				fr: "Ajoutez à votre main 2 Énergies Darkness attachées à ce Pokémon.",
				es: "Pon 2 Energías Darkness unidas a este Pokémon en tu mano.",
				it: "Prendi due Energie Darkness assegnate a questo Pokémon e aggiungile alle carte che hai in mano.",
				pt: "Coloque 2 Energias Darkness ligadas a este Pokémon na sua mão.",
				de: "Nimm 2 an dieses Pokémon angelegte Darkness-Energien auf deine Hand."
			},
			damage: 200,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V"
}

export default card
