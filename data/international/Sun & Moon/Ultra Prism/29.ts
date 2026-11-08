import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Alolan Sandslash",
		'fr-fr': "Sablaireau d’Alola",
		'es-es': "Sandslash de Alola",
		'it-it': "Sandslash di Alola",
		'pt-br': "Sandslash de Alola",
		'de-de': "Alola-Sandamer"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		28,
	],

	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Alolan Sandshrew",
		'fr-fr': "Sabelette d’Alola",
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				'en-us': "Spike Armor",
				'fr-fr': "Armure Piquante",
				'es-es': "Armadura de Espinas",
				'it-it': "Corazza Ispida",
				'pt-br': "Armadura de Espinhos",
				'de-de': "Stachelpanzer"
			},
			effect: {
				'en-us': "During your opponent’s next turn, if this Pokémon is damaged by an attack (even if this Pokémon is Knocked Out), put 6 damage counters on the Attacking Pokémon.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d’une attaque (même si ce Pokémon est mis K.O.), placez 6 marqueurs de dégâts sur le Pokémon Attaquant.",
				'es-es': "Durante el próximo turno de tu rival, si este Pokémon resulta dañado por un ataque (incluso si este Pokémon queda Fuera de Combate), pon 6 contadores de daño en el Pokémon Atacante.",
				'it-it': "Durante il prossimo turno del tuo avversario, se questo Pokémon è danneggiato da un attacco, anche se viene messo KO, metti sei segnalini danno sul Pokémon attaccante.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, se este Pokémon for danificado por um ataque (mesmo que este Pokémon seja Nocauteado), coloque 6 contadores de dano no Pokémon Atacante.",
				'de-de': "Wenn diesem Pokémon während des nächsten Zuges deines Gegners durch eine Attacke Schaden zugefügt wird (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege 6 Schadensmarken auf das Angreifende Pokémon."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Frost Breath",
				'fr-fr': "Souffle Glacé",
				'es-es': "Vaho Gélido",
				'it-it': "Alitogelido",
				'pt-br': "Respiração de Gelo",
				'de-de': "Eisesodem"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "This Pokémon's steel spikes are sheathed in ice. Stabs from these spikes cause deep wounds and severe frostbite as well.",
	},

	thirdParty: {
		cardmarket: 315960,
		tcgplayer: 157646
	}
}

export default card
