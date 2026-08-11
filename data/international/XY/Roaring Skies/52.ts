import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Dragonite",
		'fr-fr': "Dracolosse",
		'es-es': "Dragonite",
		'it-it': "Dragonite",
		'pt-br': "Dragonite",
		'de-de': "Dragoran"
	},

	illustrator: "hatachu",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		149,
	],

	hp: 160,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Dragonair",
		'fr-fr': "Draco",
		'es-es': "Dragonair",
		'it-it': "Dragonair",
		'pt-br': "Dragonair",
		'de-de': "Dragonir"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ancient Trait",
			name: {
				'fr-fr': "Plus Δ",
				'en-us': "Δ Plus",
				'es-es': "{title}:",
				'it-it': "{title}:",
				'pt-br': "{title}:",
				'de-de': "{title}:"
			},
			effect: {
				'fr-fr': "Si le Pokémon de votre adversaire est mis K.O. par les dégâts d'une attaque de ce Pokémon, récupérez une carte Récompense supplémentaire.",
				'en-us': "If your opponent's Pokémon is Knocked Out by damage from an attack of this Pokémon, take 1 more Prize card.",
				'es-es': "{title}: Si el Pokémon de tu rival queda Fuera de Combate por el daño de un ataque de este Pokémon, coge 1 carta de Premio más.",
				'it-it': "{title}: Se un Pokémon del tuo avversario viene messo KO dai danni di un attacco di questo Pokémon, prendi una carta Premio in più.",
				'pt-br': "{title}: Se o Pokémon de seu oponente for Nocauteado por danos causados por um ataque deste Pokémon, pegue mais 1 card de Prêmio.",
				'de-de': "{title}: Wenn das Pokémon deines Gegners durch Schaden eines Angriffs dieses Pokémon kampfunfähig wird, nimm 1 zusätzliche Preiskarte."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Wrapped in Wind",
				'fr-fr': "Enveloppement Éolien",
				'es-es': "Envuelto en Viento",
				'it-it': "Ventavvolto",
				'pt-br': "Embrulhado no Vento",
				'de-de': "Windhülle"
			},
			effect: {
				'en-us': "Attach up to 2 basic Energy cards from your hand to this Pokémon.",
				'fr-fr': "Attachez jusqu'à 2 cartes Énergie de base de votre main à ce Pokémon.",
				'es-es': "Une hasta 2 cartas de Energía Básica de tu mano a este Pokémon.",
				'it-it': "Assegna a questo Pokémon fino a due carte Energia base dalla tua mano.",
				'pt-br': "Ligue até 2 cards de Energia básica da sua mão a este Pokémon.",
				'de-de': "Lege bis zu 2 Basis-Energiekarten von deiner Hand an dieses Pokémon an."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Heavy Impact",
				'fr-fr': "Gros Impact",
				'es-es': "Impacto Pesado",
				'it-it': "Impatto Pesante",
				'pt-br': "Impacto Pesado",
				'de-de': "Schwerer Einschlag"
			},

			damage: 150,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "It is said to make its home somewhere in the sea. It guides crews of shipwrecks to shore.",
	},

	thirdParty: {
		cardmarket: 282719,
		tcgplayer: 98088
	}
}

export default card
