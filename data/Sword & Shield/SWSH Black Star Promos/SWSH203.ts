import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [197],
	set: Set,

	name: {
		fr: "Noctali V",
		de: "Nachtara V",
		es: "Umbreon V",
		pt: "Umbreon V",
		it: "Umbreon V",
		en: "Umbreon V"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 200,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Darkness"],

		name: {
			fr: "Regard Noir",
			de: "Horrorblick",
			es: "Mal de Ojo",
			pt: "Olhar Malvado",
			it: "Malosguardo",
			en: "Mean Look"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			en: "During your opponent's next turn, the Defending Pokémon can't retreat."
		},

		damage: 30
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			fr: "Lame Lune",
			de: "Mondscheinklinge",
			es: "Tajo Luz Lunar",
			pt: "Lâmina do Luar",
			it: "Lama Lucelunare",
			en: "Moonlight Blade"
		},

		effect: {
			fr: "Si au moins un marqueur de dégâts est placé sur ce Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
			de: "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, fügt diese Attacke 80 Schadenspunkte mehr zu.",
			es: "Si este Pokémon tiene algún contador de daño sobre él, este ataque hace 80 puntos de daño más.",
			pt: "Se este Pokémon tiver algum contador de dano nele, este ataque causará 80 pontos de dano a mais.",
			it: "Se questo Pokémon ha dei segnalini danno, questo attacco infligge 80 danni in più.",
			en: "If this Pokémon has any damage counters on it, this attack does 80 more damage."
		},

		damage: "80+"
	}],

	retreat: 2,
	regulationMark: "E",

	thirdParty: {
		cardmarket: 609462
	}
}

export default card