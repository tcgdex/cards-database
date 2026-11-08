import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Arbok",
		'fr-fr': "Arbok",
		'es-es': "Arbok",
		'it-it': "Arbok",
		'pt-br': "Arbok",
		'de-de': "Arbok"
	},

	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		24,
	],

	hp: 120,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Ekans",
		'fr-fr': "Abo",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Wrap",
				'fr-fr': "Ligotage",
				'es-es': "Constricción",
				'it-it': "Avvolgibotta",
				'pt-br': "Embrulho",
				'de-de': "Wickel"
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
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Heavy Choke",
				'fr-fr': "Étouffement Lourd",
				'es-es': "Fuerte Estrujón",
				'it-it': "Stretta Poderosa",
				'pt-br': "Asfixia Pesada",
				'de-de': "Würger"
			},
			effect: {
				'en-us': "If this Pokémon used Wrap during your last turn, this attack does 120 more damage.",
				'fr-fr': "Si ce Pokémon a utilisé Ligotage pendant votre dernier tour, cette attaque inflige 120 dégâts supplémentaires.",
				'es-es': "Si este Pokémon usó Constricción durante tu último turno, este ataque hace 120 puntos de daño más.",
				'it-it': "Se questo Pokémon ha usato Avvolgibotta durante il tuo ultimo turno, questo attacco infligge 120 danni in più.",
				'pt-br': "Se este Pokémon usou Embrulho durante a sua última vez de jogar, este ataque causará 120 pontos de dano a mais.",
				'de-de': "Wenn dieses Pokémon während deines letzten Zuges Wickel eingesetzt hat, fügt diese Attacke 120 Schadenspunkte mehr zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The latest research has determined that there are over 20 possible arrangements of the patterns on its stomach.",
	},

	thirdParty: {
		cardmarket: 372351,
		tcgplayer: 189163
	}
}

export default card
