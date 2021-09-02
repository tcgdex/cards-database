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
		en: "Tropius",
		fr: "Tropius",
		es: "Tropius",
		it: "Tropius",
		pt: "Tropius",
		de: "Tropius"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	stage: "Basic",
	illustrator: "Oswaldo KATO",

	attacks: [{
		name: {
			en: "Rally Back",
			fr: "Répercussions",
			es: "Apoyo Vengativo",
			it: "Radunata Rinforzi",
			pt: "Rally Back",
			de: "Aufholjagd"
		},

		effect: {
			en: "If any of your Pokémon were Knocked Out by damage from an attack from your opponent’s Pokémon during their last turn, this attack does 90 more damage.",
			fr: "Si au moins l’un de vos Pokémon a été mis K.O. par les dégâts d’une attaque d’un Pokémon de votre adversaire pendant son dernier tour, cette attaque inflige 90 dégâts supplémentaires.",
			es: "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque de los Pokémon de tu rival durante su último turno, este ataque hace 90 puntos de daño más.",
			it: "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario durante il suo ultimo turno, questo attacco infligge 90 danni in più.",
			pt: "If any of your Pokémon were Knocked Out by damage from an attack from your opponent’s Pokémon during their last turn, this attack does 90 more damage.",
			de: "Wenn mindestens 1 deiner Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke der Pokémon deines Gegners kampfunfähig wurde, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "30+",
		cost: ["Grass", "Colorless"]
	}, {
		name: {
			en: "Solar Beam",
			fr: "Lance-Soleil",
			es: "Rayo Solar",
			it: "Solarraggio",
			pt: "Solar Beam",
			de: "Solarstrahl"
		},

		damage: 100,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card