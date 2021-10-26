import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Lapyro",
		en: "Raboot",
		es: "Raboot",
		it: "Raboot",
		pt: "Raboot",
		de: "Kickerlo"
	},

	illustrator: "Lee HyunJung",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	evolveFrom: {
		fr: "Flambino",
		en: "Scorbunny"
	},

	attacks: [{
		name: {
			fr: "Nitrocharge",
			en: "Flame Charge",
			es: "Nitrocarga",
			it: "Nitrocarica",
			pt: "Ataque de Chamas",
			de: "Nitroladung"
		},

		effect: {
			fr: "Cherchez dans votre deck une carte Énergie Fire, puis attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			en: "Search your deck for a Fire Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			es: "Busca en tu baraja 1 carta de Energía Fire y únela a este Pokémon. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo una carta Energia Fire e assegnala a questo Pokémon. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por 1 carta de Energia Fire no seu baralho e ligue-a a este Pokémon. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach 1 Fire-Energiekarte und lege sie an dieses Pokémon an. Mische anschließend dein Deck."
		},

		damage: 20,
		cost: ["Fire"]
	}, {
		name: {
			fr: "Coup d'Pied Magnum",
			en: "Magnum Kick",
			es: "Patada Mágnum",
			it: "Supercalcio",
			pt: "Chute Magnum",
			de: "Magnumtritt"
		},

		damage: 70,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Stage1",

	description: {
		en: "It kicks berries right off the branches of trees and then juggles them with its feet, practicing its footwork."
	}
}

export default card
