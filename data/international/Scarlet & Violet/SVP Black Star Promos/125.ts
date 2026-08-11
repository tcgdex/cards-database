import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [936],
	set: Set,

	name: {
		'en-us': "Armarouge ex",
		'fr-fr': "Carmadura-ex",
		'es-es': "Armarouge ex",
		'it-it': "Armarouge-ex",
		'pt-br': "Armarouge ex",
		'de-de': "Crimanzo-ex"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 260,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Charcadet",
		'fr-fr': "Charbambin",
		'es-es': "Charcadet",
		'it-it': "Charcadet",
		'pt-br': "Charcadet",
		'de-de': "Knarbon"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Crimson Armor",
			'fr-fr': "Armure Carmin",
			'es-es': "Armadura Carmesí",
			'it-it': "Rossocorazza",
			'pt-br': "Armadura Carmesim",
			'de-de': "Feuerrote Rüstung"
		},

		effect: {
			'en-us': "If this Pokémon has full HP, it takes 80 less damage from attacks from your opponent's Pokémon (after applying Weakness and Resistance).",
			'fr-fr': "Si ce Pokémon a tous ses PV, il subit 80 dégâts de moins provenant des attaques des Pokémon de votre adversaire (après application de la Faiblesse et de la Résistance).",
			'es-es': "Si este Pokémon tiene todos sus PS, los ataques de los Pokémon de tu rival le hacen 80 puntos de daño menos (después de aplicar Debilidad y Resistencia).",
			'it-it': "Se questo Pokémon ha tutti i PS, subisce 80 danni in meno dagli attacchi dei Pokémon del tuo avversario, dopo aver applicato debolezza e resistenza.",
			'pt-br': "Se este Pokémon tiver PS cheio, receberá 80 pontos de dano a menos de ataques dos Pokémon do seu oponente (depois de aplicar Fraqueza e Resistência).",
			'de-de': "Wenn dieses Pokémon volle KP hat, werden ihm durch Attacken von Pokémon deines Gegners 80 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Scorching Bazooka",
			'fr-fr': "Bazooka Incandescent",
			'es-es': "Pirobazuca",
			'it-it': "Bazooka Ustionante",
			'pt-br': "Bazuca Ardente",
			'de-de': "Versengende Bazooka"
		},

		effect: {
			'en-us': "This attack does 40 more damage for each {R} Energy attached to this Pokémon.",
			'fr-fr': "Cette attaque inflige 40 dégâts supplémentaires pour chaque Énergie {R} attachée à ce Pokémon.",
			'es-es': "Este ataque hace 40 puntos de daño más por cada Energía {R} unida a este Pokémon.",
			'it-it': "Questo attacco infligge 40 danni in più per ogni Energia {R} assegnata a questo Pokémon.",
			'pt-br': "Este ataque causa 40 pontos de dano a mais para cada Energia {R} ligada a este Pokémon.",
			'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte {R}-Energie 40 Schadenspunkte mehr zu."
		},

		damage: "40+"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",
	suffix: "ex",
	illustrator: "5ban Graphics",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 766667,
				tcgplayer: 547653
			},
		}
	],
}

export default card
