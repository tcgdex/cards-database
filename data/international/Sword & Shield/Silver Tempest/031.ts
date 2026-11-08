import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [726],
	set: Set,

	name: {
		'en-us': "Torracat",
		'fr-fr': "Matoufeu",
		'es-es': "Torracat",
		'it-it': "Torracat",
		'pt-br': "Torracat",
		'de-de': "Miezunder"
	},

	illustrator: "GIDORA",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Litten",
		'fr-fr': "Flamiaou",
		'es-es': "Litten",
		'it-it': "Litten",
		'pt-br': "Litten",
		'de-de': "Flamiau"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			'en-us': "Gritty Claws",
			'fr-fr': "Griffes Abrasives",
			'es-es': "Garras Firmes",
			'it-it': "Artigli Grintosi",
			'pt-br': "Garras Intrépidas",
			'de-de': "Mutige Krallen"
		},

		effect: {
			'en-us': "During your opponent's next turn, if this Pokémon has full HP and would be Knocked Out by damage from an attack, it is not Knocked Out, and its remaining HP becomes 10.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, si ce Pokémon a tous ses PV et doit être mis K.O. par les dégâts d'une attaque, il n'est pas mis K.O. et il lui reste 10 PV.",
			'es-es': "Durante el próximo turno de tu rival, si este Pokémon tiene todos sus PS y fuese a quedar Fuera de Combate por el daño de un ataque, no queda Fuera de Combate, y sus PS restantes pasan a ser 10.",
			'it-it': "Durante il prossimo turno del tuo avversario, se questo Pokémon ha tutti i PS e sta per essere messo KO dai danni di un attacco, non viene messo KO e i suoi PS rimanenti diventano 10.",
			'pt-br': "Durante o próximo turno do seu oponente, se este Pokémon tiver PS cheio e estiver prestes a ser Nocauteado pelo dano de um ataque, ele não será Nocauteado e o PS restante dele será 10.",
			'de-de': "Wenn dieses Pokémon während des nächsten Zuges deines Gegners volle KP hat und durch Schaden einer Attacke kampfunfähig würde, wird dieses Pokémon nicht kampfunfähig und seine verbleibenden KP sind gleich 10."
		},

		damage: 40
	}, {
		cost: ["Fire", "Fire", "Fire"],

		name: {
			'en-us': "Combustion",
			'fr-fr': "Fournaise",
			'es-es': "Combustión",
			'it-it': "Fuoco Continuo",
			'pt-br': "Combustão",
			'de-de': "Glühen"
		},

		damage: 70
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "When its mane is standing on end, you can tell it's feeling good. When it isn't feeling well, its fur will lie down flat.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682073,
				tcgplayer: 451662
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682073,
				tcgplayer: 451662
			}
		},
	],
}

export default card
