import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Necrozma V",
		fr: "Necrozma V",
		es: "Necrozma V",
		it: "Necrozma V",
		pt: "Necrozma V",
		de: "Necrozma V"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Psychic"],

	attacks: [{
		name: {
			en: "Prismatic Ray",
			fr: "Rayon Prismatique",
			es: "Rayo Prismático",
			it: "Raggio Prismatico",
			pt: "Raio Prismático",
			de: "Prisma-Strahl"
		},

		effect: {
			en: "This attack also does 20 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige aussi 20 dégâts à 2 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			es: "Este ataque también hace 20 puntos de daño a 2 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			it: "Questo attacco infligge anche 20 danni a due dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			pt: "Este ataque também causa 20 pontos de dano a 2 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			de: "Diese Attacke fügt auch 2 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 20,
		cost: ["Psychic"]
	}, {
		name: {
			en: "Special Laser",
			fr: "Laser Spécial",
			es: "Láser Especial",
			it: "Laser Speciale",
			pt: "Laser Especial",
			de: "Spezial-Laser"
		},

		effect: {
			en: "If this Pokémon has any Special Energy attached, this attack does 120 more damage.",
			fr: "Si de l'Énergie spéciale est attachée à ce Pokémon, cette attaque inflige 120 dégâts supplémentaires.",
			es: "Si este Pokémon tiene alguna Energía Especial unida a él, este ataque hace 120 puntos de daño más.",
			it: "Se questo Pokémon ha delle Energie speciali assegnate, questo attacco infligge 120 danni in più.",
			pt: "Se este Pokémon tiver alguma Energia Especial ligada a ele, este ataque causará 120 pontos de dano a mais.",
			de: "Wenn an dieses Pokémon mindestens 1 Spezial-Energie angelegt ist, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "100+",
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V"
}

export default card
