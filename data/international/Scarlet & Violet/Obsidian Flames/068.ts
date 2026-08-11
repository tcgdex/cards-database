import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [603],
	set: Set,

	name: {
		'fr-fr': "Lampéroie",
		'en-us': "Eelektrik",
		'es-es': "Eelektrik",
		'it-it': "Eelektrik",
		'pt-br': "Eelektrik",
		'de-de': "Zapplalek"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	evolveFrom: {
		'fr-fr': "Anchwatt",
		'en-us': "Tynamo",
		'es-es': "Tynamo",
		'it-it': "Tynamo",
		'pt-br': "Tynamo",
		'de-de': "Zapplardin"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'fr-fr': "Vague Survoltée",
			'en-us': "Volt Wave",
			'es-es': "Onda Electrificante",
			'it-it': "Onda Volt",
			'pt-br': "Onda de Volts",
			'de-de': "Voltwelle"
		},

		effect: {
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 20
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Boule de Foudre",
			'en-us': "Electric Ball",
			'es-es': "Bola Eléctrica",
			'it-it': "Lamposfera",
			'pt-br': "Bola de Eletricidade",
			'de-de': "Stromball"
		},

		damage: 60
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
		'en-us': "They coil around foes and shock them with electricity-generating organs that seem simply to be circular patterns.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725148,
				tcgplayer: 509834,
				cardtrader: 255628
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725148,
				tcgplayer: 509834,
				cardtrader: 255628
			}
		},
	],

	illustrator: "Souichirou Gunjima",

	
}

export default card
