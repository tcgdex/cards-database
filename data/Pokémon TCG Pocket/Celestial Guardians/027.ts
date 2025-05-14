import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Marowak",
		fr: "Ossatueurd'Alola",
		es: "Marowakde Alola",
		it: "Marowakdi Alola",
		de: "Alola-Knogga",
		'pt-br': "Marowakde Alola",
		ko: "알로라텅구리"
	},

	illustrator: "miki kudo",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	evolveFrom: {
		en: "Cubone"
	},

	description: {
		en: "This Pokémon sets the bone it holds on fire and dances through the night as a way to mourn its fallen allies.",
		fr: "Le soir venu, il enflamme son os, puis\nse met à danser jusqu'au petit matin,\nà la mémoire de ses compagnons disparus.",
		es: "Al caer la noche, prende los extremos del hueso que porta y baila\nsin descanso para honrar y llorar a sus compañeros caídos.",
		it: "Trascorre le sue notti danzando in memoria dei compagni\nperduti mentre impugna un osso infuocato alle estremità.",
		de: "Es entzündet die Enden des Knochens in seiner Hand\nund führt die ganze Nacht einen Trauertanz zu Ehren\nseiner verstorbenen Artgenossen auf.",
		'pt-br': "Este Pokémon ateia fogo ao osso que segura e dança\na noite toda para lamentar seus aliados que sucumbiram\nem batalha.",
		ko: "손에 든 뼈에 불을 붙여\n동료를 추모하는 춤을\n밤새도록 춘다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Burning Bonemerang",
			fr: "Osmerang Enflammé",
			es: "Huesomerang Ardiente",
			it: "Ossomerang Ardente",
			de: "Brennender Knochmerang",
			'pt-br': "Ossomerangue Ardente",
			ko: "불타는 뼈다귀부메랑"
		},

		damage: "70x",
		cost: ["Fire", "Fire", "Colorless"],

		effect: {
			en: "Flip 2 coins. This attack does 70 damage for each heads. If at least 1 of them is heads, your opponent's Active Pokémon is now Burned.",
			fr: "Lancez 2 pièces. Cette attaque inflige 70 dégâts pour chaque côté face. Si vous obtenez au moins un côté face, le Pokémon Actif de votre adversaire est maintenant Burned.",
			es: "Lanza 2 monedas. Este ataque hace 70 puntos de daño por cada cara. Si sale cara en por lo menos 1 de ellas, el Pokémon Activo de tu rival pasa a estar Burned.",
			it: "Lancia una moneta 2 volte. Questo attacco infligge 70 danni ogni volta che esce testa. Se esce testa almeno volte, il Pokémon attivo del tuo avversario viene Burned.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 70 Schadenspunkte pro Kopf zu. Wenn mindestens 1 Münze Kopf zeigt, [Text:SpecialCondition id=\"3\" v0=\"ist das Aktive Pokémon deines Gegners jetzt {}\" v1=\"{} das Aktive Pokémon deines Gegners jetzt\" ].",
			'pt-br': "Jogue 2 moedas. Este ataque causa 70 pontos de dano para cada cara. Se pelo menos 1 delas sair cara, o Pokémon Ativo do seu oponente agora estará Burned.",
			ko: "동전을 2번 던져서 앞면이 나온 수 × 70데미지를 준다. 앞면이 1번 이상 나오면 상대의 배틀 포켓몬을 Burned2로 만든다."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2
}

export default card
