import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Bayleef",
		'fr-fr': "Macronium",
		'es-es': "Bayleef",
		'it-it': "Bayleef",
		'pt-br': "Bayleef",
		'de-de': "Lorblatt"
	},

	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		153,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Chikorita",
		'fr-fr': "Germignon",
		'es-es': "Chikorita",
		'it-it': "Chikorita",
		'pt-br': "Chikorita",
		'de-de': "Endivie"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Body Slam",
				'fr-fr': "Plaquage",
				'es-es': "Golpe Cuerpo",
				'it-it': "Corposcontro",
				'pt-br': "Pancada Corporal",
				'de-de': "Bodyslam"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Vine Whip",
				'fr-fr': "Fouet Lianes",
				'es-es': "Látigo Cepa",
				'it-it': "Frustata",
				'pt-br': "Chicote de Vinha",
				'de-de': "Rankenhieb"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The buds that ring its neck give off a spicy aroma that perks people up.",
	},

	thirdParty: {
		cardmarket: 288177,
		tcgplayer: 111505
	}
}

export default card
