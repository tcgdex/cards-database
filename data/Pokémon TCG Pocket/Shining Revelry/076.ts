import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Grafaiai",
		fr: "Tag-Tag",
		es: "Grafaiai",
		it: "Grafaiai",
		de: "Affiti",
		'pt-br': "Grafaiai",
		ko: "태깅구르"
	},

	illustrator: "Teeziro",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [945],
	hp: 90,
	types: ["Darkness"],

	evolveFrom: {
		en: "Shroodle"
	},

	description: {
		en: "The color of the poisonous saliva depends on what the Pokémon eats. Grafaiai covers its fingers in its saliva and draws patterns on trees in forests.",
		fr: "Sa salive toxique change de couleur selon\nson alimentation. Il en enduit ses doigts pour\ndessiner des motifs sur les arbres de la forêt.",
		es: "El color de su saliva venenosa varía según su\nalimentación. Se embadurna los dedos con ella\npara pintar motivos en los árboles del bosque.",
		it: "Traccia dei motivi sugli alberi della foresta\ncon le dita imbrattate di saliva velenosa, il\ncui colore cambia in base all'alimentazione.",
		de: "Es beschmiert seine Finger mit giftigem Speichel,\nder je nach Futter anders gefärbt ist, und malt\ndamit Muster auf die Bäume im Wald.",
		'pt-br': "A cor da saliva venenosa deste Pokémon depende\nda sua dieta. Grafaiai cobre seus dedos com saliva\ne desenha em árvores da floresta.",
		ko: "먹이에 따라 색이 변하는\n독성의 침을 손가락에 묻혀서\n숲의 나무들에 무늬를 그린다."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Poison Coating",
			fr: "Couche de Poison",
			es: "Recubrimiento Venenoso",
			it: "Patina Velenosa",
			de: "Giftbeschichtung",
			'pt-br': "Pintura de Veneno",
			ko: "독칠"
		},

		effect: {
			en: "Once during your turn, you may flip a coin. If heads, your opponent's Active Pokémon is now Poisoned.",
			fr: "Une fois pendant votre tour, vous pouvez lancer une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			es: "Una vez durante tu turno, puedes lanzar 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Envenenado.",
			it: "Una sola volta durante il tuo turno, puoi lanciare una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene avvelenato.",
			de: "Einmal während deines Zuges kannst du 1 Münze werfen. Bei Kopf ist das Aktive Pokémon jetzt vergiftet.",
			
			ko: "자신의 차례에 1번 사용할 수 있다. 동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬을 독으로 만든다.",
			'pt-br': "Uma vez durante o seu turno, você poderá jogar uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Envenenado."
		}
	}],

	attacks: [{
		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			it: "Morso",
			de: "Biss",
			'pt-br': "Mordida",
			ko: "물기"
		},

		damage: 40,
		cost: ["Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card