import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [573],
	set: Set,

	name: {
		en: "Cinccino",
		fr: "Pashmilla",
		es: "Cinccino",
		it: "Cinccino",
		pt: "Cinccino",
		de: "Chillabell"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	evolveFrom: {
		en: "Minccino",
		fr: "Chinchidou",
		es: "Minccino",
		it: "Minccino",
		pt: "Minccino",
		de: "Picochilla"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Gentle Slap",
			fr: "Gifle Douce",
			es: "Bofetada Gentil",
			it: "Schiaffetto",
			pt: "Tapinha",
			de: "Sanfter Hieb"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Special Roll",
			fr: "Roulade Spéciale",
			es: "Giro Especial",
			it: "Rotolamento Speciale",
			pt: "Rolagem Especial",
			de: "Spezial-Rolle"
		},

		effect: {
			en: "This attack does 70 damage for each Special Energy card attached to this Pokémon.",
			fr: "Cette attaque inflige 70 dégâts pour chaque carte Énergie spéciale attachée à ce Pokémon.",
			es: "Este ataque hace 70 puntos de daño por cada carta de Energía Especial unida a este Pokémon.",
			it: "Questo attacco infligge 70 danni per ogni carta Energia speciale assegnata a questo Pokémon.",
			pt: "Este ataque causa 70 pontos de dano para cada carta de Energia Especial ligada a este Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte Spezial-Energiekarte 70 Schadenspunkte zu."
		},

		damage: "70×"
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Shibuzoh.",

	thirdParty: {
		cardmarket: 760813
	}
}

export default card