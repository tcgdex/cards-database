import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu ex",
		fr: "Pikachu-ex",
		es: "Pikachu ex",
		'es-mx': "Pikachu ex",
		de: "Pikachu-ex",
		it: "Pikachu-ex",
		pt: "Pikachu ex"
	},

	illustrator: "James Turner",
	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",
	dexId: [25],

	abilities: [{
		type: "Ability",

		name: {
			en: "Resolute Heart",
			fr: "Cœur Résolu",
			es: "Corazón Resuelto",
			'es-mx': "Corazón Resuelto",
			de: "Resolutes Herz",
			it: "Cuore Risoluto",
			pt: "Coração Obstinado"
		},

		effect: {
			en: "If this Pokémon has full HP and would be Knocked Out by damage from an attack, it is not Knocked Out, and its remaining HP becomes 10.",
			fr: "Si ce Pokémon a tous ses PV et doit être mis K.O. par les dégâts d'une attaque, il n'est pas mis K.O. et il lui reste 10 PV.",
			es: "Si este Pokémon tiene todos sus PS y fuese a quedar Fuera de Combate por el daño de un ataque, no queda Fuera de Combate y sus PS restantes pasan a ser 10.",
			'es-mx': "Si este Pokémon tiene todos sus PS y quedaría Fuera de Combate por el daño de un ataque, no queda Fuera de Combate y ahora le quedan 10 PS.",
			de: "Wenn dieses Pokémon volle KP hat und durch Schaden einer Attacke kampfunfähig würde, wird es nicht kampfunfähig und seine verbleibenden KP sind gleich 10.",
			it: "Se questo Pokémon ha tutti i PS e sta per essere messo KO dai danni inflitti da un attacco, non viene messo KO e i suoi PS rimanenti diventano 10.",
			pt: "Se este Pokémon tiver PS cheio e estiver prestes a ser Nocauteado pelo dano de um ataque, ele não será Nocauteado e o PS restante dele será 10."
		}
	}],

	attacks: [{
		cost: ["Grass", "Lightning", "Metal"],

		name: {
			en: "Topaz Bolt",
			fr: "Éclair Topaze",
			es: "Rayo Topacio",
			'es-mx': "Rayo Topacio",
			de: "Topas-Blitz",
			it: "Fulmine di Topazio",
			pt: "Raio Topázio"
		},

		effect: {
			en: "Discard 3 Energy from this Pokémon.",
			fr: "Défaussez 3 Énergies de ce Pokémon.",
			es: "Descarta 3 Energías de este Pokémon.",
			'es-mx': "Descarta 3 Energías de este Pokémon.",
			de: "Lege 3 Energien von diesem Pokémon auf deinen Ablagestapel.",
			it: "Scarta tre Energie da questo Pokémon.",
			pt: "Descarte 3 Energias deste Pokémon."
		},

		damage: 300
	}],

	retreat: 1,
	regulationMark: "H",

	thirdParty: {
		tcgplayer: 676089,
		cardmarket: 869887
	}
}

export default card
