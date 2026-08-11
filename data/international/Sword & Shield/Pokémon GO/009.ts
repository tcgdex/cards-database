import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [5],
	set: Set,

	name: {
		'en-us': "Charmeleon",
		'fr-fr': "Reptincel",
		'es-es': "Charmeleon",
		'it-it': "Charmeleon",
		'pt-br': "Charmeleon",
		'de-de': "Glutexo"
	},

	illustrator: "Shiburingaru",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Charmander",
		'fr-fr': "Salamèche",
		'es-es': "Charmander",
		'it-it': "Charmander",
		'pt-br': "Charmander",
		'de-de': "Glumanda"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Scratch",
			'fr-fr': "Griffe",
			'es-es': "Arañazo",
			'it-it': "Graffio",
			'pt-br': "Arranhão",
			'de-de': "Kratzer"
		},

		damage: 30
	}, {
		cost: ["Fire", "Fire", "Colorless", "Colorless"],

		name: {
			'en-us': "Flamethrower",
			'fr-fr': "Lance-Flammes",
			'es-es': "Lanzallamas",
			'it-it': "Lanciafiamme",
			'pt-br': "Lança-chamas",
			'de-de': "Flammenwurf"
		},

		effect: {
			'en-us': "Discard a Fire Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie Fire de ce Pokémon.",
			'es-es': "Descarta 1 Energía Fire de este Pokémon.",
			'it-it': "Scarta un'Energia Fire da questo Pokémon.",
			'pt-br': "Descarte 1 Energia Fire deste Pokémon.",
			'de-de': "Lege 1 Fire-Energie von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 665243,
				tcgplayer: 274438
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 665243,
				tcgplayer: 274438
			}
		},
	],
}

export default card
