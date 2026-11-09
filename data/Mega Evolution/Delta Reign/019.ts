import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Arcanine",
		fr: "Arcanin",
		de: "Arkani",
		es: "Arcanine",
		it: "Arcanine",
		pt: "Arcanine",
		'es-mx': "Arcanine"
	},

	illustrator: "Felicia Chen",
	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Fervent Fang",
			fr: "Croc Enthousiaste",
			de: "Feurige Fänge",
			es: "Colmillo Ferviente",
			it: "Zanna Fervente",
			pt: "Caninos Cálidos",
			'es-mx': "Colmillo Ferviente"
		},

		effect: {
			en: "If your opponent has 4 or fewer Prize cards remaining, this attack does 90 more damage.",
			fr: "S'il reste 4 cartes Récompense ou moins à votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
			de: "Wenn dein Gegner 4 oder weniger verbleibende Preiskarten hat, fügt diese Attacke 90 Schadenspunkte mehr zu.",
			es: "Si a tu rival le quedan 4 cartas de Premio o menos, este ataque hace 90 puntos de daño más.",
			it: "Se il tuo avversario ha quattro o meno carte Premio rimanenti, questo attacco infligge 90 danni in più.",
			pt: "Se o seu oponente tiver 4 ou menos cartas de Prêmio restantes, este ataque causará 90 pontos de dano a mais.",
			'es-mx': "Si a tu rival le quedan 4 cartas de Premio o menos, este ataque hace 90 puntos de daño más."
		},

		damage: "90+",
		cost: ["Fire", "Colorless", "Colorless"]
	}, {
		name: {
			en: "Heat Tackle",
			fr: "Charge Énergétique",
			de: "Hitze-Tackle",
			es: "Placaje Ardiente",
			it: "Calorazione",
			pt: "Golpe de Colisão Aquecido",
			'es-mx': "Tacleada Ígnea"
		},

		effect: {
			en: "This Pokémon also does 50 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 50 dégâts.",
			de: "Dieses Pokémon fügt auch sich selbst 50 Schadenspunkte zu.",
			es: "Este Pokémon también se hace 50 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 50 danni a se stesso.",
			pt: "Este Pokémon também causa 50 pontos de dano a si mesmo.",
			'es-mx': "Este Pokémon también se hace 50 puntos de daño a sí mismo."
		},

		damage: 200,
		cost: ["Fire", "Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 4,

	thirdParty: {
		tcgplayer: 726517,
		cardmarket: 918833
	}
}

export default card