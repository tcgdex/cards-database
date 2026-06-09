import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [94],

	name: {
		en: "Gengar",
		fr: "Ectoplasma",
		es: "Gengar",
		'es-mx': "Gengar",
		de: "Gengar",
		it: "Gengar",
		pt: "Gengar"
	},

	illustrator: "Masako Tomii",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Infinite Shadow",
			fr: "Ombre Infinie",
			es: "Sombra Infinita",
			'es-mx': "Sombra Infinita",
			de: "Ewiger Schatten",
			it: "Ombra Infinita",
			pt: "Sombra Infinita"
		},

		effect: {
			en: "If this Pokémon is Knocked Out by damage from an attack from your opponent's Pokémon, put it into your hand instead of the discard pile. (Discard all attached cards.)",
			fr: "Si ce Pokémon est mis K.O. par les dégâts d'une attaque de l'un des Pokémon de votre adversaire, ajoutez-le à votre main plutôt que de le placer dans la pile de défausse. (Défaussez toutes les cartes attachées.)",
			es: "Si este Pokémon queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, ponlo en tu mano en vez de en la pila de descartes. (Descarta todas las cartas unidas a él).",
			'es-mx': "Si este Pokémon queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, ponlo en tu mano en lugar de en la pila de descartes. (Descarta todas las cartas unidas a él).",
			de: "Wenn dieses Pokémon durch Schaden einer Attacke von Pokémon deines Gegners kampfunfähig wird, nimm es auf deine Hand, anstatt es auf deinen Ablagestapel zu legen. (Lege alle angelegten Karten auf deinen Ablagestapel.)",
			it: "Se questo Pokémon viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, aggiungilo alle carte che hai in mano invece di metterlo nella pila degli scarti. Scarta tutte le carte assegnate.",
			pt: "Se este Pokémon for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, coloque-o na sua mão em vez da pilha de descarte. (Descarte todas as cartas ligadas a ele.)"
		}
	}],

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Mind Jack",
			fr: "Emprise Mentale",
			es: "Levantamente",
			'es-mx': "Embargo Mental",
			de: "Gedankenstoß",
			it: "Sollevamente",
			pt: "Tomada Mental"
		},

		effect: {
			en: "This attack does 30 more damage for each of your opponent's Benched Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chacun des Pokémon de Banc de votre adversaire.",
			es: "Este ataque hace 30 puntos de daño más por cada uno de los Pokémon en Banca de tu rival.",
			'es-mx': "Este ataque hace 30 puntos de daño más por cada uno de los Pokémon en Banca de tu rival.",
			de: "Diese Attacke fügt für jedes Pokémon auf der Bank deines Gegners 30 Schadenspunkte mehr zu.",
			it: "Questo attacco infligge 30 danni in più per ogni Pokémon nella panchina del tuo avversario.",
			pt: "Este ataque causa 30 pontos de dano a mais para cada Pokémon no Banco do seu oponente."
		},

		damage: "10+"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		tcgplayer: 684431,
		cardmarket: 877465
	}
}

export default card
