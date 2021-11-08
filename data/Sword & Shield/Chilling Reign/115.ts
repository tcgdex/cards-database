import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Tauros",
		fr: "Tauros",
		es: "Tauros",
		it: "Tauros",
		pt: "Tauros",
		de: "Tauros"
	},

	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	attacks: [{
		name: {
			en: "Raging Bull",
			fr: "Taureau Furieux",
			es: "Toro Embravecido",
			it: "Toro Furioso",
			pt: "Touro Indomável",
			de: "Rasender Stier"
		},

		effect: {
			en: "This attack does 20 more damage for each damage counter on this Pokémon. This Pokémon is now Confused.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque marqueur de dégâts sur ce Pokémon. Ce Pokémon est maintenant Confus.",
			es: "Este ataque hace 20 puntos de daño más por cada contador de daño en este Pokémon. Este Pokémon pasa a estar Confundido.",
			it: "Questo attacco infligge 20 danni in più per ogni segnalino danno presente su questo Pokémon. Questo Pokémon viene confuso.",
			pt: "Este ataque causa 20 pontos de dano a mais para cada contador de dano neste Pokémon. Este Pokémon agora está Confuso.",
			de: "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 20 Schadenspunkte mehr zu. Dieses Pokémon ist jetzt verwirrt."
		},

		damage: "20+",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Take Down",
			fr: "Bélier",
			es: "Derribo",
			it: "Riduttore",
			pt: "Desmantelar",
			de: "Bodycheck"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 80,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "They live in groups. The one with the longest, thickest, and most-scarred horns is the boss of the herd."
	}
}

export default card
