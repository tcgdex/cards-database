import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Magnezone",
		fr: "Magnezone",
	},
	illustrator: "Tomoaki Imakuni",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		462,
	],
	hp: 120,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Magneton",
		fr: "Magneton",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Super Connectivity",
				fr: "Super connection",
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your discard pile for a Lightning or Metal Energy card and attach it to your Active Pokémon. Then, put 1 damage counter on that Pokémon. This power can't be used if Magnezone is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre pile de défausse une carte Énergie Lightning ou Metal et l'attacher à votre Pokémon Actif. Ensuite, placez 1 marqueur de dégât sur ce Pokémon. Ce pouvoir ne peut pas être utilisé si Magnézone est affecté par un État Spécial.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gyro Ball",
				fr: "Gyroballe",
			},
			effect: {
				en: "You may switch Magnezone with 1 of your Benched Pokémon. If you do, your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Vous pouvez échanger Magnézone avec 1 des Pokémon de votre Banc. Votre adversaire échange alors le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
