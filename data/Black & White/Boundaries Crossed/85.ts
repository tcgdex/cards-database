import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Crustle",
		fr: "Crabaraque",
		es: "Crustle",
		it: "Crustle",
		pt: "Crustle",
		de: "Castellith"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		558,
	],
	hp: 100,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Dwebble",
		fr: "Crabicoque",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Sturdy",
				fr: "Fermeté",
				es: "Robustez",
				it: "Vigore",
				pt: "Robustez",
				de: "Robustheit"
			},
			effect: {
				en: "If this Pokémon has full HP and would be Knocked Out by damage from an attack, this Pokémon is not Knocked Out and its remaining HP becomes 10 instead.",
				fr: "Si ce Pokémon a tous ses PV et doit être mis K.O. par les dégâts d’une attaque, ce Pokémon n’est pas mis K.O. mais il ne lui reste que 10 PV.",
				es: "Si este Pokémon tiene todos sus PV y fuese a quedar Fuera de Combate por el daño de un ataque, no queda Fuera de Combate y sus PV restantes pasan a ser 10.",
				it: "Se questo Pokémon ha tutti i PV e sta per essere messo K.O. dal danno di un attacco, non viene messo K.O. e i suoi PV rimanenti diventano 10.",
				pt: "Se este Pokémon possuir PS cheio e estiver prestes a ser Nocauteado por danos causados por um ataque, jogue uma moeda. Se sair cara, ele não será Nocauteado e seu PS restante se tornará 10.",
				de: "Wenn dieses Pokémon volle KP hat und durch Schaden eines Angriffs kampfunfähig würde, wird dieses Pokémon nicht kampfunfähig, sondern behält 10 KP."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Stone Edge",
				fr: "Lame de Roc",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
