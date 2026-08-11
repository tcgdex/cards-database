import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [404],
	set: Set,

	name: {
		'en-us': "Luxio",
		'fr-fr': "Luxio",
		'es-es': "Luxio",
		'it-it': "Luxio",
		'pt-br': "Luxio",
		'de-de': "Luxio"
	},

	illustrator: "kurumitsu",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Shinx",
		'fr-fr': "Lixy",
		'es-es': "Shinx",
		'it-it': "Shinx",
		'pt-br': "Shinx",
		'de-de': "Sheinux"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Thunder Shock",
			'fr-fr': "Éclair",
			'es-es': "Impactrueno",
			'it-it': "Tuonoshock",
			'pt-br': "Trovoada de Choques",
			'de-de': "Donnerschock"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "By joining its tail with that of another Luxio, this Pokémon can receive some of the other Luxio's electricity and power up its own electric blasts.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608500,
				tcgplayer: 263756
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608500,
				tcgplayer: 263756
			}
		},
	],
}

export default card
