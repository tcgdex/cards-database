import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [302],
	set: Set,

	name: {
		'en-us': "Sableye",
		'fr-fr': "Ténéfix",
		'es-es': "Sableye",
		'it-it': "Sableye",
		'pt-br': "Sableye",
		'de-de': "Zobiris"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Claw Slash",
			'fr-fr': "Tranch'Griffe",
			'es-es': "Cuchillada Garra",
			'it-it': "Lacerartiglio",
			'pt-br': "Golpe de Garra",
			'de-de': "Klauenschlitzer"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Damage Collection",
			'fr-fr': "Accumulation de Dégâts",
			'es-es': "Recogida de Daño",
			'it-it': "Raccolta di Danni",
			'pt-br': "Colecionar Dano",
			'de-de': "Schadenssammlung"
		},

		effect: {
			'en-us': "You may move any number of damage counters from your opponent's Benched Pokémon to their Active Pokémon.",
			'fr-fr': "Vous pouvez déplacer autant de marqueurs de dégâts que vous le voulez des Pokémon de Banc de votre adversaire vers son Pokémon Actif.",
			'es-es': "Puedes mover cualquier cantidad de contadores de daño de los Pokémon en Banca de tu rival a su Pokémon Activo.",
			'it-it': "Puoi spostare un numero qualsiasi di segnalini danno dai Pokémon nella panchina del tuo avversario al suo Pokémon attivo.",
			'pt-br': "Você pode mover qualquer quantidade de contadores de dano dos Pokémon no Banco do seu oponente para o Pokémon Ativo dele.",
			'de-de': "Du kannst beliebig viele Schadensmarken von Pokémon auf der Bank deines Gegners auf sein Aktives Pokémon verschieben."
		}
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "It dwells in the darkness of caves. It uses its sharp claws to dig up gems to nourish itself.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760737,
				tcgplayer: 542851
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760737,
				tcgplayer: 542851
			}
		},
	],

	illustrator: "0313",

}

export default card