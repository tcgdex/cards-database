import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Trevenant",
		'fr-fr': "Desséliande",
		'es-es': "Trevenant",
		'it-it': "Trevenant",
		'pt-br': "Trevenant",
		'de-de': "Trombork"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		709,
	],

	hp: 110,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Phantump",
		'fr-fr': "Brocélôme",
		'es-es': "Phantump",
		'it-it': "Phantump",
		'pt-br': "Phantump",
		'de-de': "Paragoni"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Forest's Curse",
				'fr-fr': "Maléfice Sylvain",
				'es-es': "Condena Silvana",
				'it-it': "Boscomalocchio",
				'pt-br': "Maldição da Floresta",
				'de-de': "Waldesfluch"
			},
			effect: {
				'en-us': "As long as this Pokémon is your Active Pokémon, your opponent can't play any Item cards from his or her hand.",
				'fr-fr': "Tant que ce Pokémon est votre Pokémon Actif, votre adversaire ne peut pas jouer de cartes Objet de sa main.",
				'es-es': "Mientras este Pokémon sea tu Pokémon Activo, tu rival no puede jugar ninguna carta de Objeto de su mano.",
				'it-it': "Fintanto che questo Pokémon è il tuo Pokémon attivo, il tuo avversario non può giocare carte Strumento dalla sua mano.",
				'pt-br': "Desde que este Pokémon seja seu Pokémon Ativo, seu oponente não poderá jogar cards de Item da mão dele ou dela.",
				'de-de': "Solang dieses Pokémon dein Aktives Pokémon ist, kann dein Gegner keine Itemkarten von seiner Hand spielen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tree Slam",
				'fr-fr': "Tacle Arborescent",
				'es-es': "Golpe de Árbol",
				'it-it': "Schiantalbero",
				'pt-br': "Pancada de Árvore",
				'de-de': "Baumbolzer"
			},
			effect: {
				'en-us': "This attack does 20 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 20 dégâts à 2 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 20 puntos de daño a 2 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 20 danni a due dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Esse ataque causa 20 de danos a 2 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				'de-de': "Dieser Angriff fügt 2 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It can control trees at will. It will trap people who harm the forest, so they can never leave.",
	},

	thirdParty: {
		cardmarket: 281392,
		tcgplayer: 90047
	}
}

export default card
