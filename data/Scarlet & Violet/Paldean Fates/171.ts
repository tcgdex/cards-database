import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Annihilape",
		fr: "Courrousinge",
		es: "Annihilape",
		it: "Annihilape",
		pt: "Annihilape",
		de: "Epitaff"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Rage Fist",
			fr: "Poing de Colère",
			es: "Puño Furia",
			it: "Pugno Furibondo",
			pt: "Punho Feroz",
			de: "Zornesfaust"
		},

		effect: {
			en: "This attack does 70 damage for each Prize card your opponent has taken.",
			fr: "Cette attaque inflige 70 dégâts pour chaque carte Récompense que votre adversaire a récupérée.",
			es: "Este ataque hace 70 puntos de daño por cada carta de Premio que haya cogido tu rival.",
			it: "Questo attacco infligge 70 danni per ogni carta Premio presa dal tuo avversario.",
			pt: "Este ataque causa 70 pontos de dano para cada carta de Prêmio que seu oponente pegou.",
			de: "Diese Attacke fügt für jede von deinem Gegner genommene Preiskarte 70 Schadenspunkte zu."
		},

		damage: "70×"
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Dynamite Punch",
			fr: "Poing Dynamite",
			es: "Puño Dinamita",
			it: "Pugno Dinamite",
			pt: "Soco Dinamite",
			de: "Dynamitstoß"
		},

		effect: {
			en: "This Pokémon also does 50 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 50 dégâts.",
			es: "Este Pokémon también se hace 50 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 50 danni a se stesso.",
			pt: "Este Pokémon também causa 50 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 50 Schadenspunkte zu."
		},

		damage: 170
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Hitoshi Ariga"
}

export default card