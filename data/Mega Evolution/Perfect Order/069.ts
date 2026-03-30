import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Fossile Nageoire Ancien",
	},
	set: Set,
	rarity: "Common",
	category: "Trainer",
	abilities: [
		{
			type: "Ability",
			name: {
				fr: "Nageoire Protectrice",
			},
			effect: {
				fr: "Chaque fois que votre adversaire joue une carte Supporter de sa main, évitez tous les effets de cette carte infligés à ce Pokémon.",
			},
		},
	],
	regulationMark: "J",
	illustrator: "AYUMI ODASHIMA",
	effect: {
		fr: "Jouez cette carte comme si c'était un Pokémon Incolore de base avec 60 PV. Cette carte ne peut être affectée par aucun État Spécial et ne peut pas battre en retraite.",
	},

	thirdParty: {
		cardmarket: 877485
	}
}

export default card
