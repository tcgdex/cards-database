import { Card } from "models/database/card"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Buizel",
		'fr-fr': "Mustébouée",
		'es-es': "Buizel",
		'it-it': "Buizel",
		'de-de': "Bamelin",
		'pt-br': "Buizel",
		'ko-kr': "브이젤"
	},

	illustrator: "sui",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [418],
	hp: 70,
	types: ["Water"],

	description: {
		'en-us': "It inflates its flotation sac, keeping its face above water in order to watch for prey movement.",
		'fr-fr': "La bouée autour de son cou lui permet de\ngarder la tête hors de l'eau. Ainsi, il peut scruter\nles mouvements de ses proies sur la terre ferme.",
		'es-es': "La vejiga natatoria alrededor del cuello le permite flotar\nen el agua con la cabeza fuera para divisar a sus presas.",
		'it-it': "Gonfia il suo collare galleggiante e\nrimane con la testa fuori dall'acqua\nin cerca di prede sulla terraferma.",
		'de-de': "Füllt es die Schwimmblase um seinen Hals mit Luft,\nragt sein Kopf aus dem Wasser und es kann die\nBewegungen von Beute an Land beobachten.",
		'pt-br': "Infla sua bolsa de flutuação e mantém o rosto acima\nda água para procurar o movimento de presas.",
		'ko-kr': "목의 부낭을 부풀려\n수면에 얼굴을 내밀고 지상에 있는\n먹이의 움직임을 살핀다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Water Gun",
			'fr-fr': "Pistolet à O",
			'es-es': "Pistola Agua",
			'it-it': "Pistolacqua",
			'de-de': "Aquaknarre",
			'pt-br': "Revólver d'Água",
			'ko-kr': "물대포"
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