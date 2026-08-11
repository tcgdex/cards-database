import { Card } from "models/database/card"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Tatsugiri",
		'fr-fr': "Nigirigon",
		'es-es': "Tatsugiri",
		'it-it': "Tatsugiri",
		'de-de': "Nigiragi",
		'pt-br': "Tatsugiri",
		'ko-kr': "싸리용"
	},

	illustrator: "cochi8i",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [978],
	hp: 70,
	types: ["Water"],

	description: {
		'en-us': "This is a small dragon Pokémon. It lives inside the mouth of Dondozo to protect itself from enemies on the outside.",
		'fr-fr': "Ce petit Pokémon Dragon vit dans la gueule\nd'Oyacata, à l'abri de ses adversaires.",
		'es-es': "Pokémon dragón de pequeño tamaño. Vive en la boca de un\nDondozo para protegerse de los ataques de los depredadores.",
		'it-it': "Un Pokémon di tipo Drago di piccole\ndimensioni. Vive all'interno della bocca di\nDondozo, protetto dagli attacchi dei nemici.",
		'de-de': "Dieses kleine Drachen-Pokémon lebt im Maul von\nHeerashai, wodurch es vor Feinden geschützt ist.",
		'pt-br': "Este é um pequeno Pokémon dragão. Mora dentro da\nboca de Dondozo para proteger-se\nde inimigos do mundo externo.",
		'ko-kr': "작은 몸집의 드래곤포켓몬.\n어써러셔의 입안에 살며\n외부의 적으로부터 몸을 지킨다."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Retreat Directive",
			'fr-fr': "Ordre de Repli",
			'es-es': "Orden de Retirada",
			'it-it': "Dietro-front",
			'de-de': "Rückzugsbefehl",
			'pt-br': "Ordem de Recuo",
			'ko-kr': "철수 지시"
		},

		effect: {
			'en-us': "Your Active Dondozo has no Retreat Cost.",
			'fr-fr': "Votre Oyacata Actif n'a aucun Coût de Retraite.",
			'es-es': "Tu Dondozo Activo no tiene ningún Coste de Retirada.",
			'it-it': "Il tuo Dondozo in posizione attiva non ha costo di ritirata.",
			'de-de': "Dein Heerashai in der Aktiven Position hat keine Rückzugskosten.",
			'pt-br': "Seu Dondozo Ativo não tem custo de Recuo.",
			'ko-kr': "이 포켓몬이 있는 한, 자신의 배틀필드의 「어써러셔」의 후퇴에 필요한 에너지를 모두 없앤다."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Rain Splash",
			'fr-fr': "Pluie Éclaboussante",
			'es-es': "Golpe de Lluvia",
			'it-it': "Spruzzapioggia",
			'de-de': "Regenplatscher",
			'pt-br': "Chuva Borrifante",
			'ko-kr': "물뿌리기"
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