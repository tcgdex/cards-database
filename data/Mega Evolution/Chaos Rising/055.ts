import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886447,
				tcgplayer: 693504
			}
		},
	],

	name: {
		en: "Krookodile ex",
		fr: "Crocorible-ex",
		es: "Krookodile ex",
		'es-mx': "Krookodile ex",
		de: "Rabigator-ex",
		it: "Krookodile-ex",
		pt: "Krookodile ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [553],
	hp: 320,
	types: ["Darkness"],

	evolveFrom: {
		en: "Krokorok"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Corner",
			fr: "Coinçage",
			es: "Arrinconar",
			'es-mx': "Arrinconar",
			de: "Bedrängen",
			it: "Trappola",
			pt: "Quina"
		},

		cost: ["Darkness", "Colorless"],
		damage: 80,

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'es-mx': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar."
		}
	}, {
		name: {
			en: "Strong Bite",
			fr: "Morsure Vigoureuse",
			es: "Mordisco Firme",
			'es-mx': "Mordida Poderosa",
			de: "Kraftvoller Biss",
			it: "Fortemorso",
			pt: "Mordida Mordaz"
		},

		cost: ["Darkness", "Darkness", "Colorless"],
		damage: "140+",

		effect: {
			en: "If this Pokémon has a Pokémon Tool attached, this attack does 140 more damage.",
			fr: "Si un Outil Pokémon est attaché à ce Pokémon, cette attaque inflige 140 dégâts supplémentaires.",
			es: "Si este Pokémon tiene una Herramienta Pokémon unida, este ataque hace 140 puntos de daño más.",
			'es-mx': "Si este Pokémon tiene alguna Herramienta Pokémon unida, este ataque hace 140 puntos de daño más.",
			de: "Wenn an dieses Pokémon 1 Pokémon-Ausrüstung angelegt ist, fügt diese Attacke 140 Schadenspunkte mehr zu.",
			it: "Se questo Pokémon ha una carta Oggetto Pokémon assegnata, questo attacco infligge 140 danni in più.",
			pt: "Se este Pokémon tiver uma Ferramenta Pokémon ligada a ele, este ataque causará 140 pontos de dano a mais."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I",
}

export default card