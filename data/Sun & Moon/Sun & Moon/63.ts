import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Toxapex",
		fr: "Prédastérie",
		es: "Toxapex",
		it: "Toxapex",
		pt: "Toxapex",
		de: "Aggrostella"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		748,
	],

	hp: 110,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Mareanie",
		fr: "Vorastérie",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Toxic Spikes",
				fr: "Pics Toxik",
				es: "Púas Tóxicas",
				it: "Fielepunte",
				pt: "Espinhos Tóxicos",
				de: "Giftspitzen"
			},
			effect: {
				en: "Whenever your opponent’s Active Pokémon retreats, their new Active Pokémon is Poisoned.",
				fr: "Lorsque le Pokémon Actif de votre adversaire bat en retraite, son nouveau Pokémon Actif est Empoisonné.",
				es: "Cada vez que el Pokémon Activo de tu rival se retire, su nuevo Pokémon Activo pasa a estar Envenenado.",
				it: "Ogni volta che il Pokémon attivo del tuo avversario si ritira, il suo nuovo Pokémon attivo viene avvelenato.",
				pt: "Sempre que o Pokémon Ativo do seu oponente recuar, o novo Pokémon Ativo dele(a) será Envenenado.",
				de: "Jedes Mal, wenn sich das Aktive Pokémon deines Gegners zurückzieht, ist sein neues Aktives Pokémon vergiftet."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Venoshock",
				fr: "Choc Venin",
				es: "Carga Tóxica",
				it: "Velenoshock",
				pt: "Venochoque",
				de: "Giftschock"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is Poisoned, this attack does 50 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 50 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival está Envenenado, este ataque hace 50 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario è avvelenato, questo attacco infligge 50 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente estiver Envenenado, este ataque causará 50 pontos de dano a mais.",
				de: "Wenn das Aktive Pokémon deines Gegners vergiftet ist, fügt diese Attacke 50 Schadenspunkte mehr zu."
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

	retreat: 3,

	thirdParty: {
		cardmarket: 295374
	}
}

export default card
