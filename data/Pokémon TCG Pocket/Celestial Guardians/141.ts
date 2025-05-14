import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Komala",
		fr: "Dodoala",
		es: "Komala",
		it: "Komala",
		de: "Koalelu",
		'pt-br': "Komala",
		ko: "자말라"
	},

	illustrator: "Kouki Saitou",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		en: "Komala spends its entire life sleeping. It feeds on leaves that contain a potent poison only Komala can break down.",
		fr: "Ce Pokémon passe sa vie à dormir. Il se\nnourrit de feuilles particulièrement toxiques\nque lui seul est capable d'assimiler sans danger.",
		es: "Pasan toda su vida durmiendo. Las hojas de las que se alimentan\ncontienen un veneno que solo ellos son capaces de descomponer.",
		it: "Trascorre la sua intera vita addormentato.\nNelle foglie di cui si nutre è presente un veleno\nche solo questo Pokémon riesce a decomporre.",
		de: "Koalelu verbringt sein ganzes Leben schlafend\nund ernährt sich von hochgiftigen Blättern, deren\nToxine kein anderes Pokémon abbauen kann.",
		'pt-br': "Komala passa a vida toda dormindo. Alimenta-se de folhas\nque contêm um veneno potente que só Komala\nconsegue digerir.",
		ko: "일생을 잠든 채로 보낸다.\n자말라만이 분해할 수 있는\n맹독성의 잎사귀를 먹이로 삼는다."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Comatose",
			fr: "Hypersommeil",
			es: "Letargo Perenne",
			it: "Sonno Assoluto",
			de: "Dauerschlaf",
			'pt-br': "Comatoso",
			ko: "절대안깸"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, whenever you attach an Energy from your Energy Zone to it, it is now Asleep.",
			fr: "Tant que ce Pokémon est sur le Poste Actif, lorsque vous lui attachez une Énergie de votre zone Énergie, il est désormais Asleep.",
			es: "Mientras este Pokémon esté en el Puesto Activo, cada vez que le unas 1 Energía de tu área de Energía, pasa a estar Asleep.",
			it: "Fintanto che questo Pokémon è in posizione attiva, ogni volta che gli assegni un'Energia dalla tua Zona Energia, il Pokémon viene Asleep.",
			de: "Jedes Mal, wenn du 1 Energie aus dem Energiebereich an dieses Pokémon anlegst und es sich in der Aktiven Position befindet, [Text:SpecialCondition v0=\"ist dieses Pokémon jetzt {}\" v1=\"{} dieses Pokémon jetzt\" ].",
			'pt-br': "Enquanto este Pokémon estiver no Campo Ativo, sempre que você ligar uma Energia da sua Zona de Energia a ele, ele agora estará Asleep.",
			ko: "이 포켓몬이 배틀필드에 있는 한, 자신의 에너지존에서 이 포켓몬에게 에너지를 붙일 때마다 이 포켓몬을 AsleepAsleep로 만든다."
		}
	}],

	attacks: [{
		name: {
			en: "Rolling Tackle",
			fr: "Roulé-Boulé",
			es: "Placaje Giro",
			it: "Rollazione",
			de: "Rolltackle",
			'pt-br': "Golpe de Colisão Rolante",
			ko: "구르기 태클"
		},

		damage: 70,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card