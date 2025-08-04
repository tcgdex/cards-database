import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Gigalith",
		fr: "Gigalithe",
		es: "Gigalith",
		it: "Gigalith",
		pt: "Gigalith",
		de: "Brockoloss"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],
	stage: "Stage2",
	illustrator: "Masakazu Fukuda",

	attacks: [{
		name: {
			en: "Guard Press",
			fr: "Pression de Garde",
			es: "Presión de Guardia",
			it: "Pressadifesa",
			pt: "Guard Press",
			de: "Schutzdruck"
		},

		effect: {
			en: "During your opponent's next turn, this Pokémon takes 50 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 50 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			es: "Durante el próximo turno de tu rival, los ataques hacen 50 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 50 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "During your opponent's next turn, this Pokémon takes 50 less damage from attacks (after applying Weakness and Resistance).",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 50 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 50,
		cost: ["Fighting"]
	}, {
		name: {
			en: "Pressure Shot",
			fr: "Tir Sous Pression",
			es: "Disparo a Presión",
			it: "Colpo Pressione",
			pt: "Pressure Shot",
			de: "Druckgeschoss"
		},

		effect: {
			en: "This Pokémon also does 10 damage to itself for each damage counter on it.",
			fr: "Ce Pokémon s'inflige aussi 10 dégâts pour chaque marqueur de dégâts placé sur lui.",
			es: "Este Pokémon también se hace 10 puntos de daño a sí mismo por cada contador de daño que tenga sobre él.",
			it: "Questo Pokémon infligge anche 10 danni a se stesso per ogni segnalino danno presente su di esso.",
			pt: "This Pokémon also does 10 damage to itself for each damage counter on it.",
			de: "Dieses Pokémon fügt für jede auf ihm liegende Schadensmarke auch sich selbst 10 Schadenspunkte zu."
		},

		damage: 180,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,

	evolveFrom: {
		en: "Boldore",
		fr: "Géolithe",
		es: "Boldore",
		it: "Boldore",
		pt: "Boldore",
		de: "Sedimantur"
	},

	description: {
		en: "Although its energy blasts can blow away a dump truck, they have a limitation— they can only be fired when the sun is out."
	},

	dexId: [526],
	regulationMark: "E",

	thirdParty: {
		cardmarket: 574136,
		tcgplayer: 246887
	}
}

export default card
