import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Alolan Marowak",
		'fr-fr': "Ossatueurd'Alola",
		'es-es': "Marowakde Alola",
		'it-it': "Marowakdi Alola",
		'de-de': "Alola-Knogga",
		'pt-br': "Marowakde Alola",
		'ko-kr': "알로라텅구리"
	},

	illustrator: "Gemi",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [105],
	hp: 110,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Cubone"
	},

	description: {
		'en-us': "This Pokémon sets the bone it holds on fire and dances through the night as a way to mourn its fallen allies.",
		'fr-fr': "Le soir venu, il enflamme son os, puis\nse met à danser jusqu'au petit matin,\nà la mémoire de ses compagnons disparus.",
		'es-es': "Al caer la noche, prende los extremos del hueso que porta y baila\nsin descanso para honrar y llorar a sus compañeros caídos.",
		'it-it': "Trascorre le sue notti danzando in memoria dei compagni\nperduti mentre impugna un osso infuocato alle estremità.",
		'de-de': "Es entzündet die Enden des Knochens in seiner Hand\nund führt die ganze Nacht einen Trauertanz zu Ehren\nseiner verstorbenen Artgenossen auf.",
		'pt-br': "Este Pokémon ateia fogo ao osso que segura e dança\na noite toda para lamentar seus aliados que sucumbiram\nem batalha.",
		'ko-kr': "손에 든 뼈에 불을 붙여\n동료를 추모하는 춤을\n밤새도록 춘다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Burning Bonemerang",
			'fr-fr': "Osmerang Enflammé",
			'es-es': "Huesomerang Ardiente",
			'it-it': "Ossomerang Ardente",
			'de-de': "Brennender Knochmerang",
			'pt-br': "Ossomerangue Ardente",
			'ko-kr': "불타는 뼈다귀부메랑"
		},

		damage: "70x",
		cost: ["Fire", "Fire", "Colorless"],

		effect: {
			'en-us': "Flip 2 coins. This attack does 70 damage for each heads. If at least 1 of them is heads, your opponent's Active Pokémon is now Burned.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 70 dégâts pour chaque côté face. Si vous obtenez au moins un côté face, le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			'es-es': "Lanza 2 monedas. Este ataque hace 70 puntos de daño por cada cara. Si sale cara en por lo menos 1 de ellas, el Pokémon Activo de tu rival pasa a estar Quemado.",
			'it-it': "Lancia una moneta 2 volte. Questo attacco infligge 70 danni ogni volta che esce testa. Se esce testa almeno volte, il Pokémon attivo del tuo avversario viene bruciato.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 70 Schadenspunkte pro Kopf zu. Wenn mindestens 1 Münze Kopf zeigt, ist das Aktive Pokémon deines Gegners jetzt verbrannt.",
			
			'ko-kr': "동전을 2번 던져서 앞면이 나온 수 × 70데미지를 준다. 앞면이 1번 이상 나오면 상대의 배틀 포켓몬을 화상으로 만든다.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 70 pontos de dano para cada cara. Se pelo menos 1 delas sair cara, o Pokémon Ativo do seu oponente agora estará Queimado."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["lunala"]
}

export default card
