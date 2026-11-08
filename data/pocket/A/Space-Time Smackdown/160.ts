import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mamoswine",
		'fr-fr': "Mammochon",
		'es-es': "Mamoswine",
		'it-it': "Mamoswine",
		'de-de': "Mamutel",
		'pt-br': "Mamoswine",
		'ko-kr': "맘모꾸리"
	},

	illustrator: "OKACHEKE",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [473],
	hp: 160,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Piloswine"
	},

	description: {
		'en-us': "This Pokémon can be spotted in wall paintings from as far back as 10,000 years ago. For a while, it was thought to have gone extinct.",
		'fr-fr': "On le retrouve dessiné sur des fresques\nmurales vieilles de 10 000 ans. On a cru pendant\nun temps que son espèce s'était éteinte.",
		'es-es': "Aparece representado en pinturas rupestres de hace 10 000\naños. Hubo un tiempo en el que se lo consideró extinto.",
		'it-it': "Si trova raffigurato nelle pitture rupestri di 10.000\nanni fa. Per un periodo si riteneva che fosse estinto.",
		'de-de': "Sie sind schon auf 10 000 Jahre alten\nWandmalereien abgebildet. Es gab Zeiten,\nin denen man sie für ausgestorben hielt.",
		'pt-br': "Imagens deste Pokémon já foram encontradas em pinturas\nrupestres que remontam a 10.000 anos. Antigamente,\nacreditava-se que Mamoswine estava extinto.",
		'ko-kr': "1만 년 전의 벽화에도\n그려져 있다. 멸종되었다고\n여겨지던 시기도 있었다."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Thick Fat",
			'fr-fr': "Isograisse",
			'es-es': "Sebo",
			'it-it': "Grassospesso",
			'de-de': "Speckschicht",
			'pt-br': "Gordura Espessa",
			'ko-kr': "두꺼운지방"
		},

		effect: {
			'en-us': "This Pokémon takes −30 damage from attacks from {R} or {W} Pokémon.",
			'fr-fr': "Ce Pokémon subit − 30 dégâts provenant des attaques des Pokémon {R} ou {W}.",
			'es-es': "Los ataques de los Pokémon {R} o {W} hacen -30 puntos de daño a este Pokémon.",
			'it-it': "Questo Pokémon subisce -30 danni dagli attacchi dei Pokémon {R} o {W}.",
			'de-de': "Diesem Pokémon werden durch Attacken von {R}- oder {W}-Pokémon − 30 Schadenspunkte zugefügt.",
			'pt-br': "Este Pokémon recebe −30 pontos de dano de ataques de Pokémon {R} ou {W}.",
			'ko-kr': "이 포켓몬이 {R} 또는 {W}포켓몬으로부터 받는 기술의 데미지를 {R}-30[/Ctrl:NoBreak]한다."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Frosty Flattening",
			'fr-fr': "Aplatissement Givré",
			'es-es': "Aplastamiento Gélido",
			'it-it': "Piallata Gelida",
			'de-de': "Frostige Plättung",
			'pt-br': "Esmagamento Congelante",
			'ko-kr': "프로스트덤프"
		},

		damage: 120,
		cost: ["Water", "Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 4,
	boosters: ["dialga"]
}

export default card
