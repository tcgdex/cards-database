import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Dusclops",
		fr: "Teraclope"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		356,
	],
	hp: 70,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Duskull",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Cursed Glare",
				fr: "Regard maléfique"
			},
			effect: {
				en: "As long as Dusclops is your Active Pokémon, your opponent can't attach any Special Energy cards (except for Darkness and Metal Energy cards) from his or her hand to his or her Active Pokémon.",
				fr: "Tant que Teraclope est votre Pokémon Actif, votre adversaire ne peut pas attacher de cartes Énergie spéciale (cartes Énergie  et  exceptées) de sa main à son Pokémon Actif."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Will-o'-the-wisp",
				fr: "Feu follet"
			},

			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psychic Shield",
				fr: "Bouclier psychique"
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to Dusclops by your opponent's Pokémon-ex during your opponent's next turn.",
				fr: "Prévenez tous les effets d'une attaque, dégâts inclus, infligés à Teraclope par les Pokémon-ex de votre adversaire lors de son prochain tour."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
