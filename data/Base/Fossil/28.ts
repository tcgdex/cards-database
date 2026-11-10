import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Muk",
		fr: "Grotadmorv",
		it: "Muk",
		de: "Sleimok"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		89,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Grimer",
		fr: "Tadmorv",
		it: "Grimer",
		de: "Sleima"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Toxic Gas",
				fr: "Puanteur",
				it: "Gas Neurotossico",
				de: "Giftgas"
			},
			effect: {
				en: "Ignore all Pokémon Powers other than Toxic Gases. This power stops working while Muk is Asleep, Confused, or Paralyzed.",
				fr: "Ignorez tout pouvoir Pokémon autre que Puanteur. L'effet de ce pouvoir cesse lorsque Grotadmorv est Endormi, Confus ou Paralysé.",
				it: "Ignora tutti i Poteri Pokémon all'infuori del Gas Neurotossico. Questo potere non funziona quando Muk è Addormentato, Confuso o Paralizzato.",
				de: "Ignoriere alle Pokémon-Power außer den Giftgasen. Diese Fähigkeit verliert ihre Wirkung, solange Sleimok schläft, verwirrt oder gelähmt ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],

			name: {
				en: "Sludge",
				fr: "Détritus",
				it: "Melma",
				de: "Schlammbad"
			},

			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
				it: "Lancia una moneta. Se esce testa, il Pokémon Difensore è Avvelenato.",
				de: "Wirf eine Münze. Bei „Kopf“ ist das verteidigende Pokémon jetzt vergiftet."
			},

			damage: 30
		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		en: "Thickly covered with a filthy, vile sludge. It is so toxic, even its footprints contain poison.",
		fr: "Il est recouvert d'une épaisse couche toxique. Il laisse une trace empoisonnée.",
		it: "Coperto da uno spesso strato di fango puzzolente, è talmente tossico che perfino le sue impronte contengono veleno.",
		de: "Mit schmutzigem, üblem Klärschlamm bedeckt, der so hochgiftig ist, dass selbst seine Fußstapfen Gift enthalten."
	},


	variants: [
		{
			type: "normal",
			subtype: "1999-2000-copyright",
			thirdParty: {
				cardmarket: 273889,
				tcgplayer: 106530
			}
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273889,
				tcgplayer: 106530
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273889,
				tcgplayer: 106530
			}
		},
	],
}

export default card
