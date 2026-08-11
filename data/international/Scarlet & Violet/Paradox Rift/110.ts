import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [41],
	set: Set,

	name: {
		'en-us': "Zubat",
		'fr-fr': "Nosferapti",
		'es-es': "Zubat",
		'it-it': "Zubat",
		'pt-br': "Zubat",
		'de-de': "Zubat"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Supersonic",
			'fr-fr': "Ultrason",
			'es-es': "Supersónico",
			'it-it': "Supersuono",
			'pt-br': "Supersônico",
			'de-de': "Superschall"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Confuso.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt verwirrt."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Razor Wing",
			'fr-fr': "Aile Tranchante",
			'es-es': "Ala Cortante",
			'it-it': "Ala Tagliente",
			'pt-br': "Asa Cortante",
			'de-de': "Rasierflügel"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Zubat live in caves, down where the sun's light won't reach. In the morning, they gather together to keep each other warm as they sleep.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740628,
				tcgplayer: 523783,
				cardtrader: 265220
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740628,
				tcgplayer: 523783,
				cardtrader: 265220
			}
		},
	],

	illustrator: "Sumiyoshi Kizuki",

	
}

export default card
