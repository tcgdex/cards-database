import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [930],
	set: Set,

	name: {
		'fr-fr': "Arboliva",
		'en-us': "Arboliva",
		'es-es': "Arboliva",
		'it-it': "Arboliva",
		'pt-br': "Arboliva",
		'de-de': "Olithena"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],
	evolveFrom: {
		'fr-fr': "Olivado",
		'en-us': "Dolliv",
		'es-es': "Dolliv",
		'it-it': "Dolliv",
		'pt-br': "Dolliv",
		'de-de': "Olivinio"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			'fr-fr': "Fruit Soigneur",
			'en-us': "Healing Fruit",
			'es-es': "Fruta Sanadora",
			'it-it': "Frutto Toccasana",
			'pt-br': "Fruta de Cura",
			'de-de': "Heilendes Obst"
		},

		effect: {
			'fr-fr': "Soignez tous les dégâts de l'un de vos Pokémon de Banc.",
			'en-us': "Heal all damage from 1 of your Benched Pokémon.",
			'es-es': "Cura todos los puntos de daño a uno de tus Pokémon en Banca.",
			'it-it': "Cura uno dei tuoi Pokémon in panchina da tutti i danni.",
			'pt-br': "Cure todo o dano de 1 dos seus Pokémon no Banco.",
			'de-de': "Heile allen Schaden bei 1 Pokémon auf deiner Bank."
		}
	}, {
		cost: ["Grass"],

		name: {
			'fr-fr': "Tir d'Huile",
			'en-us': "Oil Shot",
			'es-es': "Disparo de Aceite",
			'it-it': "Colpolio",
			'pt-br': "Disparo de Azeite",
			'de-de': "Ölschuss"
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "This calm Pokémon is very compassionate. It will share its delicious, nutrient-rich oil with weakened Pokémon.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725101,
				tcgplayer: 509762,
				cardtrader: 255581
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725101,
				tcgplayer: 509762,
				cardtrader: 255581
			}
		},
	],

	illustrator: "KEIICHIRO ITO",

	
}

export default card
