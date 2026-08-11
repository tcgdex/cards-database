import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [306],

	name: {
		'en-us': "Aggron",
		'fr-fr': "Galeking",
		'es-es': "Aggron",
		'it-it': "Aggron",
		'pt-br': "Aggron",
		'de-de': "Stolloss"
	},

	illustrator: "Hasuno",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 160,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Lairon",
		'fr-fr': "Galegon",
		'es-es': "Lairon",
		'it-it': "Lairon",
		'pt-br': "Lairon",
		'de-de': "Stollrak"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Sturdy",
				'fr-fr': "Fermeté",
				'es-es': "Robustez",
				'it-it': "Vigore",
				'pt-br': "Robustez",
				'de-de': "Robustheit"
			},
			effect: {
				'en-us': "If this Pokémon has full HP and would be Knocked Out by damage from an attack, it is not Knocked Out, and its remaining HP becomes 10.",
				'fr-fr': "Si ce Pokémon a tous ses PV et doit être mis K.O. par les dégâts d'une attaque, il n'est pas mis K.O. et il lui reste 10 PV.",
				'es-es': "Si este Pokémon tiene todos sus PS y fuese a quedar Fuera de Combate por el daño de un ataque, no queda Fuera de Combate, y sus PS restantes pasan a ser 10.",
				'it-it': "Se questo Pokémon ha tutti i PS e sta per essere messo KO dai danni di un attacco, non viene messo KO e i suoi PS rimanenti diventano 10.",
				'pt-br': "Se este Pokémon tiver PS cheio e estiver prestes a ser Nocauteado pelo dano de um ataque, ele não será Nocauteado e o PS restante dele será 10.",
				'de-de': "Wenn dieses Pokémon volle KP hat und durch Schaden einer Attacke kampfunfähig würde, wird dieses Pokémon nicht kampfunfähig und seine verbleibenden KP sind gleich 10."
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
				'en-us': "Gigaton Stomp",
				'fr-fr': "Écrasement Gigatonne",
				'es-es': "Pisotón Gigatón",
				'it-it': "Pestone Gigatonico",
				'pt-br': "Pisada Gigatônica",
				'de-de': "Gigatonnen-Stampfer"
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


	stage: "Stage2",

	description: {
		'en-us': "While seeking iron for food, it digs tunnels by breaking through bedrock with its steel horns."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 483494,
				tcgplayer: 219381
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483494,
				tcgplayer: 219381
			}
		},
	],
}

export default card
