import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Chimecho",
		fr: "Éoko",
		es: "Chimecho",
		it: "Chimecho",
		pt: "Chimecho",
		de: "Palimpalim"
	},

	illustrator: "Kanako Eo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		358,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Bell of Silence",
				fr: "Cloche du Silence",
				es: "Campana de Silencio",
				it: "Campana del Silenzio",
				pt: "Sino do Silêncio",
				de: "Glocke des Schweigens"
			},
			effect: {
				en: "Your opponent can’t play any Pokémon that has an Ability from their hand during their next turn.",
				fr: "Votre adversaire ne peut pas jouer de Pokémon ayant un talent de sa main pendant son prochain tour.",
				es: "Tu rival no puede jugar ningún Pokémon que tenga una habilidad de su mano durante su próximo turno.",
				it: "Il tuo avversario non può giocare nessun Pokémon che abbia un’abilità dalle carte che ha in mano durante il suo prossimo turno.",
				pt: "Seu oponente não poderá jogar nenhum Pokémon que tiver uma Habilidade da própria mão durante a próxima vez dele(a) jogar.",
				de: "Dein Gegner kann während seines nächsten Zuges kein Pokémon, das eine Fähigkeit hat, aus seiner Hand spielen."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 311893,
		tcgplayer: 149066
	}
}

export default card
