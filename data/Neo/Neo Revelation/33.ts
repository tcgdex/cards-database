import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Magcargo",
		fr: "Volcaropod",
		de: "Magcargo"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		219,
	],

	hp: 80,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Slugma",
		fr: "Limagma",
		de: "Schneckmag"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Magma Pool",
				fr: "Braises",
				de: "Magmavorrat"
			},
			effect: {
				en: "If Magcargo is your Active Pokémon and moves to the Bench, remove 1 Fire Energy card attached to Magcargo, if any, and attach it to the new Active Pokémon. (You can't use an Energy card that you used to pay for the Retreat Cost.)",
				fr: "Si Volcaropod est votre Pokémon Actif et s'il retourne sur votre Banc, retirez 1 carte Énergie  attachée à Volcaropod, le cas échéant, et attachez-la au nouveau Pokémon Actif. (Vous ne pouvez pas utiliser une carte Énergie que vous avez déjà utilisée pour payer le Coût de Retraite.)",
				de: "Falls Magcargo dein aktives Pokémon ist und auf die Bank bewegt wird, entferne eine an Magcargo angelegte {R}-Energiekarte und lege sie an das neue aktive Pokémon an. (Du kannst dazu keine Energiekarte verwenden, mit der du die Rückzugskosten bezahlt hast.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Lava Flow",
				fr: "Torrent de lave",
				de: "Lavaschub"
			},
			effect: {
				en: "You may discard any number of Energy cards attached to Magcargo when you use this attack. If you do, this attack does 40 damage plus 20 more damage for each Energy card you discarded in this way.",
				fr: "Vous pouvez défausser autant de cartes Énergie  attachées à Volcaropod que vous le désirez. Dans ce cas, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires pour chaque carte Énergie  que vous choisissez de défausser.",
				de: "Du kannst eine beliebige Anzahl an Magcargo angelegte {R}-Energiekarten auf deinen Ablagestapel legen, wenn du diesen Angriff verwendest. Wenn du dies tust, fügt dieser Angriff 40 Schadenspunkte plus 20 weitere Schadenspunkte für jede auf diese Weise abgelegte {R}-Energiekarte zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	retreat: 3,


	description: {
		en: "The shell on its back is just skin that has cooled and hardened. It breaks easily with a slight touch.",
		fr: "La carapace qu'il porte sur le dos n'est qu'une excroissance de peau, refroidie et durcie. Elle se brise au moindre contact.",
		de: "Die Muschel auf seinem Rücken ist nur Haut, die sich abgekühlt und verhärtet hat. Sie zerbricht schon bei der leichtesten Berührung."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274619,
				tcgplayer: 87012
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274619,
				tcgplayer: 87012
			}
		}
	]
}

export default card

