import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Charjabug",
		'fr-fr': "Chrysapile",
		'es-es': "Charjabug",
		'it-it': "Charjabug",
		'pt-br': "Charjabug",
		'de-de': "Akkup"
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
		'en-us': "Grubbin",
		'fr-fr': "Larvibule",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Battery",
				'fr-fr': "Batterie",
				'es-es': "Batería",
				'it-it': "Batteria",
				'pt-br': "Bateria",
				'de-de': "Batterie"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may attach this card from your hand to 1 of your Vikavolt or Vikavolt-GX as a Special Energy card. This card provides 2 Lightning Energy only while it’s attached to a Pokémon.",
				'fr-fr': "L’attacher à Lucanon ou Lucanon-GX comme carte Énergie spéciale.",
				'es-es': "Une a Vikavolt o Vikavolt-GX como una carta de Energía Especial.",
				'it-it': "Assegna a Vikavolt o Vikavolt-GX come carta Energia speciale.",
				'pt-br': "Ligar a Vikavolt ou Vikavolt-GX como uma carta de Energia Especial.",
				'de-de': "Lege sie als Spezial-Energiekarte an Donarion oder Donarion-GX an."
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
				'en-us': "Pierce",
				'fr-fr': "Transpercement",
				'es-es': "Perforar",
				'it-it': "Perforare",
				'pt-br': "Perfurar",
				'de-de': "Durchbohren"
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

	description: {
		'en-us': "It buries itself in fallen leaves and barely moves, munching away on humus. If you accidentally step on one, you'll get a shock!",
	},

	thirdParty: {
		cardmarket: 372348,
		tcgplayer: 189159
	}
}

export default card
