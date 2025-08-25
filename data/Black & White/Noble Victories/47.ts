import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Cofagrigus",
		fr: "Tutankafer",
		es: "Cofagrigus",
		it: "Cofagrigus",
		pt: "Cofagrigus",
		de: "Echnatoll"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		563,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Yamask",
		fr: "Tutafeh",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Durable Body",
				fr: "Corps Solide",
				es: "Cuerpo Resistente",
				it: "Duracorpo",
				pt: "Corpo Durável",
				de: "Durchhalten"
			},
			effect: {
				en: "If this Pokémon would be Knocked Out by damage from an attack, flip a coin. If heads, this Pokémon is not Knocked Out and its remaining HP becomes 10 instead.",
				fr: "Si ce Pokémon doit être mis K.O. par les dégâts d’une attaque, lancez une pièce. Si c’est face, ce Pokémon n’est pas mis K.O. mais il ne lui reste que 10 PV.",
				es: "Si este Pokémon fuese a quedar Fuera de Combate por el daño de un ataque, lanza una moneda. Si sale cara, este Pokémon no queda Fuera de Combate, y sus PV restantes pasan a ser 10.",
				it: "Se questo Pokémon sta per essere messo K.O. dal danno di un attacco, lancia una moneta. Se esce testa, il Pokémon non viene messo K.O. e i suoi PV rimanenti diventano 10.",
				pt: "Se este Pokémon for Nocauteado por danos causados por um ataque, jogue uma moeda. Se sair cara, ele não será Nocauteado e seu PS restante se tornará 10.",
				de: "Wirf 1 Münze, wenn dieses Pokémon durch Angriffsschaden kampfunfähig würde. Bei „Kopf“ ist dieses Pokémon nicht kampfunfähig, sondern behält 10 KP."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Ambush",
				fr: "Embuscade",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 280169,
		tcgplayer: 84385
	}
}

export default card
