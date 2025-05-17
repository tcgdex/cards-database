import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Muk ex",
		fr: "Grotadmorvd'Alola-ex",
		es: "Mukde Alola ex",
		it: "Mukdi Alola-ex",
		de: "Alola-Sleimok-ex",
		'pt-br': "Mukde Alola ex",
		ko: "알로라질뻐기 ex"
	},

	illustrator: "Jerky",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 160,
	types: ["Darkness"],

	evolveFrom: {
		en: "Alolan Grimer"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Chemical Panic",
			fr: "Panique Chimique",
			es: "Pánico Químico",
			it: "Miscuglio Chimico",
			de: "Chemische Panik",
			'pt-br': "Pânico Químico",
			ko: "케미컬패닉"
		},

		damage: 80,
		cost: ["Darkness", "Darkness", "Colorless"],

		effect: {
			en: "1 Special Condition from among Asleep, Burned, Confused, Paralyzed, and Poisoned is chosen at random, and your opponent's Active Pokémon is now affected by that Special Condition. Any Special Conditions already affecting that Pokémon will not be chosen.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant affecté par un État Spécial choisi au hasard parmi Endormi, Brûlé, Confus, Paralysé et Empoisonné. Tout État Spécial qui affecte déjà ce Pokémon ne sera pas choisi.",
			es: "Se elige 1 Condición Especial aleatoria de entre Dormido, Quemado, Confundido, Paralizado y Envenenado. El Pokémon Activo de tu rival pasa a estar afectado por esa Condición Especial. No se elegirá ninguna Condición Especial que ya esté afectando a ese Pokémon.",
			it: "Il Pokémon attivo dell'avversario viene influenzato da una condizione speciale scelta a caso tra addormentato, bruciato, confuso, paralizzato e avvelenato. Eventuali condizioni speciali da cui è già influenzato il Pokémon non verranno scelte.",
			de: "1 Spezieller Zustand wird zufällig aus Schlaf, Verbrennung, Verwirrung, Paralyse und Vergiftung ausgewählt. Das Aktive Pokémon deines Gegners ist jetzt von diesem Zustand betroffen. Spezielle Zustände, von denen das Pokémon bereits betroffen ist, werden nicht ausgewählt.",
			'pt-br': "1 Condição Especial entre Adormecido, Confuso, Envenenado, Paralisado e Queimado é escolhida aleatoriamente, e o Pokémon Ativo do seu oponente agora estará afetado por aquela Condição Especial. Nenhuma Condição Especial que já estiver afetando aquele Pokémon será escolhida.",
			ko: "독・화상・잠듦・마비・혼란 중에서 랜덤으로 1개가 선택되어 상대의 배틀 포켓몬을 그 특수 상태로 만든다. 이미 받고 있는 특수 상태는 선택되지 않는다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["lunala"]
}

export default card