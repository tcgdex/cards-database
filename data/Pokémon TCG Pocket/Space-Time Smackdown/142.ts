import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Fan Rotom",
		fr: "Motisma Hélice",
		es: "Rotom Ventilador",
		it: "Rotom Vortice",
		de: "Wirbel-Rotom",
		'pt-br': "Rotom Ventilador",
		ko: "스핀로토무"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		en: "This Rotom has entered an electric fan. It smirks with satisfaction over a prank well pulled after it blows away everything around it.",
		fr: "Ce Motisma a pris possession d'un ventilateur. Il fait\ns'envoler tout objet à proximité puis ricane, content de lui.",
		es: "Asume esta forma cuando toma posesión de un\nventilador. Hace volar por los aires los objetos\nque tiene alrededor y acto seguido ríe para sí.",
		it: "Ha assunto questa forma entrando in\nun ventilatore. Fa volare via tutto ciò che ha\nintorno per poi gioire compiaciuto del risultato.",
		de: "Dieses Rotom ist in einen Ventilator eingedrungen.\nEs wirbelt Dinge ringsum wild durch die Luft und\nlächelt dann hämisch.",
		'pt-br': "Este Rotom entrou em um ventilador.\nSorri com satisfação de sua travessura após soprar\npara longe tudo que estiver ao seu redor.",
		ko: "선풍기에 들어간 모습.\n주위에 있는 물건을 날려 버리고는\n해냈다는 듯이 싱글벙글하고 있다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Spin Storm",
			fr: "Orage Virevoltant",
			es: "Tormenta Giratoria",
			it: "Vortempesta",
			de: "Sturmwirbel",
			'pt-br': "Tempestade Giratória",
			ko: "선풍"
		},

		cost: ["Colorless", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, put your opponent's Active Pokémon into their hand.",
			fr: "Lancez une pièce. Si c'est face, ajoutez à la main de votre adversaire son Pokémon Actif.",
			es: "Lanza 1 moneda. Si sale cara, pon el Pokémon Activo de tu rival en su mano.",
			it: "Lancia una moneta. Se esce testa, aggiungi il Pokémon attivo del tuo avversario alle carte che ha in mano.",
			de: "Wirf 1 Münze. Gib bei Kopf deinem Gegner sein Aktives Pokémon auf seine Hand.",
			'pt-br': "Jogue uma moeda. Se sair cara, coloque o Pokémon Ativo do seu oponente na mão dele.",
			ko: "동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬을 패로 되돌린다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["dialga", "palkia"]
}

export default card
