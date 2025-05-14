import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Buizel",
		fr: "Mustébouée",
		es: "Buizel",
		it: "Buizel",
		de: "Bamelin",
		'pt-br': "Buizel",
		ko: "브이젤"
	},

	illustrator: "Shimaris Yukichi",
	rarity: "One Star",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		en: "It inflates its flotation sac, keeping its face above water in order to watch for prey movement.",
		fr: "La bouée autour de son cou lui permet de\ngarder la tête hors de l'eau. Ainsi, il peut scruter\nles mouvements de ses proies sur la terre ferme.",
		es: "La vejiga natatoria alrededor del cuello le permite flotar\nen el agua con la cabeza fuera para divisar a sus presas.",
		it: "Gonfia il suo collare galleggiante e\nrimane con la testa fuori dall'acqua\nin cerca di prede sulla terraferma.",
		de: "Füllt es die Schwimmblase um seinen Hals mit Luft,\nragt sein Kopf aus dem Wasser und es kann die\nBewegungen von Beute an Land beobachten.",
		'pt-br': "Infla sua bolsa de flutuação e mantém o rosto acima\nda água para procurar o movimento de presas.",
		ko: "목의 부낭을 부풀려\n수면에 얼굴을 내밀고 지상에 있는\n먹이의 움직임을 살핀다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
			es: "Pistola Agua",
			it: "Pistolacqua",
			de: "Aquaknarre",
			'pt-br': "Revólver d'Água",
			ko: "물대포"
		},

		damage: 10,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card