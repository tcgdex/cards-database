import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Morpeko",
		fr: "Morpeko",
		es: "Morpeko",
		it: "Morpeko",
		pt: "Morpeko",
		de: "Morpeko"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Attack the Wound",
				fr: "Défi de la Plaie",
				es: "Ataque a la Herida",
				it: "Attacco Spietato",
				pt: "Atacar a Ferida",
				de: "Wundschmerz"
			},
			effect: {
				en: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 50 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire a déjà des marqueurs de dégâts, cette attaque inflige 50 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 50 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 50 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente já tiver algum contador de dano nele, este ataque causará 50 pontos de dano a mais.",
				de: "Wenn auf dem Aktiven Pokémon deines Gegners bereits mindestens 1 Schadensmarke liegt, fügt diese Attacke 50 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		en: "As it eats the seeds stored up in its pocket-like pouches, this Pokémon is not just satisfying its constant hunger. It's also generating electricity."
	},

	dexId: [877],

	thirdParty: {
		cardmarket: 436519,
		tcgplayer: 208376
	}
}

export default card
