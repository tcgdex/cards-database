import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [910],
	set: Set,

	name: {
		'en-us': "Crocalor",
		'fr-fr': "Crocogril",
		'es-es': "Crocalor",
		'it-it': "Crocalor",
		'pt-br': "Crocalor",
		'de-de': "Lokroko"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Fuecoco",
		'fr-fr': "Chochodile",
		'es-es': "Fuecoco",
		'it-it': "Fuecoco",
		'pt-br': "Fuecoco",
		'de-de': "Krokel"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			'en-us': "Rolling Fireball",
			'fr-fr': "Boule de Feu Roulante",
			'es-es': "Bola de Fuego Rodante",
			'it-it': "Palladifuoco Rotolante",
			'pt-br': "Bola de Fogo Rolante",
			'de-de': "Rollender Feuerball"
		},

		effect: {
			'en-us': "Put an Energy attached to this Pokémon into your hand.",
			'fr-fr': "Ajoutez à votre main une Énergie attachée à ce Pokémon.",
			'es-es': "Pon 1 Energía unida a este Pokémon en tu mano.",
			'it-it': "Prendi un'Energia assegnata a questo Pokémon e aggiungila alle carte che hai in mano.",
			'pt-br': "Coloque uma Energia ligada a este Pokémon na sua mão.",
			'de-de': "Nimm 1 an dieses Pokémon angelegte Energie auf deine Hand."
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	description: {
		'en-us': "The combination of Crocalor's fire energy and overflowing vitality has caused an egg-shaped fireball to appear on the Pokémon's head.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740500,
				tcgplayer: 523631,
				cardtrader: 265094
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740500,
				tcgplayer: 523631,
				cardtrader: 265094
			}
		},
	],

	illustrator: "Pani Kobayashi",

	
}

export default card
