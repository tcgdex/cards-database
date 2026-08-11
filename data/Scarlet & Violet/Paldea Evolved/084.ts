import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [40],
	set: Set,

	name: {
		fr: "Grodoudou",
		en: "Wigglytuff",
		es: "Wigglytuff",
		it: "Wigglytuff",
		pt: "Wigglytuff",
		de: "Knuddeluff"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	evolveFrom: {
		fr: "Rondoudou",
		en: "Jigglypuff",
		es: "Jigglypuff",
		it: "Jigglypuff",
		pt: "Jigglypuff",
		de: "Pummeluff"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Thérapie Bouboule",
			en: "Balloon Therapy",
			es: "Terapia Globo",
			it: "Terapia Pallone",
			pt: "Terapia de Balão",
			de: "Ballontherapie"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez attacher une carte Énergie Thérapeutique de votre main à l'un de vos Pokémon.",
			en: "Once during your turn, you may attach a Therapeutic Energy card from your hand to 1 of your Pokémon.",
			es: "Una vez durante tu turno, puedes unir 1 carta de Energía Terapéutica de tu mano a uno de tus Pokémon.",
			it: "Una sola volta durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon una carta Energia Terapeutica dalla tua mano.",
			pt: "Uma vez durante o seu turno, você poderá ligar uma carta Energia Terapêutica da sua mão a 1 dos seus Pokémon.",
			de: "Einmal während deines Zuges kannst du 1 Therapie-Energiekarte aus deiner Hand an 1 deiner Pokémon anlegen."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			fr: "Coup Magique",
			en: "Magical Shot",
			es: "Disparo Mágico",
			it: "Magicolpo",
			pt: "Tiro Mágico",
			de: "Magischer Schuss"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715559,
				tcgplayer: 497498,
				cardtrader: 248711
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715559,
				tcgplayer: 497498,
				cardtrader: 248711
			}
		},
	],

	illustrator: "Hitoshi Ariga",

	description: {
		en: "It has a very fine fur. Take care not to make it angry, or it may inflate steadily and hit with a body slam.",
	},
}

export default card
