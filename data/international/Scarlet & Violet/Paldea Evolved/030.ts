import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [663],
	set: Set,

	name: {
		'fr-fr': "Flambusard",
		'en-us': "Talonflame",
		'es-es': "Talonflame",
		'it-it': "Talonflame",
		'pt-br': "Talonflame",
		'de-de': "Fiaro"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],
	evolveFrom: {
		'fr-fr': "Braisillon",
		'en-us': "Fletchinder",
		'es-es': "Fletchinder",
		'it-it': "Fletchinder",
		'pt-br': "Fletchinder",
		'de-de': "Dartignis"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Fire"],

		name: {
			'fr-fr': "Serre",
			'en-us': "Clutch",
			'es-es': "Embrague",
			'it-it': "Grinfie",
			'pt-br': "Agarramento",
			'de-de': "Greifer"
		},

		effect: {
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 50
	}, {
		cost: ["Fire"],

		name: {
			'fr-fr': "Brise Incandescente",
			'en-us': "Fiery Breeze",
			'es-es': "Brisa Ígnea",
			'it-it': "Brezza Incandescente",
			'pt-br': "Brisa Chamuscante",
			'de-de': "Feurige Brise"
		},

		effect: {
			'fr-fr': "Si au moins un marqueur de dégâts est placé sur ce Pokémon, cette attaque inflige 90 dégâts supplémentaires.",
			'en-us': "If this Pokémon has any damage counters on it, this attack does 90 more damage.",
			'es-es': "Si este Pokémon tiene algún contador de daño sobre él, este ataque hace 90 puntos de daño más.",
			'it-it': "Se questo Pokémon ha dei segnalini danno, questo attacco infligge 90 danni in più.",
			'pt-br': "Se este Pokémon tiver algum contador de dano nele, este ataque causará 90 pontos de dano a mais.",
			'de-de': "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "70+"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715503,
				tcgplayer: 497442,
				cardtrader: 248327
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715503,
				tcgplayer: 497442,
				cardtrader: 248327
			}
		},
	],

	illustrator: "Nisota Niso",

	description: {
		'en-us': "It has top-notch flying capabilities. It flies around easily, even while carrying prey that weighs more than 220 lbs.",
	},
}

export default card
