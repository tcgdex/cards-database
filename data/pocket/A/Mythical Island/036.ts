import { Card } from "models/database/card"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Flabébé",
		'fr-fr': "Flabébé",
		'es-es': "Flabébé",
		'it-it': "Flabébé",
		'de-de': "Flabébé",
		'pt-br': "Flabébé",
		'ko-kr': "플라베베"
	},

	illustrator: "Cona Nitanda",
	category: "Pokemon",

	dexId: [669],
	hp: 40,
	types: ["Psychic"],

	description: {
		'en-us': "This Pokémon can draw forth the power hidden within blooming wild flowers. It is particularly fond of red flowers.",
		'fr-fr': "Ce Pokémon parvient à extraire l'énergie\ncachée des fleurs sauvages. Il aime\nparticulièrement les fleurs rouges.",
		'es-es': "Posee el don de extraer el poder oculto de\nlas flores silvestres. Siente una predilección\nespecial por las flores rojas.",
		'it-it': "Possiede il dono di estrarre la forza\nnascosta dei fiori che sbocciano nei campi.\nAma in particolar modo i fiori rossi.",
		'de-de': "Dieses Pokémon ist in der Lage, Wildblumen\nihre geheimen Kräfte zu entlocken. Rote\nBlumen haben es ihm besonders angetan.",
		'pt-br': "Este Pokémon é capaz de trazer à tona o poder escondido\nno florescer das flores silvestres. Gosta especialmente de flores vermelhas.",
		'ko-kr': "들판에 핀 꽃에 숨겨진 힘을\n끌어내는 능력을 가지고 있다.\n특히 빨간 꽃을 좋아한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Hypnotic Gaze",
			'fr-fr': "Regard Hypnotique",
			'es-es': "Mirada Hipnótica",
			'it-it': "Ipnosguardo",
			'de-de': "Hypnotischer Blick",
			'pt-br': "Olhar Hipnótico",
			'ko-kr': "바라보기"
		},

		cost: ["Psychic"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt schläft.",
			
			'ko-kr': "상대의 배틀 포켓몬을 잠듦으로 만든다.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
