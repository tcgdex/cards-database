import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [973],
	set: Set,

	name: {
		en: "Flamigo ex",
		fr: "Flamenroule-ex",
		es: "Flamigo ex",
		it: "Flamigo-ex",
		pt: "Flamigo ex",
		de: "Flaminkno-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 200,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Precise Beak",
			fr: "Bec Précis",
			es: "Pico Preciso",
			it: "Becco Preciso",
			pt: "Bico de Precisão",
			de: "Präziser Schnabel"
		},

		effect: {
			en: "If this Pokémon and your opponent's Active Pokémon have the same amount of Energy attached, this attack does 100 more damage.",
			fr: "Si ce Pokémon et le Pokémon Actif de votre adversaire ont autant d'Énergies attachées, cette attaque inflige 100 dégâts supplémentaires.",
			es: "Si este Pokémon y el Pokémon Activo de tu rival tienen la misma cantidad de Energías unidas, este ataque hace 100 puntos de daño más.",
			it: "Se questo Pokémon e il Pokémon attivo del tuo avversario hanno la stessa quantità di Energie assegnate, questo attacco infligge 100 danni in più.",
			pt: "Se este Pokémon e o Pokémon Ativo do seu oponente tiverem a mesma quantidade de Energia ligada a eles, este ataque causará 100 pontos de dano a mais.",
			de: "Wenn an dieses Pokémon genauso viel Energie angelegt ist wie an das Aktive Pokémon deines Gegners, fügt diese Attacke 100 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Brave Bird",
			fr: "Rapace",
			es: "Pájaro Osado",
			it: "Baldeali",
			pt: "Pássaro Bravo",
			de: "Sturzflug"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 200
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "N-DESIGN Inc."
}

export default card
