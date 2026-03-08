import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [936],
	set: Set,

	name: {
		en: "Armarouge ex",
		fr: "Carmadura-ex",
		es: "Armarouge ex",
		it: "Armarouge-ex",
		pt: "Armarouge ex",
		de: "Crimanzo-ex"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 260,
	types: ["Fire"],
	evolveFrom: {
		en: "Charcadet",
		fr: "Charbambin",
		es: "Charcadet",
		it: "Charcadet",
		pt: "Charcadet",
		de: "Knarbon"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Crimson Armor",
			fr: "Armure Carmin",
			es: "Armadura Carmesí",
			it: "Rossocorazza",
			pt: "Armadura Carmesim",
			de: "Feuerrote Rüstung"
		},

		effect: {
			en: "If this Pokémon has full HP, it takes 80 less damage from attacks from your opponent's Pokémon (after applying Weakness and Resistance).",
			fr: "Si ce Pokémon a tous ses PV, il subit 80 dégâts de moins provenant des attaques des Pokémon de votre adversaire (après application de la Faiblesse et de la Résistance).",
			es: "Si este Pokémon tiene todos sus PS, los ataques de los Pokémon de tu rival le hacen 80 puntos de daño menos (después de aplicar Debilidad y Resistencia).",
			it: "Se questo Pokémon ha tutti i PS, subisce 80 danni in meno dagli attacchi dei Pokémon del tuo avversario, dopo aver applicato debolezza e resistenza.",
			pt: "Se este Pokémon tiver PS cheio, receberá 80 pontos de dano a menos de ataques dos Pokémon do seu oponente (depois de aplicar Fraqueza e Resistência).",
			de: "Wenn dieses Pokémon volle KP hat, werden ihm durch Attacken von Pokémon deines Gegners 80 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Scorching Bazooka",
			fr: "Bazooka Incandescent",
			es: "Pirobazuca",
			it: "Bazooka Ustionante",
			pt: "Bazuca Ardente",
			de: "Versengende Bazooka"
		},

		effect: {
			en: "This attack does 40 more damage for each {R} Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 40 dégâts supplémentaires pour chaque Énergie {R} attachée à ce Pokémon.",
			es: "Este ataque hace 40 puntos de daño más por cada Energía {R} unida a este Pokémon.",
			it: "Questo attacco infligge 40 danni in più per ogni Energia {R} assegnata a questo Pokémon.",
			pt: "Este ataque causa 40 pontos de dano a mais para cada Energia {R} ligada a este Pokémon.",
			de: "Diese Attacke fügt für jede an dieses Pokémon angelegte {R}-Energie 40 Schadenspunkte mehr zu."
		},

		damage: "40+"
	}],

	retreat: 2,
	regulationMark: "G",
	illustrator: "5ban Graphics"
}

export default card