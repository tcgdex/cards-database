import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Golduck",
		fr: "Akwakwak",
		es: "Golduck",
		it: "Golduck",
		pt: "Golduck",
		de: "Entoron"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Stage1",
	illustrator: "Kyoko Umemoto",

	attacks: [{
		name: {
			en: "Psybeam",
			fr: "Rafale Psy",
			es: "Psicorrayo",
			it: "Psicoraggio",
			pt: "Psybeam",
			de: "Psystrahl"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "Your opponent's Active Pokémon is now Confused.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Surf",
			fr: "Surf",
			es: "Surf",
			it: "Surf",
			pt: "Surf",
			de: "Surfer"
		},

		damage: 70,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,

	evolveFrom: {
		en: "Psyduck",
		fr: "Psykokwak",
		es: "Psyduck",
		it: "Psyduck",
		pt: "Psyduck",
		de: "Enton"
	},

	description: {
		en: "A professional swimmer, it can continue swimming for two days straight by waving its long tail skillfully."
	},

	dexId: [55],
	regulationMark: "E",

	thirdParty: {
		cardmarket: 574049,
		tcgplayer: 246818
	}
}

export default card
