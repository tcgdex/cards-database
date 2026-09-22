import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Fuecoco ex",
		fr: "Chochodile-ex",
		de: "Krokel-ex",
		es: "Fuecoco ex",
		it: "Fuecoco-ex",
		'es-mx': "Fuecoco ex"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Special illustration rare",
	category: "Pokemon",
	dexId: [909],
	hp: 210,
	types: ["Fire"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Singe",
			fr: "Roussi",
			de: "Versengung",
			es: "Quemadura",
			it: "Scottata",
			'es-mx': "Quemadura"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verbrannt.",
			es: "El Pokémon Activo de tu rival pasa a estar Quemado.",
			it: "Il Pokémon attivo del tuo avversario viene bruciato.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Quemado."
		},

		cost: ["Fire"]
	}, {
		name: {
			en: "Cheerful Flame",
			fr: "Flamme Joyeuse",
			de: "Fröhliche Flamme",
			es: "Llamarada Animada",
			it: "Fiamma Gioiosa",
			'es-mx': "Llamarada Animada"
		},

		effect: {
			en: "This attack does 70 damage for each Prize card you have taken.",
			fr: "Cette attaque inflige 70 dégâts pour chaque carte Récompense que vous avez récupérée.",
			de: "Diese Attacke fügt für jede von dir genommene Preiskarte 70 Schadenspunkte zu.",
			es: "Este ataque hace 70 puntos de daño por cada carta de Premio que hayas cogido.",
			it: "Questo attacco infligge 70 danni per ogni carta Premio che hai preso.",
			'es-mx': "Este ataque hace 70 puntos de daño por cada carta de Premio que hayas tomado."
		},

		damage: "70×",
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",
	variants: [
		{
			type: "holo",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907754,
				tcgplayer: 716229
			}
		}
	],
}

export default card
