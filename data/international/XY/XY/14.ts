import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Chesnaught",
		'fr-fr': "Blindépique",
		'es-es': "Chesnaught",
		'it-it': "Chesnaught",
		'pt-br': "Chesnaught",
		'de-de': "Brigaron"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		652,
	],

	hp: 160,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Quilladin",
		'fr-fr': "Boguérisse",
		'es-es': "Quilladin",
		'it-it': "Quilladin",
		'pt-br': "Quilladin",
		'de-de': "Igastarnish"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Spiky Shield",
				'fr-fr': "Pico-Défense",
				'es-es': "Barrera Espinosa",
				'it-it': "Agodifesa",
				'pt-br': "Escudo Espinhoso",
				'de-de': "Schutzstacheln"
			},
			effect: {
				'en-us': "If this Pokémon is your Active Pokémon and is damaged by an opponent's attack (even if this Pokémon is Knocked Out), put 3 damage counters on the Attacking Pokémon.",
				'fr-fr': "Si ce Pokémon est votre Pokémon Actif et qu'il subit les dégâts d'une attaque de votre adversaire (même si ce Pokémon est mis K.O.), placez 3 marqueurs de dégâts sur le Pokémon Attaquant.",
				'es-es': "Si este Pokémon es tu Pokémon Activo y resulta dañado por un ataque de tu rival (incluso si este Pokémon queda Fuera de Combate), pon 3 contadores de daño en el Pokémon Atacante.",
				'it-it': "Se questo Pokémon è il tuo Pokémon attivo e viene danneggiato da un attacco del tuo avversario, anche se viene messo KO, metti tre segnalini danno sul Pokémon attaccante.",
				'pt-br': "Se este Pokémon for seu Pokémon Ativo e ele for danificado pelo ataque de um oponente (mesmo se esse Pokémon for Nocauteado), coloque 3 contadores de danos no Pokémon Atacante.",
				'de-de': "Wenn dieses Pokémon dein Aktives Pokémon ist und durch einen gegnerischen Angriff Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege 3 Schadensmarken auf das Angreifende Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Touchdown",
				'fr-fr': "Touchdown",
				'es-es': "Gol",
				'it-it': "Meta",
				'pt-br': "Aterrissagem",
				'de-de': "Touchdown"
			},
			effect: {
				'en-us': "Heal 20 damage from this Pokémon.",
				'fr-fr': "Soignez 20 dégâts à ce Pokémon.",
				'es-es': "Cura 20 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 20 danni.",
				'pt-br': "Cure 20 de danos deste Pokémon.",
				'de-de': "Heile 20 Schadenspunkte bei diesem Pokémon."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "Its Tackle is forceful enough to flip a 50-ton tank. It shields its allies from danger with its own body.",
	},

	thirdParty: {
		cardmarket: 281351,
		tcgplayer: 84267
	}
}

export default card
