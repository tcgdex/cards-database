import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Leafeon",
		'fr-fr': "Phyllali",
		'es-es': "Leafeon",
		'it-it': "Leafeon",
		'pt-br': "Leafeon",
		'de-de': "Folipurba"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		470,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'es-es': "Eevee",
		'it-it': "Eevee",
		'pt-br': "Eevee",
		'de-de': "Evoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Soothing Scent",
				'fr-fr': "Senteur Apaisante",
				'es-es': "Aroma Sedante",
				'it-it': "Aroma Calmante",
				'pt-br': "Odor Calmante",
				'de-de': "Beruhigender Duft"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Magical Leaf",
				'fr-fr': "Feuille Magik",
				'es-es': "Hoja Mágica",
				'it-it': "Fogliamagica",
				'pt-br': "Folha Mágica",
				'de-de': "Zauberblatt"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 more damage and heal 30 damage from this Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires et vous soignez 30 dégâts à ce Pokémon.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más y cura 30 puntos de daño a este Pokémon.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più e curi questo Pokémon da 30 danni.",
				'pt-br': "Jogue uma moeda. Se sair cara, esse ataque causará 30 de danos adicionais e curará 30 de danos deste Pokémon.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 weitere Schadenspunkte zu und heilt 30 Schadenspunkte bei diesem Pokémon."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When you see Leafeon asleep in a patch of sunshine, you'll know it is using photosynthesis to produce clean air.",
	},

	thirdParty: {
		cardmarket: 281671,
		tcgplayer: 92176
	}
}

export default card
