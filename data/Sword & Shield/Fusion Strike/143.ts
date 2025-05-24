import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [297],
	set: Set,

	name: {
		en: "Hariyama",
		fr: "Hariyama",
		es: "Hariyama",
		it: "Hariyama",
		pt: "Hariyama",
		de: "Hariyama"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	evolveFrom: {
		en: "Makuhita",
		fr: "Makuhita",
		es: "Makuhita",
		it: "Makuhita",
		pt: "Makuhita",
		de: "Makuhita"
	},

	stage: "Stage1",
	retreat: 4,
	regulationMark: "E",
	illustrator: "Hitoshi Ariga",

	description: {
		en: "Hariyama that are big and fat aren't necessarily strong. There are some small ones that move nimbly and use moves skillfully."
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Guts",
			fr: "Cran",
			de: "Adrenalin",
			es: "Agallas",
			pt: "Tenacidade",
			it: "Dentistretti"
		},

		effect: {
			en: "If this Pokémon would be Knocked Out by damage from an attack, flip a coin. If heads, this Pokémon is not Knocked Out, and its remaining HP becomes 10.",
			fr: "Si les dégâts d'une attaque peuvent mettre ce Pokémon K.O., lancez une pièce. Si c'est face, ce Pokémon n'est pas mis K.O., mais il n'a plus que 10 PV.",
			de: "Wenn dieses Pokémon durch Schaden einer Attacke kampfunfähig würde, wirf 1 Münze. Bei Kopf wird dieses Pokémon nicht kampfunfähig und seine verbleibenden KP sind gleich 10.",
			es: "Si este Pokémon fuese a quedar Fuera de Combate por el daño de un ataque, lanza 1 moneda. Si sale cara, este Pokémon no queda Fuera de Combate, y sus PS restantes pasan a ser 10.",
			pt: "Jogue 1 moeda se este Pokémon estiver prestes a ser Nocauteado pelo dano de um ataque. Se sair cara, este Pokémon não será Nocauteado e o PS restante dele será 10.",
			it: "Se questo Pokémon sta per essere messo KO dai danni di un attacco, lancia una moneta. Se esce testa, il Pokémon non viene messo KO e i suoi PS rimanenti diventano 10."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Hammer In",
			fr: "Enfoncement",
			de: "Einhämmern",
			es: "Martillear",
			pt: "Martelada",
			it: "Martello"
		},

		damage: 100
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card