import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [357],
	set: Set,

	name: {
		'en-us': "Tropius",
		'fr-fr': "Tropius",
		'es-es': "Tropius",
		'it-it': "Tropius",
		'pt-br': "Tropius",
		'de-de': "Tropius"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Fresh-Picked Fruit",
			'fr-fr': "Fruit Frais",
			'es-es': "Fruta Fresca",
			'it-it': "Frutto Appena Colto",
			'pt-br': "Fruta Fresca",
			'de-de': "Frisches Obst"
		},

		effect: {
			'en-us': "Heal 60 damage from 1 of your Benched Pokémon.",
			'fr-fr': "Soignez 60 dégâts de l'un de vos Pokémon de Banc.",
			'es-es': "Cura 60 puntos de daño a uno de tus Pokémon en Banca.",
			'it-it': "Cura uno dei tuoi Pokémon in panchina da 60 danni.",
			'pt-br': "Cure 60 pontos de dano de 1 dos seus Pokémon no Banco.",
			'de-de': "Heile 60 Schadenspunkte bei 1 Pokémon auf deiner Bank."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Razor Leaf",
			'fr-fr': "Tranch'Herbe",
			'es-es': "Hoja Afilada",
			'it-it': "Foglielama",
			'pt-br': "Folha Navalha",
			'de-de': "Rasierblatt"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "aoki",

	description: {
		'en-us': "It lives in tropical jungles. The bunch of fruit around its neck is delicious. The fruit grows twice a year.",
	},

	thirdParty: {
        cardmarket: 702304,
        tcgplayer: 487838
    }
}

export default card
