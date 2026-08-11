import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Lickilicky",
		fr: "Coudlangue",
		es: "Lickilicky",
		it: "Lickilicky",
		de: "Schlurplek",
		'pt-br': "Lickilicky",
		ko: "내룸벨트"
	},

	illustrator: "Suwama Chiaki",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [463],
	hp: 130,
	types: ["Colorless"],

	evolveFrom: {
		en: "Lickitung"
	},

	description: {
		en: "Lickilicky's strange tongue can stretch to many times the length of its body. No one has figured out how Lickilicky's tongue can stretch so far.",
		fr: "Sa langue a l'incroyable faculté de s'allonger et\nd'atteindre plusieurs fois la taille de son corps.\nCe mystère de la nature reste entier.",
		es: "Su lengua es un misterio sin resolver: no se sabe\ncómo puede extenderla hasta alcanzar longitudes\nque superan varias veces la de su propio cuerpo.",
		it: "La sua lingua può misteriosamente allungarsi\nfino a molte volte la lunghezza del corpo.\nAncora non si è capito come faccia.",
		de: "Seine sonderbare Zunge kann sich bis auf ein\nVielfaches seiner Körpergröße ausdehnen.\nNiemand weiß, wie das möglich ist.",
		'pt-br': "A língua estranha de Lickilicky pode esticar e ficar\nmais longa do que seu corpo. Ninguém jamais descobriu\ncomo a língua deste Pokémon pode esticar tanto.",
		ko: "몸의 몇 배의 길이로 늘어나는\n신비한 혀를 가졌다.\n그 비밀은 아직 밝혀지지 않았다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Rollout",
			fr: "Roulade",
			es: "Rodar",
			it: "Rotolamento",
			de: "Walzer",
			'pt-br': "Rolagem",
			ko: "구르기"
		},

		damage: 70,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3
}

export default card