import { Card } from "models/database/card"
import Set from "../Brilliant Stars Trainer Gallery"

const card: Card = {
	dexId: [197],
	set: Set,

	name: {
		'en-us': "Umbreon V",
		'fr-fr': "Noctali V",
		'es-es': "Umbreon V",
		'it-it': "Umbreon V",
		'pt-br': "Umbreon V",
		'de-de': "Nachtara V"
	},

	illustrator: "Ligton",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 200,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Mean Look",
			'fr-fr': "Regard Noir",
			'es-es': "Mal de Ojo",
			'it-it': "Malosguardo",
			'pt-br': "Olhar Malvado",
			'de-de': "Horrorblick"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 30
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'en-us': "Moonlight Blade",
			'fr-fr': "Lame Lune",
			'es-es': "Tajo Luz Lunar",
			'it-it': "Lama Lucelunare",
			'pt-br': "Lâmina do Luar",
			'de-de': "Mondscheinklinge"
		},

		effect: {
			'en-us': "If this Pokémon has any damage counters on it, this attack does 80 more damage.",
			'fr-fr': "Si au moins un marqueur de dégâts est placé sur ce Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
			'es-es': "Si este Pokémon tiene algún contador de daño sobre él, este ataque hace 80 puntos de daño más.",
			'it-it': "Se questo Pokémon ha dei segnalini danno, questo attacco infligge 80 danni in più.",
			'pt-br': "Se este Pokémon tiver algum contador de dano nele, este ataque causará 80 pontos de dano a mais.",
			'de-de': "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 608754,
				tcgplayer: 264207
			}
		},
	],
}

export default card
