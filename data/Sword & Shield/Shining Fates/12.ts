import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [811],
	set: Set,

	name: {
		fr: "Badabouin",
		en: "Thwackey",
		es: "Thwackey",
		it: "Thwackey",
		pt: "Thwackey",
		de: "Chimstix"
	},

	illustrator: "0313",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		fr: "Ouistempo",
		en: "Grookey"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Avantage du Terrain",
			en: "Lay of the Land",
			es: "Dominio del Terreno",
			it: "Dominio del Territorio",
			pt: "Dono do Pedaço",
			de: "Ortskunde"
		},

		effect: {
			fr: "Si vous avez un Stade en jeu, ce Pokémon n'a pas de Coût de Retraite.",
			en: "If you have a Stadium in play, this Pokémon has no Retreat Cost.",
			es: "Si tienes un Estadio en juego, este Pokémon no tiene ningún Coste de Retirada.",
			it: "Se hai in gioco una carta Stadio, questo Pokémon non ha costo di ritirata.",
			pt: "Se você tiver um Estádio em jogo, este Pokémon não terá custo de Recuo.",
			de: "Wenn du eine Stadionkarte im Spiel hast, hat dieses Pokémon keine Rückzugskosten."
		}
	}],

	attacks: [{
		name: {
			fr: "Tapotige",
			en: "Branch Poke",
			es: "Punzada Rama",
			it: "Ramostoccata",
			pt: "Cutucada com Galho",
			de: "Zweigstoß"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "The faster a Thwackey can beat out a rhythm with its two sticks, the more respect it wins from its peers."
	},

	thirdParty: {
		cardmarket: 539083,
		tcgplayer: 232386
	}
}

export default card
