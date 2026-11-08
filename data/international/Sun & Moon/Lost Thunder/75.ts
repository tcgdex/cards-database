import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Mareep",
		'fr-fr': "Wattouat",
		'es-es': "Mareep",
		'it-it': "Mareep",
		'pt-br': "Mareep",
		'de-de': "Voltilamm"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		179,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Fluffy Pillow",
				'fr-fr': "Oreiller Moelleux",
				'es-es': "Almohada Mullida",
				'it-it': "Cuscino Morbidoso",
				'pt-br': "Travesseiro Macio",
				'de-de': "Flauschiges Kissen"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, you may leave your opponent’s Active Pokémon Asleep.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, vous pouvez laisser le Pokémon Actif de votre adversaire Endormi.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), si este Pokémon es tu Pokémon Activo, puedes dejar al Pokémon Activo de tu rival Dormido.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon è il tuo Pokémon attivo, puoi lasciare il Pokémon attivo del tuo avversario addormentato.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), se este Pokémon for o seu Pokémon Ativo, você poderá deixar o Pokémon Ativo do seu oponente Adormecido.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst), wenn dieses Pokémon dein Aktives Pokémon ist, kannst du veranlassen, dass das Aktive Pokémon deines Gegners schläft."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'es-es': "Placaje",
				'it-it': "Azione",
				'pt-br': "Investida",
				'de-de': "Tackle"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It stores lots of air in its soft fur, allowing it to stay cool in summer and warm in winter.",
	},

	thirdParty: {
		cardmarket: 365713,
		tcgplayer: 178884
	}
}

export default card
