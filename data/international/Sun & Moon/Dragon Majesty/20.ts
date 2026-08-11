import { Card } from 'models/database/card'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		'en-us': "Gyarados",
		'fr-fr': "Léviator",
		'es-es': "Gyarados",
		'it-it': "Gyarados",
		'pt-br': "Gyarados",
		'de-de': "Garados"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		130,
	],

	hp: 160,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Magikarp",
		'fr-fr': "Magicarpe",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Commotion",
				'fr-fr': "Commotion",
				'es-es': "Conmoción",
				'it-it': "Subbuglio",
				'pt-br': "Comoção",
				'de-de': "Tumult"
			},
			effect: {
				'en-us': "If this Pokémon is your Active Pokémon and is damaged by an opponent’s attack (even if this Pokémon is Knocked Out), put 2 damage counters on each of your Benched Pokémon.",
				'fr-fr': "Si ce Pokémon est votre Pokémon Actif et qu’il subit les dégâts d’une attaque de votre adversaire (même si ce Pokémon est mis K.O.), placez 2 marqueurs de dégâts sur chacun de vos Pokémon de Banc.",
				'es-es': "Si este Pokémon es tu Pokémon Activo y resulta dañado por un ataque de tu rival (incluso si este Pokémon queda Fuera de Combate), pon 2 contadores de daño en cada uno de tus Pokémon en Banca.",
				'it-it': "Se questo Pokémon è il tuo Pokémon attivo e viene danneggiato da un attacco del tuo avversario, anche se viene messo KO, metti due segnalini danno su ognuno dei tuoi Pokémon in panchina.",
				'pt-br': "Se este Pokémon for o seu Pokémon Ativo e for danificado por um ataque do seu oponente (mesmo que este Pokémon seja Nocauteado), coloque 2 contadores de dano em cada um dos seus Pokémon no Banco.",
				'de-de': "Wenn dieses Pokémon dein Aktives Pokémon ist und durch einen gegnerischen Angriff Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege 2 Schadensmarken auf jedes Pokémon auf deiner Bank."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Wild Tail",
				'fr-fr': "Queue Déchaînée",
				'es-es': "Cola Salvaje",
				'it-it': "Codafuria",
				'pt-br': "Cauda Selvagem",
				'de-de': "Wilder Schweif"
			},
			effect: {
				'en-us': "You may discard any Stadium card in play.",
				'fr-fr': "Vous pouvez défausser toute carte Stade en jeu.",
				'es-es': "Puedes descartar cualquier carta de Estadio en juego.",
				'it-it': "Puoi scartare una carta Stadio in gioco.",
				'pt-br': "Você pode descartar qualquer carta de Estádio em jogo.",
				'de-de': "Du kannst 1 beliebige Stadionkarte im Spiel auf den Ablagestapel legen."
			},
			damage: 160,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "There are people who swear that any place Gyarados appears is fated for destruction.",
	},

	thirdParty: {
		cardmarket: 363492,
		tcgplayer: 175382
	}
}

export default card
