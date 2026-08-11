import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,


	name: {
		'en-us': "Krookodile ex",
		'fr-fr': "Crocorible-ex",
		'es-es': "Krookodile ex",
		'es-mx': "Krookodile ex",
		'de-de': "Rabigator-ex",
		'it-it': "Krookodile-ex",
		'pt-br': "Krookodile ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [553],
	hp: 320,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Krokorok"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Corner",
			'fr-fr': "Coinçage",
			'es-es': "Arrinconar",
			'es-mx': "Arrinconar",
			'de-de': "Bedrängen",
			'it-it': "Trappola",
			'pt-br': "Quina"
		},

		cost: ["Darkness", "Colorless"],
		damage: 80,

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'es-mx': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar."
		}
	}, {
		name: {
			'en-us': "Strong Bite",
			'fr-fr': "Morsure Vigoureuse",
			'es-es': "Mordisco Firme",
			'es-mx': "Mordida Poderosa",
			'de-de': "Kraftvoller Biss",
			'it-it': "Fortemorso",
			'pt-br': "Mordida Mordaz"
		},

		cost: ["Darkness", "Darkness", "Colorless"],
		damage: "140+",

		effect: {
			'en-us': "If this Pokémon has a Pokémon Tool attached, this attack does 140 more damage.",
			'fr-fr': "Si un Outil Pokémon est attaché à ce Pokémon, cette attaque inflige 140 dégâts supplémentaires.",
			'es-es': "Si este Pokémon tiene una Herramienta Pokémon unida, este ataque hace 140 puntos de daño más.",
			'es-mx': "Si este Pokémon tiene alguna Herramienta Pokémon unida, este ataque hace 140 puntos de daño más.",
			'de-de': "Wenn an dieses Pokémon 1 Pokémon-Ausrüstung angelegt ist, fügt diese Attacke 140 Schadenspunkte mehr zu.",
			'it-it': "Se questo Pokémon ha una carta Oggetto Pokémon assegnata, questo attacco infligge 140 danni in più.",
			'pt-br': "Se este Pokémon tiver uma Ferramenta Pokémon ligada a ele, este ataque causará 140 pontos de dano a mais."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 886447,
				tcgplayer: 693504
			}
		},
	],
}

export default card
