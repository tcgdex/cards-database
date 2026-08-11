import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Keldeo-EX",
		'fr-fr': "Keldeo EX",
		'es-es': "Keldeo-EX",
		'it-it': "Keldeo-EX",
		'pt-br': "Keldeo-EX",
		'de-de': "Keldeo-EX"
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		647,
	],
	hp: 170,
	types: [
		"Water",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Rush In",
				'fr-fr': "Intervention",
				'es-es': "Apremio",
				'it-it': "Assalto",
				'pt-br': "Pressa",
				'de-de': "Hineinstürmen"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if this Pokémon is on your Bench, you may switch this Pokémon with your Active Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est sur votre Banc, vous pouvez échanger ce Pokémon avec votre Pokémon Actif.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), si este Pokémon está en tu Banca, puedes cambiar a este Pokémon por tu Pokémon Activo.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon è nella tua panchina, puoi scambiarlo con il tuo Pokémon attivo.",
				'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), se este Pokémon estiver em seu Banco, você poderá trocá-lo com seu Pokémon Ativo.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du, wenn sich dieses Pokémon auf deiner Bank befindet, dieses Pokémon gegen dein Aktives Pokémon austauschen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Secret Sword",
				'fr-fr': "Lame Ointe",
			},
			effect: {
				'en-us': "Does 20 more damage for each Water Energy attached to this Pokémon.",
				'fr-fr': "Inflige 20 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
