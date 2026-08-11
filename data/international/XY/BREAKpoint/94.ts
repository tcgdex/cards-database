import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Purugly",
		'fr-fr': "Chaffreux",
		'es-es': "Purugly",
		'it-it': "Purugly",
		'pt-br': "Purugly",
		'de-de': "Shnurgarst"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		432,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Glameow",
		'fr-fr': "Chaglam",
		'es-es': "Glameow",
		'it-it': "Glameow",
		'pt-br': "Glameow",
		'de-de': "Charmian"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'es-es': "Cuchillada",
				'it-it': "Lacerazione",
				'pt-br': "Talho",
				'de-de': "Schlitzer"
			},

			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Nyan Press",
				'fr-fr': "Charge Miaou",
				'es-es': "Presión Nyan",
				'it-it': "Pressa Felina",
				'pt-br': "Aperto do Nyan",
				'de-de': "Miaumangel"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 40 more damage. If tails, your opponent's Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires. Si c'est pile, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más. Si sale cruz, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 40 danni in più. Se esce croce, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 40 de danos adicionais. Se sair coroa, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 40 weitere Schadenspunkte zu. Bei \"Zahl\" ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "To make itself appear intimidatingly beefy, it tightly cinches its waist with its twin tails.",
	},

	thirdParty: {
		cardmarket: 288269,
		tcgplayer: 111627
	}
}

export default card
