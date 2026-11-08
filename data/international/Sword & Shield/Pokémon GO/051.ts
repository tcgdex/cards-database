import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [113],
	set: Set,

	name: {
		'en-us': "Chansey",
		'fr-fr': "Leveinard",
		'es-es': "Chansey",
		'it-it': "Chansey",
		'pt-br': "Chansey",
		'de-de': "Chaneira"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Delicious Egg",
			'fr-fr': "Œuf Délicieux",
			'es-es': "Huevo Exquisito",
			'it-it': "Uovo Delizioso",
			'pt-br': "Ovo Delicioso",
			'de-de': "Köstliches Ei"
		},

		effect: {
			'en-us': "Heal 30 damage from 1 of your Benched Pokémon.",
			'fr-fr': "Soignez 30 dégâts de l'un de vos Pokémon de Banc.",
			'es-es': "Cura 30 puntos de daño a 1 de tus Pokémon en Banca.",
			'it-it': "Cura uno dei tuoi Pokémon in panchina da 30 danni.",
			'pt-br': "Cure 30 pontos de dano de 1 dos seus Pokémon no Banco.",
			'de-de': "Heile 30 Schadenspunkte bei 1 Pokémon auf deiner Bank."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Gentle Slap",
			'fr-fr': "Gifle Douce",
			'es-es': "Bofetada Gentil",
			'it-it': "Schiaffetto",
			'pt-br': "Tapinha",
			'de-de': "Sanfter Hieb"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "The egg Chansey carries is not only delicious but also packed with nutrition. It's used as a high-class cooking ingredient.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 665272,
				tcgplayer: 276965
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 665272,
				tcgplayer: 276965
			}
		},
	],
}

export default card
