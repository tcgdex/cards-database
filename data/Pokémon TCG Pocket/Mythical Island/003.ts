import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Celebi ex",
		fr: "Celebi-ex",
		es: "Celebi ex",
		it: "Celebi-ex",
		de: "Celebi-ex",
		'pt-br': "Celebi ex",
		ko: "세레비 ex"
	},

	illustrator: "PLANETA CG Works",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Powerful Bloom",
			fr: "Éclosion Éclatante",
			es: "Floración Potente",
			it: "Fioritura Possente",
			de: "Kraftvolles Blühen",
			'pt-br': "Florescer Poderoso",
			ko: "파워풀블룸"
		},

		damage: "50×",
		cost: ["Grass", "Colorless"],

		effect: {
			en: "Flip a coin for each Energy attached to this Pokémon. This attack does 50 damage for each heads.",
			fr: "Lancez une pièce pour chaque Énergie attachée à ce Pokémon. Cette attaque inflige 50 dégâts pour chaque côté face.",
			es: "Lanza 1 moneda por cada Energía unida a este Pokémon. Este ataque hace 50 puntos de daño por cada cara.",
			it: "Lancia una moneta per ogni Energia assegnata a questo Pokémon. Questo attacco infligge 50 danni ogni volta che esce testa.",
			de: "Wirf 1 Münze für jede an dieses Pokémon angelegte Energie. Diese Attacke fügt 50 Schadenspunkte pro Kopf zu.",
			'pt-br': "Jogue uma moeda para cada Energia ligada a este Pokémon. Este ataque causa 50 pontos de dano para cada cara.",
			ko: "이 포켓몬의 에너지의 개수만큼 동전을 던져서 앞면이 나온 수 50× 50데미지를[/Ctrl:NoBreak] 준다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Four Diamond"
}

export default card