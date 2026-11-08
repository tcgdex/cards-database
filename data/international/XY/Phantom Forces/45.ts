import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Gourgeist",
		'fr-fr': "Banshitrouye",
		'es-es': "Gourgeist",
		'it-it': "Gourgeist",
		'pt-br': "Gourgeist",
		'de-de': "Pumpdjinn"
	},

	illustrator: "Kanako Eo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		711,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Pumpkaboo",
		'fr-fr': "Pitrouille",
		'es-es': "Pumpkaboo",
		'it-it': "Pumpkaboo",
		'pt-br': "Pumpkaboo",
		'de-de': "Irrbis"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Gourgantic",
				'fr-fr': "Gigantrouye",
				'es-es': "Gourgante",
				'it-it': "Beffa di Gourgeist",
				'pt-br': "Gourgântico",
				'de-de': "Pu?mperlgesund"
			},
			effect: {
				'en-us': "If this Pokémon has any Grass Energy attached to it, its maximum HP is 200.",
				'fr-fr': "Si de l'Énergie Grass est attachée à ce Pokémon, ses PV maximum sont de 200.",
				'es-es': "Si este Pokémon tiene alguna Energía Grass unida a él, sus PS máximos son 200.",
				'it-it': "Se questo Pokémon ha delle Energie Grass assegnate, i suoi PS massimi diventano 200.",
				'pt-br': "Se este Pokémon possuir alguma Energia Grass ligada a ele, seu PS máximo será 200.",
				'de-de': "Wenn an dieses Pokémon bereits Grass-Energie angelegt ist, verfügt es über 200 Grund-KP."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Horror Note",
				'fr-fr': "Note Angoissante",
				'es-es': "Nota Horripilante",
				'it-it': "Nota di Paura",
				'pt-br': "Nota de Horror",
				'de-de': "Schaurige Note"
			},
			effect: {
				'en-us': "This attack does 10 damage times the number of cards in your hand.",
				'fr-fr': "Cette attaque inflige 10 dégâts multipliés par le nombre de cartes dans votre main.",
				'es-es': "Este ataque hace 10 puntos de daño por cada carta de tu mano.",
				'it-it': "Questo attacco infligge 10 danni per ogni carta che hai in mano.",
				'pt-br': "Esse ataque causa 10 de danos vezes o número de cards em sua mão.",
				'de-de': "Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl der Karten auf deiner Hand zu."
			},
			damage: "10×",

		}
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Singing in eerie voices, they wander town streets on the night of the new moon. Anyone who hears their song is cursed.",
	},

	thirdParty: {
		cardmarket: 281851,
		tcgplayer: 94503
	}
}

export default card
