import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mightyena",
		'fr-fr': "Grahyèna",
		'es-es': "Mightyena",
		'es-mx': "Mightyena",
		'de-de': "Magnayen",
		'it-it': "Mightyena",
		'pt-br': "Mightyena"
	},

	evolveFrom: {
		'en-us': "Poochyena",
		'fr-fr': "Medhyèna",
		'es-es': "Poochyena",
		'es-mx': "Poochyena",
		'de-de': "Fiffyen",
		'it-it': "Poochyena",
		'pt-br': "Poochyena",
	},

	illustrator: "Yano Keiji",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [262],
	hp: 120,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Kick Away",
			'fr-fr': "Coud'Pied Éjecteur",
			'es-es': "Patadón",
			'es-mx': "Patadón",
			'de-de': "Wegkicken",
			'it-it': "Calciavia",
			'pt-br': "Chutar para Longe"
		},

		effect: {
			'en-us': "Switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
			'fr-fr': "Envoyez le Pokémon Actif de l'adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
			'es-es': "Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
			'es-mx': "Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
			'de-de': "Wechsle das Aktive Pokémon deines Gegners auf seine Bank aus. (Dein Gegner wählt das neue Aktive Pokémon.)",
			'it-it': "Sposta il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
			'pt-br': "Mande o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)"
		},

		damage: 50
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Sharp Fang",
			'fr-fr': "Croc Aiguisé",
			'es-es': "Colmillo Afilado",
			'es-mx': "Colmillo Afilado",
			'de-de': "Scharfe Fänge",
			'it-it': "Zannaffilata",
			'pt-br': "Presa Afiada"
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "It will always obey the commands of a skilled Trainer. Its behavior arises from its living in packs in ancient times.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869854,
				tcgplayer: 676055
			}
		}
	],
}

export default card
