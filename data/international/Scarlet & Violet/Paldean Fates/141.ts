import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [849],
	set: Set,

	name: {
		'en-us': "Toxtricity",
		'fr-fr': "Salarsen",
		'es-es': "Toxtricity",
		'it-it': "Toxtricity",
		'pt-br': "Toxtricity",
		'de-de': "Riffex"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Toxel",
		'fr-fr': "Toxizap",
		'es-es': "Toxel",
		'it-it': "Toxel",
		'pt-br': "Toxel",
		'de-de': "Toxel"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Leer",
			'fr-fr': "Groz'Yeux",
			'es-es': "Malicioso",
			'it-it': "Fulmisguardo",
			'pt-br': "Encarar",
			'de-de': "Silberblick"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Loud Mix",
			'fr-fr': "Mélange Tonitruant",
			'es-es': "Mezcla Ruidosa",
			'it-it': "Mixaforte",
			'pt-br': "Mixagem Estrondosa",
			'de-de': "Lauter Mix"
		},

		effect: {
			'en-us': "This attack does 30 more damage for each different type of Pokémon on your Bench.",
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque type différent de Pokémon sur votre Banc.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada tipo de Pokémon diferente en tu Banca.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni Pokémon di tipo diverso nella tua panchina.",
			'pt-br': "Este ataque causa 30 pontos de dano a mais para cada tipo diferente de Pokémon no seu Banco.",
			'de-de': "Diese Attacke fügt für jeden verschiedenen Pokémon-Typ auf deiner Bank 30 Schadenspunkte mehr zu."
		},

		damage: "50+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751680,
				tcgplayer: 534576,
				cardtrader: 274324
			}
		},
	],

	illustrator: "GIDORA",

	description: {
		'en-us': "Many youths admire the way this Pokémon listlessly picks fights and keeps its cool no matter what opponent it faces.",
	},

}

export default card
