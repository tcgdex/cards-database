import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Toxapex",
		fr: "Prédastérie",
		es: "Toxapex",
		it: "Toxapex",
		de: "Aggrostella",
		'pt-br': "Toxapex",
		ko: "더시마사리"
	},

	illustrator: "chibi",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [748],
	hp: 110,
	types: ["Darkness"],

	evolveFrom: {
		en: "Mareanie"
	},

	description: {
		en: "This Pokémon lives within a dome made by its own legs. Toxapex monitors its surroundings by sensing the flow of the tide through its spikes.",
		fr: "Il vit sous le dôme formé par ses pattes. Ses\npointes lui permettent d'analyser les courants\nmarins et ainsi de surveiller les alentours.",
		es: "Vive dentro de la cúpula que forma con las\nextremidades. Usa sus pinchos para sentir el\nflujo de las mareas y analizar sus alrededores.",
		it: "Vive in una cupola creata coi suoi stessi tentacoli. Usa gli artigli\nper scandagliare i dintorni e percepire i movimenti della marea.",
		de: "Seine Beine bilden eine Kuppel, in der es lebt.\nMit seinen Hörnern erkennt es den Strom der\nGezeiten und erkundet seine Umgebung.",
		'pt-br': "Este Pokémon vive em uma cúpula que forma\ncom suas pernas. Toxapex monitora os arredores\nao sentir o fluxo da maré por meio dos seus espinhos.",
		ko: "자신의 다리로 만든 돔이 보금자리다.\n조류를 뿔로 감지해서 주위를 살핀다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Spike Cannon",
			fr: "Picanon",
			es: "Clavo Cañón",
			it: "Sparalance",
			de: "Dornkanone",
			'pt-br': "Canhão de Espinhos",
			ko: "가시대포"
		},

		damage: "20x",
		cost: ["Darkness"],

		effect: {
			en: "Flip 4 coins. This attack does 20 damage for each heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
			es: "Lanza 4 monedas. Este ataque hace 20 puntos de daño por cada cara.",
			it: "Lancia 4 volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
			de: "Wirf 4 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu.",
			'pt-br': "Jogue 4 moedas. Este ataque causa 20 pontos de dano para cada cara.",
			ko: "동전을 4번 던져서 앞면이 나온 수 × 20데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["lunala"]
}

export default card
