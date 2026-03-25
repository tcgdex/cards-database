import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [701],

	name: {
		en: "Mega Hawlucha ex",
		fr: "Méga-Brutalibré-ex",
		es: "Mega-Hawlucha ex",
		'es-mx': "Mega-Hawlucha ex",
		de: "Mega-Resladero-ex",
		it: "Mega Hawlucha-ex",
		pt: "Mega Hawlucha ex"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 250,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Tenacious Body",
			fr: "Corps Tenace",
			es: "Cuerpo Tenaz",
			'es-mx': "Cuerpo Tenaz",
			de: "Hartnäckiger Körper",
			it: "Corpo Tenace",
			pt: "Corpo Tenaz"
		},

		effect: {
			en: "If this Pokémon would be Knocked Out by damage from an attack, flip a coin. If heads, this Pokémon is not Knocked Out, and its remaining HP becomes 10.",
			fr: "Si ce Pokémon doit être mis K.O. par les dégâts d'une attaque, lancez une pièce. Si c'est face, ce Pokémon n'est pas mis K.O. et il lui reste 10 PV.",
			es: "Si este Pokémon fuese a quedar Fuera de Combate por el daño de un ataque, lanza 1 moneda. Si sale cara, este Pokémon no queda Fuera de Combate y sus PS restantes pasan a ser 10.",
			'es-mx': "Si este Pokémon quedaría Fuera de Combate por el daño de un ataque, lanza 1 moneda. Si sale cara, este Pokémon no queda Fuera de Combate y ahora le quedan 10 PS.",
			de: "Wenn dieses Pokémon durch Schaden einer Attacke kampfunfähig würde, wirf 1 Münze. Bei Kopf wird dieses Pokémon nicht kampfunfähig und seine verbleibenden KP sind gleich 10.",
			it: "Se questo Pokémon sta per essere messo KO dai danni inflitti da un attacco, lancia una moneta. Se esce testa, questo Pokémon non viene messo KO e i suoi PS rimanenti diventano 10.",
			pt: "Se este Pokémon estiver prestes a ser Nocauteado pelo dano de um ataque, jogue uma moeda. Se sair cara, este Pokémon não será Nocauteado e o PS restante dele será 10."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Somersault Dive",
			fr: "Plongée Culbute",
			es: "Picado y Voltereta",
			'es-mx': "Descenso Giratorio",
			de: "Saltosturzflug",
			it: "Capriolpicchiata",
			pt: "Salto Mortal"
		},

		effect: {
			en: "If a Stadium is in play, this attack does 140 more damage. Then, discard that Stadium.",
			fr: "Si un Stade est en jeu, cette attaque inflige 140 dégâts supplémentaires. Ensuite, défaussez ce Stade.",
			es: "Si hay un Estadio en juego, este ataque hace 140 puntos de daño más. Después, descarta ese Estadio.",
			'es-mx': "Si hay un Estadio en juego, este ataque hace 140 puntos de daño más. Después, descarta ese Estadio.",
			de: "Wenn ein Stadion im Spiel ist, fügt diese Attacke 140 Schadenspunkte mehr zu. Lege anschließend jenes Stadion auf den Ablagestapel.",
			it: "Se c'è una carta Stadio in gioco, questo attacco infligge 140 danni in più. Poi scarta quella carta Stadio.",
			pt: "Se um Estádio estiver em jogo, este ataque causará 140 pontos de dano a mais. Em seguida, descarte aquele Estádio."
		},

		damage: "120+"
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 676095,
		cardmarket: 869894
	}
}

export default card
