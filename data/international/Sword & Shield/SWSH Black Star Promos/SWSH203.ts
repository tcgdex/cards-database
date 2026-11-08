import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [197],
	set: Set,

	name: {
		'fr-fr': "Noctali V",
		'de-de': "Nachtara V",
		'es-es': "Umbreon V",
		'pt-br': "Umbreon V",
		'it-it': "Umbreon V",
		'en-us': "Umbreon V"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 200,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'fr-fr': "Regard Noir",
			'de-de': "Horrorblick",
			'es-es': "Mal de Ojo",
			'pt-br': "Olhar Malvado",
			'it-it': "Malosguardo",
			'en-us': "Mean Look"
		},

		effect: {
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat."
		},

		damage: 30
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Lame Lune",
			'de-de': "Mondscheinklinge",
			'es-es': "Tajo Luz Lunar",
			'pt-br': "Lâmina do Luar",
			'it-it': "Lama Lucelunare",
			'en-us': "Moonlight Blade"
		},

		effect: {
			'fr-fr': "Si au moins un marqueur de dégâts est placé sur ce Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
			'de-de': "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, fügt diese Attacke 80 Schadenspunkte mehr zu.",
			'es-es': "Si este Pokémon tiene algún contador de daño sobre él, este ataque hace 80 puntos de daño más.",
			'pt-br': "Se este Pokémon tiver algum contador de dano nele, este ataque causará 80 pontos de dano a mais.",
			'it-it': "Se questo Pokémon ha dei segnalini danno, questo attacco infligge 80 danni in più.",
			'en-us': "If this Pokémon has any damage counters on it, this attack does 80 more damage."
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

	thirdParty: {
		cardmarket: 609462
	}
}

export default card
