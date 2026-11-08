import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Dracozolt VMAX",
		'fr-fr': "Galvagon VMAX",
		'es-es': "Dracozolt VMAX",
		'it-it': "Dracozolt VMAX",
		'pt-br': "Dracozolt VMAX",
		'de-de': "Lectragon VMAX"
	},

	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	hp: 330,
	types: ["Lightning"],
	stage: "VMAX",
	illustrator: "5ban Graphics",

	attacks: [{
		name: {
			'en-us': "Spark Trap",
			'fr-fr': "Piège Étincelle",
			'es-es': "Trampa Chispeante",
			'it-it': "Scintillatrappola",
			'pt-br': "Spark Trap",
			'de-de': "Funkenfalle"
		},

		effect: {
			'en-us': "During your opponent's next turn, if this Pokémon is damaged by an attack (even if it is Knocked Out), put 12 damage counters on the Attacking Pokémon.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d'une attaque (même s'il est mis K.O.), placez 12 marqueurs de dégâts sur le Pokémon Attaquant.",
			'es-es': "Durante el próximo turno de tu rival, si este Pokémon resulta dañado por un ataque (incluso si queda Fuera de Combate), pon 12 contadores de daño en el Pokémon Atacante.",
			'it-it': "Durante il prossimo turno del tuo avversario, se questo Pokémon viene danneggiato da un attacco, anche se viene messo KO, metti 12 segnalini danno sul Pokémon attaccante.",
			'pt-br': "During your opponent's next turn, if this Pokémon is damaged by an attack (even if it is Knocked Out), put 12 damage counters on the Attacking Pokémon.",
			'de-de': "Wenn diesem Pokémon während des nächsten Zuges deines Gegners durch eine Attacke Schaden zugefügt wird (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege 12 Schadensmarken auf das Angreifende Pokémon."
		},

		damage: 60,
		cost: ["Lightning"]
	}, {
		name: {
			'en-us': "Max Impact",
			'fr-fr': "Impactomax",
			'es-es': "Maximpacto",
			'it-it': "Dynaimpatto",
			'pt-br': "Max Impact",
			'de-de': "Dyna-Einschlag"
		},

		damage: 200,
		cost: ["Lightning", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,

	evolveFrom: {
		'en-us': "Dracozolt V",
		'fr-fr': "Galvagon-V",
		'es-es': "Dracozolt V",
		'it-it': "Dracozolt-V",
		'pt-br': "Dracozolt V",
		'de-de': "Lectragon-V"
	},

	dexId: [880],
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574083,
				tcgplayer: 246765
			}
		},
	],
}

export default card
