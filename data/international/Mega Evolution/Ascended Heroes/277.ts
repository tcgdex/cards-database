import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pikachu ex",
		'fr-fr': "Pikachu-ex",
		'es-es': "Pikachu ex",
		'es-mx': "Pikachu ex",
		'de-de': "Pikachu-ex",
		'it-it': "Pikachu-ex",
		'pt-br': "Pikachu ex"
	},

	suffix: "ex",
	illustrator: "James Turner",
	rarity: "Special illustration rare",
	category: "Pokemon",
	dexId: [25],
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Resolute Heart",
			'fr-fr': "Cœur Résolu",
			'es-es': "Corazón Resuelto",
			'es-mx': "Corazón Resuelto",
			'de-de': "Resolutes Herz",
			'it-it': "Cuore Risoluto",
			'pt-br': "Coração Obstinado"
		},

		effect: {
			'en-us': "If this Pokémon has full HP and would be Knocked Out by damage from an attack, it is not Knocked Out, and its remaining HP becomes 10.",
			'fr-fr': "Si ce Pokémon a tous ses PV et doit être mis K.O. par les dégâts d'une attaque, il n'est pas mis K.O. et il lui reste 10 PV.",
			'es-es': "Si este Pokémon tiene todos sus PS y fuese a quedar Fuera de Combate por el daño de un ataque, no queda Fuera de Combate y sus PS restantes pasan a ser 10.",
			'es-mx': "Si este Pokémon tiene todos sus PS y quedaría Fuera de Combate por el daño de un ataque, no queda Fuera de Combate y ahora le quedan 10 PS.",
			'de-de': "Wenn dieses Pokémon volle KP hat und durch Schaden einer Attacke kampfunfähig würde, wird es nicht kampfunfähig und seine verbleibenden KP sind gleich 10.",
			'it-it': "Se questo Pokémon ha tutti i PS e sta per essere messo KO dai danni inflitti da un attacco, non viene messo KO e i suoi PS rimanenti diventano 10.",
			'pt-br': "Se este Pokémon tiver PS cheio e estiver prestes a ser Nocauteado pelo dano de um ataque, ele não será Nocauteado e o PS restante dele será 10."
		}
	}],

	attacks: [{
		cost: ["Grass", "Lightning", "Metal"],

		name: {
			'en-us': "Topaz Bolt",
			'fr-fr': "Éclair Topaze",
			'es-es': "Rayo Topacio",
			'es-mx': "Rayo Topacio",
			'de-de': "Topas-Blitz",
			'it-it': "Fulmine di Topazio",
			'pt-br': "Raio Topázio"
		},

		effect: {
			'en-us': "Discard 3 Energy from this Pokémon.",
			'fr-fr': "Défaussez 3 Énergies de ce Pokémon.",
			'es-es': "Descarta 3 Energías de este Pokémon.",
			'es-mx': "Descarta 3 Energías de este Pokémon.",
			'de-de': "Lege 3 Energien von diesem Pokémon auf deinen Ablagestapel.",
			'it-it': "Scarta tre Energie da questo Pokémon.",
			'pt-br': "Descarte 3 Energias deste Pokémon."
		},

		damage: 300
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869887,
				tcgplayer: 676089
			}
		}
	],
}

export default card
