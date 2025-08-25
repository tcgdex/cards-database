import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Arbok",
		fr: "Arbok",
		es: "Arbok",
		it: "Arbok",
		pt: "Arbok",
		de: "Arbok"
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
		en: "Ekans",
		fr: "Abo",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Wrap",
				fr: "Ligotage",
				es: "Constricción",
				it: "Avvolgibotta",
				pt: "Embrulho",
				de: "Wickel"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Heavy Choke",
				fr: "Étouffement Lourd",
				es: "Fuerte Estrujón",
				it: "Stretta Poderosa",
				pt: "Asfixia Pesada",
				de: "Würger"
			},
			effect: {
				en: "If this Pokémon used Wrap during your last turn, this attack does 120 more damage.",
				fr: "Si ce Pokémon a utilisé Ligotage pendant votre dernier tour, cette attaque inflige 120 dégâts supplémentaires.",
				es: "Si este Pokémon usó Constricción durante tu último turno, este ataque hace 120 puntos de daño más.",
				it: "Se questo Pokémon ha usato Avvolgibotta durante il tuo ultimo turno, questo attacco infligge 120 danni in più.",
				pt: "Se este Pokémon usou Embrulho durante a sua última vez de jogar, este ataque causará 120 pontos de dano a mais.",
				de: "Wenn dieses Pokémon während deines letzten Zuges Wickel eingesetzt hat, fügt diese Attacke 120 Schadenspunkte mehr zu."
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

	thirdParty: {
		cardmarket: 372351,
		tcgplayer: 189163
	}
}

export default card
