import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Simisage",
		fr: "Feuiloutan",
		es: "Simisage",
		it: "Simisage",
		pt: "Simisage",
		de: "Vegichita"
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
		en: "Pansage",
		fr: "Feuillajou",
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
				"Grass",
				"Colorless",
			],
			name: {
				en: "Leaf Supply",
				fr: "Provision de Feuillage",
				es: "Aprovisionamiento Hoja",
				it: "Fogliascorta",
				pt: "Estoque de Folha",
				de: "Blättervorrat"
			},
			effect: {
				en: "You may attach a Grass Energy card from your hand to 1 of your Pokémon.",
				fr: "Vous pouvez attacher une carte Énergie Grass de votre main à l’un de vos Pokémon.",
				es: "Puedes unir 1 carta de Energía Grass de tu mano a 1 de tus Pokémon.",
				it: "Puoi assegnare una carta Energia Grass dalla tua mano a uno dei tuoi Pokémon.",
				pt: "Você pode ligar 1 carta de Energia Grass da sua mão a 1 dos seus Pokémon.",
				de: "Du kannst 1 Grass-Energiekarte aus deiner Hand an 1 deiner Pokémon anlegen."
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

	thirdParty: {
		cardmarket: 299420,
		tcgplayer: 138283
	}
}

export default card
