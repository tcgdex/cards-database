import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Fossile Mâchoire Ancien",
	},
	set: Set,
	rarity: "Common",
	category: "Trainer",
	abilities: [
		{
			type: "Ability",
			name: {
				fr: "Mâchoire Intimidante",
			},
			effect: {
				fr: "Tant que ce Pokémon est sur le Poste Actif, les attaques utilisées par le Pokémon Actif de votre adversaire infligent 30 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			},
		},
	],
	regulationMark: "J",
	illustrator: "AYUMI ODASHIMA",
	effect: {
		fr: "Jouez cette carte comme si c'était un Pokémon Incolore de base avec 60 PV. Cette carte ne peut être affectée par aucun État Spécial et ne peut pas battre en retraite.",
	},

	thirdParty: {
		cardmarket: 877484
	}
}

export default card
