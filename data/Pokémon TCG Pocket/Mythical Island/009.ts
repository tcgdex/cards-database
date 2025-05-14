import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Dhelmise",
		fr: "Sinistrail",
		es: "Dhelmise",
		it: "Dhelmise",
		de: "Moruda",
		'pt-br': "Dhelmise",
		ko: "타타륜"
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		en: "After a piece of seaweed merged with debris from a sunken ship, it was reborn as this ghost Pokémon.",
		fr: "Ce Pokémon Spectre naît lorsque les algues\ndérivant au fond de l'océan se fixent sur\ndes morceaux d'épaves de navire.",
		es: "Este Pokémon de tipo Fantasma no es sino la\nreencarnación de las algas que flotan a la deriva\ny arrastran consigo vestigios de barcos hundidos.",
		it: "Alcune alghe, impigliandosi a dei pezzi di\nrelitti sul fondo del mare, si sono tramutate\nin questo Pokémon di tipo Spettro.",
		de: "Dieses Geister-Pokémon entstand, als sich\nvom Meeresgrund stammendes Seegras auf\nBruchstücken eines Schiffswracks ablagerte.",
		'pt-br': "Depois que um pedaço de alga marinha se fundiu\na destroços de um navio naufragado, renasceu como\neste Pokémon fantasma.",
		ko: "해저를 떠도는 해초가\n침몰선의 부품을 거두어들여서\n고스트포켓몬으로 다시 태어났다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Energy Whip"
		},

		damage: "20+",
		cost: ["Grass"],

		effect: {
			en: "If this Pokémon has at least 3 extra <span class=\"energy-text energy-text--type-grass\"></span> Energy attached, this attack does 70 more damage."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Diamond"
}

export default card
