import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Gengar ex",
		fr: "Ectoplasma-ex",
		de: "Gengar-ex",
		es: "Gengar ex",
		it: "Gengar-ex",
		'es-mx': "Gengar ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [94],
	hp: 280,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Fainting Spell",
			fr: "Sort d'Évanouissement",
			de: "Ohnmachtsanfall",
			es: "Hechizo Desmayo",
			it: "Esaustoformula",
			'es-mx': "Hechizo Desvanecedor"
		},

		effect: {
			en: "If this Pokémon is Knocked Out by damage from an attack from your opponent's Pokémon, flip a coin. If heads, the Attacking Pokémon is Knocked Out.",
			fr: "Si ce Pokémon est mis K.O. par les dégâts d'une attaque de l'un des Pokémon de votre adversaire, lancez une pièce. Si c'est face, le Pokémon Attaquant est mis K.O.",
			de: "Wenn dieses Pokémon durch Schaden einer Attacke von Pokémon deines Gegners kampfunfähig wird, wirf 1 Münze. Bei Kopf ist das Angreifende Pokémon kampfunfähig.",
			es: "Si este Pokémon queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, lanza 1 moneda. Si sale cara, el Pokémon Atacante queda Fuera de Combate.",
			it: "Se questo Pokémon viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, lancia una moneta. Se esce testa, il Pokémon attaccante viene messo KO.",
			'es-mx': "Si este Pokémon queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, lanza 1 moneda. Si sale cara, el Pokémon Atacante queda Fuera de Combate."
		}
	}],

	attacks: [{
		name: {
			en: "Chaotic Pain",
			fr: "Douleur Chaotique",
			de: "Chaosschmerz",
			es: "Daño Caótico",
			it: "Caos Funesto",
			'es-mx': "Daño Caótico"
		},

		effect: {
			en: "Place 13 damage counters on 1 of your opponent's Pokémon.",
			fr: "Placez 13 marqueurs de dégâts sur l'un des Pokémon de votre adversaire.",
			de: "Lege 13 Schadensmarken auf 1 Pokémon deines Gegners.",
			es: "Pon 13 contadores de daño en uno de los Pokémon de tu rival.",
			it: "Metti 13 segnalini danno su uno dei Pokémon del tuo avversario.",
			'es-mx': "Pon 13 contadores de daño en 1 de los Pokémon de tu rival."
		},

		cost: ["Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",
	variants: [
		{
			type: "holo",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907697,
				tcgplayer: 716485
			}
		}
	],
}

export default card
