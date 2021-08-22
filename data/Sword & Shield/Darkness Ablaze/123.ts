import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Aggron",
		fr: "Galeking",
		es: "Aggron",
		it: "Aggron",
		pt: "Aggron",
		de: "Stolloss"
	},

	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 160,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Lairon",
		fr: "Galegon"
	},

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
				en: "If this Pokémon has full HP and would be Knocked Out by damage from an attack, it is not Knocked Out, and its remaining HP becomes 10.",
				fr: "Si ce Pokémon a tous ses PV et doit être mis K.O. par les dégâts d’une attaque, il n’est pas mis K.O. et il lui reste 10 PV.",
				es: "Si este Pokémon tiene todos sus PS y fuese a quedar Fuera de Combate por el daño de un ataque, no queda Fuera de Combate, y sus PS restantes pasan a ser 10.",
				it: "Se questo Pokémon ha tutti i PS e sta per essere messo KO dai danni di un attacco, non viene messo KO e i suoi PS rimanenti diventano 10.",
				pt: "Se este Pokémon tiver PS cheio e estiver prestes a ser Nocauteado pelo dano de um ataque, ele não será Nocauteado e o PS restante dele será 10.",
				de: "Wenn dieses Pokémon volle KP hat und durch Schaden einer Attacke kampfunfähig würde, wird dieses Pokémon nicht kampfunfähig und seine verbleibenden KP sind gleich 10."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gigaton Stomp",
				fr: "Écrasement Gigatonne",
				es: "Pisotón Gigatón",
				it: "Pestone Gigatonico",
				pt: "Pisada Gigatônica",
				de: "Gigatonnen-Stampfer"
			},

			damage: 160,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		en: "While seeking iron for food, it digs tunnels by breaking through bedrock with its steel horns."
	}
}

export default card
