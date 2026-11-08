import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [558],
	set: Set,

	name: {
		'en-us': "Crustle",
		'fr-fr': "Crabaraque",
		'de-de': "Castellith",
		'it-it': "Crustle",
		'pt-br': "Crustle",
		'es-es': "Crustle",
		'es-mx': "Crustle"
	},

	illustrator: "MINAMINAMI Take",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Dwebble",
		'fr-fr': "Crabicoque",
		'de-de': "Lithomith",
		'it-it': "Dwebble",
		'pt-br': "Dwebble",
		'es-es': "Dwebble",
		'es-mx': "Dwebble"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Sturdy",
			'fr-fr': "Fermeté",
			'de-de': "Robustheit",
			'it-it': "Vigore",
			'pt-br': "Robustez",
			'es-es': "Robustez",
			'es-mx': "Robustez"
		},

		effect: {
			'en-us': "If this Pokémon has full HP and would be Knocked Out by damage from an attack, it is not Knocked Out, and its remaining HP becomes 10.",
			'fr-fr': "Si ce Pokémon a tous ses PV et doit être mis K.O. par les dégâts d'une attaque, il n'est pas mis K.O. et il lui reste 10 PV.",
			'de-de': "Wenn dieses Pokémon volle KP hat und durch Schaden einer Attacke kampfunfähig würde, wird es nicht kampfunfähig und seine verbleibenden KP sind gleich 10.",
			'it-it': "Se questo Pokémon ha tutti i PS e sta per essere messo KO dai danni inflitti da un attacco, non viene messo KO e i suoi PS rimanenti diventano 10.",
			'pt-br': "Se este Pokémon tiver PS cheio e estiver prestes a ser Nocauteado pelo dano de um ataque, ele não será Nocauteado e o PS restante dele será 10.",
			'es-es': "Si este Pokémon tiene todos sus PS y fuese a quedar Fuera de Combate por el daño de un ataque, no queda Fuera de Combate y sus PS restantes pasan a ser 10.",
			'es-mx': "Si este Pokémon tiene todos sus PS y quedaría Fuera de Combate por el daño de un ataque, no queda Fuera de Combate y sus PS restantes ahora son 10."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Stone Edge",
			'fr-fr': "Lame de Roc",
			'de-de': "Steinkante",
			'it-it': "Pietrataglio",
			'pt-br': "Gume de Pedra",
			'es-es': "Roca Afilada",
			'es-mx': "Roca Afilada"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 60 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 60 dégâts supplémentaires.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 60 Schadenspunkte mehr zu.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 60 danni in più.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 60 pontos de dano a mais.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 60 puntos de daño más.",
			'es-mx': "Lanza 1 moneda. Si sale cara, este ataque hace 60 puntos de daño más."
		},

		damage: "80+"
	}],

	retreat: 3,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836176,
				tcgplayer: 642585
			}
		},
	]
}

export default card
