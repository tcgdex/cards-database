import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	name: {
		en: "Galarian Moltres V",
		fr: "Sulfura de Galar V"
	},

	illustrator: "aky CG Works",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,
	hp: 220,
	dexId: [146],

	types: [
		"Darkness",
	],

	stage: 'Basic',
	suffix: 'V',

	abilities: [{
		type: "Ability",
		name: {
			en: "Direflame Wings",
			fr: "Ailes Ténébraises"
		},
		effect: {
			en: "Once during your turn, you may attach a Darkness Energy card from your discard pile to this Pokémon. You can’t use more than 1 Direflame Wings Ability each turn.",
			fr: "Une fois pendant votre tour, vous pouvez attacher une carte Énergie Darkness de votre pile de défausse à ce Pokémon. Vous ne pouvez utiliser qu’un talent Ailes Ténébraises par tour."
		}
	}],

	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless"
			],
			name: {
				en: "Aura Burn",
				fr: "Aura Ardente"
			},
			effect: {
				en: "This Pokémon also does 30 damage to itself.",
				fr: "Ce Pokémon s’inflige aussi 30 dégâts."
			},
			damage: 190
		}
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "E"
}

export default card
