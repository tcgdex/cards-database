import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [849],
	set: Set,

	name: {
		'fr-fr': "Salarsen",
		'en-us': "Toxtricity",
		'es-es': "Toxtricity",
		'it-it': "Toxtricity",
		'pt-br': "Toxtricity",
		'de-de': "Riffex"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],
	evolveFrom: {
		'fr-fr': "Toxizap",
		'en-us': "Toxel",
		'es-es': "Toxel",
		'it-it': "Toxel",
		'pt-br': "Toxel",
		'de-de': "Toxel"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'fr-fr': "Groz'Yeux",
			'en-us': "Leer",
			'es-es': "Malicioso",
			'it-it': "Fulmisguardo",
			'pt-br': "Encarar",
			'de-de': "Silberblick"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			'fr-fr': "Mélange Tonitruant",
			'en-us': "Loud Mix",
			'es-es': "Mezcla Ruidosa",
			'it-it': "Mixaforte",
			'pt-br': "Mixagem Estrondosa",
			'de-de': "Lauter Mix"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque type différent de Pokémon sur votre Banc.",
			'en-us': "This attack does 30 more damage for each different type of Pokémon on your Bench.",
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

	description: {
		'en-us': "Many youths admire the way this Pokémon listlessly picks fights and keeps its cool no matter what opponent it faces.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 725152,
				tcgplayer: 509844,
				cardtrader: 255632
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725152,
				tcgplayer: 509844,
				cardtrader: 255632
			}
		},
	],

	illustrator: "Anesaki Dynamic",

	
}

export default card
