import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Nidorina",
		fr: "Nidorina",
		es: "Nidorina",
		de: "Nidorina",
		it: "Nidorina",
		pt: "Nidorina",
	},

	illustrator: "Taiga Kasai",
	rarity: "Promo",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],
	stage: "Stage1",
	dexId: [30],

	evolveFrom: {
		en: "Nidoran♀",
		fr: "Nidoran♀",
		es: "Nidoran♀",
		de: "Nidoran♀",
		it: "Nidoran♀",
		pt: "Nidoran♀",
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Share Happiness",
			fr: "Partage de Bonheur",
			es: "Felicidad Compartida",
			de: "Geteilte Freude",
			it: "Condividi Felicità",
			pt: "Compartilhar Felicidade",
		},

		effect: {
			en: "Once during your turn, you may use this Ability. Heal 30 damage from 1 of your Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez utiliser ce talent. Soignez 30 dégâts de l'un de vos Pokémon.",
			es: "Una vez durante tu turno, puedes usar esta habilidad. Cura 30 puntos de daño a uno de tus Pokémon.",
			de: "Einmal während deines Zuges kannst du diese Fähigkeit einsetzen. Heile 30 Schadenspunkte bei 1 deiner Pokémon.",
			it: "Una sola volta durante il tuo turno, puoi usare questa abilità. Cura uno dei tuoi Pokémon da 30 danni.",
			pt: "Uma vez durante o seu turno, você poderá usar esta Habilidade. Cure 30 pontos de dano de 1 dos seus Pokémon.",
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			de: "Biss",
			it: "Morso",
			pt: "Mordida",
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "J",

	weaknesses: [{
		type: "Fighting",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895604,
				tcgplayer: 713260
			}
		},
		{
			type: "holo",
			stamp: ["pokemon-center"],
			thirdParty: {
				cardmarket: 895605,
				tcgplayer: 713261
			}
		}
	],
}

export default card
