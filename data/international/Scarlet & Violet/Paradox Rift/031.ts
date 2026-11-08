import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [117],
	set: Set,

	name: {
		'en-us': "Seadra",
		'fr-fr': "Hypocéan",
		'es-es': "Seadra",
		'it-it': "Seadra",
		'pt-br': "Seadra",
		'de-de': "Seemon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Horsea",
		'fr-fr': "Hypotrempe",
		'es-es': "Horsea",
		'it-it': "Horsea",
		'pt-br': "Horsea",
		'de-de': "Seeper"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Bubble Beam",
			'fr-fr': "Bulles d'O",
			'es-es': "Rayo Burbuja",
			'it-it': "Bollaraggio",
			'pt-br': "Jato de Bolhas",
			'de-de': "Blubbstrahl"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Seadra's mouth is slender, but its suction power is strong. In an instant, Seadra can suck in food that's larger than the opening of its mouth.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740507,
				tcgplayer: 523640,
				cardtrader: 265169
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740507,
				tcgplayer: 523640,
				cardtrader: 265169
			}
		},
	],

	illustrator: "otumami",

	
}

export default card
