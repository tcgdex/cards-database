import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Butterfree",
		'fr-fr': "Papilusion",
		'es-es': "Butterfree",
		'it-it': "Butterfree",
		'pt-br': "Butterfree",
		'de-de': "Smettbo"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		12,
	],

	hp: 120,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Metapod",
		'fr-fr': "Chrysacier",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Bye-Bye Heal",
				'fr-fr': "Soins et Adieux",
				'es-es': "Adiós, Cura",
				'it-it': "Addio Cura",
				'pt-br': "Adeus Cura",
				'de-de': "Bye-bye-Heilen"
			},
			effect: {
				'en-us': "Heal all damage from all of your Pokémon. Shuffle this Pokémon and all cards attached to it into your deck.",
				'fr-fr': "Soignez tous les dégâts de vos Pokémon. Mélangez ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck.",
				'es-es': "Cura todos los puntos de daño a todos tus Pokémon. Pon este Pokémon y todas las cartas unidas a él en tu baraja y barájalas todas.",
				'it-it': "Cura tutti i tuoi Pokémon da tutti i danni. Rimischia questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo.",
				'pt-br': "Cure todo o dano de todos os seus Pokémon. Embaralhe este Pokémon e todas as cartas ligadas a ele no seu baralho.",
				'de-de': "Heile allen Schaden bei jedem deiner Pokémon. Mische dieses Pokémon und alle an es angelegten Karten in dein Deck."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Stun Spore",
				'fr-fr': "Para-Spore",
				'es-es': "Paralizador",
				'it-it': "Paralizzante",
				'pt-br': "Esporos Atordoantes",
				'de-de': "Stachelspore"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Close examination of its large eyes reveals that each eye is composed of a myriad of tiny eyes.",
	},

	thirdParty: {
		cardmarket: 299410,
		tcgplayer: 138273
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
