import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Umbreon V",
		fr: "Noctali V",
		es: "Umbreon V",
		it: "Umbreon V",
		pt: "Umbreon V",
		de: "Nachtara V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 200,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Mean Look",
			fr: "Regard Noir",
			es: "Mal de Ojo",
			it: "Malosguardo",
			pt: "Olhar Malvado",
			de: "Horrorblick"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 30
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Moonlight Blade",
			fr: "Lame Lune",
			es: "Tajo Luz Lunar",
			it: "Lama Lucelunare",
			pt: "Lâmina do Luar",
			de: "Mondscheinklinge"
		},

		effect: {
			en: "If this Pokémon has any damage counters on it, this attack does 80 more damage.",
			fr: "Si au moins un marqueur de dégâts est placé sur ce Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
			es: "Si este Pokémon tiene algún contador de daño sobre él, este ataque hace 80 puntos de daño más.",
			it: "Se questo Pokémon ha dei segnalini danno, questo attacco infligge 80 danni in più.",
			pt: "Se este Pokémon tiver algum contador de dano nele, este ataque causará 80 pontos de dano a mais.",
			de: "Wenn auf diesem Pokémon mindestens 1 Schadensmarke liegt, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card