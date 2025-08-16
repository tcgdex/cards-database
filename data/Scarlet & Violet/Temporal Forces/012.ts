import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [389],
	set: Set,

	name: {
		en: "Torterra ex",
		fr: "Torterra-ex",
		es: "Torterra ex",
		it: "Torterra-ex",
		pt: "Torterra ex",
		de: "Chelterrar-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 340,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Forest March",
			fr: "Marche Sylvestre",
			es: "Marcha Forestal",
			it: "Marcia Forestale",
			pt: "Marcha Florestal",
			de: "Waldwanderung"
		},

		effect: {
			en: "This attack does 30 damage for each of your {G} Pokémon in play.",
			fr: "Cette attaque inflige 30 dégâts pour chacun de vos Pokémon {G} en jeu.",
			es: "Este ataque hace 30 puntos de daño por cada uno de tus Pokémon {G} en juego.",
			it: "Questo attacco infligge 30 danni per ogni tuo Pokémon {G} in gioco.",
			pt: "Este ataque causa 30 pontos de dano para cada um dos seus Pokémon {G} em jogo.",
			de: "Diese Attacke fügt für jedes deiner {G}-Pokémon im Spiel 30 Schadenspunkte zu."
		},

		damage: "30×"
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Jungle Hammer",
			fr: "Marteau Végétal",
			es: "Martillo Selva",
			it: "Martelgiungla",
			pt: "Martelo da Selva",
			de: "Dschungel-Hammer"
		},

		effect: {
			en: "Heal 50 damage from this Pokémon.",
			fr: "Soignez 50 dégâts de ce Pokémon.",
			es: "Cura 50 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 50 danni.",
			pt: "Cure 50 pontos de dano deste Pokémon.",
			de: "Heile 50 Schadenspunkte bei diesem Pokémon."
		},

		damage: 150
	}],

	retreat: 4,
	regulationMark: "H",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "PLANETA Tsuji",

	thirdParty: {
		cardmarket: 760642
	}
}

export default card