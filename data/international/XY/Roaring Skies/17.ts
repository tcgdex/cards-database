import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Articuno",
		'fr-fr': "Artikodin",
		'es-es': "Articuno",
		'it-it': "Articuno",
		'pt-br': "Articuno",
		'de-de': "Arktos"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		144,
	],

	hp: 120,

	types: [
		"Water",
	],

	stage: "Basic",

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
				"Water",
			],
			name: {
				'en-us': "Chilling Sigh",
				'fr-fr': "Soupir Polaire",
				'es-es': "Suspiro Frío",
				'it-it': "Gelidospiro",
				'pt-br': "Suspiro Refrescante",
				'de-de': "Abkühlender Seufzer"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Tri Edge",
				'fr-fr': "Triple Tranchant",
				'es-es': "Triple Filo",
				'it-it': "Tritaglio",
				'pt-br': "Três Gumes",
				'de-de': "Dreispitzige Klinge"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 40 more damage for each heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 40 dégâts supplémentaires pour chaque côté face.",
				'es-es': "Lanza 3 monedas. Este ataque hace 40 puntos de daño más por cada cara.",
				'it-it': "Lancia tre volte una moneta. Ogni volta che esce testa, questo attacco infligge 40 danni in più.",
				'pt-br': "Jogue 3 moedas. Este ataque causa 40 de danos adicionais para cada cara.",
				'de-de': "Wirf 3 Münzen. Dieser Angriff fügt 40 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "A legendary bird Pokémon that is said to appear to doomed people who are lost in icy mountains.",
	},

	thirdParty: {
		cardmarket: 282684,
		tcgplayer: 98053
	}
}

export default card
