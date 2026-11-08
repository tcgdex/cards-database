import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [297],
	set: Set,

	name: {
		'en-us': "Hariyama",
		'fr-fr': "Hariyama",
		'es-es': "Hariyama",
		'it-it': "Hariyama",
		'pt-br': "Hariyama",
		'de-de': "Hariyama"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Makuhita",
		'fr-fr': "Makuhita",
		'es-es': "Makuhita",
		'it-it': "Makuhita",
		'pt-br': "Makuhita",
		'de-de': "Makuhita"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "E",
	illustrator: "Hitoshi Ariga",

	description: {
		'en-us': "Hariyama that are big and fat aren't necessarily strong. There are some small ones that move nimbly and use moves skillfully."
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Guts",
			'fr-fr': "Cran",
			'de-de': "Adrenalin",
			'es-es': "Agallas",
			'pt-br': "Tenacidade",
			'it-it': "Dentistretti"
		},

		effect: {
			'en-us': "If this Pokémon would be Knocked Out by damage from an attack, flip a coin. If heads, this Pokémon is not Knocked Out, and its remaining HP becomes 10.",
			'fr-fr': "Si les dégâts d'une attaque peuvent mettre ce Pokémon K.O., lancez une pièce. Si c'est face, ce Pokémon n'est pas mis K.O., mais il n'a plus que 10 PV.",
			'de-de': "Wenn dieses Pokémon durch Schaden einer Attacke kampfunfähig würde, wirf 1 Münze. Bei Kopf wird dieses Pokémon nicht kampfunfähig und seine verbleibenden KP sind gleich 10.",
			'es-es': "Si este Pokémon fuese a quedar Fuera de Combate por el daño de un ataque, lanza 1 moneda. Si sale cara, este Pokémon no queda Fuera de Combate, y sus PS restantes pasan a ser 10.",
			'pt-br': "Jogue 1 moeda se este Pokémon estiver prestes a ser Nocauteado pelo dano de um ataque. Se sair cara, este Pokémon não será Nocauteado e o PS restante dele será 10.",
			'it-it': "Se questo Pokémon sta per essere messo KO dai danni di un attacco, lancia una moneta. Se esce testa, il Pokémon non viene messo KO e i suoi PS rimanenti diventano 10."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Hammer In",
			'fr-fr': "Enfoncement",
			'de-de': "Einhämmern",
			'es-es': "Martillear",
			'pt-br': "Martelada",
			'it-it': "Martello"
		},

		damage: 100
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582766,
				tcgplayer: 253355
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582766,
				tcgplayer: 253355
			}
		},
	],
}

export default card
