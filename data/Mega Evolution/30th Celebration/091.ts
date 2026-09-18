import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "The light of the moon changed Eevee's genetic structure. It lurks in the darkness, waiting for prey."
	},

	name: {
		en: "Umbreon",
		fr: "Noctali",
		de: "Nachtara",
		es: "Umbreon",
		it: "Umbreon",
		'es-mx': "Umbreon"
	},

	illustrator: "Iori Suzuki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [197],
	hp: 110,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Retaliate",
			fr: "Vengeance",
			de: "Heimzahlung",
			es: "Represalia",
			it: "Nemesi",
			'es-mx': "Represalia"
		},

		effect: {
			en: "If any of your Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 100 more damage.",
			fr: "Si au moins l'un de vos Pokémon a été mis K.O. par les dégâts d'une attaque pendant le dernier tour de votre adversaire, cette attaque inflige 100 dégâts supplémentaires.",
			de: "Wenn mindestens 1 deiner Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke kampfunfähig wurde, fügt diese Attacke 100 Schadenspunkte mehr zu.",
			es: "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 100 puntos de daño más.",
			it: "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni inflitti da un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge 100 danni in più.",
			'es-mx': "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 100 puntos de daño más."
		},

		damage: "30+",
		cost: ["Darkness"]
	}, {
		name: {
			en: "Darkness Fang",
			fr: "Croc Obscur",
			de: "Fänge der Dunkelheit",
			es: "Colmillo de Oscuridad",
			it: "Oscurizanna",
			'es-mx': "Colmillo de Oscuridad"
		},

		damage: 100,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907698,
				tcgplayer: 696679
			}
		}
	],
}

export default card