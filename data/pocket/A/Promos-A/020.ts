import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Haunter",
		'fr-fr': "Spectrum",
		'es-es': "Haunter",
		'it-it': "Haunter",
		'de-de': "Alpollo",
		'pt-br': "Haunter",
		'ko-kr': "고우스트"
	},

	illustrator: "Mékayu",
	rarity: "None",
	category: "Pokemon",

	dexId: [93],
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Surprise Attack",
			'fr-fr': "Attaque Surprise",
			'es-es': "Ataque Sorpresa",
			'it-it': "Attacco a Sorpresa",
			'de-de': "Überraschungsangriff",
			'pt-br': "Ataque Surpresa",
			'ko-kr': "허찌르기"
		},

		cost: ["Psychic"],
		damage: 50,

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
			'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
			'pt-br': "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
			'ko-kr': "동전을 1번 던져서 뒷면이 나오면 이 기술은 실패한다."
		}
	}],

	hp: 70,

	evolveFrom: {
		'en-us': "Gastly"
	},

	description: {
		'en-us': "It likes to lurk in the dark and tap shoulders\nwith a gaseous hand. Its touch causes endless\nshuddering.",
		'fr-fr': "Il adore se tapir dans l'ombre et faire frissonner\nses proies pour l'éternité en leur touchant l'épaule.",
		'es-es': "Le gusta acechar en la oscuridad y tocarles el\nhombro a sus víctimas con su mano gaseosa.\nEstas se quedan temblando para siempre.",
		'it-it': "Adora stare in agguato nei luoghi bui e toccare\nle spalle delle vittime con le sue mani gassose.\nIl suo tocco causa brividi incontenibili.",
		'de-de': "Es lauert gern im Dunkeln und tippt Leuten mit\nseiner gasförmigen Hand auf die Schulter.\nSeine Berührung erzeugt endloses Schaudern.",
		'pt-br': "Gosta de se esconder no escuro e bater nos\nombros dos outros com sua mão gasosa.\nSeu toque causa arrepios que não acabam mais.",
		'ko-kr': "어둠을 틈타 가스로 된 손을 뻗쳐\n사람의 어깨를 두드리기 좋아한다.\n그 손에 닿으면 떨림이 멈추지 않는다."
	},

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["vol2"]
}

export default card
