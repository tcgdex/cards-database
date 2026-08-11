import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [573],
	set: Set,

	name: {
		'en-us': "Cinccino",
		'fr-fr': "Pashmilla",
		'es-es': "Cinccino",
		'it-it': "Cinccino",
		'pt-br': "Cinccino",
		'de-de': "Chillabell"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	evolveFrom: {
		'en-us': "Minccino",
		'fr-fr': "Chinchidou",
		'es-es': "Minccino",
		'it-it': "Minccino",
		'pt-br': "Minccino",
		'de-de': "Picochilla"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Gentle Slap",
			'fr-fr': "Gifle Douce",
			'es-es': "Bofetada Gentil",
			'it-it': "Schiaffetto",
			'pt-br': "Tapinha",
			'de-de': "Sanfter Hieb"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Special Roll",
			'fr-fr': "Roulade Spéciale",
			'es-es': "Giro Especial",
			'it-it': "Rotolamento Speciale",
			'pt-br': "Rolagem Especial",
			'de-de': "Spezial-Rolle"
		},

		effect: {
			'en-us': "This attack does 70 damage for each Special Energy card attached to this Pokémon.",
			'fr-fr': "Cette attaque inflige 70 dégâts pour chaque carte Énergie spéciale attachée à ce Pokémon.",
			'es-es': "Este ataque hace 70 puntos de daño por cada carta de Energía Especial unida a este Pokémon.",
			'it-it': "Questo attacco infligge 70 danni per ogni carta Energia speciale assegnata a questo Pokémon.",
			'pt-br': "Este ataque causa 70 pontos de dano para cada carta de Energia Especial ligada a este Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte Spezial-Energiekarte 70 Schadenspunkte zu."
		},

		damage: "70×"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "Its body secretes oil that this Pokémon spreads over its nest as a coating to protect it from dust. Cinccino won't tolerate even a speck of the stuff.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760767,
				tcgplayer: 542881
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760767,
				tcgplayer: 542881
			}
		},
	],

	illustrator: "Yuu Nishida",

}

export default card