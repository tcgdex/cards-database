import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [745],
	set: Set,

	name: {
		'fr-fr': "Lougaroc-ex",
		'en-us': "Lycanroc ex",
		'es-es': "Lycanroc ex",
		'it-it': "Lycanroc-ex",
		'pt-br': "Lycanroc ex",
		'de-de': "Wolwerock-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Fighting"],
	evolveFrom: {
		'fr-fr': "Rocabot",
		'en-us': "Rockruff",
		'es-es': "Rockruff",
		'it-it': "Rockruff",
		'pt-br': "Rockruff",
		'de-de': "Wuffels"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'fr-fr': "Jet-Pierres",
			'en-us': "Rock Throw",
			'es-es': "Lanzarrocas",
			'it-it': "Sassata",
			'pt-br': "Lançamento de Rocha",
			'de-de': "Steinwurf"
		},

		damage: 40
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Crocs Terrifiants",
			'en-us': "Scary Fangs",
			'es-es': "Colmillos Aterradores",
			'it-it': "Zanne Spaventose",
			'pt-br': "Presas Assustadoras",
			'de-de': "Gruselige Reißzähne"
		},

		effect: {
			'fr-fr': "Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d'une attaque (même s'il est mis K.O.), placez 10 marqueurs de dégâts sur le Pokémon Attaquant.",
			'en-us': "During your opponent's next turn, if this Pokémon is damaged by an attack (even if it is Knocked Out), put 10 damage counters on the Attacking Pokémon.",
			'es-es': "Durante el próximo turno de tu rival, si este Pokémon resulta dañado por un ataque (incluso si queda Fuera de Combate), pon 10 contadores de daño en el Pokémon Atacante.",
			'it-it': "Durante il prossimo turno del tuo avversario, se questo Pokémon viene danneggiato da un attacco, anche se viene messo KO, metti 10 segnalini danno sul Pokémon attaccante.",
			'pt-br': "Durante o próximo turno do seu oponente, se este Pokémon for danificado por um ataque (mesmo que ele seja Nocauteado), coloque 10 contadores de dano no Pokémon Atacante.",
			'de-de': "Wenn diesem Pokémon während des nächsten Zuges deines Gegners durch eine Attacke Schaden zugefügt wird (auch wenn es dadurch kampfunfähig wird), lege 10 Schadensmarken auf das Angreifende Pokémon."
		},

		damage: 140
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715592,
				tcgplayer: 497532,
				cardtrader: 248763
			}
		},
		{
			type: 'holo',
			size: 'jumbo',
			thirdParty: {
				cardmarket: 786658
			}
		},
	],

	suffix: "ex",
	illustrator: "kawayoo",

	
}

export default card
