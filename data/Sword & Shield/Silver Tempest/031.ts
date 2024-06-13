import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [726],
	set: Set,

	name: {
		en: "Torracat",
		fr: "Matoufeu",
		es: "Torracat",
		it: "Torracat",
		pt: "Torracat",
		de: "Miezunder"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	evolveFrom: {
		en: "Litten",
		fr: "Flamiaou",
		es: "Litten",
		it: "Litten",
		pt: "Litten",
		de: "Flamiau"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			en: "Gritty Claws",
			fr: "Griffes Abrasives",
			es: "Garras Firmes",
			it: "Artigli Grintosi",
			pt: "Garras Intrépidas",
			de: "Mutige Krallen"
		},

		effect: {
			en: "During your opponent's next turn, if this Pokémon has full HP and would be Knocked Out by damage from an attack, it is not Knocked Out, and its remaining HP becomes 10.",
			fr: "Pendant le prochain tour de votre adversaire, si ce Pokémon a tous ses PV et doit être mis K.O. par les dégâts d'une attaque, il n'est pas mis K.O. et il lui reste 10 PV.",
			es: "Durante el próximo turno de tu rival, si este Pokémon tiene todos sus PS y fuese a quedar Fuera de Combate por el daño de un ataque, no queda Fuera de Combate, y sus PS restantes pasan a ser 10.",
			it: "Durante il prossimo turno del tuo avversario, se questo Pokémon ha tutti i PS e sta per essere messo KO dai danni di un attacco, non viene messo KO e i suoi PS rimanenti diventano 10.",
			pt: "Durante o próximo turno do seu oponente, se este Pokémon tiver PS cheio e estiver prestes a ser Nocauteado pelo dano de um ataque, ele não será Nocauteado e o PS restante dele será 10.",
			de: "Wenn dieses Pokémon während des nächsten Zuges deines Gegners volle KP hat und durch Schaden einer Attacke kampfunfähig würde, wird dieses Pokémon nicht kampfunfähig und seine verbleibenden KP sind gleich 10."
		},

		damage: 40
	}, {
		cost: ["Fire", "Fire", "Fire"],

		name: {
			en: "Combustion",
			fr: "Fournaise",
			es: "Combustión",
			it: "Fuoco Continuo",
			pt: "Combustão",
			de: "Glühen"
		},

		damage: 70
	}],

	retreat: 2,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card