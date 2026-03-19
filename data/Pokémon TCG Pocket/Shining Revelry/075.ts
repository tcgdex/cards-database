import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Tatsugiri",
		fr: "Nigirigon",
		es: "Tatsugiri",
		it: "Tatsugiri",
		de: "Nigiragi",
		'pt-br': "Tatsugiri",
		ko: "싸리용"
	},

	illustrator: "cochi8i",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [978],
	hp: 70,
	types: ["Water"],

	description: {
		en: "This is a small dragon Pokémon. It lives inside the mouth of Dondozo to protect itself from enemies on the outside.",
		fr: "Ce petit Pokémon Dragon vit dans la gueule\nd'Oyacata, à l'abri de ses adversaires.",
		es: "Pokémon dragón de pequeño tamaño. Vive en la boca de un\nDondozo para protegerse de los ataques de los depredadores.",
		it: "Un Pokémon di tipo Drago di piccole\ndimensioni. Vive all'interno della bocca di\nDondozo, protetto dagli attacchi dei nemici.",
		de: "Dieses kleine Drachen-Pokémon lebt im Maul von\nHeerashai, wodurch es vor Feinden geschützt ist.",
		'pt-br': "Este é um pequeno Pokémon dragão. Mora dentro da\nboca de Dondozo para proteger-se\nde inimigos do mundo externo.",
		ko: "작은 몸집의 드래곤포켓몬.\n어써러셔의 입안에 살며\n외부의 적으로부터 몸을 지킨다."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Retreat Directive",
			fr: "Ordre de Repli",
			es: "Orden de Retirada",
			it: "Dietro-front",
			de: "Rückzugsbefehl",
			'pt-br': "Ordem de Recuo",
			ko: "철수 지시"
		},

		effect: {
			en: "Your Active Dondozo has no Retreat Cost.",
			fr: "Votre Oyacata Actif n'a aucun Coût de Retraite.",
			es: "Tu Dondozo Activo no tiene ningún Coste de Retirada.",
			it: "Il tuo Dondozo in posizione attiva non ha costo di ritirata.",
			de: "Dein Heerashai in der Aktiven Position hat keine Rückzugskosten.",
			'pt-br': "Seu Dondozo Ativo não tem custo de Recuo.",
			ko: "이 포켓몬이 있는 한, 자신의 배틀필드의 「어써러셔」의 후퇴에 필요한 에너지를 모두 없앤다."
		}
	}],

	attacks: [{
		name: {
			en: "Rain Splash",
			fr: "Pluie Éclaboussante",
			es: "Golpe de Lluvia",
			it: "Spruzzapioggia",
			de: "Regenplatscher",
			'pt-br': "Chuva Borrifante",
			ko: "물뿌리기"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card