import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Regigigas V",
		fr: "Regigigas V",
		es: "Regigigas V",
		it: "Regigigas V",
		pt: "Regigigas V",
		de: "Regigigas V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 240,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Hammer In",
			fr: "Enfoncement",
			es: "Martillear",
			it: "Martello",
			pt: "Martelada",
			de: "Einhämmern"
		},

		damage: 50
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Angry Whack",
			fr: "Coup Furieux",
			es: "Golpe Iracundo",
			it: "Randellata Furiosa",
			pt: "Pancadão Nervoso",
			de: "Wütender Klaps"
		},

		effect: {
			en: "This attack does 10 more damage for each damage counter on this Pokémon. This Pokémon is now Confused.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts sur ce Pokémon. Ce Pokémon est maintenant Confus.",
			es: "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon. Este Pokémon pasa a estar Confundido.",
			it: "Questo attacco infligge 10 danni in più per ogni segnalino danno presente su questo Pokémon. Questo Pokémon viene confuso.",
			pt: "Este ataque causa 10 pontos de dano a mais para cada contador de dano neste Pokémon. Este Pokémon agora está Confuso.",
			de: "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte mehr zu. Dieses Pokémon ist jetzt verwirrt."
		},

		damage: "100+"
	}],

	retreat: 4,
	regulationMark: "F"
}

export default card