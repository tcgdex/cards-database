import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Mamoswine",
		fr: "Mammochon",
		es: "Mamoswine",
		it: "Mamoswine",
		de: "Mamutel",
		'pt-br': "Mamoswine",
		ko: "맘모꾸리"
	},

	illustrator: "match",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],

	evolveFrom: {
		en: "Piloswine"
	},

	description: {
		en: "This Pokémon can be spotted in wall paintings from as far back as 10,000 years ago. For a while, it was thought to have gone extinct.",
		fr: "On le retrouve dessiné sur des fresques\nmurales vieilles de 10 000 ans. On a cru pendant\nun temps que son espèce s'était éteinte.",
		es: "Aparece representado en pinturas rupestres de hace 10 000\naños. Hubo un tiempo en el que se lo consideró extinto.",
		it: "Si trova raffigurato nelle pitture rupestri di 10.000\nanni fa. Per un periodo si riteneva che fosse estinto.",
		de: "Sie sind schon auf 10 000 Jahre alten\nWandmalereien abgebildet. Es gab Zeiten,\nin denen man sie für ausgestorben hielt.",
		'pt-br': "Imagens deste Pokémon já foram encontradas em pinturas\nrupestres que remontam a 10.000 anos. Antigamente,\nacreditava-se que Mamoswine estava extinto.",
		ko: "1만 년 전의 벽화에도\n그려져 있다. 멸종되었다고\n여겨지던 시기도 있었다."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Thick Fat"
		},

		effect: {
			en: "This Pokémon takes −30 damage from attacks from <span class=\"energy-text energy-text--type-fire\"></span> or <span class=\"energy-text energy-text--type-water\"></span> Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Frosty Flattening"
		},

		damage: 120,
		cost: ["Water", "Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 4
}

export default card
