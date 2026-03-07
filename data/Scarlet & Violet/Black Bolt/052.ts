import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [558],
	set: Set,

	name: {
		en: "Crustle",
		fr: "Crabaraque",
		de: "Castellith",
		it: "Crustle",
		pt: "Crustle",
		es: "Crustle",
		'es-mx': "Crustle"
	},

	illustrator: "Tetsu Kayama",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],
	evolveFrom: {
		en: "Dwebble",
		fr: "Crabicoque",
		de: "Lithomith",
		it: "Dwebble",
		pt: "Dwebble",
		es: "Dwebble",
		'es-mx': "Dwebble"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Sturdy",
			fr: "Fermeté",
			de: "Robustheit",
			it: "Vigore",
			pt: "Robustez",
			es: "Robustez",
			'es-mx': "Robustez"
		},

		effect: {
			en: "If this Pokémon has full HP and would be Knocked Out by damage from an attack, it is not Knocked Out, and its remaining HP becomes 10.",
			fr: "Si ce Pokémon a tous ses PV et doit être mis K.O. par les dégâts d'une attaque, il n'est pas mis K.O. et il lui reste 10 PV.",
			de: "Wenn dieses Pokémon volle KP hat und durch Schaden einer Attacke kampfunfähig würde, wird es nicht kampfunfähig und seine verbleibenden KP sind gleich 10.",
			it: "Se questo Pokémon ha tutti i PS e sta per essere messo KO dai danni inflitti da un attacco, non viene messo KO e i suoi PS rimanenti diventano 10.",
			pt: "Se este Pokémon tiver PS cheio e estiver prestes a ser Nocauteado pelo dano de um ataque, ele não será Nocauteado e o PS restante dele será 10.",
			es: "Si este Pokémon tiene todos sus PS y fuese a quedar Fuera de Combate por el daño de un ataque, no queda Fuera de Combate y sus PS restantes pasan a ser 10.",
			'es-mx': "Si este Pokémon tiene todos sus PS y quedaría Fuera de Combate por el daño de un ataque, no queda Fuera de Combate y sus PS restantes ahora son 10."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Stone Edge",
			fr: "Lame de Roc",
			de: "Steinkante",
			it: "Pietrataglio",
			pt: "Gume de Pedra",
			es: "Roca Afilada",
			'es-mx': "Roca Afilada"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 60 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 60 dégâts supplémentaires.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 60 Schadenspunkte mehr zu.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 60 danni in più.",
			pt: "Jogue uma moeda. Se sair cara, este ataque causará 60 pontos de dano a mais.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 60 puntos de daño más.",
			'es-mx': "Lanza 1 moneda. Si sale cara, este ataque hace 60 puntos de daño más."
		},

		damage: "80+"
	}],

	retreat: 3,
	regulationMark: "I",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 836013
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 836013
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836385
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836384
			}
		}
	]
}

export default card
