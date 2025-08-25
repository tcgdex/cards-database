import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Araquanid",
		fr: "Tarenbulle",
		es: "Araquanid",
		it: "Araquanid",
		pt: "Araquanid",
		de: "Aranestro"
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
		en: "Dewpider",
		fr: "Araqua",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Bubble",
				fr: "Écume",
				es: "Burbuja",
				it: "Bolla",
				pt: "Bolha",
				de: "Blubber"
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
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bubble Trap",
				fr: "Piège d’Écume",
				es: "Trampa Burbuja",
				it: "Bollatrappola",
				pt: "Arapuca de Bolha",
				de: "Blasenfalle"
			},
			effect: {
				en: "If 1 of your Pokémon used Bubble during your last turn, this attack does 80 more damage.",
				fr: "Si l’un de vos Pokémon a utilisé Écume pendant votre dernier tour, cette attaque inflige 80 dégâts supplémentaires.",
				es: "Si 1 de tus Pokémon usó Burbuja durante tu último turno, este ataque hace 80 puntos de daño más.",
				it: "Se uno dei tuoi Pokémon ha usato Bolla durante il tuo ultimo turno, questo attacco infligge 80 danni in più.",
				pt: "Se 1 dos seus Pokémon usou Bolha durante a sua última vez de jogar, este ataque causará 80 pontos de dano a mais.",
				de: "Wenn 1 deiner Pokémon während deines letzten Zuges Blubber eingesetzt hat, fügt diese Attacke 80 Schadenspunkte mehr zu."
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

	thirdParty: {
		cardmarket: 355552,
		tcgplayer: 165684
	}
}

export default card
