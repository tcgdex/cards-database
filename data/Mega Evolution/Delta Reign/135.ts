import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Golisopod ex",
		fr: "Méga-Sarmuraï‑ex",
		de: "Mega-Tectass-ex",
		es: "Mega-Golisopod ex",
		it: "Mega Golisopod-ex",
		pt: "Mega Golisopod ex",
		'es-mx': "Mega-Golisopod ex"
	},

	illustrator: "nagimiso",
	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 340,
	types: ["Grass"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Finishing Blow",
			fr: "Coup de Grâce",
			de: "Finalhieb",
			es: "Golpe de Gracia",
			it: "Ultimocolpo",
			pt: "Golpe Final",
			'es-mx': "Golpe Definitivo"
		},

		effect: {
			en: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 160 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire a déjà au moins un marqueur de dégâts, cette attaque inflige 160 dégâts supplémentaires.",
			de: "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 160 Schadenspunkte mehr zu.",
			es: "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 160 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 160 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente já tiver algum contador de dano nele, este ataque causará 160 pontos de dano a mais.",
			'es-mx': "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 160 puntos de daño más."
		},

		damage: "60+",
		cost: ["Grass"]
	}, {
		name: {
			en: "Quadruple Hold",
			fr: "Prise Quadruple",
			de: "Vierergriff",
			es: "Agarre Cuádruple",
			it: "Presa Quadrupla",
			pt: "Atracada Quádrupla",
			'es-mx': "Sujeción Cuádruple"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'es-mx': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse."
		},

		damage: 160,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,

	thirdParty: {
		tcgplayer: 727592,
		cardmarket: 918820
	}
}

export default card