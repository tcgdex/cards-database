import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Aggron",
		'fr-fr': "Galeking",
		'es-es': "Aggron",
		'it-it': "Aggron",
		'pt-br': "Aggron",
		'de-de': "Stolloss"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		306,
	],

	hp: 170,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Lairon",
		'fr-fr': "Galegon",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Extra-Tight Press",
				'fr-fr': "Pression Super Serrée",
				'es-es': "Presión Extraajustada",
				'it-it': "Pressa Stritolante",
				'pt-br': "Aperto Espremido",
				'de-de': "Druckgriff"
			},
			effect: {
				'en-us': "During your opponent’s next turn, if this Pokémon is damaged by an attack (even if this Pokémon is Knocked Out), put 8 damage counters on the Attacking Pokémon.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d’une attaque (même si ce Pokémon est mis K.O.), placez 8 marqueurs de dégâts sur le Pokémon Attaquant.",
				'es-es': "Durante el próximo turno de tu rival, si este Pokémon resulta dañado por un ataque (incluso si este Pokémon queda Fuera de Combate), pon 8 contadores de daño en el Pokémon Atacante.",
				'it-it': "Durante il prossimo turno del tuo avversario, se questo Pokémon è danneggiato da un attacco, anche se viene messo KO, metti otto segnalini danno sul Pokémon attaccante.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, se este Pokémon for danificado por um ataque (mesmo que este Pokémon seja Nocauteado), coloque 8 contadores de dano no Pokémon Atacante.",
				'de-de': "Wenn diesem Pokémon während des nächsten Zuges deines Gegners durch eine Attacke Schaden zugefügt wird (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege 8 Schadensmarken auf das Angreifende Pokémon."
			},
			damage: 80,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Giga Impact",
				'fr-fr': "Giga Impact",
				'es-es': "Giga Impacto",
				'it-it': "Gigaimpatto",
				'pt-br': "Gigaimpacto",
				'de-de': "Gigastoß"
			},
			effect: {
				'en-us': "This Pokémon can’t attack during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
				'es-es': "Este Pokémon no puede atacar durante tu próximo turno.",
				'it-it': "Questo Pokémon non può attaccare durante il tuo prossimo turno.",
				'pt-br': "Este Pokémon não poderá atacar durante a sua próxima vez de jogar.",
				'de-de': "Dieses Pokémon kann während deines nächsten Zuges nicht angreifen."
			},
			damage: 160,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 4,

	description: {
		'en-us': "It claims an entire mountain as its own. The more wounds it has, the more it has battled, so don't take it lightly.",
	},

	thirdParty: {
		cardmarket: 372414,
		tcgplayer: 189224
	}
}

export default card
