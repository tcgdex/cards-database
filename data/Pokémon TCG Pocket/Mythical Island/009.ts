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

	dexId: [781],
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
			en: "Energy Whip",
			fr: "Fouet d'Énergie",
			es: "Látigo Energético",
			it: "Frustata Energetica",
			de: "Energiepeitsche",
			'pt-br': "Chicote Energético",
			ko: "에너지휩"
		},

		damage: "20+",
		cost: ["Grass"],

		effect: {
			en: "If this Pokémon has at least 3 extra {G} Energy attached, this attack does 70 more damage.",
			fr: "Si ce Pokémon a au moins 3 Énergies {G} de plus, cette attaque inflige 70 dégâts supplémentaires.",
			es: "Si este Pokémon tiene por lo menos 3 Energías {G} adicionales unidas a él, este ataque hace 70 puntos de daño más.",
			it: "Se questo Pokémon ha almeno 3 Energie {G} extra assegnate, questo attacco infligge 70 danni in più.",
			de: "Wenn an dieses Pokémon mindestens 3 extra {G}-Energien angelegt sind, fügt diese Attacke 70 Schadenspunkte mehr zu.",
			'pt-br': "Se este Pokémon tiver pelo menos 3 Energia {G} extra ligada a ele, este ataque causará 70 pontos de dano a mais.",
			ko: "{G}에너지 3개가 추가로 붙어 있다면 70데미지를 추가한다."
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
