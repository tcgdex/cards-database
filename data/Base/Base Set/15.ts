import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Venusaur",
		fr: "Florizarre",
		de: "Bisaflor",
		it: "Venusaur"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		3,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Ivysaur",
		it: "Ivysaur"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Energy Trans",
				fr: "Transfert d'Énergie",
				de: "Energieverteilung",
				it: "Trasferimento Energia"
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may take 1 Grass Energy card attached to 1 of your Pokémon and attach it to a different one. This power can't be used if Venusaur is Asleep, Confused, or Paralyzed.",
				fr: "Aussi souvent que vous le souhaitez pendant votre tour (avant votre attaque), vous pouvez prendre 1 carte Énergie  attachée à 1 de vos Pokémon et l'attacher à un autre. Ce pouvoir ne peut être utilisé si Florizarre est Endormi, Confus ou Paralysé.",
				de: "Bist du am Zug, kannst Du (vor deinem Angriff) beliebig oft eine auf einem Deiner Pokémon abgelegte  Energiekarte nehmen und auf ein anderes legen. Diese Fähigkeit kann nicht eingesetzt werden, falls Bisaflor schlafend, verwirrt oder gelähmt ist.",
				it: "Quante volte vuoi durante il tuo turno (prima di attaccare), puoi prendere una carta Energia Erba assegnata a uno dei tuoi Pokémon ed assegnarla a un altro. Questo potere non può essere usato se Venusaur è Addormentato, Confuso o Paralizzato.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				en: "Solarbeam",
				fr: "Lance-Soleil",
				de: "Solarstrahl",
				it: "Solarraggio"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	description: {
		fr: "Sa plante mûrit en absorbant les rayons du soleil. Il migre souvent vers les endroits ensoleillés.",
		it: "È un tipo di pianta che sboccia quando assorbe l'energia solare e si mantiene sempre in movimento per poter rimanere esposta al sole. LIV 67 N.3"
	},

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "holo",
			subtype: "shadowless",
		},
		{
			type: "holo",
			subtype: "1999-2000-copyright",
		}
	],


	thirdParty: {
		cardmarket: 273710,
		tcgplayer: 42355
	},

	related: [
		{
			type: "translation",
			cardPath: "data-asia/PMCG/PMCG1/011.ts"
		}
	]
}

export default card
