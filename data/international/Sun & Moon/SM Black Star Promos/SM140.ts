import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Salamence",
		'fr-fr': "Drattak",
		'es-es': "Salamence",
		'it-it': "Salamence",
		'pt-br': "Salamence",
		'de-de': "Brutalanda"
	},
	illustrator: "kawayoo",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		373,
	],
	hp: 150,
	types: [
		"Dragon",
	],
	evolveFrom: {
		'en-us': "Shelgon",
		'fr-fr': "Drackhaus",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Dragon Wind",
				'fr-fr': "Vent de Dragon",
				'es-es': "Viento Dragón",
				'it-it': "Dragovento",
				'pt-br': "Vento de Dragão",
				'de-de': "Drachenwind"
			},
			effect: {
				'en-us': "If this Pokémon is your Active Pokémon, once during your turn (before your attack), you may switch 1 of your opponent’s Benched Pokémon with their Active Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, vous pouvez échanger l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), si este Pokémon es tu Pokémon Activo, puedes cambiar 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon è il tuo Pokémon attivo, puoi scambiare uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), se este Pokémon for o seu Pokémon Ativo, você poderá trocar 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a).",
				'de-de': "Wenn dieses Pokémon dein Aktives Pokémon ist, kannst du einmal während deines Zuges (bevor du angreifst) 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon austauschen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Claw",
				'fr-fr': "Dracogriffe",
				'es-es': "Garra Dragón",
				'it-it': "Dragartigli",
				'pt-br': "Garra de Dragão",
				'de-de': "Drachenklaue"
			},

			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,




	description: {
		'en-us': "It flies around on its wings, which have grown in at last. In its happiness, it gushes hot flames, burning up the fields it passes over.",
	},
}

export default card
