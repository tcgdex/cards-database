import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Leafeon",
		fr: "Phyllali",
		es: "Leafeon",
		it: "Leafeon",
		pt: "Leafeon",
		de: "Folipurba"
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
		en: "Eevee",
		fr: "Évoli",
		es: "Eevee",
		it: "Eevee",
		pt: "Eevee",
		de: "Evoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Soothing Scent",
				fr: "Senteur Apaisante",
				es: "Aroma Sedante",
				it: "Aroma Calmante",
				pt: "Odor Calmante",
				de: "Beruhigender Duft"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt."
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
				en: "Magical Leaf",
				fr: "Feuille Magik",
				es: "Hoja Mágica",
				it: "Fogliamagica",
				pt: "Folha Mágica",
				de: "Zauberblatt"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage and heal 30 damage from this Pokémon.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires et vous soignez 30 dégâts à ce Pokémon.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más y cura 30 puntos de daño a este Pokémon.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più e curi questo Pokémon da 30 danni.",
				pt: "Jogue uma moeda. Se sair cara, esse ataque causará 30 de danos adicionais e curará 30 de danos deste Pokémon.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 weitere Schadenspunkte zu und heilt 30 Schadenspunkte bei diesem Pokémon."
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

	thirdParty: {
		cardmarket: 281671
	}
}

export default card
