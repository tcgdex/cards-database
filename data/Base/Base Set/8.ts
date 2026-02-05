import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Machamp",
		fr: "Mackogneur",
		de: "Machomei",
		it: "Machamp"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		68,
	],

	hp: 100,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Machoke",
		it: "Machoke"	
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Strikes Back",
				fr: "Riposte",
				de: "Gegenschlag",
				it: "Contrattacco"
			},
			effect: {
				en: "Whenever your opponent's attack damages Machamp (even if Machamp is Knoced Out), this power does 10 damage to attacking Pokémon. (Don't apply Weakness and Resistance.) This power can't be used if Machamp is already Asleep, Confused, or Paralyzed when your opponent attacks.",
				fr: "À chaque fois que l'attaque de votre adversaire inflige des dégâts à Mackogneur (même si Mackogneur est K.O.), ce pouvoir inflige 10 dégâts au Pokémon attaquant. (Ne pas tenir compte de la Faiblesse et de la Résistance.) Ce pouvoir ne peut être utilisé si Mackogneur est Endormi, Confus ou Paralysé quand votre adversaire attaque.",
				de: "Immer wenn der gegnerische Angriff Machomei Schaden zufügt (selbst wenn Machomei kampfunfähig gemacht wird), fügt diese Fähigkeit dem angreifenden Pokémon 10 Schadenspunkte zu. (Schwäche und Resistenz nicht anwenden!)Diese Fähigkeit kann nicht eingesetzt werden, falls Machomei beim gegnerischen Angriff bereits schlafend, verwirrt oder gelämt ist.",
				it: "Ogni volta che l'attacco del tuo avversario danneggia Machamp (anche se Machamp viene messo K.O.) questo potere infligge 10 danni al Pokémon Attaccante. (Non applicare Debolezza e Resistenza) Questo potere non può essere usato se Machamp è già Addormentato, Confuso o Paralizzato quando il tuo avversario attacca."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Seismic Toss",
				fr: "Frappe Atlas",
				de: "Geowurf",
				it: "Movimento Sismico"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Ses coups de poing sont si puissants qu'ils font voler ses adversaires jusqu'à l'horizon.",
		it: "I suoi muscoli supersviluppati gli permettono di tirare pugni capaci di mandare in orbita gli avversari. LIV 67 N.68"
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
		cardmarket: 273703
	},

	related: [
		{
			type: "translation",
			cardPath: "data-asia/PMCG/PMCG1/057.ts"
		}
	]
}

export default card
