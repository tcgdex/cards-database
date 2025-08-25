import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Toucannon",
		fr: "Bazoucan",
		es: "Toucannon",
		it: "Toucannon",
		pt: "Toucannon",
		de: "Tukanon"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		733,
	],

	hp: 140,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Trumbeak",
		fr: "Piclairon",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Echoed Voice",
				fr: "Écho",
				es: "Eco Voz",
				it: "Echeggiavoce",
				pt: "Voz Ecoante",
				de: "Widerhall"
			},
			effect: {
				en: "During your next turn, this Pokémon’s Echoed Voice attack does 60 more damage (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, l’attaque Écho de ce Pokémon inflige 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				es: "Durante tu próximo turno, el ataque Eco Voz de este Pokémon hace 60 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
				it: "Durante il tuo prossimo turno, l’attacco Echeggiavoce di questo Pokémon infligge 60 danni in più, prima di aver applicato debolezza e resistenza.",
				pt: "Durante a sua próxima vez de jogar, o ataque Voz Ecoante deste Pokémon causará 60 pontos de dano a mais (antes de aplicar Fraqueza e Resistência).",
				de: "Während deines nächsten Zuges fügt die Attacke Widerhall dieses Pokémon 60 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 60,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Beak Blast",
				fr: "Bec-Canon",
				es: "Pico Cañón",
				it: "Cannonbecco",
				pt: "Bico Explosivo",
				de: "Schnabelkanone"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Burned.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Quemado.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene bruciato.",
				pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Queimado.",
				de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt verbrannt."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
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

	thirdParty: {
		cardmarket: 295420,
		tcgplayer: 126980
	}
}

export default card
