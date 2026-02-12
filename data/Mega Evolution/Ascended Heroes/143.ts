import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Pecharunt",
		fr: "Pêchaminus",
		es: "Pecharunt",
		'es-mx': "Pecharunt",
		de: "Infamomo",
		it: "Pecharunt",
		pt: "Pecharunt"
	},

	illustrator: "IKEDA Saki",
	rarity: "Rare",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Final Chain",
			fr: "Dernière Chaîne",
			es: "Última Cadena",
			'es-mx': "Última Cadena",
			de: "Letzte Kette",
			it: "Ultima Catena",
			pt: "Corrente Final"
		},

		effect: {
			en: "If this Pokémon is Knocked Out by damage from an attack from your opponent's Pokémon, search your deck for a card and put it into your hand. Then, shuffle your deck.",
			fr: "Si ce Pokémon est mis K.O. par les dégâts d'une attaque de l'un des Pokémon de votre adversaire, cherchez dans votre deck une carte, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			es: "Si este Pokémon queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, busca en tu baraja 1 carta y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			'es-mx': "Si este Pokémon queda Fuera de Combate por el daño de un ataque de los Pokémon de tu rival, busca en tu mazo 1 carta y ponla en tu mano. Después, baraja tu mazo.",
			de: "Wenn dieses Pokémon durch Schaden einer Attacke von Pokémon deines Gegners kampfunfähig wird, durchsuche dein Deck nach 1 Karte und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			it: "Se questo Pokémon viene messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario, cerca nel tuo mazzo una carta e aggiungila a quelle che hai in mano. Poi rimischia il tuo mazzo.",
			pt: "Se este Pokémon for Nocauteado pelo dano de um ataque dos Pokémon do seu oponente, procure por uma carta no seu baralho e coloque-a na sua mão. Em seguida, embaralhe o seu baralho."
		}
	}],

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Mochi Rush",
			fr: "Ruée Mochi",
			es: "Embestida de Mochis",
			'es-mx': "Asalto Mochi",
			de: "Mochi-Offensive",
			it: "Raffica di Mochi",
			pt: "Moti aos Montes"
		},

		effect: {
			en: "During your next turn, this Pokémon's Mochi Rush attack does 50 more damage (before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, l'attaque Ruée Mochi de ce Pokémon inflige 50 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			es: "Durante tu próximo turno, el ataque Embestida de Mochis de este Pokémon hace 50 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
			'es-mx': "Durante tu próximo turno, el ataque Asalto Mochi de este Pokémon hace 50 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
			de: "Während deines nächsten Zuges fügt die Attacke Mochi-Offensive dieses Pokémon 50 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden).",
			it: "Durante il tuo prossimo turno, l'attacco Raffica di Mochi di questo Pokémon infligge 50 danni in più, prima di aver applicato debolezza e resistenza.",
			pt: "Durante o seu próximo turno, o ataque Moti aos Montes deste Pokémon causará 50 pontos de dano a mais (antes de aplicar Fraqueza e Resistência)."
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675955,
		cardmarket: 869754
	}
}

export default card