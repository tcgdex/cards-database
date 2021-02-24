import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Volcarona",
		fr: "Pyrax",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		637,
	],
	hp: 100,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Larvesta",
		fr: "Pyronille",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Solar Transporter",
				fr: "Transporteur Solaire",
			},
			effect: {
				en: "Reveal the top 5 cards of your deck and put all Team Plasma cards you find there into your hand. Discard the other cards.",
				fr: "Montrez les 5 cartes du dessus de votre deck et ajoutez toutes les cartes de la Team Plasma que vous y trouvez à votre main. Défaussez les autres cartes.",
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Leech Life",
				fr: "Vampirisme",
			},
			effect: {
				en: "Heal from this Pokémon the same amount of damage you did to the Defending Pokémon.",
				fr: "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Défenseur.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
