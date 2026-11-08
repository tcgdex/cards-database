import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Araquanid",
		'fr-fr': "Tarenbulle",
		'es-es': "Araquanid",
		'it-it': "Araquanid",
		'pt-br': "Araquanid",
		'de-de': "Aranestro"
	},

	illustrator: "kodama",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		752,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Dewpider",
		'fr-fr': "Araqua",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Bubble",
				'fr-fr': "Écume",
				'es-es': "Burbuja",
				'it-it': "Bolla",
				'pt-br': "Bolha",
				'de-de': "Blubber"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bubble Trap",
				'fr-fr': "Piège d’Écume",
				'es-es': "Trampa Burbuja",
				'it-it': "Bollatrappola",
				'pt-br': "Arapuca de Bolha",
				'de-de': "Blasenfalle"
			},
			effect: {
				'en-us': "If 1 of your Pokémon used Bubble during your last turn, this attack does 80 more damage.",
				'fr-fr': "Si l’un de vos Pokémon a utilisé Écume pendant votre dernier tour, cette attaque inflige 80 dégâts supplémentaires.",
				'es-es': "Si 1 de tus Pokémon usó Burbuja durante tu último turno, este ataque hace 80 puntos de daño más.",
				'it-it': "Se uno dei tuoi Pokémon ha usato Bolla durante il tuo ultimo turno, questo attacco infligge 80 danni in più.",
				'pt-br': "Se 1 dos seus Pokémon usou Bolha durante a sua última vez de jogar, este ataque causará 80 pontos de dano a mais.",
				'de-de': "Wenn 1 deiner Pokémon während deines letzten Zuges Blubber eingesetzt hat, fügt diese Attacke 80 Schadenspunkte mehr zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Despite what its appearance suggests, it cares for others. If it finds vulnerable, weak Pokémon, it protectively brings them into its water bubble.",
	},

	thirdParty: {
		cardmarket: 355552,
		tcgplayer: 165684
	}
}

export default card
