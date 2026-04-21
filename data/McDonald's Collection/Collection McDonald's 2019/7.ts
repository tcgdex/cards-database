import { Card } from '../../../interfaces'
import Set from "../Collection McDonald's 2019"

const card: Card = {
	name: {
		fr: "Insécateur",
	},

	rarity: "None",
	category: "Pokemon",
	illustrator: "Hajime Kusajima",

	set: Set,
	dexId: [123],
	hp: 70,
	types: ["Grass"],

	stage: "Basic",
	retreat: 1,

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				fr: "Duo"
			},
			effect: {
				fr: "Cherchez jusqu'à 2 Insécateur dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck."
			}
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				fr: "Hâte"
			},
			damage: 20,
			effect: {
				fr: "Lancez une pièce. Si c'est face, évitez tous les effets d'attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire."
			}
		},
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 479704,
			}
		},
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 581850,
			}
		}
	]
}

export default card

