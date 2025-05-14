import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Persian",
		fr: "Persiand'Alola",
		es: "Persiande Alola",
		it: "Persiandi Alola",
		de: "Alola-Snobilikat",
		'pt-br': "Persiande Alola",
		ko: "알로라페르시온"
	},

	illustrator: "kirisAki",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		en: "Alolan Meowth"
	},

	description: {
		en: "The round face of Alolan Persian is considered to be a symbol of prosperity in the Alola region, so these Pokémon are very well cared for.",
		fr: "À Alola, sa tête ronde est considérée comme\nun symbole de prospérité, aussi ce Pokémon\nest-il traité avec le plus grand respect.",
		es: "En Alola todos consideran la cara redonda\nde los Persian un símbolo de buena fortuna,\npor lo que los tratan con mucho respeto.",
		it: "Nella regione di Alola le facce tonde sono considerate un simbolo\ndi prosperità e per questo Persian è trattato con molto riguardo.",
		de: "Da runde Gesichter in der Alola-Region als Symbol\nfür Wohlstand gelten, zollt man diesem Pokémon\ndort großen Respekt.",
		'pt-br': "O rosto arrendondado de Persian de Alola é considerado\num símbolo de prosperidade na região de Alola,\nentão esses Pokémon são tratados muito bem.",
		ko: "알로라지방에서는 둥근 얼굴이\n부의 상징으로 여겨져\n페르시온을 소중하게 대한다."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Fur Coat",
			fr: "Toison Épaisse",
			es: "Pelaje Recio",
			it: "Foltopelo",
			de: "Fellkleid",
			'pt-br': "Camada de Pelos",
			ko: "퍼코트"
		},

		effect: {
			en: "This Pokémon takes −20 damage from attacks.",
			fr: "Ce Pokémon subit − 20 dégâts provenant des attaques.",
			es: "Los ataques hacen -20 puntos de daño a este Pokémon.",
			it: "Questo Pokémon subisce -20 danni dagli attacchi.",
			de: "Diesem Pokémon werden durch Attacken − 20 Schadenspunkte zugefügt.",
			'pt-br': "Este Pokémon recebe −20 pontos de dano de ataques.",
			ko: "이 포켓몬이 받는 기술의 데미지를 -20한다."
		}
	}],

	attacks: [{
		name: {
			en: "Claw Slash",
			fr: "Tranch'Griffe",
			es: "Cuchillada Garra",
			it: "Lacerartiglio",
			de: "Klauenschlitzer",
			'pt-br': "Golpe de Garra",
			ko: "발톱 베어가르기"
		},

		damage: 50,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card