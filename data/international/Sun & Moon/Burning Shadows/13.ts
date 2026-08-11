import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Simisage",
		'fr-fr': "Feuiloutan",
		'es-es': "Simisage",
		'it-it': "Simisage",
		'pt-br': "Simisage",
		'de-de': "Vegichita"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		512,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Pansage",
		'fr-fr': "Feuillajou",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe",
				'es-es': "Arañazo",
				'it-it': "Graffio",
				'pt-br': "Arranhão",
				'de-de': "Kratzer"
			},

			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Leaf Supply",
				'fr-fr': "Provision de Feuillage",
				'es-es': "Aprovisionamiento Hoja",
				'it-it': "Fogliascorta",
				'pt-br': "Estoque de Folha",
				'de-de': "Blättervorrat"
			},
			effect: {
				'en-us': "You may attach a Grass Energy card from your hand to 1 of your Pokémon.",
				'fr-fr': "Vous pouvez attacher une carte Énergie Grass de votre main à l’un de vos Pokémon.",
				'es-es': "Puedes unir 1 carta de Energía Grass de tu mano a 1 de tus Pokémon.",
				'it-it': "Puoi assegnare una carta Energia Grass dalla tua mano a uno dei tuoi Pokémon.",
				'pt-br': "Você pode ligar 1 carta de Energia Grass da sua mão a 1 dos seus Pokémon.",
				'de-de': "Du kannst 1 Grass-Energiekarte aus deiner Hand an 1 deiner Pokémon anlegen."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It attacks enemies with strikes of its thorn-covered tail. This Pokémon is wild tempered.",
	},

	thirdParty: {
		cardmarket: 299420,
		tcgplayer: 138283
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
