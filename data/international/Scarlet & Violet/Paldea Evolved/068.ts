import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [403],
	set: Set,

	name: {
		'fr-fr': "Lixy",
		'en-us': "Shinx",
		'es-es': "Shinx",
		'it-it': "Shinx",
		'pt-br': "Shinx",
		'de-de': "Sheinux"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Rugissement Puissant",
			'en-us': "Big Roar",
			'es-es': "Gran Rugido",
			'it-it': "Granboato",
			'pt-br': "Rugido Grande",
			'de-de': "Großes Gebrüll"
		},

		effect: {
			'fr-fr': "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez envoyer le Pokémon Actif de votre adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
			'en-us': "Once during your turn, if this Pokémon is in the Active Spot, you may switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
			'es-es': "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes mover el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
			'it-it': "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi spostare il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
			'pt-br': "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá mandar o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)",
			'de-de': "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du das Aktive Pokémon deines Gegners auf seine Bank auswechseln. (Dein Gegner wählt das neue Aktive Pokémon.)"
		}
	}],

	attacks: [{
		cost: ["Lightning"],

		name: {
			'fr-fr': "Collision",
			'en-us': "Ram",
			'es-es': "Apisonar",
			'it-it': "Carica",
			'pt-br': "Aríete",
			'de-de': "Ramme"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715543,
				tcgplayer: 497479,
				cardtrader: 248688
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715543,
				tcgplayer: 497479,
				cardtrader: 248688
			}
		},
	],

	illustrator: "kurumitsu",

	description: {
		'en-us': "The extension and contraction of its muscles generates electricity. It glows when in trouble.",
	},
}

export default card
