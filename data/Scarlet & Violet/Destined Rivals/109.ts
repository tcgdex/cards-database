import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Annihilape",
		fr: "Courrousinge",
		de: "Epitaff",
		it: "Annihilape",
		es: "Annihilape",
		pt: "Annihilape"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Rage Fist",
			fr: "Poing de Colère",
			de: "Zornesfaust",
			it: "Pugno Furibondo",
			es: "Puño Furia",
			pt: "Punho Feroz"
		},

		effect: {
			en: "This attack does 70 damage for each Prize card your opponent has taken.",
			fr: "Cette attaque inflige 70 dégâts pour chaque carte Récompense que votre adversaire a récupérée.",
			de: "Diese Attacke fügt für jede von deinem Gegner genommene Preiskarte 70 Schadenspunkte zu.",
			it: "Questo attacco infligge 70 danni per ogni carta Premio presa dal tuo avversario.",
			es: "Este ataque hace 70 puntos de daño por cada carta de Premio que haya cogido tu rival.",
			pt: "Este ataque causa 70 pontos de dano para cada carta de Prêmio que seu oponente pegou."
		},

		damage: "70×"
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Dynamite Punch",
			fr: "Poing Dynamite",
			de: "Dynamitstoß",
			it: "Pugno Dinamite",
			es: "Puño Dinamita",
			pt: "Soco Dinamite"
		},

		effect: {
			en: "This Pokémon also does 50 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 50 dégâts.",
			de: "Dieses Pokémon fügt auch sich selbst 50 Schadenspunkte zu.",
			it: "Questo Pokémon infligge anche 50 danni a se stesso.",
			es: "Este Pokémon también se hace 50 puntos de daño a sí mismo.",
			pt: "Este Pokémon também causa 50 pontos de dano a si mesmo."
		},

		damage: 170
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card