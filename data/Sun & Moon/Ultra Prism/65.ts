import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Rampardos",
		fr: "Charkos",
		es: "Rampardos",
		it: "Rampardos",
		pt: "Rampardos",
		de: "Rameidon"
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		409,
	],

	hp: 150,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Cranidos",
		fr: "Kranidos",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Clean Hit",
				fr: "Coup Net",
				es: "Impacto Limpio",
				it: "Colpo Pulito",
				pt: "Golpe Certeiro",
				de: "Sauberer Treffer"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is an Evolution Pokémon, this attack does 60 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 60 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è un Pokémon Evoluzione, questo attacco infligge 60 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon de Evolução, este ataque causará 60 pontos de dano a mais.",
				de: "Wenn das Aktive Pokémon deines Gegners ein Entwicklungs-Pokémon ist, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "60+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Wild Crash",
				fr: "Collision Agitée",
				es: "Impacto Salvaje",
				it: "Schianto Selvaggio",
				pt: "Batida Violenta",
				de: "Wilder Einschlag"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is a Basic Pokémon, it is Knocked Out.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon de base, il est mis K.O.",
				es: "Si el Pokémon Activo de tu rival es un Pokémon Básico, queda Fuera de Combate.",
				it: "Se il Pokémon attivo del tuo avversario è un Pokémon Base, viene messo KO.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon Básico, ele será Nocauteado.",
				de: "Wenn das Aktive Pokémon deines Gegners ein Basis-Pokémon ist, ist es kampfunfähig."
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 315993,
		tcgplayer: 157682
	}
}

export default card
