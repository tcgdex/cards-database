import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [478],
	set: Set,

	name: {
		en: "Froslass",
		fr: "Momartik",
		es: "Froslass",
		it: "Froslass",
		pt: "Froslass",
		de: "Frosdedje"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		en: "Snorunt",
		fr: "Stalgamin",
		es: "Snorunt",
		it: "Snorunt",
		pt: "Snorunt",
		de: "Schneppke"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Frosty Jail",
			fr: "Prison Givrée",
			es: "Prisión Glacial",
			it: "Sbarregelo",
			pt: "Prisão Glacial",
			de: "Frostgefängnis"
		},

		effect: {
			en: "If you played Candice from your hand during this turn, this attack does 90 more damage, and your opponent's Active Pokémon is now Paralyzed.",
			fr: "Si vous avez joué Gladys de votre main pendant ce tour, cette attaque inflige 90 dégâts supplémentaires, et le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Si has jugado 1 carta de Inverna de tu mano durante este turno, este ataque hace 90 puntos de daño más, y el Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Se hai giocato Bianca dalla tua mano durante questo turno, questo attacco infligge 90 danni in più e il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Se você jogou Candice da sua mão durante este turno, este ataque causará 90 pontos de dano a mais e o Pokémon Ativo do seu oponente ficará Paralisado.",
			de: "Wenn du Frida während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke 90 Schadenspunkte mehr zu und das Aktive Pokémon deines Gegners ist jetzt paralysiert."
		},

		damage: "20+"
	}, {
		cost: ["Water", "Colorless"],

		name: {
			en: "Frost Breath",
			fr: "Souffle Glacé",
			es: "Vaho Gélido",
			it: "Alitogelido",
			pt: "Respiração de Gelo",
			de: "Eisesodem"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card