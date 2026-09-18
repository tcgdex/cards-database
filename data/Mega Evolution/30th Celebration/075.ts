import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "Being consumed in Chandelure's flame burns up the spirit, leaving the body behind."
	},

	name: {
		en: "Chandelure",
		fr: "Lugulabre",
		de: "Skelabra",
		es: "Chandelure",
		it: "Chandelure",
		'es-mx': "Chandelure"
	},

	illustrator: "Yoshioka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [609],
	hp: 140,
	types: ["Psychic"],
	stage: "Stage2",

	attacks: [{
		name: {
			en: "Eerie Glow",
			fr: "Lueur Sinistre",
			de: "Gruselglühen",
			es: "Resplandor Sobrecogedor",
			it: "Lucemistero",
			'es-mx': "Resplandor Inquietante"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Burned and Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé et Confus.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt und verwirrt.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido y Quemado.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato e confuso.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Confundido y Quemado."
		},

		damage: 130,
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907682,
				tcgplayer: 716471
			}
		}
	],
}

export default card