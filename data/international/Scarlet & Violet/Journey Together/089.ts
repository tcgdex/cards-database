import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [949],
	set: Set,

	name: {
		'en-us': "Toedscruel",
		'fr-fr': "Terracruel",
		'es-es': "Toedscruel",
		'de-de': "Tenterra",
		'it-it': "Toedscruel",
		'pt-br': "Toedscruel",
		'es-mx': "Toedscruel"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Toedscool",
		'fr-fr': "Terracool",
		'es-es': "Toedscool",
		'de-de': "Tentagra",
		'it-it': "Toedscool",
		'pt-br': "Toedscool",
		'es-mx': "Toedscool"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Secret Forest Path",
			'fr-fr': "Chemin Forestier Secret",
			'es-es': "Sendero Forestal Secreto",
			'de-de': "Geheimer Waldweg",
			'it-it': "Scorciatoia nel Bosco",
			'pt-br': "Atalho da Floresta",
			'es-mx': "Atajo Forestal"
		},

		effect: {
			'en-us': "As long as this Pokémon is on your Bench, your Active Pokémon's Retreat Cost is {C}{C} less.",
			'fr-fr': "Tant que ce Pokémon est sur votre Banc, le Coût de Retraite de votre Pokémon Actif est diminué de {C}{C}.",
			'es-es': "Mientras este Pokémon esté en tu Banca, el Coste de Retirada de tu Pokémon Activo es de {C}{C} menos.",
			'de-de': "Solange sich dieses Pokémon auf deiner Bank befindet, verringern sich die Rückzugskosten deines Aktiven Pokémon um {C}{C}.",
			'it-it': "Fintanto che questo Pokémon è nella tua panchina, il costo di ritirata del tuo Pokémon attivo è ridotto di {C}{C}.",
			'pt-br': "Enquanto este Pokémon estiver no seu Banco, o custo de Recuo do seu Pokémon Ativo será {C}{C} a menos.",
			'es-mx': "Mientras este Pokémon esté en tu Banca, el Costo de Retirada de tu Pokémon Activo es de ColorlessColorless menos."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Mud Shot",
			'fr-fr': "Tir de Boue",
			'es-es': "Disparo Lodo",
			'de-de': "Lehmschuss",
			'it-it': "Colpodifango",
			'pt-br': "Tiro de Lama",
			'es-mx': "Disparo de Lodo"
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",
	illustrator: "Masako Tomii",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817241,
				tcgplayer: 623516
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817241,
				tcgplayer: 623516
			}
		},
	],
}

export default card
