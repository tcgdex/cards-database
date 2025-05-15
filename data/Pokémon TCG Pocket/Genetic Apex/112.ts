import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Pincurchin",
		fr: "Wattapik",
		es: "Pincurchin",
		it: "Pincurchin",
		de: "Britzigel",
		'pt-br': "Pincurchin",
		ko: "찌르성게"
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			en: "Thunder Shock",
			fr: "Éclair",
			es: "Impactrueno",
			it: "Tuonoshock",
			de: "Donnerschock",
			'pt-br': "Trovoada de Choques",
			ko: "전기쇼크"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralyzed.",
			ko: "동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬을 마비로 만든다.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado."
		},

		damage: "40"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		en: "This Pokémon generates electricity when it digests food. It uses its five hard teeth to scrape seaweed off surfaces and eat it.",
		fr: "Il génère de l'électricité lorsqu'il digère.\nÀ l'aide de ses cinq dents très solides,\nil racle les algues des rochers puis les mange.",
		es: "Produce electricidad al digerir los alimentos.\nRaspa las algas de las rocas con los cinco\nduros dientes que tiene para comérselas.",
		it: "Mentre digerisce il cibo, genera elettricità.\nUsa i cinque durissimi denti per raschiare\nvia dalle cose le alghe di cui si nutre.",
		de: "Bei der Verdauung erzeugt es Elektrizität.\nMit seinen fünf harten Zähnen schabt es\nAlgen von Oberflächen ab und frisst sie.",
		'pt-br': "Este Pokémon gera eletricidade ao digerir comida.\nUsa seus cinco dentes rígidos para raspar alga\nmarinha de superfícies e se alimentar.",
		ko: "먹이를 소화시킬 때 전기를 만들어 낸다.\n5개의 단단한 이빨로\n해초를 갉아 먹는다."
	}
}

export default card
