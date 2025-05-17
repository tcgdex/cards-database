import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Drapion",
		fr: "Drascore",
		es: "Drapion",
		it: "Drapion",
		de: "Piondragi",
		'pt-br': "Drapion",
		ko: "드래피온"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	evolveFrom: {
		en: "Skorupi"
	},

	description: {
		en: "Its poison is potent, but it rarely sees use. This Pokémon prefers to use physical force instead, going on rampages with its car-crushing strength.",
		fr: "Son poison est violent, mais il s'en sert très\nrarement. Il se déchaîne avec une telle force\nqu'il pourrait réduire une voiture en pièces.",
		es: "Posee un veneno muy potente, pero que usa muy\npoco. Con la extraordinaria fuerza que concentra\nal enfurecerse podría hacer añicos un coche.",
		it: "Le sue tossine sono letali ma se ne serve di rado.\nSemina distruzione con la sua forza prodigiosa\nche gli permette di sfasciare persino automobili.",
		de: "Sein Gift ist stark, aber es setzt es nur selten ein.\nIst es richtig wütend, schlägt es mit einer Wucht zu,\ndie selbst Autos zu Schrott verarbeitet.",
		'pt-br': "Seu veneno é poderoso, mas é raramente usado.\nEste Pokémon prefere usar sua força física, partindo\npara a briga com um vigor destrutivo.",
		ko: "맹독을 지녔지만 사용하는 일은\n드물다. 자동차도 때려 부수는\n괴력으로 마구 날뛴다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Cross Poison",
			fr: "Poison Croix",
			es: "Veneno X",
			it: "Velenocroce",
			de: "Giftstreich",
			'pt-br': "Corte-veneno",
			ko: "크로스포이즌"
		},

		damage: "40×",
		cost: ["Darkness", "Darkness", "Darkness"],

		effect: {
			en: "Flip 4 coins. This attack does 40 damage for each heads. If at least 2 of them are heads, your opponent's Active Pokémon is now Poisoned.",
			fr: "Lancez 4 pièces. Cette attaque inflige 40 dégâts pour chaque côté face. Si vous obtenez au moins 2 côtés face, le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			es: "Lanza 4 monedas. Este ataque hace 40 puntos de daño por cada cara. Si sale cara en por lo menos 2 de ellas, el Pokémon Activo de tu rival pasa a estar Envenenado.",
			it: "Lancia una moneta 4 volte. Questo attacco infligge 40 danni ogni volta che esce testa. Se esce testa almeno 2 volte, il Pokémon attivo del tuo avversario viene avvelenato.",
			de: "Wirf 4 Münzen. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu. Wenn mindestens 2 Münzen Kopf zeigen, ist das Aktive Pokémon deines Gegners jetzt vergiftet.",
			
			ko: "동전을 4번 던져서 앞면이 나온 수 × 40데미지를 준다. 앞면이 2번 이상 나오면 상대의 배틀 포켓몬을 독으로 만든다.",
			'pt-br': "Jogue 4 moedas. Este ataque causa 40 pontos de dano para cada cara. Se pelo menos 2 delas saírem cara, o Pokémon Ativo do seu oponente agora estará Envenenado."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3
}

export default card
