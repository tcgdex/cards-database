import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Darkrai ex",
		fr: "Méga-Darkrai-ex",
		es: "Mega-Darkrai ex",
		'es-mx': "Mega-Darkrai ex",
		de: "Mega-Darkrai-ex",
		it: "Mega Darkrai-ex",
		pt: "Mega Darkrai ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Mega Hyper Rare",
	category: "Pokemon",
	dexId: [491],
	hp: 280,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Dusk Raid",
			fr: "Raid Crépusculaire",
			es: "Incursión Crepuscular",
			'es-mx': "Redada Crepuscular",
			de: "Finsterer Überfall",
			it: "Raid Notturno",
			pt: "Investida Noturna"
		},

		cost: ["Darkness", "Darkness"],

		damage: "110+",

		effect: {
			en: "If your Benched Pokémon have any damage counters on them, this attack does 110 more damage.",
			fr: "Si au moins un marqueur de dégâts est placé sur vos Pokémon de Banc, cette attaque inflige 110 dégâts supplémentaires.",
			es: "Si tus Pokémon en Banca tienen algún contador de daño sobre ellos, este ataque hace 110 puntos de daño más.",
			'es-mx': "Si tus Pokémon en Banca tienen algún contador de daño sobre ellos, este ataque hace 110 puntos de daño más.",
			de: "Wenn auf den Pokémon auf deiner Bank mindestens 1 Schadensmarke liegt, fügt diese Attacke 110 Schadenspunkte mehr zu.",
			it: "Se i Pokémon nella tua panchina hanno dei segnalini danno, questo attacco infligge 110 danni in più.",
			pt: "Se os seus Pokémon no Banco tiverem algum contador de dano neles, este ataque causará 110 pontos de dano a mais."
		}
	}, {
		name: {
			en: "Abyss Eye",
			fr: "Œil Abyssal",
			es: "Ojo Abismal",
			'es-mx': "Ojo Abismal",
			de: "Abgrundauge",
			it: "Occhio dell'Abisso",
			pt: "Olhar Abissal"
		},

		cost: ["Darkness", "Darkness", "Darkness"],

		effect: {
			en: "If your opponent's Active Pokémon is affected by a Special Condition, it is Knocked Out.",
			fr: "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, il est mis K.O.",
			es: "Si el Pokémon Activo de tu rival se ve afectado por una Condición Especial, queda Fuera de Combate.",
			'es-mx': "Si el Pokémon Activo de tu rival se ve afectado por una Condición Especial, queda Fuera de Combate.",
			de: "Wenn das Aktive Pokémon deines Gegners von einem Speziellen Zustand betroffen ist, ist es kampfunfähig.",
			it: "Se il Pokémon attivo del tuo avversario è influenzato da una condizione speciale, viene messo KO.",
			pt: "Se o Pokémon Ativo do seu oponente estiver afetado por uma Condição Especial, ele será Nocauteado."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895905,
				tcgplayer: 704877
			}
		},
	],
}

export default card
