import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		en: "Inteleon",
		fr: "Lézargus",
		es: "Inteleon",
		it: "Inteleon",
		pt: "Inteleon",
		de: "Intelleon"
	},

	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],
	stage: "Stage2",
	illustrator: "Saki Hayashiro",
	dexId: [818],

	evolveFrom: {
		en: "Drizzile",
		fr: "Arrozard",
		es: "Drizzile",
		it: "Drizzile",
		pt: "Drizzile",
		de: "Phlegleon"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Quick Shooting",
			fr: "Tir Rapide",
			de: "Schnellschütze"
		},

		effect: {
			en: "Once during your turn, you may put 2 damage counters on 1 of your opponent's Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez placer 2 marqueurs de dégâts sur l'un des Pokémon de votre adversaire.",
			de: "Einmal während deines Zuges kannst du 2 Schadensmarken auf 1 Pokémon deines Gegners legen."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Waterfall",
			fr: "Cascade",
			de: "Kaskade"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	description: {
		en: "Its nictitating membranes let it pick out foes' weak points so it can precisely blast them with water that shoots from its fingertips at Mach 3.",
		de: "Die Wasserschüsse aus seinen Fingern erreichen Geschwindigkeiten von bis zu Mach 3. Mit seiner Nickhaut erkennt es Schwachpunkte des Gegners."
	},

	variants: [
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 574285,
				tcgplayer: 246802
			}
		},
	],
}

export default card
