import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [533],
	set: Set,

	name: {
		en: "Gurdurr",
		fr: "Ouvrifier",
		es: "Gurdurr",
		it: "Gurdurr",
		pt: "Gurdurr",
		de: "Strepoli"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Knuckle Punch",
			fr: "Coud'Phalange",
			es: "Puño con Nudillos",
			it: "Noccapugno",
			pt: "Soco com Punho",
			de: "Knöchelhieb"
		},

		damage: 20
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Superpower",
			fr: "Surpuissance",
			es: "Fuerza Bruta",
			it: "Troppoforte",
			pt: "Superpoder",
			de: "Kraftkoloss"
		},

		effect: {
			en: "You may do 30 more damage. If you do, this Pokémon also does 30 damage to itself.",
			fr: "Vous pouvez infliger 30 dégâts supplémentaires. Dans ce cas, ce Pokémon s'inflige aussi 30 dégâts.",
			es: "Puedes hacer 30 puntos de daño más. Si lo haces, este Pokémon también se hace 30 puntos de daño a sí mismo.",
			it: "Puoi infliggere 30 danni in più. Se lo fai, questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Você pode causar 30 pontos de dano a mais. Se fizer isto, este Pokémon também causará 30 pontos de dano a si mesmo.",
			de: "Du kannst 30 Schadenspunkte mehr zufügen. Wenn du das machst, fügt dieses Pokémon auch sich selbst 30 Schadenspunkte zu."
		},

		damage: "50+"
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Aya Kusube"
}

export default card