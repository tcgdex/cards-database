import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"
const card: Card = {
	set: Set,
	name: {
		en: "Machamp",
		fr: "Mackogneur",
		es: "Machamp",
		it: "Machamp",
		de: "Machomei",
		ko: "괴력몬"
	},
	illustrator: "Shin Nagasawa",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],
	evolveFrom: {
		en: "Machoke"
	},
	description: {
		en: "It quickly swings its four arms to rock its opponents with ceaseless punches and chops from all angles.",
		fr: "Il peut bouger ses quatre bras à grande vitesse\net frapper du poing ou du tranchant de la main\ndans toutes les directions sans se fatiguer.",
		es: "Mueve rápidamente sus cuatro brazos\npara asestar incesantes golpes y\npuñetazos desde todos los ángulos.",
		it: "Agita velocemente le quattro braccia tempestando\ngli avversari di pugni e colpi da ogni direzione.",
		de: "Es verwendet seine vier Arme, um seine\nGegner unermüdlich mit schnellen Schlägen\naus allen Winkeln einzudecken.",
		ko: "4개의 팔을 재빠르게 움직여서\n모든 각도에서 쉬지 않고\n펀치와 당수를 날린다."
	},
	stage: "Stage2",
	attacks: [{
		name: {
			en: "Power Press",
			fr: "Étau Puissant",
			es: "Constricción Poderosa",
			it: "Vigorstretta",
			de: "Powerdruck",
			ko: "파워프레스"
		},
		damage: "70+",
		cost: ["Fighting", "Fighting"],
		effect: {
			en: "If this Pokémon has at least 2 extra {F} Energy attached, this attack does 50 more damage.",
			fr: "Si ce Pokémon a au moins 2 Énergies {F} de plus, cette attaque inflige 50 dégâts supplémentaires.",
			es: "Si este Pokémon tiene por lo menos 2 Energías {F} adicionales unidas a él, este ataque hace 50 puntos de daño más.",
			it: "Se questo Pokémon ha almeno 2 Energie {F} extra assegnate, questo attacco infligge 50 danni in più.",
			de: "Wenn an dieses Pokémon mindestens 2 extra {F}-Energien angelegt sind, fügt diese Attacke 50 Schadenspunkte mehr zu.",
			ko: "{F}에너지 2개가 추가로 붙어 있다면 50데미지를 추가한다.",
			'pt-br': "Se este Pokémon tiver pelo menos 2 Energia {F} extra ligada a ele, este ataque causará 50 pontos de dano a mais."
		}
	}],
	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],
	retreat: 2
}
export default card