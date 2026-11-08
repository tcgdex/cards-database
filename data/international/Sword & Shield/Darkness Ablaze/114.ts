import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [861],

	name: {
		'en-us': "Grimmsnarl V",
		'fr-fr': "Angoliath V",
		'es-es': "Grimmsnarl V",
		'it-it': "Grimmsnarl V",
		'pt-br': "Grimmsnarl V",
		'de-de': "Olangaar V"
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
				'en-us': "Bite",
				'fr-fr': "Morsure",
				'es-es': "Mordisco",
				'it-it': "Morso",
				'pt-br': "Mordida",
				'de-de': "Biss"
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
				'en-us': "Spiky Knuckle",
				'fr-fr': "Poing Piquant",
				'es-es': "Nudillo Puntiagudo",
				'it-it': "Noccaspina",
				'pt-br': "Punho Espinhoso",
				'de-de': "Stachelfaust"
			},
			effect: {
				'en-us': "Put 2 Darkness Energy attached to this Pokémon into your hand.",
				'fr-fr': "Ajoutez à votre main 2 Énergies Darkness attachées à ce Pokémon.",
				'es-es': "Pon 2 Energías Darkness unidas a este Pokémon en tu mano.",
				'it-it': "Prendi due Energie Darkness assegnate a questo Pokémon e aggiungile alle carte che hai in mano.",
				'pt-br': "Coloque 2 Energias Darkness ligadas a este Pokémon na sua mão.",
				'de-de': "Nimm 2 an dieses Pokémon angelegte Darkness-Energien auf deine Hand."
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


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 483449,
				tcgplayer: 219428
			}
		},
	],
}

export default card
