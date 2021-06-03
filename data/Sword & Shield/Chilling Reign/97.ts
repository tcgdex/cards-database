import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	name: {
		en: "Galarian Moltes V",
		fr: "Sulfura de Galar V"
	},

	illustrator: "5ban Graphics",
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
			en: "One during your turn, you may attach a Drakness Energy card from your discard pile to this Pokémon. You can't use more than 1 Direfkame Wings Ability each turn.",
			fr: "Une fois pendant votre tour, vous pouvez attacher une carte Énergie Ténébre de votre pile de dd'efausse à ce Pokémon. Vous ne pouvez utiliser qu'un talent Ailes Ténébraises par tour."
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
				en: "This Poke'mon also does 30 damage to itself.",
				fr: "Ce Pokémon s'inflige aussi 30 dégâts."
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
