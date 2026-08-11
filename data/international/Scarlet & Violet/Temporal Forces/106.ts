import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [262],
	set: Set,

	name: {
		'en-us': "Mightyena",
		'fr-fr': "Grahyèna",
		'es-es': "Mightyena",
		'it-it': "Mightyena",
		'pt-br': "Mightyena",
		'de-de': "Magnayen"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Poochyena",
		'fr-fr': "Medhyèna",
		'es-es': "Poochyena",
		'it-it': "Poochyena",
		'pt-br': "Poochyena",
		'de-de': "Fiffyen"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Kick Away",
			'fr-fr': "Coud'Pied Éjecteur",
			'es-es': "Patadón",
			'it-it': "Calciavia",
			'pt-br': "Chutar para Longe",
			'de-de': "Wegkicken"
		},

		effect: {
			'en-us': "Switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
			'fr-fr': "Envoyez le Pokémon Actif de l'adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
			'es-es': "Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
			'it-it': "Sposta il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
			'pt-br': "Mande o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)",
			'de-de': "Wechsle das Aktive Pokémon deines Gegners auf seine Bank aus. (Dein Gegner wählt das neue Aktive Pokémon.)"
		},

		damage: 50
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Sharp Fang",
			'fr-fr': "Croc Aiguisé",
			'es-es': "Colmillo Afilado",
			'it-it': "Zannaffilata",
			'pt-br': "Presa Afiada",
			'de-de': "Scharfe Fänge"
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
			type: "normal",
			thirdParty: {
				cardmarket: 760736,
				tcgplayer: 542850
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760736,
				tcgplayer: 542850
			}
		},
	],

	illustrator: "akagi",

}

export default card