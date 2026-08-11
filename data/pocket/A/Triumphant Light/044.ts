import { Card } from "models/database/card"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Medicham",
		'fr-fr': "Charmina",
		'es-es': "Medicham",
		'it-it': "Medicham",
		'de-de': "Meditalis",
		'pt-br': "Medicham",
		'ko-kr': "요가램"
	},

	illustrator: "Tetsu Kayama",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [308],
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Meditite"
	},

	description: {
		'en-us': "Through yoga training, it gained the psychic power to predict its foe's next move.",
		'fr-fr': "Ses pouvoirs psychiques, renforcés\npar la pratique du yoga, lui permettent\nde prédire les mouvements de ses adversaires.",
		'es-es': "Puede prever los movimientos de su rival usando\nsus poderes psíquicos, fortalecidos por el yoga.",
		'it-it': "È in grado di conoscere in anticipo le mosse\ndel nemico grazie ai poteri di preveggenza\nottenuti con le pratiche yoga.",
		'de-de': "Mit Yogaübungen hat es seine Psycho-Kräfte geschärft\nund ahnt so die Attacken seiner Gegner voraus.",
		'pt-br': "Através do treinamento de ioga, ganhou o poder psíquico\nde prever o movimento seguinte do oponente.",
		'ko-kr': "요가 수행으로 단련된\n사이코 파워로 상대의 움직임을\n예상할 수 있다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Kick Shot",
			'fr-fr': "Coup d'Ergots",
			'es-es': "Disparo Patada",
			'it-it': "Colpocalcio",
			'de-de': "Kickschuss",
			'pt-br': "Chute Tiro",
			'ko-kr': "한방차기"
		},

		damage: 80,
		cost: ["Fighting"],

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

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1
}

export default card
