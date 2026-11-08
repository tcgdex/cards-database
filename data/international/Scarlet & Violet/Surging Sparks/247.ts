import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		'en-us': "Pikachu ex",
		'fr-fr': "Pikachu-ex",
		'es-es': "Pikachu ex",
		'it-it': "Pikachu-ex",
		'pt-br': "Pikachu ex",
		'de-de': "Pikachu-ex"
	},

	rarity: "Hyper rare",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Resolute Heart",
			'fr-fr': "Cœur Résolu",
			'es-es': "Corazón Resuelto",
			'it-it': "Cuore Risoluto",
			'pt-br': "Coração Obstinado",
			'de-de': "Resolutes Herz"
		},

		effect: {
			'en-us': "If this Pokémon has full HP and would be Knocked Out by damage from an attack, it is not Knocked Out, and its remaining HP becomes 10.",
			'fr-fr': "Si ce Pokémon a tous ses PV et doit être mis K.O. par les dégâts d'une attaque, il n'est pas mis K.O. et il lui reste 10 PV.",
			'es-es': "Si este Pokémon tiene todos sus PS y fuese a quedar Fuera de Combate por el daño de un ataque, no queda Fuera de Combate y sus PS restantes pasan a ser 10.",
			'it-it': "Se questo Pokémon ha tutti i PS e sta per essere messo KO dai danni inflitti da un attacco, non viene messo KO e i suoi PS rimanenti diventano 10.",
			'pt-br': "Se este Pokémon tiver PS cheio e estiver prestes a ser Nocauteado pelo dano de um ataque, ele não será Nocauteado e o PS restante dele será 10.",
			'de-de': "Wenn dieses Pokémon volle KP hat und durch Schaden einer Attacke kampfunfähig würde, wird es nicht kampfunfähig und seine verbleibenden KP sind gleich 10."
		}
	}],

	attacks: [{
		cost: ["Grass", "Lightning", "Metal"],

		name: {
			'en-us': "Topaz Bolt",
			'fr-fr': "Éclair Topaze",
			'es-es': "Rayo Topacio",
			'it-it': "Fulmine di Topazio",
			'pt-br': "Raio Topázio",
			'de-de': "Topas-Blitz"
		},

		effect: {
			'en-us': "Discard 3 Energy from this Pokémon.",
			'fr-fr': "Défaussez 3 Énergies de ce Pokémon.",
			'es-es': "Descarta 3 Energías de este Pokémon.",
			'it-it': "Scarta tre Energie da questo Pokémon.",
			'pt-br': "Descarte 3 Energias deste Pokémon.",
			'de-de': "Lege 3 Energien von diesem Pokémon auf deinen Ablagestapel."
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
			foil: "gold",
			thirdParty: {
				cardmarket: 794621,
				tcgplayer: 593169
			}
		},
	],

	suffix: "ex",
	illustrator: "aky CG Works",

}

export default card
