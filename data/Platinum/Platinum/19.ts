import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Banette",
		fr: "Branette",
		de: "Banette"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		354,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Shuppet",
		fr: "Polychombr",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Temper Tantrum",
				fr: "Piquer une colère",
				de: "Temper Tantrum"
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard as many cards as you like from your hand. If you do, put that many damage counters on Banette. This power can't be used if Banette is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez défausser de votre main autant de cartes que vous voulez. Vous pouvez alors placer autant de marqueurs de dégât sur Branette. Ce pouvoir ne peut pas être utilisé si Branette est affecté par un État Spécial.",
				de: "Once during your turn (before your attack), you may discard as many cards as you like from your hand. I you do, put that many damage counters on Banette. This power can't be used if Banette is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Darkness Switch",
				fr: "Échange obscurité",
				de: "Darkness Switch"
			},
			effect: {
				en: "Discard an Energy card attached to Banette, and then switch all damage counters on Banette with those on the Defending Pokémon. (If an effect of this attack is prevented, this attack does nothing.)",
				fr: "Défaussez une carte Énergie attachée à Branette puis échangez tous les marqueurs de dégât se trouvant sur Branette avec ceux du Pokémon Défenseur. (Si un effet de cette attaque est contré, cette attaque est sans effet.)",
				de: "Discard an Energy card attached to Banette, and then switch all daage counters on Banette with those on the Defending Pokémon. (If an effect of this attack is prevented, this attack does nothing.)"
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Loneliness",
				fr: "Solitude",
				de: "Loneliness"
			},
			effect: {
				en: "You may show your hand to your opponent. If you do and if you don't have any Pokémon in your hand, this attack does 30 damage plus 30 more damage.",
				fr: "Vous pouvez montrer votre main à votre adversaire. Si vous ne possédez pas de Pokémon, cette attaque inflige alors 30 dégâts plus 30 dégâts supplémentaires.",
				de: "You may show your hand to your opponent. If you do and if you don't have any Pokémon in your hand, this attack does 30 damage plus 30 more damage."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278440,
		tcgplayer: 83723
	}
}

export default card
