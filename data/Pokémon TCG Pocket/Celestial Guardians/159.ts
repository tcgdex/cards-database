import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Tapu Bulu",
		fr: "Tokotoro",
		es: "Tapu Bulu",
		it: "Tapu Bulu",
		de: "Kapu-Toro",
		'pt-br': "Tapu Bulu",
		ko: "카푸브루루"
	},

	illustrator: "OKACHEKE",
	rarity: "One Star",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		en: "Although it's called a guardian deity, it's violent enough to crush anyone it sees as an enemy.",
		fr: "Bien qu'on le connaisse comme une divinité\nprotectrice, il peut se montrer sans pitié envers\nceux qu'il considère comme ses ennemis.",
		es: "Se lo conoce como espíritu guardián, pero abate\nsin piedad a aquellos que considera sus enemigos.",
		it: "È considerato un Pokémon protettore, ma annienta\nsenza pietà tutti quelli che considera nemici.",
		de: "Obwohl man es als Schutzpatron bezeichnet,\nverfügt es über die nötige Härte, um seine\nFeinde erbarmungslos zu vernichten.",
		'pt-br': "Embora seja considerado um espírito guardião, é violento\no bastante para destruir qualquer um que considerar\nseu inimigo.",
		ko: "수호신으로 불리지만\n적이라고 간주한 자는 철저하게\n때려 부수는 격렬함을 갖고 있다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Stuck-In Tackle",
			fr: "Encastrement",
			es: "Placaje Severo",
			it: "Assalto Spericolato",
			de: "Verbissener Tackle",
			'pt-br': "Investida Cravada",
			ko: "박히는태클"
		},

		damage: 100,
		cost: ["Grass", "Grass", "Colorless"],

		effect: {
			en: "Flip a coin. If tails, this Pokémon also does 20 damage to itself.",
			fr: "Lancez une pièce. Si c'est pile, ce Pokémon s'inflige aussi 20 dégâts.",
			es: "Lanza 1 moneda. Si sale cruz, este Pokémon también se hace 20 puntos de daño a sí mismo.",
			it: "Lancia una moneta. Se esce croce, questo Pokémon infligge anche 20 danni a se stesso.",
			de: "Wirf 1 Münze. Bei Zahl fügt dieses Pokémon auch sich selbst 20 Schadenspunkte zu.",
			'pt-br': "Jogue uma moeda. Se sair coroa, este Pokémon também causará 20 pontos de dano a si mesmo.",
			ko: "동전을 1번 던져서 뒷면이 나오면 이 포켓몬에게도 20데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card