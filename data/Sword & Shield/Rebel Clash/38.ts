import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Galarian Mr. Rime",
		fr: "M. Glaquette de Galar"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Galarian Mr. Mime",
		fr: "M. Mime de Galar"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Screen Cleaner",
				fr: "Brise-Barrière"
			},
			effect: {
				en: "Prevent all effects of your opponent's attacks, except damage, done to all of your Pokémon that have Energy attached. (Existing effects are not removed.)",
				fr: "Évitez tous les effets des attaques de votre adversaire, excepté les dégâts, infligés à tous vos Pokémon auxquels de l’Énergie est attachée. (Les effets déjà en action ne sont pas retirés.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Triple Spin",
				fr: "Triple Tour"
			},
			effect: {
				en: "Flip 3 coins. This attack does 50 damage for each heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 50 dégâts pour chaque côté face."
			},
			damage: "50×",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 110,
	types: ["Water"]
}

export default card
